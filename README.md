# Jisr Tech — جسر تك

Official website of [Jisr Tech](https://jisrtech.sa), a software studio in Al Khobar, Saudi Arabia. Bilingual by design: Arabic (`/ar`, default) and English (`/en`), both written natively.

## Stack

- **Next.js 15** (App Router, static generation) + **TypeScript**
- **next-intl** — locale routing, Arabic as default and `x-default`
- **Tailwind CSS 4** — semantic design tokens, logical properties for full RTL mirroring
- **Motion** — reveal choreography, magnetic CTAs, reduced-motion safe
- **Resend + Zod** — contact form delivery (honeypot + time-trap hardened)

## Development

```bash
npm install
npm run dev        # http://localhost:3002
npm run checks     # typecheck + lint
npm run build      # production build (16 static pages)
```

## Architecture notes

- **All copy lives in `content/`** as typed bilingual objects validated by Zod at build time. Components never contain words.
- **One conversion path**: every CTA opens WhatsApp with a contextual prefill (`src/lib/whatsapp.ts`). The contact form is the formal channel for organizations.
- **Honesty is structural**: no invented clients, numbers, or testimonials anywhere; demonstration content stays unpublished until real client work exists.
- Design tokens in `src/styles/globals.css` (`@theme`): violet accent `#6023c0`, night indigo `#14102b`, per-locale font stacks (Bricolage Grotesque / Almarai).

## Launch checklist (pending founder input)

1. Production inbox + `RESEND_API_KEY` (see `.env.example`)
2. `NEXT_PUBLIC_SITE_URL=https://jisrtech.sa` once the domain is connected
3. Maroof / CR number → facts strip + JSON-LD `sameAs`
4. Native-Arabic review pass of all copy
