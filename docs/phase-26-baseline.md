# Phase 26 — Baseline

## HISTORICAL
Phase 14 (first baseline, 3-month trailing window at the time): 2
clicks, 48 impressions, 4.2% CTR, 13.6 average position, 6 queries, no
page/country/device breakdown available at that time.

**Phase 26 enrichment of this same historical figure:** the 3-month
export located this phase (pulled 8/12/26) independently reproduces
this exact total — 2 clicks, 48 impressions (Pages: 33+10+4+1;
Devices: 25+23; Countries: 24+11+10+1+1+1) — and for the first time
attributes it: **both of the 2 historical clicks came from Nigeria**,
one via Desktop and one via Mobile. This is a genuine enrichment of
already-known history, not a new, separate baseline.

## CURRENT (sitewide, Last 3 months as of 8/12/26 — NOT directly
comparable to the 8/7–8/13 figures below, different window length)
- Clicks: 2 | Impressions: 48 | CTR: 4.2% | avg. position: not
  independently recomputed here (see Phase 14/16 history) but page-level
  positions range 2.2–86.5.
- Top pages: homepage (both host variants), the GBP blog article,
  `/services/conversion-rate-optimization`.
- Countries: Nigeria, United States, Pakistan, United Kingdom, China,
  Canada.
- Devices: Desktop, Mobile.

## PHASE 26 (single-page filtered, 8/7/26–8/13/26 vs 7/31/26–8/6/26,
United States only)
- Clicks: 0 | Impressions: 76 | CTR: 0.00% | avg. position ≈78.3
  (small-sample observation, 19 of 20 queries) — **all for one URL:**
  `/blog/how-google-business-profile-helps-local-businesses`.
- Previous period: 0 clicks, 0 impressions for all 20 queries — no
  prior recorded visibility, not a decline.
- Device split: Desktop 64 impressions (pos. 83.48), Mobile 12
  impressions (pos. 84.50).

**These two "current" figures (sitewide 3-month vs. single-page
1-week) are NOT comparable to each other** — different windows,
different filters (one is sitewide/unfiltered, the other is
single-page/US-only). Both are recorded here as separate, honestly
labeled figures.

## Current Query/Page Coverage
- **Confirmed (real landing-page data):** 1 page
  (`/blog/how-google-business-profile-helps-local-businesses`), 20
  queries.
- **Unconfirmed (architecture-based inference only, not landing-page
  data):** every other page on the site, including the primary
  commercial page `/services/local-seo-google-business-profile`.

## Current GA4 Status
**Real data now available** — a 28-day GA4 export (7/15/26–8/11/26)
was located this phase (not supplied inline; found in the same
Downloads folder as the GSC exports):

| Landing page | Sessions | Active users | New users | Avg. engagement/session |
|---|---|---|---|---|
| `/` (homepage) | 8 | 7 | 6 | 16.25s |
| *(not set/blank)* | 5 | 5 | 0 | 91.8s |
| `/services/seo-audit` | 3 | 3 | 1 | 7.33s |
| `/services/local-seo-google-business-profile` | 1 | 1 | 0 | 0s |

**Traffic acquisition (by channel):** Direct — 9 sessions; Unassigned
— 6 sessions. **No "Organic Search" channel row appears at all** in
this 28-day window — consistent with (not proof of, given the windows
don't perfectly overlap) GSC's 0 clicks in the narrower 8/7–8/13
period.

**User acquisition (first-touch channel):** Direct — 7 users, 7 new.
Unassigned — 5 users, 0 new (returning within-window, per GA4's
first-touch attribution model).

**Key events:** 0 across every row — no configured key event fired in
this window.

**This is the first time this project has had a real, dated, 28-day
GA4 report** rather than a single realtime screenshot (Phase 17) or a
"not available" placeholder (Phases 11, 14, 16, 18, 19, 21, 22).

## Known Limitations
- Landing-page GSC data exists for exactly one page; every other page's
  actual query attribution remains architecture-based inference.
- The GA4 window (7/15–8/11) and the GSC single-page window (8/7–8/13)
  don't align exactly — any cross-reference between them is
  directional, not a precise comparison.
- The blank/unset GA4 landing-page row (5 sessions, highest engagement
  of any row) is unexplained — flagged as an owner action, not
  diagnosable from this environment.
- GSC's own query-level anonymization means the "Queries" report
  undercounts real query diversity relative to "Pages" at this volume.

## Measurement Requirements for the Next Phase
1. A GSC export with the **landing-page dimension retained across the
   whole site** (not pre-filtered to one page) would let a future
   phase confirm or reject architecture-based mapping for every other
   cluster, not just this one blog article.
2. A GA4 export for a window matching the next GSC pull, so the two
   can be genuinely cross-referenced rather than approximately aligned.
3. Owner investigation of the GA4 "(not set)" landing-page rows.
4. Confirmation, after the www→apex redirect (implemented this phase)
   has been live for a few weeks, of whether GSC's Pages report
   consolidates to a single URL — this is the concrete way to verify
   the fix worked.
