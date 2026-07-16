"use client";

import { useEffect, useState } from "react";

/**
 * Sticky in-page rail for the six service chapters: scrollspy marks
 * the chapter in view. Desktop only; the page order carries mobile.
 */
export function ServicesRail({
  items,
  ariaLabel,
}: {
  items: { anchor: string; label: string }[];
  ariaLabel: string;
}) {
  const [active, setActive] = useState(items[0]?.anchor ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );
    for (const item of items) {
      const el = document.getElementById(item.anchor);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label={ariaLabel} className="sticky top-24 hidden self-start xl:block">
      <ul className="space-y-1 border-s border-line">
        {items.map((item) => {
          const isActive = active === item.anchor;
          return (
            <li key={item.anchor}>
              <a
                href={`#${item.anchor}`}
                aria-current={isActive ? "true" : undefined}
                className={`-ms-px block border-s-2 py-2 pe-3 ps-4 text-sm font-bold transition-colors ${
                  isActive
                    ? "border-accent text-accent"
                    : "border-transparent text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
