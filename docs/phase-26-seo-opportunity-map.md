# Phase 26 — SEO Opportunity Map

| # | Opportunity | Evidence | Affected Query/Cluster | Affected URL | Intent | Severity | Confidence | Recommended Action | Status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | www/apex duplicate indexing | GSC 3-month Pages report lists `elvicrank.com/` and `www.elvicrank.com/` as separate URLs, both with real impressions; live check confirmed `www.elvicrank.com` returns HTTP 200 with no redirect, despite a correct canonical tag | N/A (site-wide, not query-specific) | `/` (both host variants) | N/A | **Medium** — not causing a visible ranking problem today, but a real, avoidable duplication of crawlable, indexable URLs | **HIGH** (directly observed in real GSC + live production data, not inferred) | Add a permanent host-based redirect from `www.elvicrank.com` → `elvicrank.com` in `next.config.ts` | **IMPLEMENTED** |
| 2 | GBP/Local-SEO query cluster landing on the blog article, not the service page | GSC 08-16 export confirms 100% of Cluster A/B's 76 impressions land on `/blog/how-google-business-profile-helps-local-businesses` | Clusters A & B (20 queries) | `/blog/how-google-business-profile-helps-local-businesses` | Mixed informational/commercial-investigation | **Low** — the article already links to the intended commercial page inline | **HIGH** (directly confirmed by the page-filtered GSC export) | None — this is Category B (Acceptable Supporting Page), not a mismatch | **NOT IMPLEMENTED — no defect to fix** |
| 3 | Title/meta rewrite for the blog article to better match Cluster A's exact phrasing | 0% CTR at position 83.64 average | Clusters A & B | `/blog/how-google-business-profile-helps-local-businesses` | N/A | N/A | **LOW** — explicitly, per this phase's own Task 8/9 rules, 0% CTR at position 48–97 is expected and not title evidence | Do not implement | **REJECTED — insufficient evidence** |
| 4 | New page targeting Cluster A/B directly | 76 impressions across 20 word-order variants of one concept | Clusters A & B | N/A | N/A | N/A | **LOW** — fails Task 12's "distinct search intent" and "existing site has no appropriate owner" tests; the existing article and service page already jointly satisfy this | Do not create | **REJECTED — existing pages already own this intent** |
| 5 | Additional internal links around the GBP article | Re-checked bidirectional linking (already confirmed complete in Phase 25) | Clusters A & B | `/blog/how-google-business-profile-helps-local-businesses`, `/services/local-seo-google-business-profile` | N/A | N/A | N/A | None — already links to the service page and to `how-to-rank-locally-on-google` | **REJECTED — no gap found** |
| 6 | GA4 "(not set)" landing page anomaly | Real GA4 export (7/15–8/11): one landing-page row has a blank value, 5 sessions, 91.8s average engagement — the highest engagement time of any row, but no identifiable page | N/A | Unknown | N/A | **Low-Medium** — doesn't block anything, but is a real data-quality gap worth the owner checking | **MEDIUM** (real data, cause not diagnosable from this environment) | Flag as **OWNER ACTION** — check GA4 configuration/tag firing for this segment; not fixable from the codebase without more information | **DOCUMENTED, NOT IMPLEMENTED** |

## Priority Summary
- **Implemented this phase:** #1 (www/apex redirect) — the only item
  with both high-confidence evidence and a low-risk, standard fix.
- **Investigated and correctly left alone:** #2, #3, #4, #5 — each
  either isn't a real problem or fails this phase's own justification
  bar for implementation.
- **Flagged for the owner:** #6 — a real anomaly this environment
  can observe but not diagnose without GA4 dashboard access.
