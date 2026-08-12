# Phase 20 — Off-Page SEO Execution Foundation

Builds on [`off-page-seo-strategy.md`](./off-page-seo-strategy.md) (Phase
19) by turning it into a concrete, prioritized execution system. Nothing
in this document was executed — every listed action is prepared,
researched, and documented, not performed. See
[`business-identity-reference.md`](./business-identity-reference.md) for
the canonical identity record referenced throughout, and
[`phase-20-owner-actions.md`](./phase-20-owner-actions.md) for the
step-by-step owner checklist this document feeds into.

## A. Google Business Profile (Task 4/6)

**Readiness:** the website has enough consistent information to support a
legitimate GBP listing — name, description, service area, and logo are
all consistent (see `business-identity-reference.md`). **What's missing:
a phone number** (many GBP configurations expect one, though a
service-area business can operate without a public address).

**Owner checklist:**

| # | Item | Value to use / decision needed |
|---|---|---|
| 1 | Business name | `Elvic Rank` (exact — do not add keywords to the name field, which violates Google's guidelines) |
| 2 | Primary category | Likely "Internet Marketing Service" or "Marketing Agency" (owner to confirm exact match against Google's live category list — not verifiable from this codebase) |
| 3 | Secondary categories | Consider "SEO Agency," "Website Designer" if applicable — owner judgment |
| 4 | Business description | Use `siteConfig.description` verbatim (see reference doc) |
| 5 | Website | `https://elvicrank.com` |
| 6 | Phone | **OWNER ACTION REQUIRED** — no number exists yet |
| 7 | Address/service area | Configure as a **service-area business** (no public address) — matches the site's actual remote-agency model; do not invent a storefront |
| 8 | Hours | Owner decision — not stored anywhere in this codebase |
| 9 | Services | Map directly to the 14 service pages (titles already exist verbatim in `src/data/services.ts`) |
| 10 | Photos | Owner-supplied — none exist in this codebase beyond the logo |
| 11 | Logo | `/logo.jpg` — already exists, ready to upload |
| 12 | Verification | **OWNER ACTION REQUIRED** — Google verifies service-area businesses via phone/video/postcard-to-a-real-address; cannot be performed here |
| 13 | Post-verification | Once verified: keep it active (posts, Q&A, review responses) — this is exactly the ongoing-maintenance work `/services/local-seo-google-business-profile` already describes |

**Priority: HIGH.** This is the single most foundational off-page asset
for a local/service-area business and directly supports the site's own
Local SEO positioning.

## B. NAP / Directory / Citation Opportunities (Task 4/5)

Every category below inherits the same quality bar: relevance over
volume, no paid link schemes, no directories that exist primarily to sell
backlinks.

### Directory Quality Tiers

| Tier | Criteria | Examples of the *type* (not a submission list) |
|---|---|---|
| **TIER 1 — HIGH VALUE** | Directly relevant to digital marketing/SEO agencies, real editorial or curation standard, real traffic | Established marketing-agency directories, Google Business Profile, Bing Places |
| **TIER 2 — RELEVANT/SECONDARY** | General business directories with real usage, not spammy | General business directories (Better Business Bureau-style, Clutch-style agency-review platforms) |
| **TIER 3 — LOW VALUE/OPTIONAL** | Legitimate but low direct impact | Generic startup/business-listing sites with high signup volume and low curation |
| **REJECT** | Exists primarily to sell links, unrelated niches, or high spam risk | Any directory whose business model is "pay for a dofollow link," PBN networks, foreign directories with no topical relevance, gambling/adult/pharma directories, automated link-network submissions |

**This document intentionally does not name specific directory URLs** —
picking real, currently-legitimate directories requires up-to-date
research at the time of action (directory quality changes over time), and
listing specific ones now risks recommending something stale or already
devalued by Google. **Owner action:** before signing up for any directory,
check that it (a) has real organic traffic/usage, (b) reviews submissions
rather than accepting anyone automatically, and (c) is topically relevant
to digital marketing or general local business — reject anything that
doesn't clear that bar, per the Tier system above.

### Local/Business Directories, Chambers, Associations
**Priority: LOW.** Elvic Rank is a remote, multi-country agency, not tied
to one physical locality — chamber-of-commerce-style local associations
are a weaker fit than they'd be for a true local storefront business.
Not rejected outright, just correctly deprioritized against the evidence.

## C. Founder / Expert Authority (Task 8)

**Status: NOT ESTABLISHED.** Confirmed via codebase search — no blog post
has an author field, no named individual appears in `about.tsx`, no
LinkedIn or personal social profile exists in `siteConfig`. The site
speaks entirely as "Elvic Rank" / "we."

**This blocks:** guest-contribution pitches, expert-commentary
opportunities, and personal LinkedIn-based authority building — all of
these formats expect a real named person with a bio.

**Recommended structure once the owner decides to establish one (not
created here — requires real information only the owner has):**

```
NAME:              [real name]
ROLE:              [real role/title]
EXPERIENCE:        [real, verifiable experience — years, prior work]
SPECIALTIES:       [real specialties — e.g. local SEO, technical SEO]
NOTABLE PROJECTS:  [real projects — Akanaby Logistics is the one
                    verifiable example that currently exists]
CERTIFICATIONS:    [only if real — do not invent]
SOCIAL PROFILE:    [a real, owned LinkedIn/professional profile]
```

**Priority: MEDIUM.** Not urgent, but it's the clearest single unlock for
an entire category of off-page opportunity (guest posts, expert quotes)
that's currently completely closed off.

## D. Linkable Asset Audit (Task 9/10)

| Asset | Backlink potential | Likely linkers | Natural anchor themes | Internal links to commercial pages | Improvement needed? |
|---|---|---|---|---|---|
| `/blog/local-citations-explained` | Medium-High — practical, evergreen reference | Local-SEO bloggers, small-business resource pages | "local citations," "NAP consistency guide" | ✅ Already links to `/services/local-seo-google-business-profile` | No — already comprehensive (checked this phase, structure/depth still strong) |
| `/blog/technical-seo-checklist` | Medium-High — actionable checklist format | Technical/dev-adjacent blogs, "SEO checklist" resource pages | "technical SEO checklist" | ✅ Already links to `/services/technical-seo-audit` | No |
| `/blog/how-to-rank-locally-on-google` | Medium — comprehensive guide | Local-business resource pages | "rank locally on Google" | ✅ Already links to `/services/local-seo-google-business-profile` and other local articles | No |
| `/blog/seo-strategy-for-local-service-businesses` | Medium — broad strategic framework | General small-business marketing resources | "SEO strategy for local businesses" | ✅ Links to 9 commercial pages already | No |

**Conclusion: no linkable asset needed a structural improvement this
phase** — all four were re-checked and remain as strong as when built
(Phases 7A, 7B, and 8). No content was changed. The genuine gap remains
what Phase 19 already identified: **no original data/tool/calculator
exists** — still correctly deferred until real query data justifies the
investment (see `off-page-seo-strategy.md` §5).

## E. Internal Authority Flow (Task 11)

**One real gap found and fixed this phase:** the homepage's "Current
Projects" case-study section listed "Website Design" and "Google Business
Profile Optimization" as plain text with no link to the actual service
pages a visitor might want to learn more about. Fixed in
`src/components/sections/case-studies.tsx` — both now link to
`/services/website-design` and `/services/local-seo-google-business-profile`
respectively. "SEO Campaign" was deliberately left unlinked since it
doesn't map to one specific service page and the campaign hasn't started
yet — forcing a link there would be arbitrary, not genuine.

**Everything else audited and found already sufficient:** blog→service,
service→service, service→blog, and homepage→services linking were all
extensively built and verified across Phases 1, 2, 7–10. No other gap was
found this phase.

## F. Case Study / Proof-of-Work Readiness (Task 12)

The existing Akanaby Logistics Inc. section (`case-studies.tsx`) already
follows exactly the honest structure this task asks for: starting
situation implied by industry (Towing & Logistics), work performed
(Website Design — completed; GBP Optimization — in progress), current
status shown per-item, and an explicit statement: *"We only publish real
client results. Detailed case studies will be added as campaigns
mature."* **No duplication was created.** No ranking, traffic, lead, or
revenue numbers exist for this client anywhere in the codebase, and none
were added. This remains correctly labeled **CASE STUDY IN PROGRESS** —
not expanded until the SEO campaign itself starts and produces real,
reportable results.

## G. Outreach Target Research (Task 13)

**No outreach was sent.** The categories below are researched types, not
a list of specific contacted targets (naming specific unverified
publications/sites as "targets" without direct, current research into
their submission guidelines and legitimacy would itself be a form of
unverified claim) — the owner should use this as a research starting
point, not a ready-to-send list.

| Category | Type | Why relevant | Potential link destination | Contact method | Difficulty | Priority |
|---|---|---|---|---|---|---|
| Digital marketing publications | Guest contribution / expert commentary | Directly relevant audience and topical authority | A relevant blog article or service page | Editorial contact form / email | Medium-High (competitive) | MEDIUM |
| Small-business / entrepreneur resource sites | Resource-page outreach | Audience overlaps with Elvic Rank's own target customers | `/blog/local-citations-explained`, `/blog/technical-seo-checklist` | Contact form / email | Medium | MEDIUM |
| SEO communities (forums, Slack/Discord groups) | Genuine participation, not link-dropping | Builds real reputation among peers, indirect authority | N/A — participation only, not a link play | Direct sign-up | Low | LOW (long-term, not a backlink tactic) |
| Complementary vendors (web dev tools, CRM/scheduling software for local businesses) | Partnership | Real mutual-referral fit, not competing | Partner/resource page | Direct email | Medium | MEDIUM |
| Local business organizations | Membership | Lower fit given remote/multi-country model | Member directory | Direct sign-up | Low relevance | LOW |

Full outreach message drafts for each category are in
[`off-page-outreach-templates.md`](./off-page-outreach-templates.md).

## H. Review / Testimonial Authenticity Audit (Task 16)

**Audited this phase — no issues found.** Searched the entire codebase for
testimonial, review, rating, and client-claim content:
- No fabricated testimonials exist anywhere.
- No fabricated client names exist beyond the one real, named client
  (Akanaby Logistics Inc.), which is explicitly labeled as a real,
  in-progress project.
- No review schema (`AggregateRating`, `Review`) exists anywhere in
  `src/lib/schema.ts` or any page — meaning there's no star-rating markup
  that could mislead, because none was ever added.
- No unsupported "X clients served" or "X rankings achieved" claims exist
  anywhere in `services.ts`, `blog.ts`, or any homepage section — this
  was a standing rule enforced since Phase 1 of this project, reconfirmed
  clean this phase.

**Nothing was flagged, nothing was changed** — this section exists to
confirm the audit was performed, not because a problem was found.

## I. Entity / Schema Regression (Task 17)

Re-audited `getOrganizationSchema()` and `getWebsiteSchema()` — both
unchanged and correct: `ProfessionalService` type, consistent name/URL/
description, `areaServed` matching the visible service-area copy exactly,
`sameAs` matching the real social profiles exactly. No duplicate or
conflicting entity data was introduced this phase. Confirmed live in
production verification (see final report).
