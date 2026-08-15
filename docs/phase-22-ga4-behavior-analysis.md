# Phase 22 — GA4 Behavior Analysis

## OBSERVED DATA

Supplied by the owner, GA4 screenshot, **July 16 – August 12, 2026 (28
days)**:

**Aggregate:**

| Metric | Value |
|---|---|
| Views | 16 |
| Active users | 15 |
| Average engagement time | 54 seconds |
| Event count | 191 |

**Top pages/screens:**

| Page | Views | Active users | Events | Bounce rate |
|---|---|---|---|---|
| Homepage | ~45 | 16 | 137 | 69.6% |
| Off-Page SEO Services | 10 | 2 | 10 | 100% |
| SEO Audit Services | 7 | 4 | 16 | 20% |
| Local SEO & Google Business Profile | 4 | 3 | 8 | 25% |
| Meta Ads | 3 | 3 | 5 | 100% |
| SEO Website Design | 3 | 2 | 7 | 100% |
| Website Speed Optimization | 2 | 2 | 2 | 100% |

Note the internal inconsistency already visible in the owner's own
screenshot (homepage views ~45 vs. the aggregate 16 total views) — this
is transcribed exactly as supplied rather than corrected or
reconciled, since doing either would mean guessing which figure is
right.

## INTERPRETATION

Per Rule 14, these numbers are treated as **directional only** — at
2-16 active users per page, a single visitor's behavior can swing a
bounce rate by 20-100 percentage points, so none of the per-page bounce
rates below are read as a verdict on page quality.

- **SEO Audit Services (20% bounce, 4 users)** and **Local SEO & GBP
  (25% bounce, 3 users)** show the healthiest engagement signal in this
  dataset. Both are also the two most extensively built-out pages
  (full `richContent`, deep FAQ, dense internal linking) — consistent
  with, though not proof of, the idea that page depth correlates with
  engagement here.
- **Off-Page SEO (10 views, 2 users, 100% bounce)** is the one pattern
  worth a closer structural look: it has the highest view count of any
  service page in this dataset but the fewest active users among pages
  with more than 2 views, and 100% bounce. Investigated below.
- **Meta Ads, SEO Website Design, Website Speed Optimization (100%
  bounce each, 2-3 users each):** at n=2-3, a 100% bounce rate could be
  fully explained by 2-3 individual visitors each landing and leaving,
  for any number of unrelated reasons (wrong intent, comparison
  shopping across multiple tabs, etc.). No structural defect was found
  on any of these three pages that would independently explain the
  bounce pattern (see `phase-22-page-opportunity-map.md`).

### Off-Page SEO — structural review (the one page flagged for closer inspection)

Checked per Task 10: opening copy is a clear intent-matched paragraph,
CTA is the standard site-wide set (present, visible, above the fold in
the header), internal links exist to `/services/link-building` and
`/services/local-seo-google-business-profile`, and — critically — **no
overpromising or fabricated-authority language exists anywhere on the
page** (reconfirmed; this was already audited clean in Phase 20 and is
unchanged). The page's content and structure match every other service
page's pattern, which is performing acceptably elsewhere in this same
dataset (Local SEO & GBP uses the identical template pattern with a
25% bounce rate). **No structural cause was found that would explain
the higher bounce rate here specifically** — at n=2, the most
parsimonious explanation is sample size, not a page defect.

## RECOMMENDATION

- Do not rewrite Off-Page SEO, Meta Ads, Website Design, or Website
  Speed Optimization based on this data — no structural gap was found
  on any of them, and the sample sizes are too small to justify a
  change even if one were found.
- Prioritize collecting a second, larger GA4 snapshot before revisiting
  per-page bounce rate as a decision input — this is the same
  conclusion Phase 21 reached about GSC data, and it applies equally
  here.
- The homepage's own internal figure mismatch (45 vs. 16) is worth the
  owner double-checking directly in the GA4 UI (e.g., confirm which
  date-range toggle or view was active) before it's used as an input to
  a future phase — flagged, not something this environment can resolve
  without dashboard access.

## IMPLEMENTED CHANGE

**None.** No page was rewritten on the basis of this GA4 screenshot —
every page inspected already had correct structure, correct CTAs, and
no fabricated claims, and the sample sizes involved (2-16 users per
page) are too small to support a confident causal claim about any
specific element.
