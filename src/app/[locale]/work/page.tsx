import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { Flask } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/i18n/routing";
import { workPage } from "@/content/pages/work";
import { clinicBooking } from "@/content/work/clinic-booking";
import { restaurantOrders } from "@/content/work/restaurant-orders";
import { home } from "@/content/pages/home";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/system/JsonLd";
import { PageHero } from "@/components/system/PageHero";
import { Reveal } from "@/components/system/Reveal";
import { WaCta } from "@/components/system/Button";

type PageProps = { params: Promise<{ locale: Locale }> };

const ITEMS = [clinicBooking, restaurantOrders];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/work",
    title: workPage.meta.title,
    description: workPage.meta.description,
    ogSlug: "work",
  });
}

function ScreenFrame({
  src,
  alt,
  caption,
  width,
  height,
  large = false,
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  large?: boolean;
  priority?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-card border border-line bg-paper shadow-raise">
      <div aria-hidden className="flex items-center gap-1.5 border-b border-line bg-paper-raise px-4 py-3">
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
        <span className="size-2.5 rounded-full bg-line" />
      </div>
      {/* Eager on purpose: these screens ARE the page; a lazy blank frame
          here reads as a broken promise. */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="eager"
        priority={priority}
        sizes={large ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 90vw, 100vw"}
        className="w-full"
      />
      {caption && (
        <figcaption className="border-t border-line bg-paper-raise px-4 py-2.5 text-sm text-ink-soft">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export default async function WorkPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd data={breadcrumbLd(locale, workPage.kicker[locale], "/work")} />
      <PageHero
        locale={locale}
        kicker={workPage.kicker}
        title={workPage.title}
        lead={workPage.growNote}
      />

      {ITEMS.map((item, idx) => {
        const [mainScreen, ...restScreens] = item.screens;
        return (
          <section
            key={item.slug}
            className={idx % 2 === 0 ? "border-y border-line bg-paper-raise" : ""}
          >
            <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
              <Reveal>
                {/* The mandatory honest label, on every single build. */}
                <p className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-sm font-bold text-ink-soft">
                  <Flask className="size-4 text-accent" aria-hidden />
                  {workPage.demoKicker[locale]}
                </p>
                <p className="mt-5 flex items-center gap-2.5 text-sm font-bold tracking-[0.12em] text-accent">
                  <span aria-hidden className="h-px w-6 bg-accent" />
                  {item.businessType[locale]}
                </p>
                <h2 className="text-title mt-3 max-w-[24ch] font-extrabold text-ink text-balance">
                  {item.title[locale]}
                </h2>
                <p className="mt-4 max-w-[56ch] text-lg leading-relaxed text-ink-soft">
                  {item.summary[locale]}
                </p>
              </Reveal>

              <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
                {mainScreen && (
                  <Reveal delay={0.08}>
                    <ScreenFrame
                      src={mainScreen.src}
                      alt={mainScreen.alt[locale]}
                      caption={mainScreen.caption?.[locale]}
                      width={mainScreen.width}
                      height={mainScreen.height}
                      large
                      priority={idx === 0}
                    />
                  </Reveal>
                )}
                <Reveal delay={0.15}>
                  <div className="space-y-8">
                    <div className="border-t-2 border-accent pt-4">
                      <h3 className="text-sm font-bold text-ink-soft">
                        {workPage.case.problem[locale]}
                      </h3>
                      <p className="mt-2 leading-relaxed text-ink">{item.problem[locale]}</p>
                    </div>
                    <div className="border-t-2 border-accent pt-4">
                      <h3 className="text-sm font-bold text-ink-soft">
                        {workPage.case.thinking[locale]}
                      </h3>
                      <p className="mt-2 leading-relaxed text-ink">{item.thinking[locale]}</p>
                    </div>
                    <WaCta
                      prefill={home.hero.prefill[locale]}
                      label={workPage.case.invite[locale]}
                      variant="quiet"
                    />
                  </div>
                </Reveal>
              </div>

              {/* A lone secondary screen spans the full width; pairs share a row. */}
              {restScreens.length > 0 && (
                <div
                  className={
                    restScreens.length > 1 ? "mt-10 grid gap-8 lg:grid-cols-2" : "mt-10"
                  }
                >
                  {restScreens.map((screen, i) => (
                    <Reveal key={screen.src} delay={0.1 + i * 0.08}>
                      <ScreenFrame
                        src={screen.src}
                        alt={screen.alt[locale]}
                        caption={screen.caption?.[locale]}
                        width={screen.width}
                        height={screen.height}
                        large={restScreens.length === 1}
                      />
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
