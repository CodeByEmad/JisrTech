import type { Locale } from "@/i18n/routing";
import { studioPage } from "@/content/pages/studio";
import { home } from "@/content/pages/home";
import { site } from "@/content/site";
import { Reveal } from "@/components/system/Reveal";
import { Aurora } from "@/components/system/Aurora";

/**
 * The manifesto band: the founder's honesty statement in large type
 * on the night surface, the verifiable facts beneath it. The single
 * source is the Studio narrative; established companies repeat their
 * one true sentence.
 */
export function ManifestoScene({ locale }: { locale: Locale }) {
  const manifesto = studioPage.narrative[studioPage.narrative.length - 1];
  if (!manifesto) return null;

  return (
    <section
      aria-label={home.facts.srTitle[locale]}
      className="relative isolate overflow-hidden bg-night"
    >
      <Aurora dim />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-20 end-[-4%] select-none text-[20rem] font-extrabold leading-none text-white/[0.03]"
      >
        {site.wordmark.arabic}
      </span>

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
        <Reveal>
          <p className="max-w-[34ch] text-heading font-extrabold leading-relaxed text-white text-balance sm:text-[1.85rem]">
            {manifesto[locale]}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {site.facts.map((fact, i) => (
            <Reveal key={fact.label.en} delay={0.15 + i * 0.09} className="h-full">
              <div className="h-full rounded-card border border-white/15 bg-white/10 p-6 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
                <span className="block text-sm font-bold text-white/70">
                  {fact.label[locale]}
                </span>
                <span className="mt-2 block font-extrabold leading-snug text-white">
                  {fact.href ? (
                    <a href={fact.href} target="_blank" rel="noopener" className="hover:underline">
                      {fact.value[locale]}
                    </a>
                  ) : (
                    fact.value[locale]
                  )}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
