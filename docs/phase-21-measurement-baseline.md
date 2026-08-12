# Phase 21 — Measurement Baseline

## GSC 28-Day Baseline

| Metric | Value | Period |
|---|---|---|
| Clicks | 2 | 28 days |
| Impressions | 106 | 28 days |
| CTR | 1.9% | 28 days |
| Average position | 44.3 | 28 days |

Historical context (not directly comparable — see
`phase-21-gsc-analysis.md` for why): 2 clicks / 48 impressions / 4.2%
CTR / 13.6 avg. position over a 3-month window, captured Phase 14.

## GA4 Status

- **Measurement ID:** `G-4XHTCF3GM0` — active on production, unchanged.
- **Historical baseline:** does not exist. GA4 wasn't live on
  production until between Phases 15–16, and no GA4 dashboard/API
  access exists in this environment.
- **Current observation:** none newly supplied this phase. The most
  recent data point remains the Phase 17 realtime screenshot, which was
  never a baseline and is now four phases old.
- **This phase did not fabricate** users, sessions, engagement rate,
  traffic source totals, conversions, key events, revenue, or page
  views. If dashboard access or a fresh export becomes available in a
  future phase, real values will be used at that point.

## Analytics Events

All 5 events reconfirmed intact this phase, unchanged since Phase 12:

| Event | Fires from |
|---|---|
| `whatsapp_click` | Floating button (×2), footer, contact card |
| `seo_audit_cta_click` | Hero, navbar (×2), mobile sticky, services section, service page (×2), blog post |
| `strategy_call_click` | Service page header, contact card |
| `contact_cta_click` | Service page footer, testimonials section |
| `generate_lead` | Contact form, free-audit form (fires after client-side validation, before `mailto:` redirect) |

No event was renamed, duplicated, or removed. No PII is present in any
event payload (verified again this phase — only `location`/`service`/
`form` string params exist anywhere in the codebase).

## Current Limitations

- No GSC dashboard/API access — figures used are exactly what the owner
  supplied.
- No GA4 dashboard/API access — no historical GA4 reporting is possible
  in this environment.
- No page-level or query-level GSC breakdown was supplied this phase.
- No Calendly/WhatsApp/email *completion* tracking exists — only the
  CTA *click* is tracked (see Conversion Priorities in the final
  report). This is a known, previously flagged architecture gap, not a
  new one.
- No Lighthouse/PageSpeed tool exists in this environment — performance
  data, where measured, comes from the browser's own Navigation/Resource
  Timing APIs (see Phase 19).

## What Should Be Measured Next

In priority order:

1. **Page-level and query-level GSC data** (clicks/impressions/CTR/
   position per URL, ideally per query too) — this is the single
   biggest gap preventing this phase's opportunity map from moving past
   query-name matching into genuine prioritization.
2. **A second 28-day GSC snapshot**, taken far enough after this one to
   be a meaningfully different period, so query presence/position can
   be compared over time instead of read as a single static snapshot.
3. **A real GA4 period report** (users, sessions, engagement, key
   events over a defined date range) if dashboard access becomes
   available, or another owner-supplied export/screenshot.

## 30-Day Comparison Framework

| Measurement metric | Current baseline (this phase) | Next measurement | Change | Interpretation |
|---|---|---|---|---|
| Total clicks | 2 (28d) | — | — | Too early to interpret a single data point |
| Total impressions | 106 (28d) | — | — | Too early to interpret a single data point |
| CTR | 1.9% (28d) | — | — | Expected to stay low while average position is this far down the results |
| Average position | 44.3 (28d) | — | — | Not treated as a trend without a second comparable snapshot |
| Query count | 10 (from supplied evidence, may not be exhaustive) | — | — | Watch for growth in distinct queries as a sign of broadening topical visibility |
| Page count receiving impressions | Not available this phase | — | — | Needs page-level GSC data to establish |
| Page count receiving clicks | Not available this phase | — | — | Needs page-level GSC data to establish |
| Queries entering top 30 | Not available this phase | — | — | Needs per-query position data |
| Queries entering top 20 | Not available this phase | — | — | Needs per-query position data |
| Queries entering top 10 | Not available this phase | — | — | Needs per-query position data |
| Branded vs. non-branded visibility | Not available this phase | — | — | Needs query-level classification against `elvic`/`elvic rank` |
| Organic landing pages | Not available this phase | — | — | Needs page-level GSC data |
| GA4 organic users | Not available in this environment | — | — | Needs GA4 dashboard access or an owner-supplied export |
| GA4 engagement | Not available in this environment | — | — | Needs GA4 dashboard access or an owner-supplied export |
| GA4 key events | Not available in this environment | — | — | Needs GA4 dashboard access or an owner-supplied export |

No target values are set for any row — per the project's standing
rule, this framework tracks what actually happens, not a manufactured
goal.
