import type { Locale } from "@/i18n/routing";

/**
 * Bilingual parity is structural: content that misses a locale
 * cannot compile (docs/engineering-blueprint.md §5).
 * Consumption pattern: direct indexing, `content.field[locale]`.
 */
export type Localized = Readonly<Record<Locale, string>>;
