import type { Localized } from "@/lib/types";

/** Services page, heading + chapter chrome; chapters live in content/services.ts. */

export const servicesPage = {
  meta: {
    title: {
      ar: "الخدمات، جسر تك",
      en: "Services, Jisr Tech",
    } satisfies Localized,
    description: {
      ar: "ست خدمات، طريق واحد: من موقعك الأول إلى نظام يدير المنشأة كاملة، تصميم وهندسة ودعم من الخبر.",
      en: "Six services, one path: from your first website to the system that runs the whole operation, designed, engineered, and supported from Al Khobar.",
    } satisfies Localized,
  },
  kicker: { ar: "الخدمات", en: "Services" } satisfies Localized,
  title: {
    ar: "ست خدمات. طريق واحد.",
    en: "Six services. One path.",
  } satisfies Localized,
  lead: {
    ar: "تبدأ معظم الشراكات بموقع، وتنمو مع الوقت إلى أنظمةٍ تدير العمل كله. الترتيب أدناه هو الطريق نفسه.",
    en: "Most partnerships start with a website, and grow, in time, into systems that run the whole business. The order below is that path.",
  } satisfies Localized,
  chapterCta: { ar: "تحدّث معنا عن هذا", en: "Talk to us about this" } satisfies Localized,
  replacesLabel: { ar: "ماذا يستبدل", en: "What it replaces" } satisfies Localized,
} as const;
