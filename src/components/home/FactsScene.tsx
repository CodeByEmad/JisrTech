import type { Locale } from "@/i18n/routing";
import { home } from "@/content/pages/home";
import { site } from "@/content/site";
import { Reveal } from "@/components/system/Reveal";

/**
 * The verifiable-only trust band on a violet gradient (reference:
 * mindstack's dark band), three glass cards. Maroof joins when the
 * real profile URL exists.
 */
export function FactsScene({ locale }: { locale: Locale }) {
  return (
    <section
      aria-label={home.facts.srTitle[locale]}
      className="relative isolate overflow-hidden bg-night"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(120deg,rgb(96_35_192/0.55),rgb(20_16_43/0.2)_55%,rgb(167_139_250/0.35))]"
      />
      <Reveal>
        <dl className="relative mx-auto grid max-w-6xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-3">
          {site.facts.map((fact) => (
            <div
              key={fact.label.en}
              className="rounded-card border border-white/15 bg-white/10 p-6 backdrop-blur-md"
            >
              <dt className="text-sm font-bold text-white/70">{fact.label[locale]}</dt>
              <dd className="mt-2 font-extrabold leading-snug text-white">
                {fact.href ? (
                  <a href={fact.href} target="_blank" rel="noopener" className="hover:underline">
                    {fact.value[locale]}
                  </a>
                ) : (
                  fact.value[locale]
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
