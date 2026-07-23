import type { Localized } from "@/lib/types";

/**
 * Global chrome content, ALL words live in content/, never in components
 * (docs/engineering-blueprint.md §2). Arabic is written natively from the
 * shared brief, never translated sentence-by-sentence.
 */

type NavItem = { href: "/services" | "/studio" | "/contact"; label: Localized };

export const site = {
  name: { ar: "جسر تك", en: "Jisr Tech" } satisfies Localized,
  wordmark: { latin: "Jisr", arabic: "جسر" },
  tagline: {
    ar: "نجسر أعمالك إلى العالم الرقمي",
    en: "Bridging businesses to the digital world",
  } satisfies Localized,
  location: {
    ar: "الخبر، المملكة العربية السعودية",
    en: "Al Khobar, Saudi Arabia",
  } satisfies Localized,

  nav: [
    { href: "/services", label: { ar: "الخدمات", en: "Services" } },
    { href: "/studio", label: { ar: "من نحن", en: "About" } },
    { href: "/contact", label: { ar: "تواصل معنا", en: "Contact" } },
  ] satisfies NavItem[],

  cta: {
    label: { ar: "ابدأ محادثة", en: "Start a conversation" } satisfies Localized,
    href: "/contact" as const,
  },

  whatsapp: {
    /** E.164 without "+" (wa.me format). Confirmed by founder, M4. */
    number: "966508315325",
    /** Human-readable form for contact blocks. */
    display: "+966 50 831 5325",
  },

  footer: {
    pages: { ar: "الصفحات", en: "Pages" } satisfies Localized,
    services: { ar: "الخدمات", en: "Services" } satisfies Localized,
    contact: { ar: "تواصل", en: "Contact" } satisfies Localized,
  },

  contact: {
    // PLACEHOLDER(founder): the inbox the contact form delivers to.
    // Launch blocker, swap when the final address is provided.
    email: "contact@jisrtech.example",
  },

  // PLACEHOLDER(founder): Maroof profile URL. When provided, add to
  // `facts` below with an href, the FactStrip renders the external
  // link automatically. Launch blocker for the trust strip only.
  // maroofUrl: "https://maroof.sa/...",

  /** Site-level trust facts, homepage scene 5 + Studio. Verifiable or
   *  absent: the Maroof entry joins in M4 with the real profile URL. */
  facts: [
    {
      label: { ar: "الموقع", en: "Location" } satisfies Localized,
      value: {
        ar: "الخبر، المملكة العربية السعودية",
        en: "Al Khobar, Saudi Arabia",
      } satisfies Localized,
    },
    {
      label: { ar: "اللغات", en: "Languages" } satisfies Localized,
      value: {
        ar: "العربية والإنجليزية، كتابةً أصيلة لا ترجمة",
        en: "Arabic & English, written natively, not translated",
      } satisfies Localized,
    },
    {
      label: { ar: "التواصل", en: "Channel" } satisfies Localized,
      value: {
        ar: "واتساب، تتحدث مباشرة مع من يبني",
        en: "WhatsApp, you talk to the people who build",
      } satisfies Localized,
    },
  ] as { label: Localized; value: Localized; href?: string }[],

  menu: {
    open: { ar: "القائمة", en: "Menu" } satisfies Localized,
    close: { ar: "إغلاق", en: "Close" } satisfies Localized,
    ariaLabel: { ar: "القائمة الرئيسية", en: "Main menu" } satisfies Localized,
    footerAriaLabel: { ar: "روابط تذييل الصفحة", en: "Footer" } satisfies Localized,
  },

  /** Utility-state copy: designed failure states are the brand too (principle #36). */
  system: {
    notFound: {
      title: { ar: "هذه الصفحة ليست هنا.", en: "This page isn't here." } satisfies Localized,
      body: {
        ar: "قد يكون الرابط قديمًا، وكل ما هو موجود على بُعد نقرة.",
        en: "The link may be old, everything that exists is one tap away.",
      } satisfies Localized,
      home: { ar: "العودة إلى الرئيسية", en: "Back to home" } satisfies Localized,
      contact: { ar: "أو تحدّث معنا", en: "Or talk to us" } satisfies Localized,
    },
    error: {
      title: { ar: "حدث خللٌ من جهتنا.", en: "Something broke on our side." } satisfies Localized,
      body: {
        ar: "ليس خطأك. جرّب مرة أخرى، وإن تكرر، فنحن على بُعد رسالة.",
        en: "Not your fault. Try again, and if it repeats, we're one message away.",
      } satisfies Localized,
      retry: { ar: "إعادة المحاولة", en: "Try again" } satisfies Localized,
    },
  },

  a11y: {
    skipToContent: { ar: "تخطَّ إلى المحتوى", en: "Skip to content" } satisfies Localized,
    localeSwitch: {
      ar: "Switch to English",
      en: "التبديل إلى العربية",
    } satisfies Localized, // written in the TARGET language on purpose
  },
} as const;
