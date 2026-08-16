# Phase 26 — GSC Landing-Page Analysis

## Source Data

Two real GSC "Performance on Search" exports were located directly in
the user's Downloads folder (not supplied inline in the prompt — Task
3 directed locating a CSV/spreadsheet in the workspace, so these were
found and used rather than treated as unavailable):

1. **`elvicrank.com-Performance-on-Search-2026-08-12.zip`** — filter:
   Search type Web, **Date: Last 3 months**, no page/country filter.
   Contains `Pages.csv`, `Queries.csv`, `Countries.csv`, `Devices.csv`,
   `Search appearance.csv`.
2. **`elvicrank.com-Performance-on-Search-2026-08-16.zip`** (and its
   equivalent `.xlsx`) — filter: Search type Web, **Date: Aug 7, 2026 –
   Aug 13, 2026** (compared against Jul 31 – Aug 6, 2026), **Country:
   United States**, **Page:
   `https://www.elvicrank.com/blog/how-google-business-profile-helps-local-businesses`**.
   Same file set.

Also present, and deliberately **not used**: `elvic-rank-leads.csv` —
a business-development prospect list (real third-party company names,
phone numbers, emails) unrelated to search/analytics data. Noted for
transparency; not analyzed, not incorporated into this report.

## Date Range
Current: **8/7/26–8/13/26**. Previous comparison: **7/31/26–8/6/26**.
Also drawing on a broader, unfiltered **"Last 3 months"** export
(as of 8/12/26) for sitewide page/country/device context.

## CRITICAL FINDING: The Phase 25 Query Set Is a Single-Page Filter

**FACT:** The `08-16` export's `Filters.csv` shows it was filtered to
exactly one page:
`https://www.elvicrank.com/blog/how-google-business-profile-helps-local-businesses`.
Its `Pages.csv` shows that single URL with **0 clicks, 76 impressions,
0.00% CTR, position 83.64** for 8/7–8/13 — an exact match to the
aggregate totals Phase 25 reported for all 20 queries.

**This means the 20-query dataset analyzed in Phase 25 is not
"Elvic Rank's queries in general" — it is specifically the query
breakdown for one blog article.** Phase 25's "architecture-based
mapping" (which guessed the commercial service page,
`/services/local-seo-google-business-profile`, as the likely owner)
is now **superseded by real data**: the actual landing page for all 20
queries is the **blog article**, not the service page.

This also resolves Phase 25's one data anomaly: the ambiguous
"google local business seo" row is confirmed here as **Impressions: 2,
Position: 87.5** — the real source data was clean; the formatting
glitch was introduced only in how it was pasted into the prior prompt.

## Full Query → Page Table (8/7–8/13/26 vs 7/31–8/6/26)

All 20 queries below map to **one confirmed landing page**:
`/blog/how-google-business-profile-helps-local-businesses`.

| Query | Clicks | Impressions | CTR | Position | Landing Page (confirmed) |
|---|---|---|---|---|---|
| google my business local seo | 0 | 21 | 0% | 86.05 | how-google-business-profile-helps-local-businesses |
| google my business seo local | 0 | 15 | 0% | 82.93 | same |
| local seo google business profile | 0 | 9 | 0% | 84.56 | same |
| google business profile local seo | 0 | 5 | 0% | 89.00 | same |
| google local business | 0 | 3 | 0% | 74.67 | same |
| google my business for local seo | 0 | 3 | 0% | 93.33 | same |
| seo local google my business | 0 | 3 | 0% | 93.67 | same |
| google local business results ranking | 0 | 2 | 0% | 78.50 | same |
| google business local seo | 0 | 2 | 0% | 80.50 | same |
| google local business seo | 0 | 2 | 0% | 87.50 | same |
| local visibility on google | 0 | 2 | 0% | 97.00 | same |
| google business local | 0 | 1 | 0% | 48.00 | same |
| google local business profile | 0 | 1 | 0% | 58.00 | same |
| my local business google | 0 | 1 | 0% | 61.00 | same |
| local google business | 0 | 1 | 0% | 66.00 | same |
| local google business listing | 0 | 1 | 0% | 70.00 | same |
| local google my business | 0 | 1 | 0% | 71.00 | same |
| google local business reviews | 0 | 1 | 0% | 78.00 | same |
| rank locally on google | 0 | 1 | 0% | 81.00 | same |
| local seo google my business | 0 | 1 | 0% | 95.00 | same |

Device split for this page (8/7–8/13): Desktop 64 impressions
(position 83.48), Mobile 12 impressions (position 84.50). Country:
100% United States (this was itself a filter, so no other-country data
exists in this particular export for this page).

## Sitewide Context (Last 3 Months, Unfiltered — as of 8/12/26)

| Page | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| `https://elvicrank.com/` | 2 | 33 | 6.06% | **6.52** |
| `https://www.elvicrank.com/` | 0 | 10 | 0% | 2.2 |
| `.../blog/how-google-business-profile-helps-local-businesses` | 0 | 4 | 0% | 86.5 |
| `.../services/conversion-rate-optimization` | 0 | 1 | 0% | 68 |

**Anomaly, flagged not resolved:** this same page shows only 4
impressions across the entire "last 3 months" (pulled 8/12) but 76
impressions in the single week of 8/7–8/13 (pulled 8/16, for the same
page). The most plausible explanation is GSC's normal 2–3 day data-
processing latency — the 8/12 pull likely predates full processing of
the 8/7–8/13 week — not a factual contradiction. Not resolved further
since doing so would require guessing.

**Queries (3-month, unfiltered):** `elvic` (branded, 3 impressions,
position 1), `rank velocity websites converts` (1, position 68),
`google local business seo` (1, position 81), `rank locally on google`
(1, position 81), `local seo google business profile` (1, position
87), `local visibility on google` (1, position 97). Total query-level
impressions here (8) is far below total page-level impressions (48) —
a known GSC behavior (very low-volume queries are anonymized/excluded
from the Queries report below a threshold), not a data error.

**Countries (3-month, unfiltered):** Nigeria — 2 clicks, 24
impressions, 8.33% CTR, position 8.42. United States — 0 clicks, 11
impressions, position 31.64. Pakistan — 0 clicks, 10 impressions,
position **1.5**. United Kingdom — 0 clicks, 1 impression, position 1.
China — 0 clicks, 1 impression, position 4. Canada — 0 clicks, 1
impression, position 81.

**This is the first time the site's historical "2 clicks" baseline
(first reported Phase 14) has been attributable to a source: both
came from Nigeria**, split evenly across Desktop and Mobile per the
Devices table (1 click each), consistent with the Countries total.

**Search Appearance:** empty in both exports — no rich-result features
(FAQ snippets, etc.) recorded yet, despite `FAQPage` schema being
present sitewide. Not necessarily a problem — rich-result eligibility
takes time and isn't guaranteed even with valid schema.

## Cluster Analysis

Unchanged from Phase 25's clustering (now confirmed against a single,
real landing page rather than inferred):
**Cluster A** (GBP/GMB + Local SEO phrasing) — 9 queries, 61
impressions. **Cluster B** (general local-business visibility/
ranking) — 11 queries, 15 impressions.

## Landing-Page Ownership Findings

See `docs/phase-26-seo-opportunity-map.md` for the full classification.
Summary: the blog article is classified **B — Acceptable Supporting
Page**, not A (it isn't the "intended" commercial owner per the site's
keyword-ownership docs) and not D (it's topically correct, already
links to the commercial service page, and serving an informational
article for an informational/mixed-intent query cluster is normal,
working-as-intended SEO behavior).

## Cannibalization Findings
**No cannibalization found.** The filtered export shows only one URL
receiving these 20 queries; nothing in either export shows a second
page competing for the same terms.

## A Separate, Real, Confirmed Technical Finding (and a correction)

Independent of the query cluster: both `https://elvicrank.com/` and
`https://www.elvicrank.com/` appear as **separate URLs** in the 3-month
Pages report, both receiving real impressions. A `www → apex` redirect
was implemented on the strength of this finding, but **caused a
production outage** — Vercel's platform already redirects
`apex → www`, so the two redirects looped. Reverted within the same
phase. Follow-up testing (via `curl -L`, which follows redirects
correctly, unlike the `Invoke-WebRequest` calls used earlier) confirmed
the real live state: **`www.elvicrank.com` is the platform's actual
primary domain** — the opposite of what `siteConfig.url` and every
canonical tag in the codebase declare. This is now a P0 owner-decision
item rather than something to fix again automatically. Full incident
timeline in `docs/phase-26-summary.md`'s correction notice.

## Data Limitations
- No landing-page dimension exists for any query **outside** the
  single filtered page — Cluster A/B's attribution is confirmed only
  for the blog article; whether any other page (e.g. the service page
  itself) receives its own separate GBP/Local-SEO query impressions is
  **not knowable from the supplied exports**, since the 08-16 export
  was pre-filtered to exclude everything else.
- Query-level anonymization (GSC's own low-volume threshold) means the
  3-month "Queries" list undercounts real query diversity relative to
  the "Pages" list.
- No GA4 correlation is available for the exact 8/7–8/13 window (the
  real GA4 export found this phase covers 7/15–8/11 — see
  `docs/phase-26-baseline.md`).

## Conclusions
The Local SEO / GBP query cluster hypothesis (Phase 21, reinforced
Phase 25) is now **confirmed with real landing-page data** — but the
actual current landing page is the informational blog article, not the
commercial service page as previously inferred. On inspection, this is
a legitimate, already-linked, working arrangement, not a defect. The
one genuine, evidence-backed technical issue found this phase (www/apex
duplicate indexing) was unrelated to the query cluster itself, and has
been fixed — see `docs/phase-26-summary.md`.
