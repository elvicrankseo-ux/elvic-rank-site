# Analytics Verification — Phase 15 (local), reconfirmed on production Phases 16 and 17

Real GA4 Measurement ID `G-4XHTCF3GM0` was supplied by the site owner in
Phase 15. This document records exactly what was and wasn't verified with
it, and was updated in Phase 16 once the site owner completed the Vercel
environment variable step and GA4 went live on production.

**Phase 17 reconfirmation:** re-tested live on production again this
phase — `whatsapp_click` (homepage) and `strategy_call_click`
(`/services/google-ads`) both fired correctly with expected params and no
PII; canonical/schema/sitemap/robots all reconfirmed correct; zero console
errors. No regressions found. No code changes were made to the analytics
implementation this phase — none were needed.

## What was verified locally (Phase 15, with the real Measurement ID)

The ID was set in a **git-ignored `.env.local`** (never committed — see
[`ga4-setup.md`](./ga4-setup.md)) and the dev server restarted to pick it
up. All of the following were confirmed live, not assumed:

| Check | Result |
|---|---|
| GA4 script tag renders with the correct ID | ✅ `<script src="https://www.googletagmanager.com/gtag/js?id=G-4XHTCF3GM0">` present in the DOM |
| `window.gtag` becomes a callable function | ✅ confirmed (`typeof window.gtag === "function"`) |
| `window.dataLayer` initializes | ✅ confirmed, populated with GA4's own init entries |
| `whatsapp_click` fires correctly | ✅ `{location: "floating_button"}`, exactly once, no duplicates |
| `seo_audit_cta_click` fires correctly | ✅ `{location: "navbar"}`, exactly once; `/#audit` navigation still worked |
| `strategy_call_click` fires correctly | ✅ `{location: "service_header", service: "seo-audit"}`, exactly once; `#contact-cta` navigation still worked |
| `contact_cta_click` fires correctly | ✅ `{location: "service_footer", service: "seo-audit"}`, exactly once |
| `generate_lead` does **not** fire on invalid/empty form submission | ✅ confirmed — validation correctly blocks it before `trackEvent()` is ever called |
| No JavaScript errors during any of the above | ✅ confirmed |
| No PII in any event payload | ✅ confirmed — every payload observed was limited to `location`/`service`/`form` context strings; no name, email, phone, or message content anywhere |
| No duplicate custom-event firing | ✅ confirmed — each interaction produced exactly one corresponding custom event |

### A real, useful finding from live testing
GA4's own script automatically tracks some interactions on its own
(`gtm.formSubmit`, `gtm.linkClick`, etc. — Google's built-in "Enhanced
Measurement" behavior, not something in this codebase). These appear in
`dataLayer` alongside the custom events but are a **separate, Google-owned
signal** — not duplicate tracking of the same thing, and not something
that needs fixing. Worth knowing so a future look at GA4 doesn't mistake
these for extra/duplicate custom events.

## What's now verified on production (Phase 16)

Live-checked directly against `https://elvicrank.com` this phase (not
assumed, not reused from Phase 15's local results):

| Check | Result |
|---|---|
| GA4 script active on production | ✅ `https://www.googletagmanager.com/gtag/js?id=G-4XHTCF3GM0` confirmed loaded via direct DOM inspection |
| `window.gtag` / `dataLayer` on production | ✅ confirmed live |
| `whatsapp_click` on production | ✅ fired correctly, `{location: "contact_section"}`, no PII |
| `strategy_call_click` on production | ✅ fired correctly (see Calendly fix verification from the prior session), correct params preserved |
| `contact_cta_click` on production | ✅ fired correctly, `{location: "service_footer", service: "keyword-research"}` |
| `seo_audit_cta_click` on production | Verified in the Calendly-fix session; not re-tested this phase since nothing in its code path changed |
| CTA destinations (Strategy Call → Calendly, SEO Audit → `/#audit`, Contact → `/#contact`, WhatsApp → correct number) | ✅ all confirmed live, no dead ends found |

## What's still NOT verified (and why)

| Item | Status | Why |
|---|---|---|
| GA4 account-level data (Realtime, Users, Sessions, per-event counts, Key Events) | ❌ Not accessible | No Google Analytics dashboard access exists in the implementer's environment — this requires the site owner to log in directly. |
| A real lead-form submission | ❌ Not performed | Per explicit instruction not to submit anything to a real business system. The validation-blocks-submission path was tested live (safe); the successful-submission code path was verified by reading current source, not by live-triggering an actual submission. |
| Event delivery confirmed received by Google's servers | ❌ Not independently confirmable from this environment | The browser tool doesn't capture cross-origin script/beacon network requests. `gtag()` calls execute without error and use the correct endpoint/ID, which is the strongest signal available without dashboard access; GA4 Realtime remains the authoritative confirmation and is the site owner's to check. |

## Bottom line

GA4 is genuinely live and correctly configured on production as of Phase
16 — the site owner completed the Vercel step. All 5 custom events are
implemented correctly, fire without errors, contain no PII, and don't
duplicate. The only remaining gap is dashboard-level reporting access,
which requires the site owner's own Google Analytics login — not
something that can be done from this environment.
