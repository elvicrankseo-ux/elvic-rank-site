# Phase 25 — GSC Query-Level Analysis

*(Numbering note: the owner's prompt for this work was labeled "Phase
24," but a distinct Phase 24 — "reduce CTA and form friction, close
audit-delivery gap," commit `f2ea2d3` — was already completed and
committed immediately before this one. This document and its siblings
use "Phase 25" throughout to avoid overwriting that prior work; nothing
in this renumbering changes the content requested.)*

## 1. Dataset Period
**Current period:** 8/7/26 – 8/13/26 (7 days)

## 2. Comparison Period
**Previous period:** 7/31/26 – 8/6/26 (7 days)

## 3. Full Query Table

Exactly as supplied — no value altered, estimated, or interpolated.

| Query | Cur. Clicks | Prev. Clicks | Cur. Impr. | Prev. Impr. | Cur. CTR | Prev. CTR | Cur. Position | Prev. Position |
|---|---|---|---|---|---|---|---|---|
| google my business local seo | 0 | 0 | 21 | 0 | 0.00% | 0.00% | 86.05 | 0.00 |
| google my business seo local | 0 | 0 | 15 | 0 | 0.00% | 0.00% | 82.93 | 0.00 |
| local seo google business profile | 0 | 0 | 9 | 0 | 0.00% | 0.00% | 84.56 | 0.00 |
| google business profile local seo | 0 | 0 | 5 | 0 | 0.00% | 0.00% | 89.00 | 0.00 |
| google local business | 0 | 0 | 3 | 0 | 0.00% | 0.00% | 74.67 | 0.00 |
| google my business for local seo | 0 | 0 | 3 | 0 | 0.00% | 0.00% | 93.33 | 0.00 |
| seo local google my business | 0 | 0 | 3 | 0 | 0.00% | 0.00% | 93.67 | 0.00 |
| google local business results ranking | 0 | 0 | 2 | 0 | 0.00% | 0.00% | 78.50 | 0.00 |
| google business local seo | 0 | 0 | 2 | 0 | 0.00% | 0.00% | 80.50 | 0.00 |
| google local business seo | 0 | 0 | 2 | 0 | 0.00% | *unclear* | *unclear* | 87.50 |
| local visibility on google | 0 | 0 | 2 | 0 | 0.00% | 0.00% | 97.00 | 0.00 |
| google business local | 0 | 0 | 1 | 0 | 0.00% | 0.00% | 48.00 | 0.00 |
| google local business profile | 0 | 0 | 1 | 0 | 0.00% | 0.00% | 58.00 | 0.00 |
| my local business google | 0 | 0 | 1 | 0 | 0.00% | 0.00% | 61.00 | 0.00 |
| local google business | 0 | 0 | 1 | 0 | 0.00% | 0.00% | 66.00 | 0.00 |
| local google business listing | 0 | 0 | 1 | 0 | 0.00% | 0.00% | 70.00 | 0.00 |
| local google my business | 0 | 0 | 1 | 0 | 0.00% | 0.00% | 71.00 | 0.00 |
| google local business reviews | 0 | 0 | 1 | 0 | 0.00% | 0.00% | 78.00 | 0.00 |
| rank locally on google | 0 | 0 | 1 | 0 | 0.00% | 0.00% | 81.00 | 0.00 |
| local seo google my business | 0 | 0 | 1 | 0 | 0.00% | 0.00% | 95.00 | 0.00 |

**Data anomaly, flagged rather than resolved:** the supplied row for
"google local business seo" contains one more field than every other
row (9 values against an 8-column header), making its CTR/position
columns ambiguous. Per the rule against fabricating missing data, its
current position is marked *unclear* rather than guessed — only its
impressions figure (2) is used in cluster totals below, since that
value is unambiguous regardless of column alignment.

**Previous-period 0.00 values mean no recorded visibility in that
window, not a position of zero.** None of these 20 queries had any
impressions in the 7/31–8/6 period; they are newly observed this week,
not queries that "dropped from position 0."

## 4. Query Clusters

**Cluster A — Google Business Profile / Google My Business + Local SEO
(word-order variants of one commercial concept):**
google my business local seo, google my business seo local, local seo
google business profile, google business profile local seo, google my
business for local seo, seo local google my business, google business
local seo, google local business seo, local seo google my business —
**9 queries, 61 impressions.**

**Cluster B — General local-business visibility / ranking (broader,
mixed informational intent):**
google local business, google local business results ranking, local
visibility on google, google business local, google local business
profile, my local business google, local google business, local google
business listing, local google my business, google local business
reviews, rank locally on google — **11 queries, 15 impressions.**

61 + 15 = 76, matching the dataset total (§5). No third cluster
emerged — every query is a variant or close neighbor of one of these
two semantically overlapping concepts, consistent with RULE 1/RULE 2
(20 queries are not 20 topics).

## 5. Cluster Impression Totals

| Cluster | Queries | Impressions | Share |
|---|---|---|---|
| A — GBP/GMB + Local SEO | 9 | 61 | 80% |
| B — General local visibility/ranking | 11 | 15 | 20% |
| **Total** | **20** | **76** | **100%** |

Total clicks across all 20 queries: **0**. Overall CTR: **0.00%**.

## 6. Position Distribution

Based on the 19 queries with an unambiguous current position (the one
malformed row is excluded, not guessed):

| Range | Count |
|---|---|
| 1–10 | 0 |
| 11–20 | 0 |
| 21–50 | 1 (48.00 — "google business local") |
| 51–100 | 18 |

Best position: **48.00** ("google business local"). Worst: **97.00**
("local visibility on google"). Simple mean of the 19 positions:
**≈78.3** — presented as a **small-sample observation**, not a
statistically robust average, per the phase's own interpretation rules.

**Zero-click rate: 100%** (0 of 76 impressions converted to a click) —
fully consistent with positions this deep (roughly page 5–10 of
results) and not, on its own, evidence of a title or relevance defect.

## 7. Query-to-Page Architecture Map

**Important distinction maintained throughout:** the supplied dataset
contains *query-level* metrics only — no landing-page dimension was
provided. Every mapping below is an **architecture-based inference**
(which existing page's content and title most plausibly own the
intent), not a claim that GSC has confirmed which URL actually served
these queries. Labeled accordingly.

| Query cluster | Search intent | Architecture-based owner | Confidence |
|---|---|---|---|
| Cluster A (GBP/GMB + Local SEO) | Commercial investigation | `/services/local-seo-google-business-profile` — metaTitle "Local SEO & Google Business Profile Services" is a near-exact semantic match to every variant in this cluster | High (title/content match is unambiguous) |
| "rank locally on google" | Informational | `/blog/how-to-rank-locally-on-google` — exact-phrase match; this article was purpose-built in Phase 7C specifically for this phrase | High |
| "google local business reviews" | Informational | Reviews content on `/services/local-seo-google-business-profile` ("Review and Reputation Strategy" section) and its FAQ ("How many reviews do I need...") | Medium |
| "local google business listing" | Informational | Citations/listings content — `/blog/local-citations-explained` and the service page's "Local Citations" section | Medium |
| "local visibility on google", "google local business", "google business local", "my local business google", "local google business", "google local business profile", "google local business results ranking" | Mixed informational/navigational | `/services/local-seo-google-business-profile` (primary) with `/blog/how-to-rank-locally-on-google` as the supporting informational angle | Medium — these are broad enough that either page plausibly satisfies them |

No actual GSC page/query export exists for this dataset, so this
mapping cannot be upgraded from "architecture-based" to "confirmed" in
this phase.

## 8. Data Limitations

- No landing-page dimension — cannot confirm which URL Google actually
  associates with each query (§7).
- No GA4 correlation available for this same 7-day window.
- One row ("google local business seo") has an ambiguous
  current-position value due to a formatting inconsistency in the
  supplied data; not resolved by guessing.
- 76 impressions and 0 clicks over 7 days is a genuinely small sample —
  every conclusion below is framed as an early/initial signal, not a
  proven trend.
- No previous-period comparison is meaningful beyond "these queries are
  newly visible" — the 0.00 previous-period values are an absence of
  data, not a baseline to measure decline against.

## 9. Main SEO Opportunity

**Validated:** Google is testing Elvic Rank's relevance for one
semantic cluster — Google Business Profile / Google My Business +
Local SEO — across many word-order variants, at very deep positions
(48–97), with the resulting zero clicks fully explained by that depth.
This is consistent with, and reinforces, the query-cluster hypothesis
already established in Phase 21 from a smaller, coarser dataset.

**Investigated, not assumed:** re-inspected the primary owner page
(`/services/local-seo-google-business-profile`) and its 5 linked
supporting articles in full this phase (see
`docs/phase-25-local-seo-opportunity-map.md` for the complete audit).
**Conclusion: no content, title, H1, or internal-linking gap was found
that this specific dataset justifies changing.** Every concept
appearing across the 20 queries — GBP optimization, local ranking
factors, Google Maps/Local Pack visibility, citations/listings,
reviews — is already covered on the service page or one of its
already-linked supporting articles, confirmed by direct file
inspection this phase (not assumed from memory of prior audits).

Per RULE 3/RULE 4/RULE 9: positions in the 48–97 range with 0% CTR are
the expected pattern for a page this deep, not evidence the page's
title or content is wrong — the more plausible explanation is site age
and accumulated authority, which content changes cannot fix directly.

## 10. Changes Implemented
**None.** See `docs/phase-25-summary.md` §14–16 for the full
implement/reject decision list and reasoning.

## 11. Changes Rejected
See `docs/phase-25-local-seo-opportunity-map.md` and
`docs/phase-25-summary.md`.

## 12. Measurement Plan
See `docs/phase-25-baseline.md` for the exact baseline values and the
defined next-measurement comparison.
