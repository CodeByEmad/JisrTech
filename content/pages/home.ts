import type { Localized } from "@/lib/types";

/**
 * Homepage content, the six-scene argument (docs/homepage-experience.md).
 * Draft-but-real bilingual copy written to content-strategy.md rules;
 * finalized (with founder sign-off items) in M4. Total ≤ 600 words/language.
 */

type Loc = Localized;

export const home = {
  meta: {
    title: {
      ar: "جسر تك، نبني البرمجيات التي يعتمد عليها عملك",
      en: "Jisr Tech, We build the software your business runs on",
    } satisfies Loc,
    description: {
      ar: "استوديو برمجيات في الخبر: مواقع وتطبيقات وأنظمة مخصّصة للأعمال في السعودية، بالعربية والإنجليزية.",
      en: "A software studio in Al Khobar: custom websites, apps, and systems for businesses in Saudi Arabia, in Arabic and English.",
    } satisfies Loc,
  },

  hero: {
    claimPre: { ar: "نبني البرمجيات التي", en: "We build the software your business" } satisfies Loc,
    claimAccent: { ar: "يعتمد عليها", en: "runs on" } satisfies Loc,
    claimPost: { ar: "عملك.", en: "." } satisfies Loc,
    support: {
      ar: "أنظمة مخصّصة للشركات النامية في السعودية، تصميم وهندسة ودعم، من الخبر.",
      en: "Custom systems for growing businesses in Saudi Arabia, designed, engineered, and supported from Al Khobar.",
    } satisfies Loc,
    prefill: {
      ar: "مرحبًا جسر تك، أودّ التحدث عن نشاطي التجاري.",
      en: "Hello Jisr Tech, I'd like to talk about my business.",
    } satisfies Loc,
    secondaryCta: { ar: "استكشف الخدمات", en: "Explore services" } satisfies Loc,
    screenAlt: {
      ar: "لوحة مواعيد عربية من بناء تجريبي صمّمه جسر تك",
      en: "An Arabic clinic booking dashboard from a Jisr Tech demonstration build",
    } satisfies Loc,
  },

  services: {
    title: {
      ar: "ماذا نبني لمنشأتك",
      en: "What we build for your business",
    } satisfies Loc,
    lead: {
      ar: "ست خدمات على طريق واحد: تبدأ بموقع، وتنمو إلى أنظمة تدير العمل كله.",
      en: "Six services on one path: start with a website, grow into systems that run the whole operation.",
    } satisfies Loc,
    workLink: {
      ar: "شاهد نماذج من أعمالنا",
      en: "See our demonstration builds",
    } satisfies Loc,
    cardCta: { ar: "التفاصيل", en: "Details" } satisfies Loc,
    techLabel: { ar: "نبني بأدواتٍ موثوقة", en: "We build with" } satisfies Loc,
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "Swift",
      "Kotlin",
      "PostgreSQL",
      "WhatsApp Business API",
    ],
  },

  paths: {
    title: {
      ar: "نماذج التعاقد معنا",
      en: "Engagement models",
    } satisfies Loc,
    lead: {
      ar: "ثلاثة نماذج واضحة، ولكل منشأة ما يناسب مرحلتها.",
      en: "Three clear models; every organization chooses what fits its stage.",
    } satisfies Loc,
    deliveryLabel: { ar: "التسليم", en: "Delivery" } satisfies Loc,
    items: [
      {
        name: { ar: "الحضور الرقمي", en: "Digital presence" },
        forWho: {
          ar: "لمنشأةٍ يجب أن يعكس حضورها الرقمي مكانتها.",
          en: "For an organization whose digital presence should reflect its standing.",
        },
        bullets: [
          { ar: "موقع مؤسسي ثنائي اللغة بهويتكم", en: "A bilingual corporate website in your identity" },
          { ar: "مبني للظهور في نتائج البحث", en: "Engineered for search visibility" },
          { ar: "قناة تواصل مباشرة من كل صفحة", en: "A direct client channel on every page" },
        ],
        delivery: {
          ar: "نطاق محدد، يُسلَّم خلال أسابيع",
          en: "A defined scope, delivered in weeks",
        },
        prefill: {
          ar: "مرحبًا جسر تك، أودّ مناقشة الحضور الرقمي لمنشأتنا.",
          en: "Hello Jisr Tech, I'd like to discuss our organization's digital presence.",
        },
      },
      {
        name: { ar: "أنظمة الأعمال والتشغيل", en: "Business systems & operations" },
        forWho: {
          ar: "لمنشأةٍ تدير حجوزات أو طلبات أو فرق عمل ميدانية.",
          en: "For an organization managing bookings, orders, or field teams.",
        },
        bullets: [
          { ar: "منصات حجوزات وطلبات", en: "Booking and ordering platforms" },
          { ar: "لوحات تشغيل وتقارير", en: "Operational dashboards and reporting" },
          { ar: "تكامل مع واتساب للأعمال", en: "WhatsApp Business integration" },
        ],
        delivery: {
          ar: "تسليم على مراحل معتمدة، ببرمجيات تعمل في كل مرحلة",
          en: "Phased delivery, with working software at every stage",
        },
        prefill: {
          ar: "مرحبًا جسر تك، أودّ مناقشة أنظمة تشغيل منشأتنا.",
          en: "Hello Jisr Tech, I'd like to discuss systems for our operations.",
        },
      },
      {
        name: { ar: "شراكة تقنية طويلة الأمد", en: "Long-term technology partnership" },
        forWho: {
          ar: "لمنشأةٍ تتوسع وتحتاج جهة تقنية واحدة مسؤولة.",
          en: "For an organization that is scaling and needs one accountable technology arm.",
        },
        bullets: [
          { ar: "خارطة أنظمة تُبنى حسب الأولوية", en: "A systems roadmap, built in priority order" },
          { ar: "دعم وتحديثات مستمرة", en: "Continuous support and updates" },
          { ar: "مسؤولية واحدة من البداية إلى النهاية", en: "Single accountability, end to end" },
        ],
        delivery: {
          ar: "تعاقد مستمر",
          en: "A continuing engagement",
        },
        prefill: {
          ar: "مرحبًا جسر تك، أودّ مناقشة شراكة تقنية طويلة الأمد.",
          en: "Hello Jisr Tech, I'd like to discuss a long-term technology partnership.",
        },
      },
    ],
  },

  faq: {
    title: { ar: "أسئلة شائعة", en: "Common questions" } satisfies Loc,
    items: [
      {
        q: {
          ar: "كم يكلف موقع إلكتروني لنشاط تجاري في السعودية؟",
          en: "How much does a business website cost in Saudi Arabia?",
        },
        a: {
          ar: "يعتمد على ما يحتاجه نشاطك، فالموقع الأول يختلف عن نظام حجوزات متكامل. سترى دائمًا عرضًا مكتوبًا أولًا: التكلفة والجدول وما يشمله، قبل أن تلتزم بأي شيء.",
          en: "It depends on what your business needs; a first website is a different scope from a full booking system. You always see a written quote first: the cost, the schedule, and what it includes, before you commit to anything.",
        },
      },
      {
        q: {
          ar: "هل أحتاج موقعًا إذا كان عندي حساب إنستقرام؟",
          en: "Do I need a website if I already have Instagram?",
        },
        a: {
          ar: "إنستقرام يعرّف الناس بك، لكنه لا يظهر في بحث قوقل حين يبحث عميل عن خدمتك، ولا يستقبل حجوزات، وليس ملكك. الموقع يعمل مع حساباتك لا بدلًا عنها: يُعثر عليه، ويحجز، ويبقى باسم منشأتك.",
          en: "Instagram introduces you, but it doesn't appear when a customer searches Google for your service, it doesn't take bookings, and you don't own it. A website works with your accounts, not instead of them: it gets found, takes the booking, and stays registered to your business.",
        },
      },
      {
        q: {
          ar: "كم يستغرق بناء الموقع أو النظام؟",
          en: "How long does a website or a system take?",
        },
        a: {
          ar: "الموقع الأول: أسابيع لا شهور. والأنظمة الأكبر تُسلَّم على مراحل، فترى برمجياتٍ تعمل مبكرًا وتعتمد كل مرحلة بنفسك.",
          en: "A first website: weeks, not months. Larger systems are delivered in stages, so you see working software early and approve each stage yourself.",
        },
      },
      {
        q: {
          ar: "من يملك الموقع والكود بعد التسليم؟",
          en: "Who owns the website and the code after delivery?",
        },
        a: {
          ar: "أنت. النطاق والكود والبيانات والحسابات تُسجَّل باسم منشأتك من اليوم الأول، وإن افترقنا يومًا يبقى كل شيء يعمل ويبقى كل شيء لك.",
          en: "You do. The domain, code, data, and accounts are registered to your business from day one; if we ever part ways, everything keeps working and everything stays yours.",
        },
      },
      {
        q: {
          ar: "هل تعملون بالعربية أم بالإنجليزية؟",
          en: "Do you work in Arabic or English?",
        },
        a: {
          ar: "بالاثنتين، وكتابةً أصيلة لا ترجمة. كل ما نبنيه يصدر باللغتين بالمستوى الذي تراه في هذا الموقع.",
          en: "Both, written natively rather than translated. Everything we build ships in both languages, at the standard you're reading right now.",
        },
      },
      {
        q: {
          ar: "ماذا يحدث بعد إطلاق الموقع؟",
          en: "What happens after the website launches?",
        },
        a: {
          ar: "نبقى. التشغيل والتحديثات والدعم تستمر بعد الإطلاق، وتبقى على تواصل مع الفريق نفسه الذي بنى نظامك.",
          en: "We stay. Upkeep, updates, and support continue after launch, and you keep talking to the same people who built your system.",
        },
      },
    ],
  },

  why: {
    title: {
      ar: "لماذا يختار أصحاب الأعمال جسر تك",
      en: "Why businesses choose Jisr Tech",
    } satisfies Loc,
    items: [
      {
        icon: "handshake",
        title: { ar: "شريك واحد مسؤول", en: "One accountable partner" },
        body: {
          ar: "من أول محادثة إلى ما بعد الإطلاق بسنوات، تتعامل مع فريق واحد يجيب عن كل شيء.",
          en: "From the first conversation to years after launch, you deal with one team that answers for everything.",
        },
      },
      {
        icon: "globe",
        title: { ar: "عربي وإنجليزي أصيلان", en: "Native Arabic and English" },
        body: {
          ar: "اللغتان تُكتبان وتُصمَّمان كأصلٍ لا كترجمة، بالمستوى الذي تراه في هذا الموقع.",
          en: "Both languages are written and designed as originals, never as an afterthought translation.",
        },
      },
      {
        icon: "shield",
        title: { ar: "كل شيء ملكك", en: "You own everything" },
        body: {
          ar: "النطاق والكود والبيانات والحسابات مسجّلة باسم منشأتك من اليوم الأول.",
          en: "Domain, code, data, and accounts are registered to your business from day one.",
        },
      },
      {
        icon: "clipboard",
        title: { ar: "تعتمد كل مرحلة بنفسك", en: "You approve every stage" },
        body: {
          ar: "ترى النطاق والشاشات وتعتمدها بنفسك، ولا نتقدم خطوة قبل موافقتك.",
          en: "You see the scope and the screens, and nothing moves forward without your approval.",
        },
      },
      {
        icon: "clock",
        title: { ar: "أسابيع، لا شهور", en: "Weeks, not months" },
        body: {
          ar: "الموقع الأول يُسلَّم في أسابيع، والأنظمة الأكبر على مراحل ترى فيها برمجياتٍ تعمل مبكرًا.",
          en: "A first website ships in weeks; larger systems arrive in stages you see working early.",
        },
      },
      {
        icon: "wrench",
        title: { ar: "نبقى بعد الإطلاق", en: "We stay after launch" },
        body: {
          ar: "التشغيل والتحديثات والدعم تستمر بعد الإطلاق، لا نسلّم ونختفي.",
          en: "Upkeep, updates, and support continue after launch; we do not hand off and disappear.",
        },
      },
    ],
  },

  process: {
    kicker: { ar: "كيف نعمل", en: "How it works" } satisfies Loc,
    title: {
      ar: "أربع مراحل، تعتمد كلًّا منها بنفسك.",
      en: "Four stages. You approve each one.",
    } satisfies Loc,
    // stages: shared content/process.ts, consumed directly by the scene.
  },

  work: {
    kicker: { ar: "من أعمالنا", en: "Selected work" } satisfies Loc,
    title: {
      ar: "بنيناها لنُريك ما نصنعه.",
      en: "Built to show you what we make.",
    } satisfies Loc,
    // demoKicker / viewLabel: shared with the Work pages , 
    // single source in content/pages/work.ts.
  },

  facts: {
    srTitle: { ar: "أين نقف", en: "Where we stand" } satisfies Loc,
    // items: shared site.facts (content/site.ts), one trust source.
  },

  invite: {
    title: { ar: "حدّثنا عن نشاطك التجاري.", en: "Tell us about your business." } satisfies Loc,
    support: {
      ar: "المحادثة لا تكلّف شيئًا، والردّ يصلك من إنسان، لا من نظام آلي.",
      en: "A conversation costs nothing, and the reply comes from a person, not a pipeline.",
    } satisfies Loc,
    formalLink: { ar: "للجهات والمنشآت الكبيرة", en: "For organizations and formal inquiries" } satisfies Loc,
  },

  cta: { ar: "ابدأ محادثة", en: "Start a conversation" } satisfies Loc,
} as const;
