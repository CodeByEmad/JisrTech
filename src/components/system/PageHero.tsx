import type { Locale } from "@/i18n/routing";
import type { Localized } from "@/lib/types";

/** Inner-page opener in the reference register: dash-kicker, start-aligned. */
export function PageHero({
  locale,
  kicker,
  title,
  lead,
}: {
  locale: Locale;
  kicker?: Localized;
  title: Localized;
  lead?: Localized;
}) {
  return (
    <div className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-b from-paper-raise via-[#efeaf9] to-paper"
      />
      <div
        aria-hidden
        className="absolute -top-32 inset-e-[-8%] size-104 rounded-full bg-[radial-gradient(circle,rgb(96_35_192/0.12),transparent_65%)] blur-2xl"
      />
      <div aria-hidden className="dot-grid absolute inset-0" />
      <header className="relative mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-8 sm:pb-16 sm:pt-20">
        {kicker && (
          <p className="flex items-center gap-2.5 text-sm font-bold tracking-[0.12em] text-accent">
            <span aria-hidden className="h-px w-6 bg-accent" />
            <span className="uppercase">{kicker[locale]}</span>
          </p>
        )}
        <h1 className="text-display mt-4 max-w-[22ch] font-extrabold text-ink text-balance">
          {title[locale]}
        </h1>
        {lead && (
          <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-ink-soft sm:text-xl">
            {lead[locale]}
          </p>
        )}
      </header>
    </div>
  );
}
