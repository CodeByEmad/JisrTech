import { workItemSchema, type WorkItem } from "@/lib/schemas";

/**
 * Demonstration build #2 (business-plan Day-6 demo track).
 * Draft narrative, M4 finalizes copy and adds real screens.
 */
export const restaurantOrders: WorkItem = workItemSchema.parse({
  slug: "restaurant-orders",
  kind: "demo",
  businessType: { ar: "مطعم حيّ", en: "A neighborhood restaurant" },
  title: {
    ar: "مطعم يستقبل الطلبات وهو يطبخ",
    en: "A restaurant that takes orders while it cooks",
  },
  summary: {
    ar: "قائمة وطلبات وتأكيدات واتساب في مسارٍ واحد يستطيع المطبخ مواكبته.",
    en: "Menu, orders, and WhatsApp confirmations in one flow the kitchen can keep up with.",
  },
  problem: {
    ar: "الطلبات تصل هاتفيًا وقت الذروة، سوء سمع، مكالمات فائتة، ولا سجلّ لأي شيء.",
    en: "Orders arrived by phone during the rush, mishears, missed calls, and no record of anything.",
  },
  thinking: {
    ar: "مسار طلب واحد يراه المطبخ فورًا، وقائمة يعدّلها صاحب المطعم بنفسه دون الاتصال بمطوّر.",
    en: "One order flow the kitchen sees instantly, and a menu the owner edits without calling a developer.",
  },
  screens: [
    {
      src: "/work/restaurant-orders/kitchen.png",
      alt: {
        ar: "شاشة تصميمية من البناء التجريبي: شاشة طلبات المطبخ، أعمدة «جديدة» و«قيد التحضير» و«جاهزة»، مع إشعارات واتساب للعملاء.",
        en: "Concept screen from the demonstration build: a kitchen order board, new, in-progress, and ready columns, with WhatsApp customer notifications.",
      },
      width: 1600,
      height: 1200,
    },
  ],
});
