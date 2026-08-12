# SEO Baseline

GA4 numbers below remain "Awaiting data." As of Phase 15, the GA4 property
and Measurement ID (`G-4XHTCF3GM0`) exist and the implementation was
verified working correctly with that real ID locally — but the Vercel
production environment variable that would activate it live has not been
set (requires dashboard access outside this session), so **production is
not sending any real data to GA4 yet.** See
[`ga4-setup.md`](./ga4-setup.md) and
[`analytics-verification.md`](./analytics-verification.md) for the full
detail. **The Search Console section reflects the initial real GSC
baseline, established in Phase 14** (GSC connection completed by the site
owner between Phases 13 and 14). Do not fill any remaining "Awaiting data"
rows with estimates — only real reported numbers, added when actually
pulled from GSC/GA4.

**Baseline date:** Initial GSC baseline captured Phase 14 — a 3-month
trailing window as reported at that time. Exact calendar start/end dates
were not provided; record them the next time this file is updated so
future comparisons have a precise window.
**Site launched with current content:** 2026-08-11 (Phase 12 deployment —
this is when the 3 newest articles and all Phase 2-10 content depth work
first went live in production)

## Search Console — Initial Baseline (Phase 14, 3-month trailing window)

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

## GA4

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
