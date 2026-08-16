# PHASE 28 — COMPLETE

*(Numbered Phase 28 — a distinct Phase 27, Telegram integration
(`38744db`), already exists; this prompt was itself labeled "Phase
27," so it's renumbered rather than overwriting that history.)*

## 1. Objective
Safely resolve the apex/www domain mismatch Phase 26 discovered
(and got the fix direction wrong on), without repeating that mistake —
verify actual behavior first, decide, then implement only the safe
part.

## 2. Initial Domain State
`elvicrank.com` → 308 → `www.elvicrank.com` → 200. Single hop, stable,
confirmed via raw HTTP headers (not the browser UI) both before and
after this phase's change. The codebase's declared canonical
(`siteConfig.url`) said `https://elvicrank.com` — actively
contradicting the real serving domain.

## 3. Root Cause
`siteConfig.url` was set to the apex domain, but Vercel's
platform-level domain configuration (external to this repository —
confirmed no `vercel.json` exists and `next.config.ts` has no
redirect logic) actually serves the app from `www.elvicrank.com`,
with apex configured as a redirect-only entry point. This was a
pre-existing signal mismatch, not something either this phase or
Phase 26 caused.

## 4. Canonical-Domain Decision
**`https://www.elvicrank.com`** — based on twice-confirmed (Phase 26
and this phase, separated by real elapsed time), stable, single-hop,
non-looping HTTP evidence, per the decision hierarchy's explicit
ranking of "existing stable production redirect behavior" above
"existing canonical/sitemap architecture." Vercel dashboard
configuration itself remains unverifiable from this environment —
stated explicitly, not glossed over.

## 5. Redirect Decision
**No redirect change.** Vercel's existing apex→www redirect already
works correctly. `next.config.ts` was not modified. This is the
critical difference from Phase 26's mistake — that phase tried to add
a competing app-level redirect; this phase added none.

## 6. Implementation
One line changed: `src/config/site.ts`'s `siteConfig.url`,
`"https://elvicrank.com"` → `"https://www.elvicrank.com"`. Every
canonical tag, Open Graph `url`, sitemap entry, `robots.txt` sitemap
reference, and JSON-LD `@id`/`url` field derives from this single
constant (confirmed via `grep` across the entire `src/` tree before
changing anything).

## 7. Verification
**Pre-deploy (production build output, inspected directly):**
`sitemap.xml.body` — 25 URLs, all `www`. `robots.txt.body` — sitemap
reference now `www`. Homepage/service-page/blog-page HTML — canonical
and `og:url` all `www`.

**Post-deploy (live production, direct `curl`, not just browser):**
```
elvicrank.com/          -> 308 -> www.elvicrank.com/  -> 200  (1 redirect, no loop)
www.elvicrank.com/      -> 200 directly
canonical (homepage)     = https://www.elvicrank.com
og:url (homepage)        = https://www.elvicrank.com
canonical (service page) = https://www.elvicrank.com/services/technical-seo-audit
canonical (blog page)    = https://www.elvicrank.com/blog/how-google-business-profile-helps-local-businesses
robots.txt sitemap ref   = https://www.elvicrank.com/sitemap.xml
sitemap.xml               = 25 URLs, 100% www, 0 apex, 0 duplicates
GA4 (G-4XHTCF3GM0)        = present and active
Telegram CTA              = intact, unchanged, correct URL
Mobile (375px)            = no overflow, gtag active
```
No redirect loop occurred at any point. No revert was necessary.

## 8. SEO Implications
Canonical, sitemap, robots, and structured data now all agree with
each other and with the real serving domain — removing a genuine
signal conflict rather than introducing one. No title, H1, keyword
ownership, or content was touched. Some temporary Search Console
reprocessing as Google re-confirms the (now-consistent) canonical is
expected and normal, not a defect — see §13 for the GSC documentation
this phase could and couldn't produce.

## 9. Analytics Implications
None. `G-4XHTCF3GM0` and all 5 event names are untouched; the
analytics component doesn't reference `siteConfig.url`.

## 10. Files Changed
- `src/config/site.ts` (modified — one line + explanatory comment)
- `docs/phase-28-domain-canonicalization-audit.md` (new)
- `docs/phase-28-summary.md` (new, this file)

## 11. Tests
TypeScript: **Pass**. ESLint: **Pass**. Production build: **Pass,
32/32 routes** (unchanged count).

## 12. Production Status
**Live and verified healthy** on both `https://elvicrank.com` and
`https://www.elvicrank.com` — see §7 for the full direct-HTTP
verification, performed after deployment, not assumed from build
success alone.

## 13. GSC Status / Impact

**GSC dashboard access is unavailable in this environment** — stated
explicitly, nothing below is inferred from it.

What can be said from what this project already has on record: Phase
26's real GSC exports showed `elvicrank.com` and `www.elvicrank.com`
both appearing as separately-tracked URLs with their own impressions —
which is exactly consistent with (and now explained by) this phase's
finding of a pre-existing apex/www signal conflict. **Whether Google
has already consolidated these into one canonical URL, and which one,
is not knowable from this environment** — this is not claimed either
way.

**Owner action, if GSC is set up as two separate, unmerged properties**
(one for `elvicrank.com`, one for `www.elvicrank.com`): Search Console
supports a preferred-domain / domain-property setup that can
consolidate reporting; if the owner's GSC is currently split, verifying
both properties list the same sitemap
(`https://www.elvicrank.com/sitemap.xml`) and monitoring for
consolidation over the following weeks is the recommended follow-up.
This is a GSC-configuration matter the owner would need to check
directly — this environment cannot see or modify GSC property settings.

## 14. Remaining Blockers
None blocking this phase's completion. The only open item is the GSC
property-consolidation check in §13, which requires owner-side GSC
dashboard access this environment doesn't have.

## 15. Recommended Next Phase
Not proposing a specific next phase per the stop condition. If one
follows, the natural continuation is confirming (via a future
owner-supplied GSC export) that impressions/positions previously split
across `elvicrank.com` and `www.elvicrank.com` have consolidated under
the now-consistent `www` canonical — not something to check
immediately, since GSC data takes time to reflect a signal change like
this one.

---

Not starting another phase automatically.
