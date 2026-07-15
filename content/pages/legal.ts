import type { Localized } from "@/lib/types";

/** Privacy, short because the honest answer is short (NFR-V). */

export const legalPage = {
  meta: {
    title: { ar: "الخصوصية، جسر تك", en: "Privacy, Jisr Tech" } satisfies Localized,
    description: {
      ar: "ما نجمعه وما لا نجمعه، بلغة واضحة.",
      en: "What we collect and what we don't, in plain language.",
    } satisfies Localized,
  },
  title: { ar: "الخصوصية", en: "Privacy" } satisfies Localized,
  updated: { ar: "آخر تحديث: يوليو 2026", en: "Last updated: July 2026" } satisfies Localized,
  sections: [
    {
      heading: { ar: "لا ملفات تعريف ارتباط", en: "No cookies" },
      body: {
        ar: "هذا الموقع لا يستخدم ملفات تعريف الارتباط ولا يتتبعك عبر الإنترنت. نستخدم عدّاد زيارات لا يحتاج إلى تحديد هويتك، أرقام مجهولة تخبرنا أن أحدًا زار الصفحة، لا مَن هو.",
        en: "This site sets no cookies and doesn't follow you around the internet. We use a visit counter that needs no identity, anonymous numbers that tell us a page was visited, not who visited it.",
      },
    },
    {
      heading: { ar: "نموذج التواصل", en: "The contact form" },
      body: {
        ar: "ما تكتبه في النموذج يصل إلى بريدنا مباشرة، ولا يُخزَّن في أي مكان آخر. نستخدمه للرد عليك فقط.",
        en: "What you write in the form goes straight to our inbox and is stored nowhere else. We use it only to reply to you.",
      },
    },
    {
      heading: { ar: "واتساب", en: "WhatsApp" },
      body: {
        ar: "محادثات واتساب تجري داخل تطبيق واتساب وتخضع لشروطه وسياساته.",
        en: "WhatsApp conversations happen inside WhatsApp and are governed by its own terms and policies.",
      },
    },
    {
      heading: { ar: "أسئلة؟", en: "Questions?" },
      body: {
        ar: "راسلنا عبر أي قناة في صفحة التواصل، نجيب بصراحة.",
        en: "Reach us through any channel on the contact page, we answer plainly.",
      },
    },
  ] satisfies { heading: Localized; body: Localized }[],
} as const;
