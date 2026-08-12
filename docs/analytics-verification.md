# Analytics Verification — Phase 15

Real GA4 Measurement ID `G-4XHTCF3GM0` was supplied by the site owner this
phase. This document records exactly what was and wasn't verified with it.

## What was verified (locally, with the real Measurement ID)

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

## What was NOT verified (and why)

| Item | Status | Why |
|---|---|---|
| GA4 active on **production** (`https://elvicrank.com`) | ❌ Not active | The Vercel production environment variable was never set — see [`ga4-setup.md`](./ga4-setup.md#4-add-the-environment-variable-to-vercel--️-action-required). Confirmed via direct fetch: no `googletagmanager.com` script present on the live homepage as of this phase. |
| GA4 Realtime report showing a live visit | ❌ Not verified | Requires logging into the Google Analytics dashboard, which the implementer has no account access to, and is moot anyway until production is actually sending data (see above). |
| A real lead-form submission | ❌ Not performed | Per your explicit instruction not to submit anything to a real business system. Only the validation-blocks-submission path was tested live (safe — it never reaches the `mailto:` redirect); the successful-submission code path (`trackEvent("generate_lead", ...)` firing after validation passes, before the `window.location.href` mailto redirect) was verified by static code reading in Phase 13 and re-confirmed by reading the current source this phase, not by live-triggering an actual submission. |
| Event delivery to Google's servers | ❌ Not independently confirmed | The browser tool used for this verification doesn't capture cross-origin `<script>`/beacon network requests, only same-origin ones — so while the script loads and `gtag()` calls execute locally without error, I can't independently confirm from here that Google's servers received them. This is standard behavior for a correctly-configured `gtag.js` integration, but "GA4 Realtime shows the visit" (once production is live) remains the strongest independent confirmation, and that step is still pending. |

## Bottom line

The analytics implementation itself is verified correct and working with
the real Measurement ID. **It is not yet active in production** because
setting the Vercel environment variable requires dashboard access outside
what's available in this session — see [`ga4-setup.md`](./ga4-setup.md)
for the exact manual step required to finish activation.
