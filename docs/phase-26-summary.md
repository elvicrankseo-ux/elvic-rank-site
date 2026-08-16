# PHASE 26 — COMPLETE

## ⚠️ CORRECTION — POST-DEPLOY INCIDENT AND REVERT

**The www/apex redirect described in §13 below was implemented, deployed,
found to cause a production outage, and reverted — all within this same
phase.** Documenting this honestly rather than editing the record to
hide it:

1. **What was assumed:** that `elvicrank.com` (apex) was the live,
   platform-level primary domain, and `www.elvicrank.com` simply had no
   redirect configured — based on live testing that showed `www` serving
   200 with no redirect, and the codebase's `siteConfig.url`/canonical
   tags all declaring the apex as canonical.
2. **What was missed:** whether the **apex** itself had a
   platform-level (Vercel dashboard) redirect was never independently
   tested before implementing a code-level `www → apex` redirect.
3. **What actually happened after deploy:** Vercel's own domain
   configuration turned out to already redirect **apex → www** — the
   opposite direction. Combined with the new code-level `www → apex`
   redirect, this created an infinite redirect loop. Confirmed via
   direct HTTP requests: `elvicrank.com/` → 308 → `www.elvicrank.com/`
   → 308 → `elvicrank.com/` → ... The entire production site became
   unreachable (`ERR_TOO_MANY_REDIRECTS`) for the duration this was
   live.
4. **Immediate fix:** reverted `next.config.ts` to its pre-phase state
   in a follow-up commit (`d5a353a`), redeployed, and verified via
   `curl -L` that the site is fully reachable again: `elvicrank.com` →
   1 redirect → `www.elvicrank.com` → 200, real content, GA4 confirmed
   present.
5. **The real, corrected finding:** the site's actual live primary
   domain, per Vercel's platform configuration, is **`www.elvicrank.com`**
   — apex redirects to it, not the reverse. This directly **contradicts**
   `siteConfig.url` (`https://elvicrank.com`) and every canonical tag,
   sitemap URL, and schema `url` field in the codebase, all of which
   declare the apex as canonical. **This mismatch predates this phase**
   — it was not caused by the redirect attempt, only exposed by it.
6. **Why no further fix was attempted this phase:** a second unverified
   change to domain/redirect handling, immediately after the first one
   caused an outage, is exactly the kind of compounding risk this
   project's standing rules exist to prevent. Resolving this properly
   requires an **owner decision** (is `www` or apex the intended primary
   domain going forward?) plus visibility into the actual Vercel
   dashboard domain settings, which this environment does not have.
   Documented as OWNER ACTION REQUIRED — see the updated §14/§24 below.

**Net result of this incident:** zero net code change (the repository
is byte-for-byte back to its pre-phase `next.config.ts`), a brief
production outage that was caught and fixed within the same session,
and a real, previously-unknown, now-documented finding that needs an
owner decision before anyone (including a future phase) touches
domain redirects again.

---

## 1. OBJECTIVE
Connect the real GSC query data from Phase 25 to actual landing pages,
determine whether the previously-assumed (architecture-based) page
ownership is correct, and implement only what real evidence supports.

## 2. DATA RECEIVED
No data was pasted inline this phase. Per Task 3, the workspace
(Downloads folder) was searched and two real GSC "Performance on
Search" export bundles were located and used: a 3-month unfiltered
export (pulled 8/12/26) and a single-page-filtered export for
8/7–8/13/26 vs 7/31–8/6/26 (pulled 8/16/26). A real 28-day GA4 export
(7/15–8/11/26) was also found and used for Task 14. One unrelated file
(`elvic-rank-leads.csv`, a business-outreach contact list) was found
and deliberately not used. **FACT**, not inferred — all figures below
are copied directly from these exports.

## 3. GSC DATE RANGE
8/7/26–8/13/26 vs. 7/31/26–8/6/26 (single-page export); "Last 3
months" as of 8/12/26 (sitewide export). Both used, kept separate, not
treated as comparable to each other.

## 4. CURRENT GSC BASELINE
See `docs/phase-26-baseline.md` for the full HISTORICAL/CURRENT/PHASE
26 breakdown. Headline **FACT**: the 3-month sitewide total (2 clicks,
48 impressions) exactly reproduces Phase 14's original historical
figure, now with page/country/device attribution for the first time.

## 5. QUERY → LANDING PAGE FINDINGS
**FACT (directly confirmed by GSC's own export filter, not inferred):**
all 20 queries analyzed in Phase 25 — 76 impressions, 0 clicks — belong
to exactly one landing page:
`/blog/how-google-business-profile-helps-local-businesses`. Phase 25's
architecture-based guess (the commercial service page) was **not**
correct for this specific dataset.

## 6. DOMINANT QUERY CLUSTERS
Unchanged from Phase 25: Cluster A (GBP/GMB + Local SEO phrasing, 9
queries/61 impressions), Cluster B (general local-business visibility/
ranking, 11 queries/15 impressions) — now confirmed against a real,
single landing page rather than inferred.

## 7. ACTUAL PAGE OWNERSHIP
**FACT:** the blog article, not the service page. **INFERENCE:** this
is a legitimate, working arrangement — the article already links
inline to `/services/local-seo-google-business-profile`, so
informational-intent traffic to the article still has a clear path to
the commercial page.

## 8. CANNIBALIZATION STATUS
**NO CANNIBALIZATION** — confirmed. Only one URL appears for these 20
queries in the filtered export; nothing else competes for them.

## 9. WRONG-LANDING-PAGE FINDINGS
**None for the query cluster itself** (Category B — Acceptable
Supporting Page, not a mismatch). **A separate, unrelated, real
finding:** `www.elvicrank.com` and `elvicrank.com` both serve live,
indexable content as distinct URLs (confirmed both live and in GSC's
Pages report) — see §13.

## 10. TITLE/META DECISION
**No change.** Per this phase's own Task 8/9 rules, 0% CTR at an
average position of 83.64 is the expected pattern at that depth, not
evidence of a title defect. Not implemented.

## 11. CONTENT OPPORTUNITY DECISION
**No new content justified.** All 6 of Task 12's conditions must hold;
condition 2 ("existing site has no appropriate owner") fails — the
blog article and service page jointly already own this intent.

## 12. INTERNAL LINKING DECISION
**No new links needed.** Re-confirmed the blog article already links
to the service page and to `how-to-rank-locally-on-google`.

## 13. IMPLEMENTATION
**Attempted, deployed, caused an outage, reverted. Net change: none.**
See the correction notice at the top of this document for the full
timeline. In brief: a `www → apex` redirect was added to
`next.config.ts` based on incomplete evidence (apex's own
platform-level redirect behavior was never tested), it conflicted with
Vercel's existing `apex → www` redirect and created a loop, and it was
reverted in commit `d5a353a` within the same phase. The repository is
back to its exact pre-phase state for this file.

## 14. CHANGES NOT IMPLEMENTED
- Title/meta rewrite of the GBP blog article — insufficient evidence
  (§10).
- New page for Cluster A/B — fails the distinct-intent test (§11).
- Additional internal links — none missing (§12).
- **A www/apex redirect** — attempted, caused an outage, reverted (see
  correction notice and §13). **Not re-attempted this phase.** Fixing
  this correctly requires an owner decision on which domain
  (`elvicrank.com` or `www.elvicrank.com`) should be primary, plus
  visibility into Vercel's actual dashboard domain configuration, which
  this environment cannot see or safely guess at twice.
- A fix for the GA4 "(not set)" landing-page anomaly — flagged as an
  **OWNER ACTION**, since it requires GA4 dashboard access this
  environment doesn't have to diagnose the actual cause.

## 15. GA4 STATUS
`G-4XHTCF3GM0` confirmed active on production (unchanged by this
phase's redirect fix). All 5 events intact. **New this phase:** a real
28-day GA4 export (7/15–8/11/26) was found and used — see
`docs/phase-26-baseline.md`. **FACT:** zero "Organic Search" channel
sessions appear in that window; Direct and Unassigned are the only two
channels present.

## 16. CONVERSION TRACKING STATUS
Unchanged. CTA clicks are tracked; Calendly bookings, WhatsApp
conversations, and email replies remain unmeasurable from this
environment. 0 Key Events in the GA4 export — **FACT**, not inferred
— no configured conversion fired in that 28-day window.

## 17. TECHNICAL REGRESSION
TypeScript: **Pass**. ESLint: **Pass**. Production build: **Pass,
32/32 routes** — both for the (reverted) attempted change and for the
final reverted state. Sitemap: unchanged, 25/25. Robots: unchanged.
Canonical: unchanged (still declares the apex — now confirmed to
actively **mismatch** the platform's real primary domain, see
correction notice). Schema: unchanged. Internal links: unaffected
throughout (`next/link` uses relative paths, unaffected by host-level
redirect behavior either way).

## 18. MOBILE / UX STATUS
**Not applicable.** The (reverted) change was a host-level redirect
with no rendering, layout, or component surface.

## 19. PRODUCTION STATUS
**Currently live and healthy, confirmed via `curl -L`:**
`elvicrank.com` → 1 redirect → `www.elvicrank.com` → 200, real
content, GA4 (`G-4XHTCF3GM0`) confirmed present in the served HTML.
This reflects the reverted (original, pre-phase) state — see the
correction notice for the brief outage that occurred and was fixed
in between.

## 20. DOCUMENTATION CREATED
- `docs/phase-26-gsc-landing-page-analysis.md`
- `docs/phase-26-seo-opportunity-map.md`
- `docs/phase-26-baseline.md`
- `docs/phase-26-summary.md`

## 21. FILES CHANGED
`next.config.ts` — modified then reverted (net: unchanged vs. the
start of this phase). New: the 4 docs listed in §20 (this file was
subsequently edited again to add the correction notice).

## 22. COMMIT HASH
`7896e7f` (the www/apex redirect + all 4 docs — **later found to
cause an outage**), `d5a353a` (the revert), plus a follow-up commit
correcting this document's record of what happened (see chat for its
hash).

## 23. DATA LIMITATIONS
Landing-page GSC data exists for exactly one page; every other page's
query attribution remains architecture-based inference. GA4 and GSC
windows don't align exactly. GSC's own query anonymization undercounts
real query diversity in the 3-month report. The GA4 "(not set)"
landing-page rows are unexplained. **New this phase:** this
environment has no visibility into Vercel's actual dashboard domain
configuration — the apex/www primary-domain question can be observed
via HTTP testing but not resolved without that access.

## 24. OWNER ACTIONS REQUIRED
**P0 — new, from this phase's incident:** decide which domain is
intended as primary — `elvicrank.com` or `www.elvicrank.com` — and
either update Vercel's dashboard domain settings to match the
codebase's canonical declaration, or have a future phase update
`siteConfig.url`/canonical/schema to match Vercel's actual
`www.elvicrank.com` primary configuration. Until this is decided, the
codebase and the live platform configuration actively disagree about
which URL is canonical. Investigate the GA4 "(not set)" landing-page
tracking gap. Everything else from Phase 20's standing checklist
remains unchanged (phone number, GBP verification, founder identity,
directory signups).

## 25. SINGLE HIGHEST-PRIORITY NEXT ACTION
**Resolve the apex/www primary-domain mismatch (§24, P0) before
anything else SEO-related.** This is a bigger-priority finding than
this phase originally set out to find: the site's canonical
declaration (apex) and its actual live routing (www is primary,
confirmed via direct HTTP testing) disagree with each other right now,
in production. A GSC export with sitewide landing-page data (this
phase's original recommendation) is still valuable and remains the
second priority.

## 26. NEXT PHASE RECOMMENDATION
Do not start Phase 27 automatically, per this phase's stop condition.
When real sitewide landing-page data becomes available, the next phase
should specifically check `/services/local-seo-google-business-profile`
and `/services/technical-seo-audit` (the two pages with the strongest
architecture-based cluster matches) against their own real query
attribution — the one thing still not knowable after two consecutive
data-driven phases.
