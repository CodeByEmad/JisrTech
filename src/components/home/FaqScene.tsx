import type { Locale } from "@/i18n/routing";
import { home } from "@/content/pages/home";
import { Reveal } from "@/components/system/Reveal";
import { SectionHeader } from "@/components/system/SectionHeader";
import { FaqAccordion } from "./FaqAccordion";

export function FaqScene({ locale }: { locale: Locale }) {
  const items = home.faq.items.map((item) => ({
    q: item.q[locale],
    a: item.a[locale],
  }));

  return (
    <section className="border-t border-line bg-paper-raise">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <SectionHeader locale={locale} title={home.faq.title} />
        </Reveal>
        <Reveal delay={0.08} className="mt-10">
          <FaqAccordion items={items} />
        </Reveal>
      </div>
    </section>
  );
}
