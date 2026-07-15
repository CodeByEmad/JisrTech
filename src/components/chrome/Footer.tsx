import { WhatsappLogo, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/i18n/navigation";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { legalPage } from "@/content/pages/legal";
import type { Locale } from "@/i18n/routing";
import { whatsAppUrl } from "@/lib/whatsapp";
import { home } from "@/content/pages/home";
import { Wordmark } from "./Wordmark";

/** The dark closer, every page ends on the other bank. */
export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="bg-night text-night-text">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Wordmark locale={locale} onNight />
            <p className="mt-4 max-w-[26ch] text-[0.95rem] leading-relaxed text-night-soft">
              {site.tagline[locale]}
            </p>
          </div>

          <nav aria-label={site.footer.pages[locale]}>
            <h2 className="text-sm font-bold text-night-soft">{site.footer.pages[locale]}</h2>
            <ul className="mt-4 space-y-2.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.95rem] font-bold transition-colors hover:text-white"
                  >
                    {item.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={site.footer.services[locale]}>
            <h2 className="text-sm font-bold text-night-soft">{site.footer.services[locale]}</h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.anchor}>
                  <Link
                    href={`/services#${service.anchor}`}
                    className="text-[0.95rem] transition-colors hover:text-white"
                  >
                    {service.name[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold text-night-soft">{site.footer.contact[locale]}</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={whatsAppUrl(home.hero.prefill[locale])}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-[0.95rem] font-bold transition-colors hover:text-white"
                >
                  <WhatsappLogo weight="fill" className="size-4.5 text-night-soft" aria-hidden />
                  <span dir="ltr">{site.whatsapp.display}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-[0.95rem] text-night-soft">
                <MapPin className="mt-1 size-4.5 shrink-0" aria-hidden />
                {site.location[locale]}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-night-line pt-6 text-sm text-night-soft">
          <span>© {new Date().getFullYear()} {site.name[locale]}</span>
          <Link href="/privacy" className="transition-colors hover:text-white">
            {legalPage.title[locale]}
          </Link>
        </div>
      </div>
    </footer>
  );
}
