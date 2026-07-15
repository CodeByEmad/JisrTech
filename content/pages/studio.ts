import type { Localized } from "@/lib/types";

/**
 * Studio page, identity + process on one page (site-architecture.md).
 * Company narrative only: no founder identity anywhere (confidentiality
 * rule, business-analysis.md §2). No invented history, numbers, or scale.
 */

export const studioPage = {
  meta: {
    title: {
      ar: "الاستوديو، جسر تك",
      en: "Studio, Jisr Tech",
    } satisfies Localized,
    description: {
      ar: "استوديو برمجيات في الخبر: من نحن، وكيف يسير المشروع معنا مرحلةً بمرحلة.",
      en: "A software studio in Al Khobar: who we are, and how a project actually runs with us, stage by stage.",
    } satisfies Localized,
  },
  kicker: { ar: "الاستوديو", en: "The studio" } satisfies Localized,
  title: {
    ar: "جسرٌ، اسمًا ومهنةً.",
    en: "A bridge, by name and by trade.",
  } satisfies Localized,
  narrative: [
    {
      ar: "«جسر» ليست اسمًا اخترناه لجرسه، بل لأنه الوظيفة نفسها: على ضفةٍ نشاطٌ تجاري يُدار بالورق والمكالمات والذاكرة الطويلة، وعلى الضفة الأخرى عالمٌ رقمي لا يتوقف الجميع عن مطالبته بدخوله. نحن نبني المعبر بينهما.",
      en: "Jisr (جسر) means bridge, and we chose the name because it is the job itself: on one bank, a business that runs on paper, phone calls, and long memory; on the other, the digital world everyone keeps telling it to join. We build the crossing.",
    },
    {
      ar: "نحن استوديو برمجيات مقرّه الخبر. نصمّم ونهندس أنظمة مخصّصة للأعمال في السعودية، من الموقع الأول إلى نظام تخطيط الموارد الذي يدير المنشأة كاملة، بالعربية والإنجليزية، وبمستوى الحرفة الذي تنظر إليه الآن.",
      en: "We're a software studio based in Al Khobar. We design and engineer custom systems for businesses in Saudi Arabia, from a first website to the ERP that runs the whole operation, in Arabic and English, at the standard of craft you're looking at right now.",
    },
    {
      ar: "لن نعرض عليك أرقامًا مخترعة ولا شعارات مستعارة. ما سنعرضه هو عملنا وطريقتنا وأسلوب تعاملنا، ونفضّل أن نكسب الثقة في محادثة واحدة صادقة على أن ندّعيها في صفحة.",
      en: "We won't show you invented numbers or borrowed logos. What we will show you is our work, our process, and what we're like to deal with, and we'd rather earn trust in one honest conversation than claim it on a webpage.",
    },
  ] satisfies Localized[],
  processKicker: { ar: "كيف يسير المشروع", en: "How a project runs" } satisfies Localized,
  processTitle: {
    ar: "أربع مراحل، لا مفاجآت.",
    en: "Four stages, no surprises.",
  } satisfies Localized,
  processNote: {
    ar: "في كل مرحلة تعرف ماذا سترى، وماذا ستستلم، وماذا تعتمد قبل أن نتقدّم. ننشر طريقتنا لأن مَن لا يخفي شيئًا لا يخشى نشرها.",
    en: "At every stage you know what you'll see, what you'll receive, and what you approve before we move. We publish how we work because a studio with nothing to hide has no reason not to.",
  } satisfies Localized,
  factsTitle: { ar: "لمحة سريعة", en: "At a glance" } satisfies Localized,
} as const;
