# Phase 21 — GSC Analysis

## Current 28-Day Baseline

Supplied directly by the site owner, current period:

| Metric | Value |
|---|---|
| Period | 28 days |
| Clicks | 2 |
| Impressions | 106 |
| Average CTR | 1.9% |
| Average position | 44.3 |

This is the **primary baseline** for Phase 21.

## Historical Context

The Phase 14 baseline (captured 2026-08 during that phase, covering a
3-month trailing window at the time):

| Metric | Value |
|---|---|
| Period | 3 months (trailing) |
| Clicks | 2 |
| Impressions | 48 |
| CTR | 4.2% |
| Average position | 13.6 |

**These two periods are not directly comparable, and this document does
not treat them as such.** Specifically:

- **Different window lengths.** A 3-month trailing window and a 28-day
  window aggregate a different number of underlying search events; a
  shorter window is inherently noisier for a low-volume, brand-new site.
- **Different query mix.** The Phase 14 query list (`elvic`, `rank
  velocity websites converts`, `google local business seo`, `rank
  locally on google`, `local seo google business profile`, `local
  visibility on google`) is not the same set of queries now appearing
  (see below) — a shift in which queries Google is surfacing the site
  for changes the blended average position independent of any single
  query moving.
- **Total impression volume is still small in both periods** (48 vs.
  106) — small enough that a handful of low-position, exploratory
  impressions (Google testing the site against long-tail or loosely
  related queries) can swing a blended average position substantially
  without reflecting any real change in how established queries rank.
- **Site maturity and indexation are still evolving.** A young site's
  average position is expected to be volatile and, in many cases, to
  look *worse* on paper as Google trials it against a wider, less
  qualified set of queries before narrowing to the ones it actually
  ranks well for — this is a normal, not alarming, pattern.

**Conclusion: the shift from 13.6 to 44.3 is not treated as evidence the
site's ranking "dropped."** There isn't enough information in two
non-comparable snapshots to support that conclusion, and doing so would
violate this project's standing rule against manufacturing certainty
from a small dataset. What can be said honestly: the average position
figure alone, in isolation, is not a reliable signal at this data
volume — the query-level evidence below is more informative than the
blended average.

## Available Query Evidence

The owner supplied GSC screenshots showing the following queries
currently associated with Elvic Rank in Search Console's query table:

- google my business seo local
- google my business local seo
- google ads vs seo
- google local ranking
- seo vs google ads
- local rankings
- google local business results ranking
- google local business
- technical seo audit services
- local seo google business profile

**What this evidence does and does not establish:**

- **Observed:** these 10 queries are appearing in Search Console's query
  report for the site, in the current period.
- **Not available:** per-query clicks, impressions, CTR, average
  position, landing page, device, country, or search appearance. The
  supplied screenshots show the query list itself but not a
  metrics-per-row breakdown, and no GSC dashboard/API access exists in
  this environment to pull one directly.
- **Not assumed:** no individual query's click count, impression count,
  or position is inferred from the 106/2/44.3 totals. Splitting an
  aggregate evenly (or by any other guess) across 10 queries would be
  fabrication, not analysis, so this document does not do it.

**Query-level metrics were not available from the supplied evidence.**
Every recommendation below is therefore based on query *presence and
topic*, matched against the existing page architecture — not on
per-query performance data that doesn't exist yet.

## Query Clusters

### Cluster 1 — Google Business Profile / Local SEO
`google my business seo local`, `google my business local seo`,
`local seo google business profile`, `google local business`

- **Intent:** mixed informational/commercial investigation — someone
  learning what GBP/local SEO is, or looking for a service to help with
  it. "Google my business" (the old GBP name) still appearing shows
  real searchers use the legacy term even though Google renamed the
  product years ago.
- **Owner page:** [`/services/local-seo-google-business-profile`](../src/data/services.ts)
  — metaTitle "Local SEO & Google Business Profile Services" is a close
  semantic match to this entire cluster.

### Cluster 2 — Local Ranking
`google local ranking`, `local rankings`, `google local business results ranking`

- **Intent:** informational — how does Google decide local ranking,
  not yet a "hire someone" search.
- **Owner page:** [`/blog/how-to-rank-locally-on-google`](../src/data/blog.ts)
  — this article was specifically built (Phase 7C) and the service
  page's H2 was renamed away from this exact phrase to protect the
  article's ownership of it. That architecture is directly validated by
  this cluster now showing up in real GSC data.

### Cluster 3 — SEO vs Google Ads
`google ads vs seo`, `seo vs google ads`

- **Intent:** commercial investigation — comparing two spend options
  before deciding where to invest.
- **Owner page:** [`/blog/seo-vs-google-ads`](../src/data/blog.ts) — the
  title is a near-exact match to both query variants.

### Cluster 4 — Technical SEO
`technical seo audit services`

- **Intent:** transactional/commercial — "services" strongly signals
  someone looking to hire, not just learn.
- **Owner page:** [`/services/technical-seo-audit`](../src/data/services.ts)
  — metaTitle is **"Technical SEO Audit Services,"** an exact match to
  this query.

No query in the supplied evidence was forced into a cluster it doesn't
genuinely belong to.

## Query-to-Page Map

See [`phase-21-seo-opportunity-map.md`](./phase-21-seo-opportunity-map.md)
for the full structured table.

## Search Intent

| Cluster | Classification | Notes |
|---|---|---|
| GBP / Local SEO | Informational → Commercial investigation | "google my business" phrasing skews informational/legacy-term; "local seo google business profile" skews commercial |
| Local Ranking | Informational | About the mechanics of ranking, not hiring |
| SEO vs Google Ads | Commercial investigation | Comparison-stage, pre-purchase-decision |
| Technical SEO | Transactional | "services" is a strong buy-intent signal |

**Opportunity type per cluster:**
- GBP/Local SEO → traffic **and** lead-generation opportunity (the
  service page is already the commercial landing page).
- Local Ranking → authority-building / supporting-informational
  opportunity, not a direct lead source — its job is to earn trust and
  link to the commercial page, which it already does.
- SEO vs Google Ads → supporting-informational, feeding two commercial
  pages (`/services/google-ads`, `/services/seo-audit`).
- Technical SEO → direct lead-generation opportunity — the exact-match
  query on a commercial page title.

Not every impression here is being treated as a commercial lead
opportunity — the Local Ranking and SEO vs Google Ads clusters are
correctly read as supporting/informational, per Objective E.

## Ranking Opportunities

Applying the Objective C priority order to what's actually knowable
from this evidence (query presence + topic, not per-query position):

1. **No query has known clicks-with-low-impressions data** — unavailable.
2. **No query has a known position band (11–30, etc.)** — unavailable,
   since per-query position wasn't supplied.
3. Same as above — unavailable.
4. **Landing-page relevance check (the one thing that *is* checkable):**
   every cluster already has a relevant, well-built landing page — see
   Query Clusters above. No under-optimized landing page was found.
5. **Commercial intent:** identified per cluster above (Technical SEO
   cluster carries the strongest signal).
6. **Topical alignment / internal links:** already strong on every
   owner page (see Internal Linking Opportunities below).
7. **Existing relevant page, no new page needed:** true for all four
   clusters — this is the main actionable finding this phase.

**Because per-query position and click data aren't available, this
document does not assign A/B/C/D priority ratings to individual
queries** — doing so would require pretending to know which queries are
"close" to a ranking improvement, which isn't knowable from a query-name
list alone. What can be classified is the *page-level* readiness to
capture these clusters if and when they rank higher — see the
opportunity map for that page-level classification.

## CTR Opportunities

Current overall CTR: **1.9%**, at an average position of **44.3**.

Position 44.3 corresponds to roughly page 4–5 of Google's results — a
position range where organic CTR is characteristically very low
industry-wide, regardless of how good a title or meta description is.
That alone is sufficient to explain a 1.9% blended CTR without invoking
any title/meta problem.

Per Objective F, before recommending any title/meta change the
following must be true: enough impressions on a *specific* page/query
to detect a pattern, and evidence the query intent doesn't match the
current title. Neither condition is met:

- Page-level and query-level impression/position breakdowns are not
  available from the supplied evidence.
- Every owner page identified in this phase already has a title that
  matches its query cluster's intent (checked individually above).

**CTR optimization deferred because the current dataset is too small to
establish a reliable page/query-level CTR pattern.** No title or meta
description was changed this phase.

## Content Opportunities

**NOW:** Nothing — every cluster already has a correct owner page (see
Query Clusters). No page needed a content change this phase (see
Objective G audit below).

**NEXT:** None identified. Revisit once page-level GSC data (clicks,
impressions, and position *per URL*) is available — that data would be
needed to tell whether, say, the technical-seo-audit page is actually
capturing its exact-match query well or is stuck behind a technical/
authority ceiling unrelated to its content.

**LATER:** None identified. The genuine content gap flagged in Phase
19/20 (an original data/tool/calculator asset) remains correctly
deferred — still no query evidence specifically justifies building it
now.

Per Objective J, a new article requires all of: a distinct intent, no
existing owner, no cannibalization risk, strategic relevance, ecosystem
fit, and sufficient justification. **Every cluster this phase already
has an existing owner**, so condition 2 fails for all of them — no new
article was created.

## Internal Linking Opportunities

Audited whether the pages receiving these query clusters connect
properly to relevant service pages, supporting articles, and
conversion pages:

| Page | Links to commercial page(s) | Links to supporting article(s) | Assessment |
|---|---|---|---|
| `/blog/how-to-rank-locally-on-google` | `/services/local-seo-google-business-profile` (x2) | `/blog/local-citations-explained`, `/blog/how-google-business-profile-helps-local-businesses` | Already complete |
| `/blog/seo-vs-google-ads` | `/services/google-ads`, `/services/seo-audit`, `/services/keyword-research` | — | Already complete |
| `/services/local-seo-google-business-profile` | (is the commercial page) | `/blog/how-google-business-profile-helps-local-businesses`, `/blog/how-to-rank-locally-on-google`, `/blog/local-citations-explained`, `/blog/how-local-seo-generates-leads`, `/blog/seo-strategy-for-local-service-businesses` | Already complete |
| `/services/technical-seo-audit` | (is the commercial page) | `/blog/technical-seo-checklist`, `/blog/seo-strategy-for-local-service-businesses` | Already complete |

**No new internal link was added this phase.** Every page this GSC
evidence points to was already correctly connected by the internal
linking work done in Phases 1, 2, 7–10, and 20 — adding more links here
would be link count for its own sake, which Objective I explicitly rules
out.

## CTA Opportunities

Reviewed per Objective N/Task 10:

- `/blog/how-to-rank-locally-on-google` and `/blog/seo-vs-google-ads`
  (informational/comparison content) each end by linking into a
  relevant service or the free SEO audit — an appropriate, non-pushy
  next step for content at this stage of intent, not a hard sell.
- `/services/local-seo-google-business-profile` and
  `/services/technical-seo-audit` (commercial pages) already carry the
  standard strategy-call/SEO-audit/contact CTA set, tracked via GA4.

**No CTA change was made this phase** — the existing CTA placement
already matches the intent of every page this evidence points to.

## Changes Implemented

**None.** No code, content, title, meta, or internal-linking change was
made in Phase 21. See Task 12/18 regression results confirming the
codebase is unchanged and still healthy.

## Changes Deferred

- Title/meta rewrites — deferred, insufficient evidence (see CTR
  Opportunities).
- New content/articles — deferred, every cluster already has an owner
  page (see Content Opportunities).
- Additional internal links — deferred, existing linking already
  complete for every relevant page (see Internal Linking Opportunities).
- Per-query opportunity prioritization (A/B/C/D) — deferred until
  page/query-level GSC metrics are available; the 10-query name list
  alone can't support it without guessing.

## Data Limitations

- No GSC dashboard/API access exists in this environment — all GSC
  figures used here are exactly what the owner supplied (28-day totals
  plus a 10-query name list), nothing more.
- No per-query or per-page clicks/impressions/CTR/position was
  available.
- No device, country, or search-appearance breakdown was available.
- GA4 dashboard-level historical reporting is unavailable in this
  environment (see `phase-21-measurement-baseline.md`).
- 106 impressions and 2 clicks over 28 days is not a statistically
  mature dataset for any business — see Objective K categorization
  below.

**Established / Emerging / Unknown:**

- **ESTABLISHED:** Google is already surfacing Elvic Rank for local
  SEO, GBP, local ranking, SEO-vs-Ads, and technical SEO audit queries
  — the topical footprint from Phases 1–20's content and architecture
  work is visible in real query data now, for the first time.
- **EMERGING:** whether any specific query in this list is gaining or
  losing position over time — not knowable without a second, later
  snapshot to compare against.
- **UNKNOWN:** reliable page-level CTR winners; reliable
  conversion-driving keywords; long-term ranking trends; seasonality;
  a stable 28/90-day pattern. None of these can be honestly claimed
  yet.

## Measurement Plan

See [`phase-21-measurement-baseline.md`](./phase-21-measurement-baseline.md)
for the full 30-day comparison framework.

## Next Actions

See Section 21 ("Next Action") of the final Phase 21 report delivered
alongside this document.
