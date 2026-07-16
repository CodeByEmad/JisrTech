"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { Link, usePathname } from "@/i18n/navigation";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/routing";
import { LocaleToggle } from "./LocaleToggle";

export function MobileMenu({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? site.menu.close[locale] : site.menu.open[locale]}
        onClick={() => setOpen((v) => !v)}
        className="flex size-11 items-center justify-center rounded-full text-ink"
      >
        {open ? <X className="size-6" /> : <List className="size-6" />}
      </button>

      <AnimatePresence>
      {open && (
        <motion.nav
          initial={reduce ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          aria-label={site.menu.ariaLabel[locale]}
          className="fixed inset-x-0 top-17 z-50 border-b border-line bg-paper-raise px-6 pb-8 pt-2 shadow-raise"
        >
          <ul className="divide-y divide-line">
            {site.nav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block py-4 text-lg font-bold ${active ? "text-accent" : "text-ink"}`}
                  >
                    {item.label[locale]}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 flex items-center justify-between gap-4">
            <Link
              href={site.cta.href}
              onClick={() => setOpen(false)}
              className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-[0.95rem] font-bold text-paper-raise"
            >
              {site.cta.label[locale]}
            </Link>
            <LocaleToggle />
          </div>
        </motion.nav>
      )}
      </AnimatePresence>
    </div>
  );
}
