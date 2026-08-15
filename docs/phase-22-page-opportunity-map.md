# Phase 22 — Page Opportunity Map

Built from the combined GSC page evidence, GA4 behavioral evidence, and
direct codebase inspection this phase. Confidence labels reflect how
much the underlying evidence actually supports the row, not how
interesting the page is.

| Page | Intent | GSC signal | GA4 signal | Engagement | Commercial value | Current CTA | Internal links | Opportunity | Recommended action | Confidence |
|---|---|---|---|---|---|---|---|---|---|---|
| `/` (homepage) | Navigational / mixed | Visible in recording | ~45 or 16 views (figures inconsistent in source), 16 users, 69.6% bounce | Aggregate 54s avg. engagement | High — primary entry point | Book Free SEO Audit / View Services | Links to all 14 services + 3 featured blog posts | Answers all 5 core visitor questions (what/who/outcome/trust/next-step) already — see Task 3 audit | KEEP — no change | HIGH (structural audit is direct code inspection, not sample-size-dependent) |
| `/services/seo-audit` | Transactional | Not in recording's visible list this phase | 7 views, 4 users, 20% bounce | Strongest bounce signal in dataset | High — free audit is the site's lead-gen funnel | Book Free SEO Audit / Book Strategy Call | Links to on-page-seo, content-strategy-seo, keyword-research, link-building, local-seo-google-business-profile, seo-strategy article | Already comprehensive; no gap found | KEEP — no change | MEDIUM (GA4 n=4 is directional only) |
| `/services/local-seo-google-business-profile` | Commercial investigation | Not confirmed in this recording (see `phase-22-gsc-page-analysis.md`) | 4 views, 3 users, 25% bounce | Second-strongest bounce signal | High — matches Phase 21's largest query cluster | Book Free SEO Audit / Book Strategy Call (custom `ctaHeading`) | Links to 5 supporting articles + 2 related services | Already directly aligned to the GBP/Local SEO query cluster; no gap found | KEEP — no change | MEDIUM (page-level GSC metric unconfirmed this phase) |
| `/services/technical-seo-audit` | Transactional | Visible in recording | Not in GA4 top-7 list this period | Unknown | High — exact-match query from Phase 21 | Book Free SEO Audit / Book Strategy Call | Links to technical-seo-checklist, seo-audit, on-page-seo, website-speed-optimization | Getting search visibility but didn't appear in the GA4 top-page list this period — could mean low view count (below cutoff) or a discovery→click gap; not distinguishable from available evidence | MONITOR — request page-level GSC clicks/impressions for this URL specifically next phase | LOW (absence from a top-7 list isn't strong evidence of anything specific) |
| `/services/off-page-seo` | Commercial investigation | Not in recording's visible list | 10 views, 2 users, 100% bounce | Highest view count among service pages shown, lowest user count | Medium | Book Free SEO Audit / Book Strategy Call | Links to link-building, local-seo-google-business-profile | Structural review found no defect (see `phase-22-ga4-behavior-analysis.md`); pattern most likely explained by small sample | MONITOR — do not rewrite on n=2 | LOW |
| `/services/meta-ads` | Commercial investigation | Not in recording | 3 views, 3 users, 100% bounce | — | Medium | Book Free SEO Audit / Book Strategy Call | Links to google-ads, conversion-rate-optimization, seo-reporting-analytics | No structural defect found | KEEP — no change | LOW (n=3) |
| `/services/website-design` | Commercial investigation | Not in recording | 3 views, 2 users, 100% bounce | — | Medium-High | Book Free SEO Audit / Book Strategy Call | Links to on-page-seo, website-speed-optimization, conversion-rate-optimization | No structural defect found | KEEP — no change | LOW (n=2) |
| `/services/website-speed-optimization` | Commercial investigation | Not in recording | 2 views, 2 users, 100% bounce | — | Medium | Book Free SEO Audit / Book Strategy Call | Links to technical-seo-audit, website-design, on-page-seo, inline blog link | No structural defect found | KEEP — no change | LOW (n=2) |
| `/blog/how-google-business-profile-helps-local-businesses` | Informational | Visible in recording | Not in GA4 top-7 list | — | Feeds GBP commercial page | "Learn more" style, contextual | Links to local-seo-google-business-profile and how-to-rank-locally-on-google | Already has a clear commercial next step; no gap found | KEEP — no change | HIGH (direct code inspection) |
| `/blog/how-to-rank-locally-on-google` | Informational | Visible in recording | Not in GA4 top-7 list | — | Feeds GBP commercial page + 2 supporting articles | Contextual inline links | Links to local-seo-google-business-profile (x2), local-citations-explained, how-google-business-profile-helps-local-businesses | Already comprehensive; owns Phase 21's "local ranking" cluster; no gap found | KEEP — no change | HIGH |
| `/blog/seo-vs-google-ads` | Commercial investigation | Visible in recording | Not in GA4 top-7 list | — | Feeds 3 commercial pages | Contextual inline links | Links to google-ads, seo-audit, keyword-research | Already comprehensive; no gap found | KEEP — no change | HIGH |
| `/blog/website-speed-and-google-rankings` | Informational | Visible in recording | Not in GA4 top-7 list | — | Feeds 2 commercial pages | Contextual inline links | Links to website-speed-optimization, technical-seo-audit | Already comprehensive; no gap found | KEEP — no change | HIGH |

## Summary

Of 12 pages evaluated against this phase's combined evidence, **zero**
showed a genuine, evidence-backed gap in structure, CTA alignment,
internal linking, or messaging clarity. The two items flagged as
MONITOR (technical-seo-audit's absence from the GA4 top-7, and
off-page-seo's view/user mismatch) are watch items for future phases
with better data, not defects this phase's evidence can actually
diagnose.
