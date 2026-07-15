import { MapPin, Translate, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/i18n/routing";
import { home } from "@/content/pages/home";
import { contactPage } from "@/content/pages/contact";
import { site } from "@/content/site";
import { whatsAppUrl } from "@/lib/whatsapp";
import { Reveal } from "@/components/system/Reveal";
import { SectionHeader } from "@/components/system/SectionHeader";
import { ContactForm } from "@/components/contact/ContactForm";

/**
 * The closing contact section (reference: Mawjood): light, an icon
 * info column beside the formal form card. Per the content spec (§4):
 * WhatsApp CTA, display number, location, embedded contact form.
 */
export function InviteScene({ locale }: { locale: Locale }) {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <SectionHeader locale={locale} title={home.invite.title} lead={home.invite.support} />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
          <Reveal delay={0.06}>
            <a
              href={whatsAppUrl(home.hero.prefill[locale])}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-[0.95rem] font-bold text-paper-raise transition-colors hover:bg-accent-deep active:scale-[0.98]"
            >
              <WhatsappLogo weight="fill" className="size-5" aria-hidden />
              {home.cta[locale]}
            </a>

            <dl className="mt-9 space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-field border border-line bg-paper-raise text-accent">
                  <WhatsappLogo weight="fill" className="size-5.5" aria-hidden />
                </span>
                <div>
                  <dt className="text-sm font-bold text-ink-soft">
                    {contactPage.whatsappBlock.label[locale]}
                  </dt>
                  <dd dir="ltr" className="mt-0.5 font-extrabold text-ink rtl:text-end">
                    {site.whatsapp.display}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-field border border-line bg-paper-raise text-accent">
                  <MapPin className="size-5.5" aria-hidden />
                </span>
                <div>
                  <dt className="text-sm font-bold text-ink-soft">
                    {contactPage.methods.location[locale]}
                  </dt>
                  <dd className="mt-0.5 font-extrabold text-ink">{site.location[locale]}</dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-field border border-line bg-paper-raise text-accent">
                  <Translate className="size-5.5" aria-hidden />
                </span>
                <div>
                  <dt className="text-sm font-bold text-ink-soft">
                    {contactPage.methods.languages[locale]}
                  </dt>
                  <dd className="mt-0.5 font-extrabold text-ink">
                    {contactPage.methods.languagesValue[locale]}
                  </dd>
                </div>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-card border border-line bg-paper-raise p-6 shadow-raise sm:p-8">
              <h3 className="text-heading font-extrabold text-ink">
                {contactPage.form.label[locale]}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {contactPage.form.orgNote[locale]}
              </p>
              <div className="mt-6">
                <ContactForm locale={locale} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
