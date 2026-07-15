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
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
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

      {/* Process, with deliverables: what the client holds at each stage. */}
      <section className="border-t border-line bg-paper-raise">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
          <Reveal>
            <h2 className="text-title max-w-[20ch] font-extrabold text-ink">
              {studioPage.processTitle[locale]}
            </h2>
            <p className="mt-4 max-w-[58ch] text-lg leading-relaxed text-ink-soft">
              {studioPage.processNote[locale]}
            </p>
          </Reveal>

          <ol className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2">
            {processStages.map((stage, i) => (
              <li key={stage.name.en} className="h-full">
                <Reveal
                  delay={(i % 2) * 0.08}
                  className="flex h-full flex-col rounded-card border border-line bg-paper p-7"
                >
                  <span className="text-sm font-bold text-accent">
                    {orderDigits(i + 1, locale)}
                  </span>
                  <h3 className="mt-1.5 text-heading font-extrabold text-ink">
                    {stage.name[locale]}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{stage.detail[locale]}</p>
                  <div className="mt-5 flex-1" />
                  <p className="border-t border-line pt-4 text-[0.95rem]">
                    <span className="font-bold text-ink-soft">
                      {deliverableLabel[locale]}:
                    </span>{" "}
                    <span className="font-bold text-ink">{stage.deliverable[locale]}</span>
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* At a glance: the same verifiable facts, nothing invented. */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <h2 className="text-heading font-extrabold text-ink">
            {studioPage.factsTitle[locale]}
          </h2>
          <dl className="mt-8 grid gap-8 md:grid-cols-3">
            {site.facts.map((fact) => (
              <div key={fact.label.en} className="border-t-2 border-accent pt-4">
                <dt className="text-sm font-bold text-ink-soft">{fact.label[locale]}</dt>
                <dd className="mt-1.5 font-bold leading-snug text-ink">{fact.value[locale]}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>
    </>
  );
}
