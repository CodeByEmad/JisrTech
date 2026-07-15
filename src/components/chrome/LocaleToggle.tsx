"use client";

import { useParams } from "next/navigation";
import { Link, usePathname } from "@/i18n/navigation";
import { site } from "@/content/site";
import type { Locale } from "@/i18n/routing";

/** Shows the TARGET language's own name, per the content spec (§8). */
export function LocaleToggle({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const params = useParams();
  const locale = (params.locale as Locale) ?? "ar";
  const target: Locale = locale === "ar" ? "en" : "ar";

  return (
    <Link
      href={pathname}
      locale={target}
      aria-label={site.a11y.localeSwitch[locale]}
      className={`rounded-full px-3.5 py-2 text-sm font-bold text-ink-soft transition-colors hover:text-ink ${className}`}
    >
      {target === "ar" ? "العربية" : "English"}
    </Link>
  );
}
