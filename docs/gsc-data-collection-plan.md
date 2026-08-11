# GSC Data Collection Plan

This defines what to analyze once Google Search Console has accumulated
real query data. **None of this analysis has been performed yet** — GSC is
not connected (see [`google-search-console-setup.md`](./google-search-console-setup.md)),
and no query, click, impression, CTR, or position data exists anywhere in
this project. Nothing below should be treated as findings; it's a plan for
what to look at once real data exists.

As a guideline, wait for at least 28 days of data after GSC is connected
and the sitemap is processed before drawing conclusions — a newly-deployed
domain's early data is noisy and not representative.

## A. Quick-win keywords
Queries currently ranking in positions 4-20. These already have some
visibility and are the cheapest wins available — a page already ranks,
it just needs reinforcement (a stronger title, better internal linking,
more topical depth) rather than starting from zero.

**How to pull it:** GSC → Performance → filter Position ≥ 4 and ≤ 20, sort by impressions descending.

## B. High-impression / low-CTR opportunities
Queries generating meaningful impressions but a CTR well below what the
page's average position would suggest. Usually a title/meta-description
problem, not a ranking problem.

**How to pull it:** GSC → Performance → sort by impressions, then look for rows where CTR is noticeably below the site average for that position range.

## C. Page opportunities
Pages receiving impressions but underperforming relative to their content
depth and internal-link support (e.g., a fully-built `richContent` page
with real supporting content still ranking poorly).

**How to pull it:** GSC → Performance → Pages tab, cross-reference against the known page inventory (14 services, 8 articles).

## D. Query/page mismatches
Cases where Google associates a page with a search intent that doesn't
match what the page actually targets — e.g., an informational query
landing on a commercial service page, or vice versa. Relevant given the
deliberate informational/commercial split established across Phases 4-10
(e.g., Technical SEO Audit vs. Technical SEO Checklist).

**How to pull it:** GSC → Performance → Pages tab → open a specific page → check its Queries tab for anything that doesn't match the page's known intent.

## E. Emerging topics
Queries showing real impressions with no dedicated page currently
targeting them. This is the only legitimate trigger for considering new
content — and only after real evidence exists, not speculation.

**How to pull it:** GSC → Performance → Queries tab, filtered to queries with impressions but not obviously mapped to any of the 14 services or 8 articles.

## F. Local SEO opportunities
Queries containing location or service-area intent (e.g., "[service] in
[city]", "near me" patterns) — directly relevant to the Local SEO/GBP
content cluster built in Phases 2, 7A, and 7B.

**How to pull it:** GSC → Performance → Queries tab, filter/search for location terms and "near me" patterns.

## G. Commercial opportunities
Queries indicating buying intent (e.g., "hire," "cost," "pricing,"
"services," "agency," "company") rather than pure research intent —
these should map to service pages, not blog articles.

**How to pull it:** GSC → Performance → Queries tab, filter/search for commercial-intent modifiers.

## H. Cannibalization signals
Cases where multiple pages appear in results for the same query — a real
signal (not the codebase-level title/H1 audit already done in Phases 4-10)
that two pages may be competing for the same search.

**How to pull it:** GSC → Performance → Queries tab → open a specific high-value query → check the Pages tab filtered to that query for more than one page appearing.

---

**Do not perform any of the above analysis without real GSC data.** Once
data exists, each section here becomes a concrete task with a clear query
to run — this document is the checklist for that future work, not a
substitute for it.
