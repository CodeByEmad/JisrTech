import { defineRouting } from "next-intl/routing";

/**
 * Locale architecture per docs/prd.md FR-1: Arabic is the default locale;
 * every route exists under an explicit /ar or /en prefix.
 */
export const routing = defineRouting({
  locales: ["ar", "en"],
  defaultLocale: "ar",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];

export const dirFor = (locale: Locale) => (locale === "ar" ? "rtl" : "ltr");
