import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import type { Localized } from "@/lib/types";

/**
 * Metadata builder (engineering-blueprint §11): canonical + hreflang
 * alternates on every page, native-language titles/descriptions from
 * content. Arabic is x-default (Arabic-first architecture, FR-14).
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jisrtech.sa";

type BuildMetadataArgs = {
  locale: Locale;
  /** Route path WITHOUT locale prefix, e.g. "/services" or "" for home. */
  path: string;
  title: Localized;
  description: Localized;
};

export function buildMetadata({
  locale,
  path,
  title,
  description,
}: BuildMetadataArgs): Metadata {
  return {
    title: title[locale],
    description: description[locale],
    alternates: {
      canonical: `/${locale}${path}`,
      languages: {
        "ar-SA": `/ar${path}`,
        en: `/en${path}`,
        "x-default": `/ar${path}`,
      },
    },
    openGraph: {
      title: title[locale],
      description: description[locale],
      url: `/${locale}${path}`,
      siteName: "Jisr Tech, جسر تك",
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
      images: [
        {
          url: `/og/og-${locale}.png`,
          width: 1200,
          height: 630,
          alt: "Jisr Tech, جسر تك",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title[locale],
      description: description[locale],
      images: [`/og/og-${locale}.png`],
    },
  };
}
