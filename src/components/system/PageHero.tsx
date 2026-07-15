import type { Locale } from "@/i18n/routing";
import type { Localized } from "@/lib/types";

/** Inner-page opener, centered like every section header (corporate register). */
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
    <header className="mx-auto max-w-3xl px-5 pb-14 pt-16 text-center sm:px-8 sm:pb-16 sm:pt-24">
      {kicker && (
        <p className="text-[0.95rem] font-bold text-accent">{kicker[locale]}</p>
      )}
      <h1 className="text-display mt-2 font-extrabold text-ink text-balance">
        {title[locale]}
      </h1>
      {lead && (
        <p className="mx-auto mt-5 max-w-[56ch] text-lg leading-relaxed text-ink-soft sm:text-xl">
          {lead[locale]}
        </p>
      )}
    </header>
  );
}
