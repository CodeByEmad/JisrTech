import Image from "next/image";
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
 * The opening statement: the brand key visual (the fiber-optic
 * crossing, generated in-house) carries the claim. Split layout in
 * the reference register, night surface, glass models panel.
 */
export function HeroScene({ locale }: { locale: Locale }) {
  return (
    <section className="relative isolate overflow-hidden bg-night text-night-text">
      <Image
        src="/images/jisr-bridge.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Scrim: darkest where the words live, open where the light is. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-b from-night/80 via-night/45 to-night/75"
      />
      <div aria-hidden className="sheen" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 pt-20 sm:px-8 sm:pt-24 lg:min-h-[88dvh] lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:pb-28">
        <div>
          <Reveal>
            <p className="flex items-center gap-2.5 text-sm font-bold tracking-[0.12em] text-accent-bright">
              <span aria-hidden className="h-px w-6 bg-accent-bright" />
              {site.tagline[locale]}
            </p>
          </Reveal>
          <div className="mt-5">
            <HeroClaim
              dark
              className="lg:text-[3.4rem]"
              pre={home.hero.claimPre[locale]}
              accent={home.hero.claimAccent[locale]}
              post={home.hero.claimPost[locale]}
              joinPost={locale === "en"}
            />
          </div>
          <Reveal delay={0.4}>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-night-text/90">
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
                  className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-accent-bright px-7 py-3.5 text-[0.95rem] font-bold text-night shadow-lg shadow-accent-bright/25 transition-[background-color,box-shadow] duration-300 hover:bg-white hover:shadow-accent-bright/40 active:scale-[0.98]"
                >
                  <WhatsappLogo weight="fill" className="size-5" aria-hidden />
                  {site.cta.label[locale]}
                </a>
              </Magnetic>
              <Magnetic>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-[0.95rem] font-bold text-white backdrop-blur-md transition-colors duration-300 hover:border-white/60 active:scale-[0.98]"
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

        {/* The engagement models as a glass index with a strolling highlight. */}
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
