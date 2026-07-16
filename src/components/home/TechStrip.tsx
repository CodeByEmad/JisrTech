import type { Locale } from "@/i18n/routing";
import { home } from "@/content/pages/home";

/** Brand marks for the tech strip (svgl.app via 21st.dev, self-hosted for CSP). */
const TECH_LOGOS: Record<string, string> = {
  "Next.js": "/logos/nextjs.svg",
  React: "/logos/react.svg",
  "Node.js": "/logos/nodejs.svg",
  Swift: "/logos/swift.svg",
  Kotlin: "/logos/kotlin.svg",
  PostgreSQL: "/logos/postgresql.svg",
  "WhatsApp Business API": "/logos/whatsapp.svg",
};

function TechItems({ hidden = false }: { hidden?: boolean }) {
  return (
    <>
      {home.services.tech.map((tech) => {
        const logo = TECH_LOGOS[tech];
        return (
          <li
            key={`${tech}${hidden ? "-dup" : ""}`}
            dir="ltr"
            aria-hidden={hidden || undefined}
            className="flex shrink-0 items-center gap-2.5"
          >
            {logo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logo}
                alt=""
                width={22}
                height={22}
                className="h-5.5 w-auto opacity-60 grayscale transition-[opacity,filter] duration-300 hover:opacity-100 hover:grayscale-0"
              />
            )}
            <span className="text-sm font-bold text-ink-soft">{tech}</span>
          </li>
        );
      })}
    </>
  );
}

/**
 * The honest counterpart of a "trusted by" row: no client logos exist
 * yet by policy, so the strip under the hero carries the real tools,
 * in a slow marquee (paused on hover, static under reduced motion).
 */
export function TechStrip({ locale }: { locale: Locale }) {
  return (
    <section className="border-y border-line bg-paper-raise">
      <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
        <p className="text-center text-sm font-bold text-ink-soft">
          {home.services.techLabel[locale]}
        </p>
        <div dir="ltr" className="marquee-mask mt-4 overflow-hidden">
          <ul className="marquee-track flex w-max gap-12 pe-12">
            <TechItems />
            <TechItems hidden />
          </ul>
        </div>
      </div>
    </section>
  );
}
