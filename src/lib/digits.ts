import type { Locale } from "@/i18n/routing";

/**
 * Two-digit ordinal in the page's own numerals ("03" / "٠٣"), the
 * engineering-ledger kicker used by card and chapter headers.
 */

const ARABIC_INDIC = "٠١٢٣٤٥٦٧٨٩";

export function orderDigits(n: number, locale: Locale): string {
  const two = String(n).padStart(2, "0");
  if (locale !== "ar") return two;
  return [...two].map((d) => ARABIC_INDIC[Number(d)] ?? d).join("");
}
