import type { Localized } from "@/lib/types";

/** Contact page, WhatsApp visually primary; the 2-field form is the
 *  formal channel (organizations, delegated staff). */

export const contactPage = {
  meta: {
    title: { ar: "تواصل معنا، جسر تك", en: "Contact, Jisr Tech" } satisfies Localized,
    description: {
      ar: "ابدأ محادثة عبر واتساب، أو راسلنا رسميًا، بالعربية أو الإنجليزية.",
      en: "Start a WhatsApp conversation, or write formally, in Arabic or English.",
    } satisfies Localized,
  },
  kicker: { ar: "تواصل معنا", en: "Contact" } satisfies Localized,
  title: { ar: "ابدأ محادثة.", en: "Start a conversation." } satisfies Localized,
  lead: {
    ar: "حدّثنا عن نشاطك، بالعربية أو بالإنجليزية، وكما يريحك.",
    en: "Tell us about your business, in Arabic or English, however you're most comfortable.",
  } satisfies Localized,

  whatsappBlock: {
    label: { ar: "الطريقة الأسرع", en: "The fastest way" } satisfies Localized,
    note: {
      ar: "تصل مباشرةً إلى من يبني، لا موظفَ استقبال ولا نظامَ تذاكر.",
      en: "You reach the people who build, no receptionist, no ticket system.",
    } satisfies Localized,
    prefill: {
      ar: "مرحبًا جسر تك، أودّ التحدث عن نشاطي التجاري.",
      en: "Hello Jisr Tech, I'd like to talk about my business.",
    } satisfies Localized,
  },

  methods: {
    location: { ar: "الموقع", en: "Location" } satisfies Localized,
    languages: { ar: "اللغات", en: "Languages" } satisfies Localized,
    languagesValue: { ar: "العربية والإنجليزية", en: "Arabic & English" } satisfies Localized,
  },

  form: {
    label: { ar: "أرسل لنا رسالة", en: "Send us a message" } satisfies Localized,
    orgNote: {
      ar: "نرد خلال يوم عمل. وللجهات الحكومية والمنشآت الكبيرة: هذه هي القناة الرسمية.",
      en: "We reply within one business day. For government agencies and organizations, this is the formal channel.",
    } satisfies Localized,
    nameLabel: { ar: "الاسم", en: "Name" } satisfies Localized,
    reachLabel: { ar: "رقم الجوال أو البريد", en: "Phone or email" } satisfies Localized,
    messageLabel: { ar: "الرسالة", en: "Message" } satisfies Localized,
    messageHint: {
      ar: "حدّثنا عن نشاطك وما تحتاجه.",
      en: "Tell us about your business and what you need.",
    } satisfies Localized,
    submit: { ar: "إرسال", en: "Send" } satisfies Localized,
    sending: { ar: "جارٍ الإرسال…", en: "Sending…" } satisfies Localized,
    success: {
      ar: "وصلتنا رسالتك، شكرًا لك. الردّ في طريقه إليك.",
      en: "Received, thank you. A reply is on its way.",
    } satisfies Localized,
    deliveryError: {
      ar: "تعذّر إرسال الرسالة من جهتنا. واتساب يعمل دائمًا:",
      en: "The message didn't go through on our side. WhatsApp always works:",
    } satisfies Localized,
    errors: {
      name: {
        ar: "نحتاج اسمك حتى نخاطبك كما يليق.",
        en: "We need a name so we can address you properly.",
      } satisfies Localized,
      reach: {
        ar: "نحتاج رقمك أو بريدك حتى نستطيع الرد عليك.",
        en: "We need a phone or email so we can reply.",
      } satisfies Localized,
      message: {
        ar: "أخبرنا أكثر قليلًا حتى نعرف كيف نساعدك.",
        en: "Tell us a little more so we know how to help.",
      } satisfies Localized,
    },
  },
} as const;
