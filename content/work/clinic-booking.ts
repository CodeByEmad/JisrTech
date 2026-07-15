import { workItemSchema, type WorkItem } from "@/lib/schemas";

/**
 * Demonstration build #1 (business-plan Day-6 demo track).
 * Draft narrative, M4 finalizes copy and adds real screens.
 */
export const clinicBooking: WorkItem = workItemSchema.parse({
  slug: "clinic-booking",
  kind: "demo",
  businessType: { ar: "عيادة أسنان", en: "A dental clinic" },
  title: {
    ar: "عيادة تملأ تقويمها بنفسها",
    en: "A clinic that fills its own calendar",
  },
  summary: {
    ar: "حجوزات إلكترونية تملأ التقويم وتقلّل الغيابات، مصمّمة كما تعمل العيادة المشغولة فعلًا.",
    en: "Online booking that fills the calendar and cuts no-shows, designed the way a busy clinic actually works.",
  },
  problem: {
    ar: "الحجوزات تعيش في هاتفٍ لا يرنّ إلا في ساعات الدوام؛ أمسيات وعطل نهاية الأسبوع كانت طلبًا ضائعًا.",
    en: "Bookings lived in a phone that only rings during clinic hours; evenings and weekends were lost demand.",
  },
  thinking: {
    ar: "مسار حجز مبني حول أنواع العلاج ووقت الكرسي الفعلي، وتأكيدات عبر واتساب، لأن هناك يجيب المرضى.",
    en: "A booking flow shaped around treatment types and real chair time, with WhatsApp confirmations, because that's where patients answer.",
  },
  screens: [
    {
      src: "/work/clinic-booking/dashboard.png",
      alt: {
        ar: "شاشة تصميمية من البناء التجريبي: لوحة مواعيد عربية، تقويم أسبوعي بمواعيد مؤكدة عبر واتساب وحجوزات إلكترونية خارج ساعات الدوام.",
        en: "Concept screen from the demonstration build: an Arabic clinic dashboard, a week calendar with WhatsApp-confirmed appointments and after-hours online bookings.",
      },
      width: 1600,
      height: 1200,
    },
    {
      src: "/work/clinic-booking/reports.png",
      alt: {
        ar: "شاشة تصميمية من البناء التجريبي: تقارير العيادة، حجوزات الأسبوع داخل الدوام وخارجه، وأكثر العلاجات حجزًا، وقنوات الحجز.",
        en: "Concept screen from the demonstration build: clinic reports, weekly in-hours versus after-hours bookings, top treatments, and booking channels.",
      },
      width: 1600,
      height: 1200,
    },
  ],
});
