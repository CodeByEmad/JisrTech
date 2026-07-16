import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { legalPage } from "@/content/pages/legal";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/system/PageHero";
import { Reveal } from "@/components/system/Reveal";

type PageProps = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/privacy",
    title: legalPage.meta.title,
    description: legalPage.meta.description,
  });
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <PageHero locale={locale} kicker={legalPage.updated} title={legalPage.title} />
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-4 sm:px-8 sm:pb-28">
        <Reveal>
          <div className="max-w-[68ch] space-y-10">
            {legalPage.sections.map((section) => (
              <section key={section.heading.en} className="border-t border-line pt-6">
                <h2 className="text-heading font-extrabold text-ink">
                  {section.heading[locale]}
                </h2>
                <p className="mt-3 leading-relaxed text-ink-soft">{section.body[locale]}</p>
              </section>
            ))}
          </div>
        </Reveal>
      </div>
    </>
  );
}
