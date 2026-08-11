# SEO Baseline

This defines the metrics to record once Search Console and GA4 have
accumulated enough real data. **Every number below is "Awaiting data" —
none of this has been measured yet**, because neither GSC nor GA4 is
connected to real accounts as of Phase 13 (see
[`google-search-console-setup.md`](./google-search-console-setup.md) and
[`ga4-setup.md`](./ga4-setup.md)). Do not fill this in with estimates or
guesses — only real reported numbers.

**Baseline date:** _(fill in once first real data is recorded)_
**Site launched with current content:** 2026-08-11 (Phase 12 deployment —
this is when the 3 newest articles and all Phase 2-10 content depth work
first went live in production)

## Search Console

| Metric | Value |
|---|---|
| Clicks (28-day) | Awaiting data |
| Impressions (28-day) | Awaiting data |
| Average CTR | Awaiting data |
| Average position | Awaiting data |
| Top queries | Awaiting data |
| Top pages | Awaiting data |
| Branded query share | Awaiting data |
| Non-branded query share | Awaiting data |
| Notable country breakdown | Awaiting data |
| Notable device breakdown | Awaiting data |

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
