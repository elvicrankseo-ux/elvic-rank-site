# Phase 25 — Query-Level Baseline

This is the first GSC baseline for Elvic Rank that includes per-query
position data (not just site-wide aggregates, as in Phases 14, 16, 17,
18, 21, 22). All values below are copied exactly from the dataset
supplied for this phase — nothing estimated or interpolated.

## Current Period: 8/7/26 – 8/13/26

- **Clicks (all 20 queries):** 0
- **Impressions (all 20 queries):** 76
- **CTR:** 0.00%
- **Positions:** see the full per-query table in
  `docs/phase-25-gsc-query-analysis.md` §3 — range 48.00–97.00 across
  19 queries with an unambiguous value (one row's position is flagged
  as unclear due to a data-formatting inconsistency, not guessed).

## Previous Period: 7/31/26 – 8/6/26

- **Clicks (all 20 queries):** 0
- **Impressions (all 20 queries):** 0
- **CTR:** 0.00%
- **Position shown:** 0.00 for every query

**Interpretation, stated explicitly:** a previous-period value of 0
impressions and position 0.00 means Search Console recorded **no
visibility at all** for these specific 20 queries in that window — not
that Elvic Rank ranked in position zero (which isn't a real ranking) and
not that visibility declined from some prior position. These 20 queries
are **newly observed** in the current period. This baseline should be
read as "first recorded appearance," not "before vs. after a change."

## Per-Cluster Baseline

| Cluster | Queries | Impressions | Clicks | CTR | Position range |
|---|---|---|---|---|---|
| A — GBP/GMB + Local SEO | 9 | 61 | 0 | 0.00% | 80.50–93.67 |
| B — General local visibility/ranking | 11 | 15 | 0 | 0.00% | 48.00–97.00 |

## What This Baseline Does NOT Establish

- Not a statistically mature sample (76 impressions over 7 days).
- Not proof of sustained demand — a single week could reflect Google
  trialing the site against a broad exploratory query set, a known
  pattern for young sites (see `phase-21-gsc-analysis.md`'s discussion
  of the same dynamic).
- Not landing-page-confirmed — see the architecture-based mapping
  caveat in `docs/phase-25-gsc-query-analysis.md` §7.
- Not a CTR or title verdict — 0% CTR at position 48–97 is the expected
  pattern at that depth, not evidence of a defect.

## Next Measurement

**What to request:** the same query set (or a superset), for a
comparably-sized or longer period, ideally with impressions/position
broken out **and** the landing-page dimension added.

**What would count as a meaningful change, if seen:**
- Any Cluster A or B query moving from 51–100 into 21–50 or better.
- A first non-zero click on any of these 20 queries.
- The cluster's total impression count growing or shrinking materially
  (not just week-to-week noise at this volume).
- Confirmation (via a landing-page-inclusive export) of which URL is
  actually being served for these queries, upgrading §7's
  architecture-based map to a confirmed one.

**What would NOT count as meaningful, even if observed:** a single
query's position moving a few points within the 48–97 band, or a
one-week swing in total impressions at this sample size — both are
within the range of ordinary noise for a dataset this small.
