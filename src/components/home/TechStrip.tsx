import type { Locale } from "@/i18n/routing";
import { home } from "@/content/pages/home";
import { Reveal } from "@/components/system/Reveal";

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

/**
 * The honest counterpart of a "trusted by" row: no client logos exist
 * yet by policy, so the strip under the hero carries the real tools.
 */
export function TechStrip({ locale }: { locale: Locale }) {
  return (
    <section className="border-y border-line bg-paper-raise">
      <Reveal>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 py-7 sm:px-8">
          <span className="text-sm font-bold text-ink-soft">
            {home.services.techLabel[locale]}
          </span>
          <ul className="flex flex-wrap items-center justify-center gap-x-9 gap-y-4">
            {home.services.tech.map((tech) => {
              const logo = TECH_LOGOS[tech];
              return (
                <li key={tech} dir="ltr" className="flex items-center gap-2.5">
                  {logo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={logo}
                      alt=""
                      className="h-5.5 w-auto opacity-60 grayscale transition-[opacity,filter] duration-300 hover:opacity-100 hover:grayscale-0"
                    />
                  )}
                  <span className="text-sm font-bold text-ink-soft">{tech}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
