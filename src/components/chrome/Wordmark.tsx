import { site } from "@/content/site";
import type { Locale } from "@/i18n/routing";

/**
 * The bilingual lockup: both scripts, always, with the page's own
 * script leading. The small bar between them is the span, the one
 * geometric mark the brand owns.
 */
export function Wordmark({ locale, onNight = false }: { locale: Locale; onNight?: boolean }) {
  const lead = locale === "ar" ? site.wordmark.arabic : site.wordmark.latin;
  const trail = locale === "ar" ? site.wordmark.latin : site.wordmark.arabic;
  return (
    <span className="inline-flex items-baseline gap-2.5">
      <span
        className={`text-[1.35rem] font-extrabold leading-none ${onNight ? "text-night-text" : "text-ink"}`}
      >
        {lead}
      </span>
      <span aria-hidden className="h-[3px] w-5 self-center rounded-full bg-accent" />
      <span
        className={`text-[0.95rem] font-bold leading-none ${onNight ? "text-night-soft" : "text-ink-soft"}`}
      >
        {trail}
      </span>
    </span>
  );
}
