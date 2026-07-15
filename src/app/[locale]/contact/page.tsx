import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { MapPin, Translate } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/i18n/routing";
import { contactPage } from "@/content/pages/contact";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/system/PageHero";
import { Reveal } from "@/components/system/Reveal";
import { WaCta } from "@/components/system/Button";
import { ContactForm } from "@/components/contact/ContactForm";

type PageProps = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/contact",
    title: contactPage.meta.title,
    description: contactPage.meta.description,
  });
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const wa = contactPage.whatsappBlock;

  return (
    <>
      <PageHero
        locale={locale}
        kicker={contactPage.kicker}
        title={contactPage.title}
        lead={contactPage.lead}
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-24 sm:px-8 sm:pb-32 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        {/* WhatsApp, visually primary */}
        <Reveal>
          <section className="rounded-card bg-accent-tint p-7 sm:p-9">
            <h2 className="text-heading font-extrabold text-ink">{wa.label[locale]}</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">{wa.note[locale]}</p>
            <WaCta
              prefill={wa.prefill[locale]}
              label={site.cta.label[locale]}
              className="mt-7 w-full sm:w-auto"
            />
            <p dir="ltr" className="mt-4 text-lg font-bold text-ink rtl:text-end">
              {site.whatsapp.display}
            </p>

            <dl className="mt-10 space-y-5 border-t border-accent/20 pt-7">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
                <div>
                  <dt className="text-sm font-bold text-ink-soft">
                    {contactPage.methods.location[locale]}
                  </dt>
                  <dd className="mt-0.5 font-bold text-ink">{site.location[locale]}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Translate className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
                <div>
                  <dt className="text-sm font-bold text-ink-soft">
                    {contactPage.methods.languages[locale]}
                  </dt>
                  <dd className="mt-0.5 font-bold text-ink">
                    {contactPage.methods.languagesValue[locale]}
                  </dd>
                </div>
              </div>
            </dl>
          </section>
        </Reveal>

        {/* The formal channel */}
        <Reveal delay={0.08}>
          <section>
            <h2 className="text-heading font-extrabold text-ink">
              {contactPage.form.label[locale]}
            </h2>
            <p className="mt-3 max-w-[52ch] text-[0.95rem] leading-relaxed text-ink-soft">
              {contactPage.form.orgNote[locale]}
            </p>
            <div className="mt-7">
              <ContactForm locale={locale} />
            </div>
          </section>
        </Reveal>
      </div>
    </>
  );
}
