"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUp } from "@phosphor-icons/react";
import type { Locale } from "@/i18n/routing";

/**
 * Back-to-top: appears after two screens of scrolling, on the start
 * side (the WhatsApp button owns the end side). Smooth scroll is
 * handled by the html rule, which already respects reduced motion.
 */
export function BackToTop({ locale }: { locale: Locale }) {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 1_600));

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0 })}
          aria-label={locale === "ar" ? "العودة إلى أعلى الصفحة" : "Back to top"}
          className="fixed bottom-6 start-6 z-40 flex size-11 items-center justify-center rounded-full border border-line bg-paper-raise/90 text-ink shadow-raise backdrop-blur-md transition-colors hover:border-accent/40 hover:text-accent"
        >
          <ArrowUp weight="bold" className="size-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
