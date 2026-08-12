# SEO Baseline

**Phase 17 update:** No new GSC or GA4 dashboard data was accessible this
phase either. The site owner supplied one GA4 **realtime** screenshot
(2-4 active users, 11 page views, 3 `seo_audit_cta_click` events) — labeled
below as **PHASE 17 DATA (realtime observation only)**, explicitly not
used for any behavioral conclusion per this phase's own rules. The GSC
section remains the **HISTORICAL BASELINE** from Phase 14 — still not
refreshed, now three phases old. See
[`phase-17-data-analysis.md`](./phase-17-data-analysis.md) for the full
analysis.

**Phase 16 update:** GA4 is now confirmed live and collecting on
production (the site owner completed the Vercel environment-variable step
between Phases 15 and 16 — verified directly against
`https://elvicrank.com` this phase, not assumed). However, GA4
*account-level* reporting (Users, Sessions, event counts, Realtime, etc.)
remains inaccessible from this environment — no Google Analytics dashboard
access exists here, only the ability to verify the client-side
implementation itself. The GA4 table below therefore still reads "Awaiting
data" — that's accurate, not stale; it means real data now exists in GA4's
dashboard but hasn't been pulled from there by the site owner and reported
back yet. See [`ga4-setup.md`](./ga4-setup.md) and
[`analytics-verification.md`](./analytics-verification.md) for full
detail.

**Phase 16 also attempted to retrieve fresh Google Search Console data and
could not** — no GSC connector or account access exists in this
environment either. **The Search Console section below is still the Phase
14 baseline** and has not been refreshed. Do not treat it as current; it's
now over a full phase old. Do not fill any "Awaiting data" rows with
estimates — only real reported numbers, added when actually pulled from
GSC/GA4 by someone with account access.

**Baseline date:** Initial GSC baseline captured Phase 14 — a 3-month
trailing window as reported at that time. Exact calendar start/end dates
were not provided; record them the next time this file is updated so
future comparisons have a precise window.
**Site launched with current content:** 2026-08-11 (Phase 12 deployment —
this is when the 3 newest articles and all Phase 2-10 content depth work
first went live in production)

## Search Console — HISTORICAL BASELINE (Phase 14, 3-month trailing window)

| Metric | Value |
|---|---|
| Total clicks | **2** |
| Total impressions | **48** |
| Average CTR | **4.2%** |
| Average position | **13.6** |
| Queries with visibility (as surfaced) | elvic · rank velocity websites converts · google local business seo · rank locally on google · local seo google business profile · local visibility on google |
| Top pages | Awaiting data — GSC was not queried for the Pages tab this phase; only the Queries list was provided. See `docs/gsc-data-analysis.md` for how to pull this next. |
| Branded query share | Awaiting data — only 1 of 6 visible queries ("elvic") reads as branded; a precise share requires the full query list with individual impression counts, not provided this phase |
| Non-branded query share | Awaiting data — same limitation |
| Notable country breakdown | Awaiting data — not provided this phase |
| Notable device breakdown | Awaiting data — not provided this phase |

**Important caveat:** this is an extremely small sample (2 clicks, 48
impressions over 3 months) from what Phase 11/12 confirmed is a
newly-deployed site. Per-query impressions, clicks, CTR, and position were
**not** provided — only the aggregate totals above and a list of 6 query
strings. Treat every conclusion drawn from this baseline as directional,
not statistically reliable, until volume grows. Full analysis in
[`gsc-data-analysis.md`](./gsc-data-analysis.md).

## GA4 — 28-day / mature-period data: Awaiting data

Client-side implementation confirmed live and correct on production as of
Phase 16, reconfirmed Phase 17 (script loads, correct Measurement ID, all
events fire, no PII — see
[`analytics-verification.md`](./analytics-verification.md)). Every metric
below still requires actual GA4 dashboard access to report — not available
in this environment.

| Metric | Value |
|---|---|
| Users (28-day) | Awaiting data |
| Sessions (28-day) | Awaiting data |
| Top landing pages | Awaiting data |
| Engagement rate | Awaiting data |
| `generate_lead` count | Awaiting data |
| `whatsapp_click` count | Awaiting data |
| `strategy_call_click` count | Awaiting data |
| `seo_audit_cta_click` count | Awaiting data |
| `contact_cta_click` count | Awaiting data |

## GA4 — PHASE 17 DATA (realtime observation only, NOT a 28-day baseline)

**OBSERVATION** — supplied by the site owner as a GA4 realtime screenshot.
Explicitly not sufficient for any behavioral conclusion (too small a
sample, no defined date range, may include the owner's own testing
traffic — see [`phase-17-data-analysis.md`](./phase-17-data-analysis.md)
§5 and §22). Recorded here only so it isn't lost, not as a trend baseline.

| Metric | Value |
|---|---|
| Active users (last 30 min) | 2 |
| Active users (last 5 min) | 1 |
| Page views | 11 |
| First visits | 4 |
| Sessions | 4 |
| Generic click events | 3 |
| Scroll events | 3 |
| `seo_audit_cta_click` | 3 |
| Pages seen | Homepage; Keyword Research service page |

## Business Outcomes

These require the site owner's own tracking (CRM, inbox, WhatsApp Business,
calendar) — GA4 can show *intent* (a click or form submit) but not whether
it became a real conversation or client. None of this can be inferred from
the codebase.

| Metric | Value |
|---|---|
| Leads (form submissions) | Awaiting data |
| WhatsApp conversations started | Awaiting data |
| Strategy calls booked | Awaiting data |
| Free audit requests | Awaiting data |
| Qualified prospects | Awaiting data |
| Clients won | Awaiting data |

## How to fill this in

1. Complete [`ga4-setup.md`](./ga4-setup.md) and
   [`google-search-console-setup.md`](./google-search-console-setup.md).
2. Let real traffic accumulate for at least 28 days — less than that
   produces noisy, unreliable numbers, especially for a newly-deployed
   domain.
3. Pull the real numbers from GSC's Performance report and GA4's Reports,
   and replace "Awaiting data" with the actual reported values plus the
   date range they cover.
4. From that point on, treat this file as the baseline to compare future
   periods against — don't silently overwrite it; keep dated snapshots so
   trend comparisons are possible.
