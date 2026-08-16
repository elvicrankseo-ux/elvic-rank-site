# Phase 25 — Local SEO / GBP Opportunity Map

## Primary Cluster
Google Business Profile / Google My Business + Local SEO (Cluster A) —
9 queries, 61 impressions, positions 80.50–93.67. See
`docs/phase-25-gsc-query-analysis.md` for the full table.

## Secondary Cluster
General local-business visibility/ranking (Cluster B) — 11 queries, 15
impressions, positions 48.00–97.00 (this cluster contains the single
best-positioned query in the dataset: "google business local" at
48.00).

## Primary Owner Page
`/services/local-seo-google-business-profile`

- **Title:** "Local SEO & Google Business Profile Services" —
  semantically matches every Cluster A variant; not changed.
- **H1:** "Local SEO and Google Business Profile Services" — clear,
  matches search intent; not changed.
- **Introduction:** opens by defining local SEO and immediately states
  buying-intent urgency ("someone with a leaking pipe... isn't
  browsing, they're ready to call") — already establishes relevance.
- **H2 structure:** Google Business Profile Optimization → Local
  Ranking Factors We Optimize For → Google Maps and Local Pack
  Visibility → Our Local SEO Services (8 subheadings: Local Keyword
  Research, GBP Optimization, Local On-Page SEO, Local Citations,
  Review and Reputation Strategy, Google Maps Optimization, Local
  Competitor Analysis, Local Content Strategy) → Our Local SEO Process
  → Why Local SEO Matters.
- **Concept coverage checked against every query in both clusters**
  (Section 8 of the master prompt's concept list): GBP optimization ✓,
  Google Maps visibility ✓, local search rankings ✓, local business
  visibility ✓, GBP categories ✓ (FAQ + content), business info
  consistency ✓ (NAP mentioned), local citations ✓ (dedicated section
  + article link), reviews ✓ (dedicated section + FAQ), local
  relevance ✓, local ranking factors ✓ (dedicated section), map pack
  visibility ✓ (dedicated section). **Service-area business
  configuration nuance** (no public address, service-radius setup) is
  mentioned only briefly ("service area pages," "how close your
  business, or your service area, is") rather than as its own
  subsection — noted below as a monitor item, not implemented, since
  no query in this dataset specifically evidences that gap (see
  "Changes Rejected").
- **CTA:** header CTA pair (with this phase's — actually last phase's —
  clarifying caption from commit `f2ea2d3`) leads to audit/strategy
  call; footer CTA repeats. Custom `ctaHeading`: "Get Started With
  Local SEO." Unchanged.
- **Schema:** `getServiceSchema()`, `getBreadcrumbSchema()`,
  `getFaqSchema()` render via the shared service template — confirmed
  unchanged and correct (§ technical regression in
  `docs/phase-25-summary.md`).

## Supporting Pages (all 5 re-verified this phase via direct grep, not memory)

| Article | Links → service page | Service page links → article | Anchor text variety |
|---|---|---|---|
| `/blog/how-google-business-profile-helps-local-businesses` | ✓ (line 113) | ✓ (line 301, "How Google Business Profile Helps Local Businesses") | Distinct |
| `/blog/how-to-rank-locally-on-google` | ✓ (line 689) | ✓ (line 323, "how to rank locally on Google") | Distinct |
| `/blog/local-citations-explained` | ✓ (line 582) | ✓ (line 359, "our guide to local citations") | Distinct |
| `/blog/seo-strategy-for-local-service-businesses` | ✓ (line 926) | ✓ (line 410, "broader SEO strategy") | Distinct |
| `/blog/how-local-seo-generates-leads` | ✓ (line 357) | ✓ (line 406-ish, "How Local SEO Generates Leads") | Distinct |

All 5 relevant articles link bidirectionally with the service page,
using varied, natural anchor text — no exact-match repetition found.

## Internal-Link Structure
Bidirectional and complete for every article this cluster's queries
could plausibly relate to. No missing contextual link was found.

## Missing Topical Concepts
None that this dataset's 20 queries specifically evidence. The one
genuinely absent nuance (service-area business GBP setup, as its own
subsection rather than a passing mention) is real but not evidenced by
any query in this dataset — see "Changes Rejected."

## Cannibalization Risks
**None found.** One clear owner per intent: the service page owns the
commercial GBP/Local-SEO intent; each of the 5 articles owns a distinct
informational angle (what GBP is, how ranking factors work, what
citations are, how leads flow from local SEO, how strategy connects
everything). This is the same conclusion reached in Phases 4, 7C, 21,
22, 23, and 24 — reconfirmed with fresh evidence this phase, not
assumed.

## Recommended Actions
**None — documentation only, this phase.** See "Changes Rejected"
below and the decision list in `docs/phase-25-summary.md` §14–16.

## Priority Level
**MEDIUM** for continued monitoring of Cluster A (real, validated
demand signal; page already strong; the blocker is ranking depth/site
authority, not content — something no on-page change can fix
directly). **LOW** for any new content or restructuring (no gap
exists).

## Changes Rejected

| Considered | Why rejected |
|---|---|
| Add a "service-area business GBP setup" subsection to the service page | Not evidenced by any of the 20 supplied queries — would be a speculative addition "to look productive" (explicitly prohibited by RULE 9), not an evidence-backed one. Logged as a future candidate only if a future dataset shows a query like "service area business google business profile" or similar. |
| Add more internal links between the cluster's pages | All 5 relevant articles already link bidirectionally with natural, varied anchor text — verified via direct grep this phase, not assumed. Adding more would be link-count padding, explicitly prohibited. |
| Rewrite the service page title/H1 to include more query variants | Explicitly prohibited by RULE 8 (don't target alternate word orderings) and Section 12 (0% CTR at position 48–97 isn't title evidence) — the title already semantically covers the full cluster without needing every permutation literally present. |
| Create a new page for "google local business" / "google business local" / similar Cluster B variants | Fails Section 10's test — no genuinely distinct intent, existing pages already satisfy it, would risk cannibalizing the service page and `how-to-rank-locally-on-google`. |
| Add a dedicated "Google local business reviews" or "local listing" subsection | Already covered by existing Review/Reputation and Local Citations sections; a dedicated subsection would duplicate existing content for a 1-impression query. |

## Measurement Criteria
See `docs/phase-25-baseline.md`. Next comparison should use a GSC
export covering a period of comparable or longer length, ideally with
the landing-page dimension added so §7's architecture-based mapping can
be upgraded to confirmed page/query evidence.
