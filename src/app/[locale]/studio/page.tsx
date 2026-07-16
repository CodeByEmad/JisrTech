import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { studioPage } from "@/content/pages/studio";
import { processStages, deliverableLabel } from "@/content/process";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { orderDigits } from "@/lib/digits";
import { PageHero } from "@/components/system/PageHero";
import { Reveal } from "@/components/system/Reveal";
import { SectionHeader } from "@/components/system/SectionHeader";

type PageProps = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/studio",
    title: studioPage.meta.title,
    description: studioPage.meta.description,
  });
}

export default async function StudioPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <PageHero locale={locale} kicker={studioPage.kicker} title={studioPage.title} />

      {/* Narrative: the first paragraph reads large, the identity claim. */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <div className="max-w-[62ch]">
            {studioPage.narrative.map((paragraph, i) =>
              i === 0 ? (
                <p key={paragraph.en} className="text-heading font-bold leading-relaxed text-ink">
                  {paragraph[locale]}
                </p>
              ) : (
                <p key={paragraph.en} className="mt-6 text-lg leading-relaxed text-ink-soft">
                  {paragraph[locale]}
                </p>
              ),
            )}
          </div>
        </Reveal>
      </section>

      {/* Process with deliverables, numbered list in the reference register. */}
      <section className="border-t border-line bg-paper-raise">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <SectionHeader
              locale={locale}
              align="start"
              kicker={studioPage.processKicker}
              title={studioPage.processTitle}
              lead={studioPage.processNote}
            />
          </Reveal>

          <ol className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
            {processStages.map((stage, i) => (
              <li key={stage.name.en}>
                <Reveal
                  delay={(i % 2) * 0.08}
                  className="flex h-full items-start gap-5 border-t border-line pt-6"
                >
                  <span className="text-3xl font-extrabold leading-none text-accent/30">
                    {orderDigits(i + 1, locale)}
                  </span>
                  <div>
                    <h3 className="text-heading font-extrabold text-ink">
                      {stage.name[locale]}
                    </h3>
                    <p className="mt-2 max-w-[48ch] text-[0.95rem] leading-relaxed text-ink-soft">
                      {stage.detail[locale]}
                    </p>
                    <p className="mt-3 text-[0.95rem]">
                      <span className="font-bold text-ink-soft">{deliverableLabel[locale]}:</span>{" "}
                      <span className="font-bold text-accent-deep">
                        {stage.deliverable[locale]}
                      </span>
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* At a glance: the violet band, same as home. */}
      <section className="relative isolate overflow-hidden bg-night">
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(120deg,rgb(96_35_192/0.55),rgb(20_16_43/0.2)_55%,rgb(167_139_250/0.35))]"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal>
            <h2 className="text-heading font-extrabold text-white">
              {studioPage.factsTitle[locale]}
            </h2>
            <dl className="mt-7 grid gap-5 md:grid-cols-3">
              {site.facts.map((fact) => (
                <div
                  key={fact.label.en}
                  className="rounded-card border border-white/15 bg-white/10 p-6 backdrop-blur-md"
                >
                  <dt className="text-sm font-bold text-white/70">{fact.label[locale]}</dt>
                  <dd className="mt-2 font-extrabold leading-snug text-white">
                    {fact.value[locale]}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>
    </>
  );
}
