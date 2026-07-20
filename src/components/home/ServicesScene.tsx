import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { home } from "@/content/pages/home";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { orderDigits } from "@/lib/digits";
import { SERVICE_ICONS } from "@/lib/service-icons";
import { Reveal } from "@/components/system/Reveal";
import { SectionHeader } from "@/components/system/SectionHeader";
import { Spotlight } from "@/components/system/Spotlight";

/**
 * The six services as a numbered hairline grid (reference register:
 * big light ordinals, quiet borders, no cards).
 */
export function ServicesScene({ locale }: { locale: Locale }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <Reveal>
        <SectionHeader
          locale={locale}
          align="start"
          kicker={site.footer.services}
          title={home.services.title}
          lead={home.services.lead}
        />
      </Reveal>

      <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.anchor} delay={(i % 3) * 0.07} className="h-full bg-paper-raise">
            <Spotlight className="h-full">
              <Link
                href={`/services#${service.anchor}`}
                className="group flex h-full flex-col p-7 transition-colors duration-300 hover:bg-accent-tint/40"
              >
                <span className="flex items-center justify-between gap-4">
                  {(() => {
                    const Icon = SERVICE_ICONS[service.anchor];
                    return Icon ? (
                      <span className="flex size-11 items-center justify-center rounded-field bg-accent-tint text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-paper-raise">
                        <Icon weight="duotone" className="size-5.5" />
                      </span>
                    ) : null;
                  })()}
                  <span
                    aria-hidden
                    className="text-3xl font-extrabold leading-none text-accent/25 transition-colors duration-300 group-hover:text-accent/60"
                  >
                    {orderDigits(service.order, locale)}
                  </span>
                </span>
                <h3 className="mt-5 text-heading font-extrabold text-ink">
                  {service.name[locale]}
                </h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">
                  {service.outcome[locale]}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-accent">
                  {home.services.cardCta[locale]}
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
                  />
                </span>
              </Link>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
