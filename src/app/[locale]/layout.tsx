import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Almarai, Bricolage_Grotesque } from "next/font/google";
import { routing, dirFor, type Locale } from "@/i18n/routing";
import { site } from "@/content/site";
import { home } from "@/content/pages/home";
import { SITE_URL } from "@/lib/seo";
import { whatsAppUrl } from "@/lib/whatsapp";
import { Nav } from "@/components/chrome/Nav";
import { Footer } from "@/components/chrome/Footer";
import { ScrollProgress } from "@/components/system/ScrollProgress";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import "@/styles/globals.css";

const latin = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-latin",
  display: "swap",
});

const arabic = Almarai({
  subsets: ["arabic"],
  weight: ["400", "700", "800"],
  variable: "--font-arabic",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Jisr Tech, جسر تك",
  description: "Bridging businesses to the digital world.",
};

export const viewport = {
  themeColor: "#6023c0",
};

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const l = locale as Locale;

  return (
    <html lang={locale} dir={dirFor(l)} className={`${latin.variable} ${arabic.variable}`}>
      <body>
        <NextIntlClientProvider>
          <a
            href="#main"
            className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:start-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-full focus-visible:bg-accent focus-visible:px-5 focus-visible:py-2.5 focus-visible:text-sm focus-visible:font-bold focus-visible:text-paper-raise"
          >
            {site.a11y.skipToContent[l]}
          </a>
          <ScrollProgress />
          <Nav locale={l} />
          <main id="main">{children}</main>
          <Footer locale={l} />
          {/* Floating channel button: the one place WhatsApp wears its own green. */}
          <a
            href={whatsAppUrl(home.hero.prefill[l])}
            target="_blank"
            rel="noopener"
            aria-label="WhatsApp"
            className="fixed bottom-6 end-6 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-raise transition-transform duration-300 hover:scale-108 motion-reduce:hover:scale-100"
          >
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-whatsapp/40 motion-safe:animate-ping [animation-duration:2.5s]"
            />
            <WhatsappLogo weight="fill" className="relative size-7" />
          </a>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
