# Phase 21 — SEO Opportunity Map

Query-to-page map built from the GSC query evidence supplied for Phase
21. Per-query metrics (clicks/impressions/CTR/position) were **not**
available from the supplied evidence — every "Individual metric"
cell below is labeled accordingly rather than estimated. See
[`phase-21-gsc-analysis.md`](./phase-21-gsc-analysis.md) for full
reasoning behind each row.

| Priority | Query / Cluster | Intent | Current Page | Why This Page Owns the Intent | GSC Evidence | Problem | Recommendation | Implementation | Status |
|---|---|---|---|---|---|---|---|---|---|
| C | `google my business seo local`, `google my business local seo`, `google local business` | Informational → Commercial investigation | `/services/local-seo-google-business-profile` | metaTitle "Local SEO & Google Business Profile Services" directly matches the cluster; richContent covers GBP optimization in depth | Query presence confirmed in GSC. Individual metric unavailable from supplied GSC evidence. | None found — page already owns and covers this intent | Monitor for page/query-level data in a future phase | None | Not implemented — no evidence-backed change identified |
| C | `local seo google business profile` | Commercial investigation | `/services/local-seo-google-business-profile` | Exact-phrase match to the metaTitle | Query presence confirmed. Individual metric unavailable from supplied GSC evidence. | None found | Monitor | None | Not implemented — no evidence-backed change identified |
| C | `google local ranking`, `local rankings`, `google local business results ranking` | Informational | `/blog/how-to-rank-locally-on-google` | Article built specifically for this topic (Phase 7C); service page H2 was renamed away from this phrase to protect the article's ownership — this cluster confirms that architecture is being picked up by Google | Query presence confirmed. Individual metric unavailable from supplied GSC evidence. | None found — architecture already correctly separates this from the commercial page | Monitor | None | Not implemented — no evidence-backed change identified |
| C | `google ads vs seo`, `seo vs google ads` | Commercial investigation | `/blog/seo-vs-google-ads` | Title is a near-exact match to both query variants; already links to `/services/google-ads` and `/services/seo-audit` | Query presence confirmed. Individual metric unavailable from supplied GSC evidence. | None found | Monitor | None | Not implemented — no evidence-backed change identified |
| B | `technical seo audit services` | Transactional | `/services/technical-seo-audit` | metaTitle is an **exact match** to this query; richContent is comprehensive and links to `/blog/technical-seo-checklist` and `/services/seo-audit` | Query presence confirmed. Individual metric unavailable from supplied GSC evidence. | None found on the page itself — the only real unknown is where this query currently ranks, which isn't available | Monitor closely — this is the strongest exact-match commercial signal in the current dataset; prioritize requesting page/query-level GSC data for this URL specifically in a future phase | None | Not implemented — page already fully aligned; watching for position data |

**Priority key (page-level readiness, not urgency of a defect):**
- **A — High-priority optimization opportunity:** none identified this
  phase — no page showed a genuine content, title, or linking gap.
- **B — Medium-priority opportunity:** the Technical SEO cluster, on the
  strength of its exact-match commercial query — worth prioritizing for
  page-level GSC data collection specifically, even though no code
  change is justified today.
- **C — Monitor only:** the other three clusters — pages are already
  correctly built and linked; nothing to act on until more data arrives.
- **D — No action justified:** not used as a distinct row above since
  every row already fell into monitor-only or watch-closely; no query
  cluster was found where creating a new page or making a change was
  actively counter-indicated (which is what a true "D" would flag).

## Summary

All 10 queries supplied this phase map cleanly onto 4 existing pages
with no cannibalization and no coverage gap. This is a genuinely
positive finding, not a missed opportunity: it means the query-to-page
architecture built across Phases 1–20 is already aligned with what
Google is actually surfacing the site for. The highest-value next step
is not new content or a code change — it's getting page/query-level GSC
data (clicks, impressions, position per URL) so the "B" row above can
be evaluated with real numbers instead of query-name matching alone.
