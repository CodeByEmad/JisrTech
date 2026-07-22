import type { Locale } from "@/i18n/routing";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { home } from "@/content/pages/home";
import { SITE_URL } from "@/lib/seo";

/**
 * JSON-LD builders (blueprint §9 honesty rule): only verifiable facts , 
 * no ratings, no reviews, no invented properties. `sameAs` (Maroof)
 * joins when the real profile URL exists.
 */

export function professionalServiceLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Jisr Tech, جسر تك",
    description: site.tagline[locale],
    url: `${SITE_URL}/${locale}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Al Khobar",
      addressCountry: "SA",
    },
    areaServed: "Eastern Province, Saudi Arabia",
    knowsLanguage: ["ar", "en"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: `+${site.whatsapp.number}`,
      url: `https://wa.me/${site.whatsapp.number}`,
    },
  };
}

export function servicesLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name[locale],
        description: service.outcome[locale],
        url: `${SITE_URL}/${locale}/services#${service.anchor}`,
        provider: { "@type": "ProfessionalService", name: "Jisr Tech, جسر تك" },
        areaServed: "Saudi Arabia",
      },
    })),
  };
}

/** Honest genre: demonstration builds are labeled as exactly that. */

/** WebSite entity: bilingual identity for search engines. */
export function webSiteLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jisr Tech, جسر تك",
    url: SITE_URL,
    inLanguage: ["ar-SA", "en"],
    description: site.tagline[locale],
  };
}

/** BreadcrumbList for inner pages: home -> page, in the page's language. */
export function breadcrumbLd(locale: Locale, pageName: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "ar" ? "الرئيسية" : "Home",
        item: `${SITE_URL}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: `${SITE_URL}/${locale}${path}`,
      },
    ],
  };
}

/** FAQPage from the homepage's common questions (v10). */
export function faqLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: home.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q[locale],
      acceptedAnswer: { "@type": "Answer", text: item.a[locale] },
    })),
  };
}
