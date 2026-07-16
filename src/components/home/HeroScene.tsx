import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { home } from "@/content/pages/home";
import { site } from "@/content/site";
import { whatsAppUrl } from "@/lib/whatsapp";
import { Reveal } from "@/components/system/Reveal";
import { Magnetic } from "@/components/system/Magnetic";
import { HeroClaim } from "./HeroClaim";
import { ModelsPanel } from "./ModelsPanel";

/**
 * Split hero in the reference register: soft violet-washed light
 * gradient, claim and CTAs on the start side, the engagement models
 * as a quiet index panel on the end side.
 */
export function HeroScene({ locale }: { locale: Locale }) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Soft lavender wash with two violet glows, light stays light. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-b from-paper-raise via-[#efeaf9] to-paper"
      />
      <div
        aria-hidden
        className="glow-drift-1 absolute -top-40 end-[-10%] size-[36rem] rounded-full bg-[radial-gradient(circle,rgb(96_35_192/0.14),transparent_65%)] blur-2xl"
      />
      <div
        aria-hidden
        className="glow-drift-2 absolute -bottom-52 start-[-8%] size-[30rem] rounded-full bg-[radial-gradient(circle,rgb(167_139_250/0.18),transparent_65%)] blur-2xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:pb-24">
        <div>
          <Reveal>
            <p className="flex items-center gap-2.5 text-sm font-bold tracking-[0.12em] text-accent">
              <span aria-hidden className="h-px w-6 bg-accent" />
              {site.tagline[locale]}
            </p>
          </Reveal>
          <div className="mt-5">
            <HeroClaim
              pre={home.hero.claimPre[locale]}
              accent={home.hero.claimAccent[locale]}
              post={home.hero.claimPost[locale]}
              joinPost={locale === "en"}
            />
          </div>
          <Reveal delay={0.4}>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-ink-soft">
              {home.hero.support[locale]}
            </p>
          </Reveal>
          <Reveal delay={0.55}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Magnetic>
                <a
                  href={whatsAppUrl(home.hero.prefill[locale])}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-accent px-7 py-3.5 text-[0.95rem] font-bold text-paper-raise transition-colors duration-300 hover:bg-accent-deep active:scale-[0.98]"
                >
                  <WhatsappLogo weight="fill" className="size-5" aria-hidden />
                  {site.cta.label[locale]}
                </a>
              </Magnetic>
              <Magnetic>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-line bg-paper-raise/70 px-7 py-3.5 text-[0.95rem] font-bold text-ink backdrop-blur-sm transition-colors duration-300 hover:border-accent/40 active:scale-[0.98]"
                >
                  {home.hero.secondaryCta[locale]}
                  <ArrowRight
                    aria-hidden
                    className="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
                  />
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>

        {/* The engagement models as a quiet index with a strolling highlight. */}
        <Reveal delay={0.3}>
          <ModelsPanel
            heading={home.paths.title[locale]}
            items={home.paths.items.map((item) => ({
              name: item.name[locale],
              forWho: item.forWho[locale],
            }))}
          />
        </Reveal>
      </div>
    </section>
  );
}
