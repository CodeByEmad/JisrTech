import type { Locale } from "@/i18n/routing";
import { home } from "@/content/pages/home";
import { processStages } from "@/content/process";
import { orderDigits } from "@/lib/digits";
import { Reveal } from "@/components/system/Reveal";
import { SectionHeader } from "@/components/system/SectionHeader";
import { ProcessFlow } from "./ProcessFlow";

export function ProcessScene({ locale }: { locale: Locale }) {
  const stages = processStages.map((stage) => ({
    name: stage.name[locale],
    detail: stage.detail[locale],
  }));
  const digits = processStages.map((_, i) => orderDigits(i + 1, locale));

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
      <ProcessFlow stages={stages} digits={digits} />
    </section>
  );
}
