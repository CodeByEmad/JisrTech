"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Link, usePathname } from "@/i18n/navigation";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/routing";
import { Wordmark } from "./Wordmark";
import { LocaleToggle } from "./LocaleToggle";
import { MobileMenu } from "./MobileMenu";

/**
 * Glass nav: floats weightless at the top of the page, gains its
 * hairline and shadow only once the page moves underneath it.
 */
export function Nav({ locale }: { locale: Locale }) {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12));

  return (
    <motion.header
      className={`sticky top-0 z-50 backdrop-blur-lg transition-[box-shadow,border-color,background-color] duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-paper/95 shadow-raise"
          : "border-b border-transparent bg-paper/80"
      }`}
    >
      <div className="mx-auto flex h-17 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" aria-label="Jisr Tech" className="shrink-0">
          <Wordmark locale={locale} />
        </Link>

        <nav
          aria-label={site.menu.ariaLabel[locale]}
          className="hidden items-center gap-1 md:flex"
        >
          {site.nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-[0.95rem] font-bold transition-colors ${
                  active ? "bg-accent-tint text-accent-deep" : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label[locale]}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LocaleToggle />
          <Link
            href={site.cta.href}
            className="inline-flex items-center whitespace-nowrap rounded-full bg-accent px-6 py-2.5 text-[0.9rem] font-bold text-paper-raise transition-colors hover:bg-accent-deep"
          >
            {site.cta.label[locale]}
          </Link>
        </div>

        <MobileMenu locale={locale} />
      </div>
    </motion.header>
  );
}
