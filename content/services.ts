import { serviceSchema, type Service } from "@/lib/schemas";

/**
 * The six services, names fixed by the business plan, order = the growth
 * story (site-architecture.md). Business websites live inside Custom Web
 * Applications as its first tier (documented plan-gap reconciliation).
 * body = plain-language chapter (outcome-first, content-strategy §7);
 * replaces = the felt pain it removes; ctaPrefill = contextual opener.
 */

const define = (s: unknown): Service => serviceSchema.parse(s);

export const services: Service[] = [
  define({
    anchor: "web-applications",
    order: 1,
    name: { ar: "تطبيقات الويب المخصّصة", en: "Custom Web Applications" },
    outcome: {
      ar: "موقع نشاطك، بوابات الحجز، لوحات التحكم، تُبنى لتُكتشف على قوقل وتعمل على كل جوال.",
      en: "Your business's website, booking portals, dashboards, built to be found on Google and to work on every phone.",
    },
    body: {
      ar: "هنا تبدأ معظم الشراكات: موقع يمثّل نشاطك في أفضل صوره، يظهر حين يبحث الناس، ويعمل على الجوال الذي بين أيديهم. وحين تحتاج أكثر، حجوزات إلكترونية، بوابة عملاء، لوحة تحكم لفريقك، ينمو معك دون أن تبدأ من الصفر.",
      en: "This is where most partnerships begin: a website that shows your business at its best, appears when people search, and works on the phone in their hand. When you need more, online booking, a customer portal, a dashboard for your team, it grows with you instead of starting over.",
    },
    replaces: {
      ar: "يغنيك عن: موقعٍ لا يجده أحد، والاعتمادِ على «الشخص الذي بناه» في كل تعديل.",
      en: "Replaces: the website nobody can find, and the “call the person who built it” dependency.",
    },
    ctaPrefill: {
      ar: "مرحبًا جسر تك، أودّ التحدث عن موقع أو تطبيق ويب.",
      en: "Hello Jisr Tech, I'd like to talk about a website or web application.",
    },
  }),
  define({
    anchor: "software-development",
    order: 2,
    name: { ar: "تطوير البرمجيات", en: "Software Development" },
    outcome: {
      ar: "أدوات وأنظمة مخصّصة تُصمَّم حول الطريقة التي يعمل بها نشاطك فعلًا.",
      en: "Custom tools and systems shaped around how your business actually runs.",
    },
    body: {
      ar: "البرمجيات الجاهزة تجعل عملك ينحني ليناسبها. نحن نبني بالاتجاه المعاكس: أدوات تُصمَّم حول طريقة عمل فريقك أصلًا، تسعير، جدولة، متابعة، أو أيًّا كان ما يدير يومك، فيأتي النظام على مقاس العمل، لا العكس.",
      en: "Off-the-shelf software makes your business bend around it. We build the other way: tools shaped around how your team already works, quoting, scheduling, tracking, whatever runs your day, so the system fits the business, not the reverse.",
    },
    replaces: {
      ar: "يغنيك عن: جدول البيانات الذي لا يفهمه إلا موظف واحد.",
      en: "Replaces: the spreadsheet only one employee understands.",
    },
    ctaPrefill: {
      ar: "مرحبًا جسر تك، أودّ التحدث عن برمجية مخصّصة لنشاطي.",
      en: "Hello Jisr Tech, I'd like to talk about custom software for my business.",
    },
  }),
  define({
    anchor: "digital-solutions",
    order: 3,
    name: { ar: "الحلول الرقمية", en: "Digital Solutions" },
    outcome: {
      ar: "من الورق والمكالمات إلى عملية رقمية واحدة واضحة، خطوة بخطوة.",
      en: "From paper and phone calls to one clear digital operation, step by step.",
    },
    body: {
      ar: "بعض الأنشطة لا تحتاج نظامًا واحدًا بل طريقًا. ننظر في سير عملك الفعلي، ثم ننقله رقميًا بالترتيب الصحيح: الحضور أولًا، ثم التشغيل، ثم الأجزاء التي تتكامل معًا، وتعرف في كل مرحلة ما الخطوة التالية ولماذا.",
      en: "Some businesses don't need one system, they need a path. We look at how your work actually flows, then move it online in the right order: presence first, then operations, then the pieces that talk to each other, and at every stage you know what's next and why.",
    },
    replaces: {
      ar: "يغنيك عن: درجٍ مليء بالورق، وجوّالٍ مليء بالصور، وإجراءاتٍ تعيش في ذاكرة أحدهم.",
      en: "Replaces: a drawer of paper, a phone full of photos, and processes that live in someone's memory.",
    },
    ctaPrefill: {
      ar: "مرحبًا جسر تك، أودّ التحدث عن التحوّل الرقمي لنشاطي.",
      en: "Hello Jisr Tech, I'd like to talk about taking my business digital.",
    },
  }),
  define({
    anchor: "automation-ai",
    order: 4,
    name: { ar: "الأتمتة والذكاء الاصطناعي", en: "Automation & AI Solutions" },
    outcome: {
      ar: "العمل المتكرر ينجزه النظام، بدل أن يستهلك يومك.",
      en: "The repetitive work, done by the system instead of eating your day.",
    },
    body: {
      ar: "رسائل التذكير، والتقرير الذي يستهلك صباح كل خميس، والبيانات المنقولة يدويًا بين برنامجين، هذه مهام نظام، لا مهام إنسان. نؤتمت المتكرر ونستخدم الذكاء الاصطناعي حيث يستحق مكانه فعلًا، ليقضي فريقك وقته في الرأي والقرار، لا في النسخ واللصق.",
      en: "The reminder messages, the report that eats every Thursday morning, the data moved by hand between two programs, that's a system's job, not a person's. We automate the repetitive and apply AI where it actually earns its place, so your people spend their hours on judgment, not copying.",
    },
    replaces: {
      ar: "يغنيك عن: ساعات النسخ واللصق وذعرِ نهاية الشهر.",
      en: "Replaces: hours of copy-paste and end-of-month panic.",
    },
    ctaPrefill: {
      ar: "مرحبًا جسر تك، أودّ التحدث عن أتمتة جزء من عملياتي.",
      en: "Hello Jisr Tech, I'd like to talk about automating part of my operations.",
    },
  }),
  define({
    anchor: "mobile-apps",
    order: 5,
    name: { ar: "تطوير تطبيقات الجوال", en: "Mobile App Development" },
    outcome: {
      ar: "نشاطك التجاري بين أيدي عملائك، على iOS وAndroid.",
      en: "Your business in your customers' hands, iOS and Android.",
    },
    body: {
      ar: "حين ينبغي أن يحملك عملاؤك في جيوبهم، طلبات، حجوزات، تتبّع، برامج ولاء، نصمّم ونبني على iOS وAndroid. ونبني التطبيقات الداخلية أيضًا: امنح فريقك الميداني المكتبَ كاملًا في يده.",
      en: "When your customers should carry you in their pocket, ordering, booking, tracking, loyalty, we design and build for iOS and Android. Internal apps too: give your field team the whole office in their hand.",
    },
    replaces: {
      ar: "يغنيك عن: استقبال الطلبات بالمكالمات ورسائلِ «أين المندوب؟».",
      en: "Replaces: order-taking by phone call and “where is the driver?” messages.",
    },
    ctaPrefill: {
      ar: "مرحبًا جسر تك، أودّ التحدث عن تطبيق جوال.",
      en: "Hello Jisr Tech, I'd like to talk about a mobile app.",
    },
  }),
  define({
    anchor: "erp-systems",
    order: 6,
    name: { ar: "أنظمة تخطيط موارد المنشآت", en: "ERP & Business Systems" },
    outcome: {
      ar: "المخزون والموظفون والحسابات في نظام واحد لا يختلف مع نفسه أبدًا.",
      en: "Inventory, staff, and accounts in one system that always agrees with itself.",
    },
    body: {
      ar: "حين يتجاوز نموّ العمل ما تحمله الذاكرة والاجتماعات، تبدأ الأرقام بالاختلاف: المستودع يقول شيئًا، والمحاسبة شيئًا آخر. نظام تخطيط الموارد حقيقةٌ واحدة للمخزون والموظفين والمال، نطبّقه حول عملياتك أنت، وبالوتيرة التي تستوعبها.",
      en: "When the business grows past what memory and meetings can hold, the numbers start disagreeing: the warehouse says one thing, accounting another. An ERP is one truth for inventory, staff, and money, implemented around your operation, at the pace it can absorb.",
    },
    replaces: {
      ar: "يغنيك عن: ثلاثةِ أنظمة لا تتفق، وإقفالاتٍ شهرية تستغرق أسبوعًا.",
      en: "Replaces: three systems that never agree, and month-ends that take a week.",
    },
    ctaPrefill: {
      ar: "مرحبًا جسر تك، أودّ التحدث عن نظام ERP أو نظام أعمال.",
      en: "Hello Jisr Tech, I'd like to talk about an ERP or business system.",
    },
  }),
].sort((a, b) => a.order - b.order);
