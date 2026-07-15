import type { Localized } from "@/lib/types";

/**
 * Work ("The Lab"), original Jisr Tech demonstrations and experiments
 * ONLY. Never third-party or workplace projects, never fabricated
 * clients, never implied ownership of others' work. Honesty over filled
 * space: the grow note says plainly that showcases are added over time.
 */

export const workPage = {
  meta: {
    title: { ar: "الأعمال، جسر تك", en: "Work, Jisr Tech" } satisfies Localized,
    description: {
      ar: "بناءات تجريبية وتجارب هندسية أصلية من جسر تك، بشاشاتها الحقيقية وتفكيرها الموثّق.",
      en: "Original demonstration builds and engineering experiments by Jisr Tech, real screens, documented thinking.",
    } satisfies Localized,
  },
  kicker: { ar: "من أعمالنا", en: "Selected work" } satisfies Localized,
  title: {
    ar: "بنيناها لنُريك ما نصنعه.",
    en: "Built to show you what we make.",
  } satisfies Localized,
  growNote: {
    ar: "هذه المجموعة تنمو: نضيف عروضًا هندسية وتجارب جديدة كلما اكتمل بناؤها.",
    en: "This collection grows, new engineering showcases and experiments are added as they're built.",
  } satisfies Localized,
  demoKicker: {
    ar: "بناء تجريبي داخلي، يعرض مستوانا",
    en: "In-house build, made to show our standard",
  } satisfies Localized,
  viewLabel: { ar: "شاهد البناء", en: "View the build" } satisfies Localized,

  case: {
    problem: { ar: "المشكلة", en: "The problem" } satisfies Localized,
    thinking: { ar: "التفكير", en: "The thinking" } satisfies Localized,
    live: { ar: "افتح البناء التجريبي", en: "Open the live build" } satisfies Localized,
    back: { ar: "كل الأعمال", en: "All work" } satisfies Localized,
    invite: {
      ar: "عندك نشاط يشبه هذا؟ حدّثنا عنه.",
      en: "Run a business like this one? Tell us about it.",
    } satisfies Localized,
  },
} as const;
