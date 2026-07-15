"use server";

import { z } from "zod";
import { Resend } from "resend";
import { site } from "@/content/site";

/**
 * Contact server action: zod-validated, honeypot + minimum-fill-time
 * hardened, Resend delivery, nothing persisted. Delivery failure is a
 * designed state, the form always offers WhatsApp as the way through.
 */

const MIN_FILL_MS = 3_000;
const submissionSchema = z.object({
  name: z.string().trim().min(2).max(120),
  reach: z.string().trim().min(5).max(160),
  message: z.string().trim().min(10).max(4_000),
});

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "validation";
      fields: { name?: boolean; reach?: boolean; message?: boolean };
    }
  | { status: "delivery" };

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real visitors never see this field.
  if (formData.get("company")) return { status: "success" };

  // Time-trap: humans don't complete a form in under 3 seconds.
  const startedAt = Number(formData.get("startedAt"));
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) {
    return { status: "success" };
  }

  const parsed = submissionSchema.safeParse({
    name: formData.get("name"),
    reach: formData.get("reach"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.path[0]);
    return {
      status: "validation",
      fields: {
        name: issues.includes("name") || undefined,
        reach: issues.includes("reach") || undefined,
        message: issues.includes("message") || undefined,
      },
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { status: "delivery" };

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Jisr Tech Website <onboarding@resend.dev>",
      to: site.contact.email,
      subject: `Website inquiry, ${parsed.data.name}`,
      text: `Name: ${parsed.data.name}\nReach: ${parsed.data.reach}\n\n${parsed.data.message}`,
    });
    if (error) return { status: "delivery" };
    return { status: "success" };
  } catch {
    return { status: "delivery" };
  }
}
