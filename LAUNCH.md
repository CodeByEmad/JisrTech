# Launch Runbook — Jisr Tech

Every step below is click-by-click. Total hands-on time: about one hour,
spread across two sessions (today, and after the domain).

## Session 1 — Go live today (no domain needed), ~15 min

1. **Create a Netlify account** at netlify.com (sign in with the
   CodeByEmad GitHub account).
2. **Add new site → Import an existing project → GitHub →** pick
   `CodeByEmad/JisrTech`. Netlify reads `netlify.toml` automatically;
   accept the defaults and click **Deploy**.
3. After the first build finishes you have a live URL like
   `jisrtech.netlify.app`. The whole site works there: WhatsApp CTAs,
   both languages, everything except email delivery.
4. **Site configuration → Environment variables** — add now or in
   Session 2:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL` (after the domain is verified in Resend)
   - `NEXT_PUBLIC_SITE_URL` (the live URL; switch to
     `https://jisrtech.sa` in Session 2)
5. **Enable analytics**: Site configuration → Analytics → enable
   Netlify Analytics (server-side, cookieless — exactly what the
   privacy page promises).

## Session 2 — The real domain, ~45 min (mostly DNS waiting)

6. **Buy `jisrtech.sa`** (requires Saudi CR; registrars: nic.sa
   accredited list, e.g. Saudi NIC partners).
7. In Netlify: **Domain management → Add a domain →** `jisrtech.sa`.
   Netlify shows the DNS records to set at the registrar. TLS is
   automatic once DNS propagates.
8. Update `NEXT_PUBLIC_SITE_URL=https://jisrtech.sa` and redeploy
   (Deploys → Trigger deploy). This fixes the canonical URL, sitemap,
   and OG links — the last Lighthouse SEO point.
9. **Create the inbox** (Google Workspace or Microsoft 365 on the
   domain, or the registrar's mail) — e.g. `contact@jisrtech.sa`.
10. **Resend** (resend.com, free tier):
    - Domains → Add `jisrtech.sa` → add the two DNS records it shows.
    - API Keys → Create → paste into `RESEND_API_KEY` on Netlify.
    - Set `CONTACT_TO_EMAIL=contact@jisrtech.sa` and
      `CONTACT_FROM_EMAIL=Jisr Tech <site@jisrtech.sa>`.
    - Redeploy. Send a test through the site's contact form.

## When they arrive (no urgency)

- **Maroof / CR number** → add to the facts strip in
  `content/site.ts` (see the `maroofUrl` comment there) and it will
  render automatically.
- **First real client project** → publish the Work section
  (content and layouts already exist, unpublished by policy).
- Optional: a native Arabic reader's 30-minute skim of the live site.

## Verifying after launch

- `curl -I https://jisrtech.sa/ar` → expect the security headers.
- Google Search Console → add the domain, submit
  `https://jisrtech.sa/sitemap.xml`.
- Share a page link in WhatsApp → the per-page OG card should preview.
