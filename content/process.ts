import type { Localized } from "@/lib/types";

/**
 * The four-stage process, shared by the homepage scene and the Studio
 * page (one source; duplication is a review failure). Each stage names
 * what the client sees and approves: concreteness is the trust mechanism.
 */

export type ProcessStage = {
  name: Localized;
  detail: Localized;
  /** What the client holds at the end of the stage (About page only —
   *  the homepage keeps the shorter rhythm). */
  deliverable: Localized;
};

/** The label prefixing each deliverable on the About page. */
export const deliverableLabel: Localized = { ar: "تستلم", en: "You receive" };

export const processStages: ProcessStage[] = [
  {
    name: { ar: "نفهم", en: "Understand" },
    detail: {
      ar: "محادثة واحدة عن طريقة عمل نشاطك. تستلم نطاقًا مكتوبًا: ماذا سنبني، وكم يكلّف، ومتى يُسلَّم.",
      en: "One conversation about how your business works. You get a written scope: what we'll build, what it costs, when it lands.",
    },
    deliverable: {
      ar: "نطاق مكتوب بالسعر والجدول وما يشمله",
      en: "A written scope: price, schedule, and inclusions",
    },
  },
  {
    name: { ar: "نصمّم", en: "Design" },
    detail: {
      ar: "ترى الشاشات قبل أن يُبنى أي شيء، وتعتمدها بنفسك.",
      en: "You see the screens before anything is built, and approve them yourself.",
    },
    deliverable: {
      ar: "شاشات معتمدة منك قبل أي بناء",
      en: "Screens you approved before any build",
    },
  },
  {
    name: { ar: "نبني", en: "Build" },
    detail: {
      ar: "تحديثات عبر واتساب أثناء التقدّم. شريك واحد، مسؤول عن كل شيء.",
      en: "Progress updates on WhatsApp as it comes together. One partner, accountable for everything.",
    },
    deliverable: {
      ar: "رابط معاينة يعمل، وتحديثات تقدّم عبر واتساب",
      en: "A working preview link and WhatsApp progress updates",
    },
  },
  {
    name: { ar: "نبقى", en: "Stay" },
    detail: {
      ar: "الإطلاق بداية لا نهاية، نبقى معك للتشغيل والتحديث والدعم.",
      en: "Launch is a beginning, not a hand-off, we stay for upkeep, updates, and support.",
    },
    deliverable: {
      ar: "تشغيل وتحديثات ودعم مستمرة",
      en: "Continued upkeep, updates, and support",
    },
  },
];
