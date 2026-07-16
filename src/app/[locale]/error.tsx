"use client";

import { useParams } from "next/navigation";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/routing";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  const params = useParams();
  const locale = (params?.locale as Locale) ?? "ar";
  const t = site.system.error;

  return (
    <div className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-b from-paper-raise via-[#efeaf9] to-paper"
      />
      <div className="relative mx-auto flex min-h-[70dvh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
        <h1 className="text-display font-extrabold text-ink text-balance">{t.title[locale]}</h1>
        <p className="mx-auto mt-5 max-w-[46ch] text-lg leading-relaxed text-ink-soft">
          {t.body[locale]}
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-9 inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-[0.95rem] font-bold text-paper-raise transition-colors hover:bg-accent-deep"
        >
          {t.retry[locale]}
        </button>
      </div>
    </div>
  );
}
