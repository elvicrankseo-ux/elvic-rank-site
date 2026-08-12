# Measurement Roadmap — Day 0 / 30 / 60 / 90

A fixed checklist of what to record at each milestone, so future comparisons
are apples-to-apples. Fill in real numbers only, sourced directly from GSC
and GA4 dashboards, GA4 export, or whatever tool has account access at the
time — never estimated. If a metric genuinely doesn't exist yet at that
milestone, write **"Not available because insufficient historical data
exists"**, not a guess.

## Day 0 (this phase — 2026-08-11 deploy, Phase 18 audit)

| Category | Metric | Value |
|---|---|---|
| GSC | Clicks / Impressions / CTR / Avg. position | 2 / 48 / 4.2% / 13.6 (Phase 14, historical — not a Day 0 figure, recorded here as the earliest reference point available) |
| GSC | Queries | 6 known (see `phase-18-baseline.md` §3) |
| GSC | Pages | Not available |
| GA4 | Users / Sessions | Not available as a defined-period figure — only a realtime snapshot exists (`seo-baseline.md`) |
| GA4 | Engagement | Not available |
| GA4 | Landing pages | Realtime observation only: homepage, Keyword Research page |
| GA4 | Traffic channels | Not available |
| GA4 | CTA clicks (by event) | Not available as counts — implementation verified working, no counts accessible |
| GA4 | Key events | Not confirmed configured |
| Business | Calendly bookings | Not tracked in-app — site owner's own Calendly dashboard |
| Business | WhatsApp leads | Not tracked in-app — site owner's own WhatsApp Business app |
| Business | Contact submissions | Not tracked in-app — site owner's own inbox |
| Business | Qualified leads | Not tracked anywhere yet |

## Day 30

| Category | Metric | Value |
|---|---|---|
| GSC | Clicks / Impressions / CTR / Avg. position (28-day) | _fill in_ |
| GSC | Top 5 queries with clicks/impressions/position | _fill in_ |
| GSC | Top 5 pages with clicks/impressions | _fill in_ |
| GA4 | Users / New users / Sessions (28-day) | _fill in_ |
| GA4 | Engagement rate / Avg. engagement time | _fill in_ |
| GA4 | Top landing pages | _fill in_ |
| GA4 | Traffic channels (Organic/Direct/Referral/etc.) | _fill in_ |
| GA4 | `seo_audit_cta_click` / `strategy_call_click` / `whatsapp_click` / `contact_cta_click` / `generate_lead` counts | _fill in_ |
| Business | Calendly bookings, WhatsApp leads, contact submissions, qualified leads | _fill in — site owner to report_ |

## Day 60
Same table structure as Day 30. Compare against Day 30, not Day 0 — Day 0 has almost no real data to compare against.

## Day 90
Same table structure. This is the first point where a genuinely meaningful
GSC trend (position movement, impression growth) becomes statistically
worth interpreting — per Phase 14/16/17's repeated finding that anything
earlier is too small a sample.

## What to do at each milestone
1. Pull the real GSC Performance report (last 28 days) and GA4 report
   (Users/Sessions/Engagement/Landing Pages/Events, last 28 days).
2. Fill in the table above with real numbers and the exact date range
   pulled.
3. Compare against the previous milestone, not against Day 0's placeholder
   values.
4. Only then revisit `phase-18-baseline.md`'s content/CTR/ranking
   recommendations — they were explicitly not made this phase due to
   insufficient data, and should be reconsidered once real numbers exist.
5. If Calendly/WhatsApp/email completion tracking becomes a priority,
   that requires a **future integration** — e.g., a Calendly webhook to a
   backend endpoint that fires a server-side conversion event, or a real
   form backend instead of the current `mailto:` redirect. Neither exists
   today; this is flagged as a future architecture decision, not something
   implemented this phase, since no evidence yet justifies the added
   complexity.
