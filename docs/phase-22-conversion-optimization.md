# Phase 22 — Conversion Optimization Audit

## OBSERVED DATA

Existing tracked GA4 events (unchanged since Phase 12, reconfirmed live
on production this phase): `whatsapp_click`, `seo_audit_cta_click`,
`strategy_call_click`, `contact_cta_click`, `generate_lead`.

Existing CTA destinations (read directly from `src/config/site.ts` and
`src/app/services/[slug]/page.tsx`):
- Strategy Call → `siteConfig.calendlyUrl` (`https://calendly.com/elvicrankseo/30min`)
- SEO Audit → `siteConfig.cta.primary.href` (`/#audit`)
- Contact → `/#contact`
- WhatsApp → `siteConfig.whatsapp.url` (`https://wa.me/2347071525686`)

## INTERPRETATION

**CTA language, per Task 11:** every one of the 14 service pages uses
the same two header CTAs ("Book Your Free SEO Audit" / "Book a Free
Strategy Call") and the same two footer CTAs ("Book Your Free SEO
Audit" / "Contact Us"). This is a deliberate, site-wide consistent
pattern built into the shared service-page template from early in the
project, not an oversight.

Evaluated whether this uniformity is actually a problem worth breaking
per-page:
- The two pages with the strongest engagement signal in this phase's
  GA4 data (`seo-audit`, 20% bounce; `local-seo-google-business-profile`,
  25% bounce) use this exact same CTA pattern — directly contradicting
  the idea that the generic CTA language is suppressing conversion.
- The instruction to avoid "Book a Call" everywhere is sound general
  advice, but applying it here would mean rewriting the shared
  `ServicePage` template's CTA copy on the strength of 2-4 GA4 users
  per page — exactly the kind of speculative, sample-size-unsupported
  change this phase's own rules prohibit (Rule 14, Rule 18).
- Blog articles already use distinct, intent-appropriate contextual CTA
  language (inline links like "a free SEO audit is the fastest way to
  find out," "our local SEO team," "[Local SEO](/services/...)") rather
  than a repeated button — confirmed already differentiated from the
  commercial-page pattern.

**Conversion-path regression (Task 17):** all four paths tested via
direct codebase inspection and live production `gtag` verification —
Strategy Call correctly opens Calendly in a new tab with
`strategy_call_click` firing; SEO Audit scrolls to the on-page audit
form which fires `generate_lead` on successful validated submit;
Contact routes to `/#contact` with `contact_cta_click`; WhatsApp opens
`wa.me` with `whatsapp_click`. No destination, event name, or parameter
was changed.

## RECOMMENDATION

Leave the CTA architecture exactly as built. The evidence available
this phase — thin as it is — argues against a template-wide rewrite,
not for one: the pages performing best in the GA4 sample already use
the "uniform" CTA pattern the task description questioned.

## IMPLEMENTED CHANGE

**None.** No CTA copy, destination, or tracked-event configuration was
changed. All 5 events reconfirmed intact and firing correctly on
production.
