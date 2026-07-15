import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { home } from "@/content/pages/home";
import { site } from "@/content/site";
import { WaCta } from "@/components/system/Button";
import { Reveal } from "@/components/system/Reveal";
import { SectionHeader } from "@/components/system/SectionHeader";

/**
 * Three engagement models as packages (reference: Mawjood), the
 * middle card elevated, night-surfaced. No prices, company policy.
 */
export function ModelsScene({ locale }: { locale: Locale }) {
  return (
    <section id="models" className="scroll-mt-20 border-t border-line bg-paper-raise">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <SectionHeader locale={locale} title={home.paths.title} lead={home.paths.lead} />
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3 lg:gap-0">
          {home.paths.items.map((item, i) => {
            const featured = i === 1;
            return (
              <Reveal
                key={item.name.en}
                delay={i * 0.08}
                className={`h-full ${featured ? "z-10 lg:-my-5" : ""}`}
              >
                <article
                  className={`flex h-full flex-col p-7 sm:p-8 ${
                    featured
                      ? "rounded-card bg-night text-night-text shadow-raise"
                      : `rounded-card border border-line bg-paper ${
                          i === 0 ? "lg:rounded-e-none lg:border-e-0" : "lg:rounded-s-none lg:border-s-0"
                        }`
                  }`}
                >
                  <h3
                    className={`text-heading font-extrabold ${featured ? "text-white" : "text-ink"}`}
                  >
                    {item.name[locale]}
                  </h3>
                  <p
                    className={`mt-3 text-[0.95rem] leading-relaxed ${featured ? "text-night-soft" : "text-ink-soft"}`}
                  >
                    {item.forWho[locale]}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet.en} className="flex items-start gap-2.5">
                        <Check
                          weight="bold"
                          aria-hidden
                          className={`mt-1 size-4 shrink-0 ${featured ? "text-accent-bright" : "text-accent"}`}
                        />
                        <span
                          className={`text-[0.95rem] leading-relaxed ${featured ? "text-night-text" : "text-ink"}`}
                        >
                          {bullet[locale]}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className={`mt-6 border-t pt-5 ${featured ? "border-night-line" : "border-line/70"}`}
                  >
                    <span
                      className={`text-sm font-bold ${featured ? "text-night-soft" : "text-ink-soft"}`}
                    >
                      {home.paths.deliveryLabel[locale]}
                    </span>
                    <p
                      className={`mt-1 text-[0.95rem] font-bold ${featured ? "text-white" : "text-ink"}`}
                    >
                      {item.delivery[locale]}
                    </p>
                  </div>
                  <div className="mt-7 flex-1" />
                  <WaCta
                    prefill={item.prefill[locale]}
                    label={site.cta.label[locale]}
                    variant={featured ? "night" : "quiet"}
                    className="w-full"
                  />
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* The formal channel for organizations (reference: Mawjood's government line). */}
        <Reveal delay={0.1}>
          <p className="mt-14 text-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-[0.95rem] font-bold text-ink-soft transition-colors hover:text-accent"
            >
              {home.invite.formalLink[locale]}
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
              />
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
