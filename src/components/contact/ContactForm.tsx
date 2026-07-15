"use client";

import { useActionState, useEffect, useState } from "react";
import { CheckCircle, WhatsappLogo } from "@phosphor-icons/react";
import { contactPage } from "@/content/pages/contact";
import type { Locale } from "@/i18n/routing";
import { whatsAppUrl } from "@/lib/whatsapp";
import { sendContactMessage, type ContactState } from "@/lib/contact-actions";

const fieldClass =
  "w-full rounded-field border border-line bg-paper-raise px-4 py-3 text-ink placeholder:text-ink-soft/60 focus-visible:border-accent focus-visible:outline-accent";

export function ContactForm({ locale }: { locale: Locale }) {
  const t = contactPage.form;
  const [state, formAction, pending] = useActionState<ContactState, FormData>(
    sendContactMessage,
    { status: "idle" },
  );
  const [startedAt, setStartedAt] = useState<number>(0);
  useEffect(() => setStartedAt(Date.now()), []);

  if (state.status === "success") {
    return (
      <div className="flex items-start gap-3 rounded-card border border-accent/40 bg-accent-tint p-6">
        <CheckCircle weight="fill" className="mt-0.5 size-6 shrink-0 text-accent" aria-hidden />
        <p className="font-bold leading-relaxed text-accent-deep">{t.success[locale]}</p>
      </div>
    );
  }

  const invalid = state.status === "validation" ? state.fields : {};

  return (
    <form action={formAction} noValidate className="space-y-5">
      {/* Honeypot, invisible to people */}
      <div aria-hidden className="absolute -start-[9999px] size-px overflow-hidden">
        <label>
          company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <input type="hidden" name="startedAt" value={startedAt} />

      <div>
        <label htmlFor="contact-name" className="mb-2 block text-sm font-bold text-ink">
          {t.nameLabel[locale]}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          aria-invalid={invalid.name || undefined}
          aria-describedby={invalid.name ? "contact-name-error" : undefined}
          className={fieldClass}
        />
        {invalid.name && (
          <p id="contact-name-error" className="mt-2 text-sm font-bold text-accent-deep">
            {t.errors.name[locale]}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-reach" className="mb-2 block text-sm font-bold text-ink">
          {t.reachLabel[locale]}
        </label>
        <input
          id="contact-reach"
          name="reach"
          type="text"
          autoComplete="email"
          aria-invalid={invalid.reach || undefined}
          aria-describedby={invalid.reach ? "contact-reach-error" : undefined}
          className={fieldClass}
        />
        {invalid.reach && (
          <p id="contact-reach-error" className="mt-2 text-sm font-bold text-accent-deep">
            {t.errors.reach[locale]}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-bold text-ink">
          {t.messageLabel[locale]}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder={t.messageHint[locale]}
          aria-invalid={invalid.message || undefined}
          aria-describedby={invalid.message ? "contact-message-error" : undefined}
          className={fieldClass}
        />
        {invalid.message && (
          <p id="contact-message-error" className="mt-2 text-sm font-bold text-accent-deep">
            {t.errors.message[locale]}
          </p>
        )}
      </div>

      {state.status === "delivery" && (
        <div className="rounded-field border border-line bg-paper p-4 text-[0.95rem] leading-relaxed">
          <p className="text-ink">{t.deliveryError[locale]}</p>
          <a
            href={whatsAppUrl(contactPage.whatsappBlock.prefill[locale])}
            target="_blank"
            rel="noopener"
            className="mt-2 inline-flex items-center gap-2 font-bold text-accent hover:text-accent-deep"
          >
            <WhatsappLogo weight="fill" className="size-4.5" aria-hidden />
            <span dir="ltr">WhatsApp</span>
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-[0.95rem] font-bold text-paper-raise transition-colors hover:bg-accent-deep disabled:opacity-60"
      >
        {pending ? t.sending[locale] : t.submit[locale]}
      </button>
    </form>
  );
}
