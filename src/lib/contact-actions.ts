"use server";

import { headers } from "next/headers";
import { z } from "zod";
import { Resend } from "resend";
import { site } from "@/content/site";

/**
 * Contact server action: zod-validated, honeypot + minimum-fill-time +
 * per-IP rate-limit hardened, Resend delivery, nothing persisted.
 * Delivery failure is a designed state, the form always offers
 * WhatsApp as the way through.
 */

const MIN_FILL_MS = 3_000;

/** Strip control characters so nothing structured survives into the email. */
const clean = (v: unknown) =>
  typeof v === "string" ? v.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, " ") : v;

const submissionSchema = z.object({
  name: z.preprocess(clean, z.string().trim().min(2).max(120)),
  reach: z.preprocess(clean, z.string().trim().min(5).max(160)),
  message: z.preprocess(clean, z.string().trim().min(10).max(4_000)),
});

/** Small in-memory rate limit: 5 submissions per IP per 10 minutes.
 *  Per-instance only, which is enough to blunt naive form spam. */
const WINDOW_MS = 10 * 60 * 1_000;
const MAX_PER_WINDOW = 5;
const submissions = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    submissions.set(ip, recent);
    return true;
  }
  recent.push(now);
  submissions.set(ip, recent);
  if (submissions.size > 5_000) submissions.clear();
  return false;
}

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

  // Rate limit per IP; over the limit we fail quietly like the honeypot.
  const requestHeaders = await headers();
  const ip =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    requestHeaders.get("x-real-ip") ??
    "unknown";
  if (rateLimited(ip)) return { status: "success" };

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
      // Both configurable at launch without touching code.
      from: process.env.CONTACT_FROM_EMAIL ?? "Jisr Tech Website <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? site.contact.email,
      subject: `Website inquiry, ${parsed.data.name}`,
      text: `Name: ${parsed.data.name}\nReach: ${parsed.data.reach}\n\n${parsed.data.message}`,
    });
    if (error) return { status: "delivery" };
    return { status: "success" };
  } catch {
    return { status: "delivery" };
  }
}
