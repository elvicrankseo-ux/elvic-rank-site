# GA4 Setup

GA4 tracking code already exists in this codebase
([`src/components/analytics/google-analytics.tsx`](../src/components/analytics/google-analytics.tsx)
+ [`src/lib/analytics.ts`](../src/lib/analytics.ts)). No placeholder or fake
Measurement ID is hard-coded anywhere in the repository — it's read
exclusively from `NEXT_PUBLIC_GA_MEASUREMENT_ID` at build time.

**Status as of Phase 15:**
- ✅ Steps 1–3 done — the GA4 property, Web data stream, and Measurement ID
  (`G-4XHTCF3GM0`) already exist and were supplied by the site owner.
- ✅ Implementation verified working end-to-end **locally**, using that real
  ID in a git-ignored `.env.local` (never committed) — see
  [`analytics-verification.md`](./analytics-verification.md) for the full
  test results: the script loads with the correct ID, `window.gtag`
  activates, and all 5 events fire correctly with no PII and no duplicates.
- ❌ **Step 4 (setting the production environment variable on Vercel) is
  not done.** This requires the Vercel dashboard, which the implementer has
  no credentials or access to — see the note below.
- ❌ Step 5 (redeploy) and everything after it is blocked on step 4.

## 1–3. Property, stream, Measurement ID
Already complete — Measurement ID is `G-4XHTCF3GM0`.

## 4. Add the environment variable to Vercel — ⚠️ action required

**This step could not be completed by the implementer — it requires Vercel
dashboard access.** To finish activating GA4 in production, the site owner
needs to:

1. Go to the Vercel dashboard → the `elvic-rank` project → Settings →
   Environment Variables.
2. Add a new variable:
   - Name: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Value: `G-4XHTCF3GM0`
   - Environment: Production (and Preview too, if you want GA4 active on
     preview deployments for testing — optional, not required).
3. Save.

For local testing, this repository already has a git-ignored `.env.local`
with the real ID set — see [`.env.example`](../.env.example) if you need to
recreate it on another machine. `.env.local` is never committed.

## 5. Redeploy

Once the Vercel environment variable is saved, trigger a new deployment
(push any commit, or use Vercel's "Redeploy" button) — Next.js reads
`NEXT_PUBLIC_*` variables at build time, so an existing deployment won't
pick up a newly-added variable without a fresh build.

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

**Until step 4 is completed on Vercel and a redeploy runs, GA4 collects
nothing on production.** No real production data exists yet — see
[`seo-baseline.md`](./seo-baseline.md) for what "Awaiting data" means in
practice, and [`analytics-verification.md`](./analytics-verification.md)
for exactly what was and wasn't verified this phase.
