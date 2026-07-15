import type { Locale } from "@/i18n/routing";
import type { Localized } from "@/lib/types";

/**
 * Section opener in the reference register: a small dash-kicker over
 * the headline. `align="start"` (mindstack) or `align="center"` (Mawjood).
 */
export function SectionHeader({
  locale,
  kicker,
  title,
  lead,
  align = "center",
}: {
  locale: Locale;
  kicker?: Localized;
  title: Localized;
  lead?: Localized;
  align?: "start" | "center";
}) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-start"}>
      {kicker && (
        <p
          className={`flex items-center gap-2.5 text-sm font-bold tracking-[0.12em] text-accent ${
            center ? "justify-center" : ""
          }`}
        >
          <span aria-hidden className="h-px w-6 bg-accent" />
          <span className="uppercase">{kicker[locale]}</span>
        </p>
      )}
      <h2 className="text-title mt-3 font-extrabold text-ink text-balance">
        {title[locale]}
      </h2>
      {lead && (
        <p
          className={`mt-4 max-w-[56ch] leading-relaxed text-ink-soft sm:text-lg ${
            center ? "mx-auto" : ""
          }`}
        >
          {lead[locale]}
        </p>
      )}
    </div>
  );
}
