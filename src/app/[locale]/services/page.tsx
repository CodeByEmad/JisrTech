import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { services } from "@/content/services";
import { servicesPage } from "@/content/pages/services";
import { buildMetadata } from "@/lib/seo";
import { servicesLd } from "@/lib/structured-data";
import { orderDigits } from "@/lib/digits";
import { SERVICE_ICONS } from "@/lib/service-icons";
import { JsonLd } from "@/components/system/JsonLd";
import { PageHero } from "@/components/system/PageHero";
import { Reveal } from "@/components/system/Reveal";
import { WaCta } from "@/components/system/Button";

type PageProps = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/services",
    title: servicesPage.meta.title,
    description: servicesPage.meta.description,
  });
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd data={servicesLd(locale)} />
      <PageHero
        locale={locale}
        kicker={servicesPage.kicker}
        title={servicesPage.title}
        lead={servicesPage.lead}
      />

      <div className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
        {services.map((service) => (
          <article
            key={service.anchor}
            id={service.anchor}
            className="scroll-mt-24 border-t border-line py-14 sm:py-16"
          >
            <Reveal>
              <div className="grid gap-x-12 gap-y-6 lg:grid-cols-[1fr_1.7fr]">
                <div>
                  <div className="flex items-center gap-4">
                    {(() => {
                      const Icon = SERVICE_ICONS[service.anchor];
                      return Icon ? (
                        <span className="flex size-12 shrink-0 items-center justify-center rounded-field bg-accent-tint text-accent">
                          <Icon weight="duotone" className="size-6" />
                        </span>
                      ) : null;
                    })()}
                    <span className="text-3xl font-extrabold leading-none text-accent/25">
                      {orderDigits(service.order, locale)}
                    </span>
                  </div>
                  <h2 className="mt-5 text-title font-extrabold text-ink">
                    {service.name[locale]}
                  </h2>
                </div>
                <div>
                  <p className="text-heading font-bold leading-snug text-ink">
                    {service.outcome[locale]}
                  </p>
                  {service.body && (
                    <p className="mt-5 max-w-[68ch] leading-relaxed text-ink-soft">
                      {service.body[locale]}
                    </p>
                  )}
                  {service.replaces && (
                    <p className="mt-6 max-w-[68ch] rounded-field bg-accent-tint px-5 py-4 text-[0.95rem] leading-relaxed text-accent-deep">
                      {service.replaces[locale]}
                    </p>
                  )}
                  {service.ctaPrefill && (
                    <WaCta
                      prefill={service.ctaPrefill[locale]}
                      label={servicesPage.chapterCta[locale]}
                      variant="quiet"
                      className="mt-8"
                    />
                  )}
                </div>
              </div>
            </Reveal>
          </article>
        ))}
      </div>
    </>
  );
}
