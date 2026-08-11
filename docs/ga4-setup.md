# GA4 Setup

GA4 tracking code already exists in this codebase
([`src/components/analytics/google-analytics.tsx`](../src/components/analytics/google-analytics.tsx)
+ [`src/lib/analytics.ts`](../src/lib/analytics.ts)) but is **not currently
active** — it's gated entirely behind one environment variable that has not
been set anywhere. Nothing loads, and no event fires, until you complete the
steps below. This is intentional: no placeholder or fake Measurement ID is
hard-coded anywhere in the repository.

## 1. Create a GA4 property

In [Google Analytics](https://analytics.google.com), create a new property
for Elvic Rank if one doesn't already exist (Admin → Create → Property).

## 2. Create/select a Web data stream

Inside the property: Admin → Data Streams → Add stream → Web. Enter
`https://elvicrank.com` as the site URL.

## 3. Obtain the Measurement ID

On the same Web stream's detail page, copy the **Measurement ID** — it's
formatted like `G-XXXXXXXXXX`.

## 4. Add the environment variable

Add this to your hosting provider's **production** environment variables
(e.g. Vercel: Project → Settings → Environment Variables):

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your real ID from step 3 — **the placeholder
above must never be used in production.** If you're testing locally first,
copy [`.env.example`](../.env.example) to `.env.local` and set it there
instead; `.env.local` is git-ignored and never committed.

## 5. Redeploy

Environment variable changes require a new deploy to take effect — Next.js
reads `NEXT_PUBLIC_*` variables at build time. Trigger a redeploy from your
hosting provider (or push a commit) after saving the variable.

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

**Until steps 1–5 are complete, GA4 collects nothing.** No data referenced
elsewhere in this documentation set exists yet — see
[`seo-baseline.md`](./seo-baseline.md) for what "Awaiting data" means in
practice.
