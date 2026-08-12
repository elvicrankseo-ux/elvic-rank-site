# Business Identity Reference

The single source of truth for Elvic Rank's business identity, for use in
any future directory listing, profile, or outreach. Every value below was
pulled directly from `src/config/site.ts` and `src/lib/schema.ts` — no
value was invented. Where information doesn't exist, that's stated
explicitly rather than filled with a placeholder.

## Canonical Record

```
BUSINESS NAME:        Elvic Rank
LEGAL NAME:            Elvic Rank (as configured — not independently verified as a registered legal entity name; confirm with the owner before using on a legal/formal listing)
WEBSITE:               https://elvicrank.com
EMAIL:                 info@elvicrank.com
PHONE:                 NOT PROVIDED — OWNER ACTION REQUIRED (siteConfig.phone is intentionally null)
ADDRESS:               NONE — Elvic Rank operates as a remote/service-area business by design (siteConfig.location.mode = "remote"); do not invent one
SERVICE AREA:          United States, Canada, United Kingdom, Australia, Africa
PRIMARY CATEGORY:      SEO Agency / Digital Marketing Agency (inferred from site positioning — not a value the codebase stores explicitly; confirm exact category wording against whichever directory/GBP category list is being used)
DESCRIPTION (short):   SEO agency for local service businesses. Technical audits, content, and Google Business Profile growth that turn visibility into booked jobs.
TAGLINE:               SEO That Compounds
WHATSAPP:              +234 707 152 5686 (https://wa.me/2347071525686)
STRATEGY-CALL BOOKING: https://calendly.com/elvicrankseo/30min
LOGO:                  /logo.jpg (also used as favicon/social preview base)
```

## Verified Social Profiles
Only list profiles that exist in the codebase — do not add others without
confirming they're real and owned by Elvic Rank:

- Instagram: `https://instagram.com/elvicrank`
- X: `https://x.com/elvicrank`
- TikTok: `https://tiktok.com/@elvicrank`

**Not present:** LinkedIn, Facebook. If either exists in reality but isn't
wired into the site, that's a codebase gap — update `siteConfig.social`
first, then use it in any external listing (see Owner Actions).

## Founder / Team Identity
**NOT ESTABLISHED.** No named individual (founder, team member, or
author) appears anywhere in the codebase — the site speaks collectively
as "Elvic Rank" / "we" throughout. This is a real gap for any directory
or profile that expects a named contact person. See
`docs/phase-20-off-page-execution.md` §Founder Authority and
`docs/phase-20-owner-actions.md` for what's needed to resolve it.

## Consistency Check (this phase's audit)

| Field | Value | Found in | Consistent? |
|---|---|---|---|
| Name | Elvic Rank | `siteConfig.name`, schema `name`, navbar, footer, every page title | ✅ Single source, no drift found |
| Website | `https://elvicrank.com` | `siteConfig.url`, canonical on every page | ✅ |
| Email | `info@elvicrank.com` | `siteConfig.email`, schema, footer | ✅ |
| Phone | (none) | `siteConfig.phone = null` | N/A — **PHONE NUMBER NOT PROVIDED / OWNER DECISION REQUIRED** |
| WhatsApp | `+234 707 152 5686` | `siteConfig.whatsapp`, floating CTA, footer, contact card | ✅ |
| Address | (none, deliberate) | `siteConfig.location.mode = "remote"` | ✅ Consistent with the remote-agency positioning |
| Service area | US/Canada/UK/Australia/Africa | `siteConfig.location.servingLine` **and** `getOrganizationSchema().areaServed` | ✅ Matches exactly between visible copy and structured data |
| Description | (see above) | `siteConfig.description`, root metadata, `ProfessionalService` schema | ✅ |
| Schema type | `ProfessionalService` | `src/lib/schema.ts` | ✅ Correct type for a service business with no storefront |
| Founder/author | (none) | Checked `blog.ts` (no author field on any post), `about.tsx` (collective voice only) | N/A — **FOUNDER IDENTITY NOT ESTABLISHED / OWNER DECISION REQUIRED** |

**No inconsistency was found anywhere the business identity already
exists.** The only gaps are things that were never established in the
first place (phone, address, founder identity) — not drift between
different parts of the site.

## Usage Note
Any future directory listing, guest-post bio, or profile should copy the
exact values above verbatim — do not paraphrase the business name or
description differently across platforms, since NAP/entity consistency is
itself a ranking and trust signal.
