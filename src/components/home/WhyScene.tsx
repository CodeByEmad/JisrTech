import {
  Handshake,
  Globe,
  ShieldCheck,
  ClipboardText,
  Clock,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/i18n/routing";
import { home } from "@/content/pages/home";
import { Reveal } from "@/components/system/Reveal";
import { SectionHeader } from "@/components/system/SectionHeader";

const ICONS = {
  handshake: Handshake,
  globe: Globe,
  shield: ShieldCheck,
  clipboard: ClipboardText,
  clock: Clock,
  wrench: Wrench,
} as const;

/** Six reasons as a quiet two-column icon list (reference: Mawjood "Who We Are"). */
export function WhyScene({ locale }: { locale: Locale }) {
  return (
    <section className="border-t border-line bg-paper-raise">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <SectionHeader locale={locale} align="start" title={home.why.title} />
        </Reveal>
        <div className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {home.why.items.map((item, i) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS] ?? Handshake;
            return (
              <Reveal key={item.icon} delay={(i % 2) * 0.08}>
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-field border border-line bg-paper text-accent">
                    <Icon weight="duotone" className="size-5.5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-extrabold text-ink">{item.title[locale]}</h3>
                    <p className="mt-1.5 max-w-[52ch] text-[0.95rem] leading-relaxed text-ink-soft">
                      {item.body[locale]}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
