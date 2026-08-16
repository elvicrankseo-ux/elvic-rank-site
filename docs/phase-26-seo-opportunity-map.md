# Phase 26 — SEO Opportunity Map

| # | Opportunity | Evidence | Affected Query/Cluster | Affected URL | Intent | Severity | Confidence | Recommended Action | Status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | www/apex duplicate indexing / canonical-vs-actual-primary-domain mismatch | GSC 3-month Pages report lists `elvicrank.com/` and `www.elvicrank.com/` as separate URLs, both with real impressions. A `www → apex` redirect was implemented but **caused a production outage** — it turned out Vercel's platform already redirects `apex → www`, the opposite direction, so the two redirects looped. Reverted. **Confirmed via `curl -L`: the real live primary domain is `www.elvicrank.com`**, contradicting the codebase's canonical/`siteConfig.url` declaration of the apex. | N/A (site-wide, not query-specific) | `/` (both host variants) | N/A | **Medium-High** — a real canonical/platform mismatch, now confirmed, though not currently broken (the site resolves correctly, just to the "wrong" domain per the codebase's own declarations) | **HIGH** (directly observed via GSC + two rounds of live HTTP testing) | **OWNER DECISION REQUIRED** — pick the intended primary domain, then align Vercel's dashboard config and the codebase's canonical declarations to match; do not re-attempt a code-only redirect without that decision, since the wrong direction caused an outage once already | **REVERTED — see `docs/phase-26-summary.md` correction notice** |
| 2 | GBP/Local-SEO query cluster landing on the blog article, not the service page | GSC 08-16 export confirms 100% of Cluster A/B's 76 impressions land on `/blog/how-google-business-profile-helps-local-businesses` | Clusters A & B (20 queries) | `/blog/how-google-business-profile-helps-local-businesses` | Mixed informational/commercial-investigation | **Low** — the article already links to the intended commercial page inline | **HIGH** (directly confirmed by the page-filtered GSC export) | None — this is Category B (Acceptable Supporting Page), not a mismatch | **NOT IMPLEMENTED — no defect to fix** |
| 3 | Title/meta rewrite for the blog article to better match Cluster A's exact phrasing | 0% CTR at position 83.64 average | Clusters A & B | `/blog/how-google-business-profile-helps-local-businesses` | N/A | N/A | **LOW** — explicitly, per this phase's own Task 8/9 rules, 0% CTR at position 48–97 is expected and not title evidence | Do not implement | **REJECTED — insufficient evidence** |
| 4 | New page targeting Cluster A/B directly | 76 impressions across 20 word-order variants of one concept | Clusters A & B | N/A | N/A | N/A | **LOW** — fails Task 12's "distinct search intent" and "existing site has no appropriate owner" tests; the existing article and service page already jointly satisfy this | Do not create | **REJECTED — existing pages already own this intent** |
| 5 | Additional internal links around the GBP article | Re-checked bidirectional linking (already confirmed complete in Phase 25) | Clusters A & B | `/blog/how-google-business-profile-helps-local-businesses`, `/services/local-seo-google-business-profile` | N/A | N/A | N/A | None — already links to the service page and to `how-to-rank-locally-on-google` | **REJECTED — no gap found** |
| 6 | GA4 "(not set)" landing page anomaly | Real GA4 export (7/15–8/11): one landing-page row has a blank value, 5 sessions, 91.8s average engagement — the highest engagement time of any row, but no identifiable page | N/A | Unknown | N/A | **Low-Medium** — doesn't block anything, but is a real data-quality gap worth the owner checking | **MEDIUM** (real data, cause not diagnosable from this environment) | Flag as **OWNER ACTION** — check GA4 configuration/tag firing for this segment; not fixable from the codebase without more information | **DOCUMENTED, NOT IMPLEMENTED** |

## Priority Summary
- **Attempted, caused an outage, reverted:** #1 (www/apex redirect) —
  the evidence for a duplication problem was real, but the fix
  direction was wrong; now correctly escalated to an owner decision
  instead of a repeat automated attempt. See
  `docs/phase-26-summary.md`'s correction notice for the full timeline.
- **Investigated and correctly left alone:** #2, #3, #4, #5 — each
  either isn't a real problem or fails this phase's own justification
  bar for implementation.
- **Flagged for the owner:** #1 (domain decision, newly elevated to P0)
  and #6 — both real findings this environment can observe but not
  resolve without owner input or dashboard access it doesn't have.
