# GA4 Setup

GA4 tracking code already exists in this codebase
([`src/components/analytics/google-analytics.tsx`](../src/components/analytics/google-analytics.tsx)
+ [`src/lib/analytics.ts`](../src/lib/analytics.ts)). No placeholder or fake
Measurement ID is hard-coded anywhere in the repository — it's read
exclusively from `NEXT_PUBLIC_GA_MEASUREMENT_ID` at build time.

**Status as of Phase 17:** Unchanged from Phase 16, reconfirmed live again
this phase — script, Measurement ID, `gtag`, and 4 of 5 events re-tested
directly on production (`/`, `/services/google-ads`). The site owner did
supply a GA4 **realtime** screenshot this phase (2-4 active users, 11 page
views — see [`seo-baseline.md`](./seo-baseline.md#ga4--phase-17-data-realtime-observation-only-not-a-28-day-baseline)),
which confirms real events are reaching GA4, but dashboard-level reporting
(Users, Sessions, Realtime, Key Events config) is still not something this
environment can access directly — steps 6–8 remain the site owner's to do.

**Status as of Phase 16:**
- ✅ Steps 1–5 all done. The site owner completed the Vercel environment
  variable step between Phases 15 and 16. Verified live on production this
  phase (not assumed): `https://elvicrank.com` loads
  `https://www.googletagmanager.com/gtag/js?id=G-4XHTCF3GM0`, `window.gtag`
  is a live function, and `dataLayer` is populated.
- ✅ All 5 custom events reconfirmed firing correctly **on production**
  this phase (not just locally): `whatsapp_click`, `strategy_call_click`,
  `seo_audit_cta_click`, `contact_cta_click` all tested live with correct
  params and no PII. `generate_lead` reconfirmed via code inspection only
  (its trigger path is a real form submission — see
  [`analytics-verification.md`](./analytics-verification.md) for why that
  isn't live-tested).
- ❓ **GA4 account-level data (Realtime, Users, Sessions, event counts,
  etc.) was not accessible this phase** — no Google Analytics dashboard
  access exists in the implementer's environment. Steps 6–8 below still
  require the site owner to check the actual GA4 dashboard.

## 1–5. Property, stream, Measurement ID, environment variable, deploy
All complete. Measurement ID is `G-4XHTCF3GM0`, live in production.

## 6. Open GA4 Realtime

In GA4: Reports → Realtime. Open `https://elvicrank.com` in a separate
browser tab and confirm a user shows up within a few seconds.

## 7. Test events

While Realtime is open, click through the site and confirm each of the 5
events listed in [`analytics-events.md`](./analytics-events.md) appears in
the Realtime event list: `whatsapp_click`, `generate_lead`,
`strategy_call_click`, `seo_audit_cta_click`, `contact_cta_click`.

## 8. Confirm conversions

Once events are confirmed firing, mark the ones that represent real business
outcomes as GA4 **Key Events** (Admin → Events → toggle "Mark as key event"):
`generate_lead` and `whatsapp_click` are the two genuine conversion signals
per [`analytics-events.md`](./analytics-events.md); the other three are
engagement signals, not conversions, and don't need to be marked.

---

**GA4 is now live and collecting on production as of Phase 16.** What
remains outstanding is account-level reporting access (Realtime, Users,
Sessions, per-event counts) — see
[`seo-baseline.md`](./seo-baseline.md) for what "Awaiting data" still means
in practice, and [`analytics-verification.md`](./analytics-verification.md)
for the exact, current verified/not-verified breakdown.
