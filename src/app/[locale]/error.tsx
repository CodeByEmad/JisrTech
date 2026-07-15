"use client";

import { useParams } from "next/navigation";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/routing";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  const params = useParams();
  const locale = (params?.locale as Locale) ?? "ar";
  const t = site.system.error;

  return (
    <div className="mx-auto flex min-h-[60dvh] max-w-6xl flex-col items-start justify-center px-5 py-24 sm:px-8">
      <h1 className="text-display max-w-[18ch] font-extrabold text-ink">{t.title[locale]}</h1>
      <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-ink-soft">
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
  );
}
