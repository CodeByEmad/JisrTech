import type { Locale } from "@/i18n/routing";
import { home } from "@/content/pages/home";
import { processStages } from "@/content/process";
import { orderDigits } from "@/lib/digits";
import { Reveal } from "@/components/system/Reveal";
import { SectionHeader } from "@/components/system/SectionHeader";

/** Four stages as a numbered two-column list (reference register). */
export function ProcessScene({ locale }: { locale: Locale }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <Reveal>
        <SectionHeader
          locale={locale}
          align="start"
          kicker={home.process.kicker}
          title={home.process.title}
        />
      </Reveal>
      <ol className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
        {processStages.map((stage, i) => (
          <li key={stage.name.en}>
            <Reveal delay={(i % 2) * 0.08} className="flex items-start gap-5 border-t border-line pt-6">
              <span className="text-3xl font-extrabold leading-none text-accent/30">
                {orderDigits(i + 1, locale)}
              </span>
              <div>
                <h3 className="text-heading font-extrabold text-ink">{stage.name[locale]}</h3>
                <p className="mt-2 max-w-[48ch] text-[0.95rem] leading-relaxed text-ink-soft">
                  {stage.detail[locale]}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
