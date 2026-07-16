import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { MapPin, Translate, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
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
    ogSlug: "contact",
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

      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-24 pt-4 sm:px-8 sm:pb-28 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
        {/* WhatsApp, visually primary */}
        <Reveal>
          <section>
            <h2 className="text-heading font-extrabold text-ink">{wa.label[locale]}</h2>
            <p className="mt-2.5 max-w-[46ch] leading-relaxed text-ink-soft">
              {wa.note[locale]}
            </p>
            <WaCta prefill={wa.prefill[locale]} label={site.cta.label[locale]} className="mt-7" />

            <ul className="mt-10 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-field border border-line bg-paper-raise text-accent">
                  <WhatsappLogo weight="fill" className="size-5.5" aria-hidden />
                </span>
                <span>
                  {/* Product name, same strings the founder used in the privacy copy. */}
                  <span className="block text-sm font-bold text-ink-soft">
                    {locale === "ar" ? "واتساب" : "WhatsApp"}
                  </span>
                  <span dir="ltr" className="mt-0.5 block font-extrabold text-ink rtl:text-end">
                    {site.whatsapp.display}
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-field border border-line bg-paper-raise text-accent">
                  <MapPin className="size-5.5" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink-soft">
                    {contactPage.methods.location[locale]}
                  </span>
                  <span className="mt-0.5 block font-extrabold text-ink">
                    {site.location[locale]}
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-field border border-line bg-paper-raise text-accent">
                  <Translate className="size-5.5" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink-soft">
                    {contactPage.methods.languages[locale]}
                  </span>
                  <span className="mt-0.5 block font-extrabold text-ink">
                    {contactPage.methods.languagesValue[locale]}
                  </span>
                </span>
              </li>
            </ul>
          </section>
        </Reveal>

        {/* The formal channel */}
        <Reveal delay={0.08}>
          <section className="rounded-card border border-line bg-paper-raise p-6 shadow-raise sm:p-8">
            <h2 className="text-heading font-extrabold text-ink">
              {contactPage.form.label[locale]}
            </h2>
            <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-ink-soft">
              {contactPage.form.orgNote[locale]}
            </p>
            <div className="mt-6">
              <ContactForm locale={locale} />
            </div>
          </section>
        </Reveal>
      </div>
    </>
  );
}
