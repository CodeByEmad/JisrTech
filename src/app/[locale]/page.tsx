import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { home } from "@/content/pages/home";
import { buildMetadata } from "@/lib/seo";
import { faqLd, professionalServiceLd } from "@/lib/structured-data";
import { JsonLd } from "@/components/system/JsonLd";
import { HeroScene } from "@/components/home/HeroScene";
import { TechStrip } from "@/components/home/TechStrip";
import { ServicesScene } from "@/components/home/ServicesScene";
import { ModelsScene } from "@/components/home/ModelsScene";
import { WhyScene } from "@/components/home/WhyScene";
import { ProcessScene } from "@/components/home/ProcessScene";
import { FaqScene } from "@/components/home/FaqScene";
import { FactsScene } from "@/components/home/FactsScene";
import { InviteScene } from "@/components/home/InviteScene";

type PageProps = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "",
    title: home.meta.title,
    description: home.meta.description,
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd data={professionalServiceLd(locale)} />
      <JsonLd data={faqLd(locale)} />
      <HeroScene locale={locale} />
      <TechStrip locale={locale} />
      <ServicesScene locale={locale} />
      <WhyScene locale={locale} />
      <ProcessScene locale={locale} />
      <FactsScene locale={locale} />
      <ModelsScene locale={locale} />
      <FaqScene locale={locale} />
      <InviteScene locale={locale} />
    </>
  );
}
