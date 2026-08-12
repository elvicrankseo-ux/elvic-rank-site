# GSC Data Analysis — Phase 14 (attempted refresh in Phases 16 and 17, blocked both times)

First analysis of real Google Search Console data since GSC was connected
(between Phases 13 and 14). See [`seo-baseline.md`](./seo-baseline.md) for
the raw baseline this analysis is built on. This is the **HISTORICAL
BASELINE** — there is no CURRENT GSC baseline anywhere in this project.

> **Phase 17 note:** Same result as Phase 16 — no GSC connector or account
> access exists in this environment, so no fresh query/page/CTR/
> cannibalization analysis could be performed. See
> [`phase-17-data-analysis.md`](./phase-17-data-analysis.md) for the full
> Phase 17 write-up. This file still needs to be replaced (not patched)
> the first time real GSC access exists.

> **Phase 16 note:** Phase 16 explicitly attempted to retrieve fresher GSC
> data (a new 28-day and/or 3-month pull) before drawing any new
> conclusions or making any content/SEO changes. **No GSC connector or
> account access exists in this environment**, so no fresher data could be
> retrieved. Per Phase 16's own stop conditions, no new query/page/CTR/
> cannibalization analysis was performed and no content or copy changes
> were made this phase on the basis of SEO opportunity — everything below
> remains the Phase 14 analysis, now acknowledged as out of date. The next
> phase that has real GSC access should replace this entire file with a
> fresh pull, not patch it further.

## Data Limitations (read this first)

This analysis works with exactly what was provided: **4 aggregate totals
and 6 query strings**, covering a 3-month trailing window. It does **not**
include:
- Per-query impressions, clicks, CTR, or position (only the aggregate
  4.2% CTR / 13.6 average position across the whole property)
- The Pages tab (which URLs are actually receiving the impressions)
- Country or device breakdowns
- Confirmation of whether the 6 listed queries are exhaustive or a partial
  sample (GSC often shows more queries than are worth summarizing)

Every conclusion below is built from query **text** mapped against the
site's known content architecture — not from verified per-query metrics.
Where I can't verify something, I say so rather than inferring a number.
With only 2 total clicks in 3 months, no conclusion here should be treated
as statistically reliable — it's directional, from a newly-deployed site
still building initial visibility (deployed Phase 12, 2026-08-11).

## Baseline

See [`seo-baseline.md`](./seo-baseline.md#search-console--initial-baseline-phase-14-3-month-trailing-window):
2 clicks, 48 impressions, 4.2% CTR, 13.6 average position.

## Task 2 — Query Analysis

| Query | Likely intent | Likely associated page(s) | Notes |
|---|---|---|---|
| `elvic` | Branded | Homepage | Someone searching the brand name directly — expected for any site, even a brand-new one, and a healthy sign the domain is at least minimally indexed and associated with the name. |
| `rank velocity websites converts` | Unclear | Unclear — possibly homepage or `/services/conversion-rate-optimization` | This phrase doesn't map cleanly to any specific page's actual copy. I checked the codebase for "velocity" (the site's tagline is "SEO That Compounds," not "velocity") and found no match. **I'm not going to force a confident interpretation of this one** — it may be a broad/fuzzy-match query GSC associated loosely with ranking + website + conversion terms scattered across the homepage. Flagging as low-confidence, not actionable without more data. |
| `google local business seo` | Informational/commercial, local SEO | `/services/local-seo-google-business-profile`, possibly `/blog/how-google-business-profile-helps-local-businesses` | Broad local-SEO topic phrase — could reasonably land on either the commercial page or a supporting article. |
| `rank locally on google` | Informational, local SEO | `/blog/how-to-rank-locally-on-google` | **Near-exact match to this article's deliberately-chosen primary keyword** (established in Phase 7B specifically to own this informational query). This is meaningful — it's evidence the keyword-ownership decision from Phase 7B was directionally correct, even at this very early, low-volume stage. |
| `local seo google business profile` | Commercial, service intent | `/services/local-seo-google-business-profile` | Near-exact match to this page's own title/H1 area. Expected and healthy. |
| `local visibility on google` | Informational/local | `/services/local-seo-google-business-profile` or `/blog/how-to-rank-locally-on-google` | Both pages use "local visibility" language extensively; can't determine which is actually showing without Pages-tab data. |

**Pattern:** 4 of the 6 visible queries (`google local business seo`,
`rank locally on google`, `local seo google business profile`,
`local visibility on google`) all point at the same cluster: the Local
SEO / Google Business Profile service page and its supporting
`how-to-rank-locally-on-google` article. This is the one clear, real
signal in this dataset.

## Task 3 — Page Analysis (of the pages the query pattern implicates)

### `/services/local-seo-google-business-profile`
- Title: "Local SEO & Google Business Profile Services"
- H1: "Local SEO and Google Business Profile Services"
- Meta description: "Local SEO and Google Business Profile optimization that improves your Google Maps visibility and helps local businesses generate qualified leads."
- Primary keyword: Local SEO / Google Business Profile (commercial)
- Associated queries (inferred, not confirmed): `local seo google business profile`, possibly `google local business seo`, `local visibility on google`
- Impressions/clicks/CTR/position: not available per-page
- Search-intent fit: strong — this page already has full `richContent` (built Phase 2), an 8-item FAQ, and is the deliberate commercial hub of this cluster.

### `/blog/how-to-rank-locally-on-google`
- Title / H1: "How to Rank Locally on Google: A Practical Guide for Service Businesses"
- Meta title: "How to Rank Locally on Google: Practical Guide for Service Businesses"
- Primary keyword: "rank locally on Google" (informational, deliberately owned since Phase 7B)
- Associated queries (inferred): `rank locally on google`, possibly `local visibility on google`
- Search-intent fit: strong — 10 H2 sections, a full FAQ, built specifically for this query.

### Homepage
- Title: "Elvic Rank | SEO Agency for Local Service Businesses"
- H1: "SEO That Brings More Calls, More Leads & More Booked Jobs"
- Associated query (inferred): `elvic` (branded)
- Search-intent fit: fine for a branded query — no action indicated.

## Task 4 — Low-Hanging-Fruit Opportunities (Prioritized)

| Priority | Opportunity | Evidence | Recommended action |
|---|---|---|---|
| 1 | Local SEO / GBP cluster (service page + article) | 4 of 6 visible queries map here; average position 13.6 (page 2) means there's real room to climb, not a lost cause | **Verified this cluster's internal linking — see Task 7. Already at or near maximum reasonable density from Phases 2/7B/7C/8/9. No new link or content change is justified by this data alone.** |
| 2 | `rank velocity websites converts` | Too ambiguous to act on | Monitor only — do not build content around a phrase I can't confidently interpret. |
| — | Everything else | No other queries visible | Nothing else to prioritize from this dataset. |

**Bottom line: this data confirms the site is already aimed at the right cluster — it does not, on its own, justify a new code change.** See Task 11 below for why.

## Task 8 — CTR Analysis

Aggregate CTR is 4.2% at an average position of 13.6. Organic CTR at
position ~13-14 is typically in a low single-digit percentage range
industry-wide, so 4.2% does not read as an underperforming title/meta —
if anything it's reasonable for that position. **There is no CTR evidence
here that points at a specific title or meta description being the
problem.** The more likely explanation for the low click count is simply
position (page 2) and very low absolute impression volume (48 over 3
months) on a newly-deployed site — not copy. No title or meta description
change is recommended from this data.

## Task 9 — Content Gap Analysis

**A. Immediate optimization opportunities:** None identified from this
data beyond what Phases 2–13 already built. The queries visible are all
already well-served by existing pages.

**B. Future supporting articles:** None justified by this data. All 6
visible queries map to existing content.

**C. Future commercial/service pages:** None justified by this data.

"No new article is currently justified from the available evidence" —
consistent with the Phase 11 audit's conclusion, and still true here.

## Task 5 — Keyword Ownership Check

Re-verified this phase (see final report): `how-to-rank-locally-on-google`
remains the sole owner of "rank locally on Google" as a title/H1;
`local-seo-google-business-profile` remains the commercial owner of Local
SEO / GBP; no overlap or cannibalization was introduced. The fact that
both pages are now showing impressions for related-but-distinct queries
(`local seo google business profile` → commercial page,
`rank locally on google` → informational article) is exactly the intended
outcome of that split, not a conflict.

## Task 7 — Internal Linking Review

Confirmed (via fresh codebase search this phase) that every article in the
Local SEO cluster already links to `how-to-rank-locally-on-google`, and it
links back to two of them. The service page links to it too. This is the
most heavily cross-linked cluster on the site, built specifically across
Phases 2, 7B, 7C, 8, and 9 in anticipation of exactly this kind of query
pattern. **No further internal-linking change was made — there was no
genuine gap to fill without forcing an artificial link.**

## Recommendation

Given the data available, the responsible action this phase is
**documentation and monitoring, not new code changes** — see the final
report for what was and wasn't implemented and why.
