import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { legalPage } from "@/content/pages/legal";
import { buildMetadata } from "@/lib/seo";

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
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-16 sm:px-8 sm:pb-32 sm:pt-24">
      <h1 className="text-display font-extrabold text-ink">{legalPage.title[locale]}</h1>
      <p className="mt-4 text-sm font-bold text-ink-soft">{legalPage.updated[locale]}</p>
      <div className="mt-12 space-y-10">
        {legalPage.sections.map((section) => (
          <section key={section.heading.en}>
            <h2 className="text-heading font-extrabold text-ink">
              {section.heading[locale]}
            </h2>
            <p className="mt-3 max-w-[68ch] leading-relaxed text-ink-soft">
              {section.body[locale]}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
