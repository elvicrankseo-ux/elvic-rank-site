# Phase 28 — Domain Canonicalization Audit

*(Numbered Phase 28 — a distinct Phase 27 already exists, covering the
Telegram contact channel integration, commit `38744db`. This phase's
own prompt was itself labeled "Phase 27," colliding with that. Using
the next actually-unused number rather than overwriting existing
history, consistent with how the Phase 24/25 and 26/27 collisions were
handled in this project.)*

## 1. Current Redirect Behavior (verified via direct HTTP, not the browser UI)

```
$ curl -s -D - -o /dev/null https://elvicrank.com/
HTTP/1.1 308 Permanent Redirect
Location: https://www.elvicrank.com/
Server: Vercel
Content-Type: text/plain
(no X-Nextjs-* headers — confirms this redirect happens BEFORE the
 Next.js app, i.e. at Vercel's platform/edge level, not in-app)

$ curl -s -D - -o /dev/null https://www.elvicrank.com/
HTTP/1.1 200 OK
X-Matched-Path: /
X-Nextjs-Prerender: 1
Server: Vercel
(Next.js-specific headers present — confirms www is the domain the
 app actually renders and serves from)
```

**Exact chain:** `elvicrank.com` → 308 → `www.elvicrank.com` → 200.
**Single hop. No loop.** This is the second time this exact behavior
has been independently confirmed (first in Phase 26 after the
emergency revert, now again fresh in this phase, with `next.config.ts`
confirmed to contain no redirect logic of its own both times) — it is
stable, not a transient state.

## 2. Vercel Configuration Findings

**Vercel dashboard configuration could not be directly inspected in
this environment** — no dashboard/API access exists here, and no
`vercel.json` exists in the repository to inspect instead. This is
stated plainly rather than inferred as fact.

**What CAN be said, and is a direct observation, not a guess:** the
apex→www redirect returns generic `Server: Vercel` / `Content-Type:
text/plain` headers with no Next.js-specific headers, which is the
signature of a platform-edge-level redirect (Vercel's own domain
routing, configured outside this repository) rather than an
application-level one — since `next.config.ts` has no `redirects()`
function (confirmed by reading the file directly) and no other
redirect mechanism exists in the codebase.

## 3. Codebase Domain References

Full repository search (excluding `node_modules`, `.git`, and `docs/`)
for the literal string `elvicrank.com`:

| Reference | File | Classification |
|---|---|---|
| `siteConfig.url = "https://elvicrank.com"` | `src/config/site.ts` | **MISMATCH** — the single source of truth every canonical/OG/sitemap/schema URL derives from; contradicted the real serving domain |
| `siteConfig.domain = "elvicrank.com"` | `src/config/site.ts` | NON-ISSUE — plain string (no protocol/www), used only in human-readable prose on `/terms`, not a technical SEO signal |
| `` `Message from ${name} via elvicrank.com` `` | `src/components/sections/contact.tsx` | NON-ISSUE — email subject line text, not indexed, not a URL |
| `email: "info@elvicrank.com"` | `src/config/site.ts` | NON-ISSUE — an email address; must NOT be changed regardless of the www decision (there is no `www.elvicrank.com` email domain) |

**Everything else in the app derives from `siteConfig.url` — confirmed
via `grep` for `siteConfig.url` usage:** `src/app/sitemap.ts` (all 5
entry types), `src/lib/schema.ts` (Organization, WebSite, Service,
Article, BreadcrumbList `@id`/`url` fields), `src/app/robots.ts`
(sitemap reference), `src/app/layout.tsx` (`metadataBase`, root
canonical, root OG `url`), `src/lib/metadata.ts` (per-page canonical +
OG `url`, used by every service and blog page via `buildMetadata()`).
**This meant one single-line change correctly cascades everywhere** —
confirmed directly in the production build output (§ Verification
below), not assumed.

## 4. Canonical-Domain Decision

**Decision: `https://www.elvicrank.com` is the canonical domain.**

Applying the phase's own decision hierarchy:
1. *Explicit Vercel production configuration* — unavailable in this
   environment (§2).
2. *Existing stable production redirect behavior* — **decisive here**:
   confirmed twice, across two separate phases separated by real
   elapsed time, via raw HTTP headers, single-hop, no loop, with
   Next.js-specific response headers present only on `www`. This is
   the strongest evidence tier actually available.
3. *Existing deployment configuration* — `next.config.ts` has no
   redirect logic; doesn't conflict with #2.
4. *Existing canonical/sitemap architecture* — previously declared
   apex, which **actively contradicted** the real serving domain. Per
   this phase's explicit instruction, this tier must NOT override tier
   2 — "the previous Phase 26 incident proves that assumption is
   unsafe."
5. *Owner confirmation* — not required to reach a decision, since tier
   2 evidence was clear, stable, and repeatedly confirmed. Documented
   here in full so the owner can verify or correct this reasoning at
   any time.

## 5. Sitemap Findings
Before: 25 URLs, all `https://elvicrank.com/...`. After: 25 URLs (same
count — no route added/removed), all `https://www.elvicrank.com/...`.
Verified directly in the production build output
(`.next/server/app/sitemap.xml.body`).

## 6. Robots Findings
Before: `Sitemap: https://elvicrank.com/sitemap.xml`. After: `Sitemap:
https://www.elvicrank.com/sitemap.xml`. Verified directly in the
production build output (`.next/server/app/robots.txt.body`). `Allow:
/` unchanged — no accidental disallow.

## 7. Schema Findings
`Organization`/`ProfessionalService`, `WebSite`, `Service` (per
service page), `Article` (per blog page), and `BreadcrumbList` `@id`
and `url` fields all derive from `siteConfig.url` in
`src/lib/schema.ts` — confirmed cascading to `www.elvicrank.com` in
the built homepage HTML (`"url":"https://www.elvicrank.com"`). No
schema type was added, removed, or restructured.

## 8. Open Graph Findings
Root layout and every page built via `buildMetadata()` set `og:url`
from `siteConfig.url` — confirmed in built HTML:
`<meta property="og:url" content="https://www.elvicrank.com"/>`. No
image URLs, social profile URLs, or other OG fields were touched.

## 9. GA4 Findings
`G-4XHTCF3GM0` unchanged — `src/components/analytics/google-analytics.tsx`
doesn't reference `siteConfig.url` at all (it reads the measurement ID
from an environment variable), so this change has no interaction with
analytics configuration. All 5 event names unchanged, unrenamed.

## 10. Risks Considered
- **Redirect loop risk:** none — this change touches zero redirect
  logic. `next.config.ts` was not modified at all this phase.
- **Indexation churn risk:** changing the canonical domain in Search
  Console's eyes can cause temporary reprocessing as Google
  re-crawls and re-confirms the canonical — expected, not a defect,
  and arguably corrects an existing signal conflict rather than
  creating a new one (Google's own guidance generally treats a stable
  redirect as a stronger signal than a page's own canonical tag, so
  Google was arguably already leaning toward `www` before this fix;
  this change removes the conflict rather than introducing one).
- **Email/domain-name confusion risk:** deliberately did NOT touch
  `siteConfig.domain` or `siteConfig.email`, since doing so would be
  actively wrong (there is no `www.` email domain) — see §3.

## 11. Changes Made
- `src/config/site.ts` — `siteConfig.url` changed from
  `"https://elvicrank.com"` to `"https://www.elvicrank.com"`, with an
  inline comment recording the evidence and explicitly warning against
  re-adding a `next.config.ts` redirect.

## 12. Changes Deliberately NOT Made
- **No `next.config.ts` redirect was added.** Vercel's existing
  apex→www redirect already works correctly (single-hop, no loop) —
  adding an app-level redirect on top of it is exactly the Phase 26
  mistake. Per Task 7's own guidance: "If Vercel already handles the
  redirect correctly, DO NOT add another redirect."
- `siteConfig.domain` — left as `"elvicrank.com"` (non-issue, prose
  only).
- `contact.tsx`'s email-subject text — left unchanged (non-issue,
  prose only).
- `siteConfig.email` — left unchanged (must stay apex; email domains
  don't take a `www.` prefix).
- No titles, H1s, content, keyword ownership, or new pages — none of
  this phase's evidence pointed at any of those.

## 13. Verification Results
- TypeScript: **Pass**. ESLint: **Pass**. Production build: **Pass,
  32/32 routes** (unchanged count).
- Directly inspected the production build's generated
  `sitemap.xml.body`, `robots.txt.body`, homepage `index.html`, a
  service page HTML, and a blog page HTML — all confirmed to now
  reference `www.elvicrank.com` consistently (§5–8).
- Live production verification: see `docs/phase-28-summary.md` §7 and
  the chat transcript for the exact post-deploy redirect-chain
  re-test.

## 14. Owner Actions
See `docs/phase-28-summary.md` §13/§14 (GSC impact and owner actions).
