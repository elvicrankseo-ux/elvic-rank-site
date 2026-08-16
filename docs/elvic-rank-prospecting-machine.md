# Elvic Rank Prospecting Machine

A repeatable, niche-agnostic client-acquisition workflow. Built and
first populated for **towing companies**; every section is written so
"towing" can be swapped for roofing, HVAC, plumbing, or law firms
later without redesigning the process — only the audit specifics
(`docs/towing-seo-audit-framework.md`) and outreach copy
(`docs/towing-outreach-templates.md`) are niche-specific.

**No CRM or prospecting software exists in this repository** —
confirmed by a full-codebase search before writing this document. This
is a process and data specification the owner can run today in a
spreadsheet (Google Sheets/Excel/Airtable — any tool with the fields
below), not a new application to build. Building a dedicated web app
for this is explicitly out of scope for this phase (see the phase's
own "do not create unnecessary new services" rule) — revisit only if
the manual process proves the volume genuinely requires it.

## 1. Target Niche
**Towing companies** (first vertical). Reason: high-intent, immediate-
need searches (see `docs/towing-seo-audit-framework.md` and the
`/industries/towing-companies` page) mean the value of good local SEO
is easy for a prospect to understand quickly — a shorter sales
education cycle than a lower-urgency category.

## 2. Target Geography
Match `siteConfig.location.servingLine`: United States, Canada, United
Kingdom, Australia, Africa. Within that, prioritize mid-size metro
areas — large enough to have real search volume and multiple
competing towing operators (so the competitive-gap pitch is real), not
so large that the Local Pack is dominated by a handful of huge
national chains that are hard to out-position.

## 3. Prospect Sourcing
Realistic, no-special-tool-required sources: Google Maps/Search
results for "[towing / tow truck] near [city]" in target metros; the
existing "towing" trade directories and Google Business Profile
category listings; local business directories. **This document does
not fabricate a specific prospect list** — sourcing is the owner's
live research task, using the qualification criteria in §4 to filter
what's found.

## 4. Prospect Qualification
A found business is **qualifiable** if all of the following are true:
- It's a real, operating towing business (not a directory listing
  with no real business behind it).
- It has *some* existing web presence (a website, a Google Business
  Profile, or both) — a business with zero web presence isn't
  reachable through this system's outreach channels.
- It's in a target geography.
- There's a visible, contactable channel (phone, email, contact form,
  or social profile).

Businesses failing any of these are **not qualified** — don't spend
audit time on them.

## 5. Lead Scoring
Score every qualified prospect 0–100 across these weighted categories,
using direct observation (never guessed):

| Category | Weight | What increases the score |
|---|---|---|
| Website quality | 15 | Poor/outdated/no mobile site scores high opportunity (weak site = bigger gap Elvic Rank can close); a genuinely strong site scores low opportunity here |
| GBP quality | 20 | Same logic — unclaimed, incomplete, or poorly maintained profile = higher opportunity |
| Google visibility | 15 | Weak/absent Local Pack presence for obvious searches = higher opportunity |
| Reviews | 15 | Low volume or stale reviews = higher opportunity |
| Service-area coverage clarity | 10 | Unclear or missing service-area info = higher opportunity |
| Mobile experience | 10 | Poor mobile usability = higher opportunity |
| Conversion setup | 5 | No click-to-call, buried phone number = higher opportunity |
| Competitive weakness (vs. local rivals) | 5 | Visibly behind local competitors = higher opportunity |
| Business legitimacy | 5 (gate, not additive) | Real, established, contactable business — a legitimacy failure caps the total score regardless of other factors |
| Contactability | (gate) | No real contact channel = not scoreable, excluded per §4 |

**This scores opportunity size, not lead quality alone** — a business
with real, visible gaps is a *better* lead than one that's already
doing everything right, since there's a genuine, honest pitch to make.
Score each category 0–100 proportional to its weight, sum, then apply
thresholds:

| Score | Tier | Action |
|---|---|---|
| 80–100 | **Hot** | Deep-audit and contact same day |
| 60–79 | **High Priority** | Deep-audit and contact within the week |
| 40–59 | **Nurture** | Light-audit, add to a slower-cadence follow-up list |
| 0–39 | **Low Priority** | Log and deprioritize; don't spend audit time yet |

These thresholds are a starting model, not fixed law — adjust once
real reply/close data (§13) shows which tier actually converts best.

## 6. Website Audit
Run §B, §C, §D, §E of `docs/towing-seo-audit-framework.md` against the
prospect's site.

## 7. GBP Audit
Run §A of `docs/towing-seo-audit-framework.md` against the prospect's
Google Business Profile.

## 8. Outreach
Use `docs/towing-outreach-templates.md`. Personalize every send with a
real, specific, observed detail from the audit — never a generic
opener.

## 9. Follow-Up
3 follow-ups, spaced out (e.g. day 3, day 7, day 14 after initial
contact), using the follow-up templates in
`docs/towing-outreach-templates.md`, ending with a "breakup" message if
there's still no response — then move the lead to a slow-nurture or
closed-no-response state rather than continuing indefinitely.

## 10. CRM Status
See §11, the prospect database spec — "CRM status" is one field in
that record (the pipeline stage, §11 below), not a separate system.

## 11. Sales Pipeline

```
NEW LEAD
  ↓ (passes §4 qualification)
QUALIFIED
  ↓ (website + GBP audit completed, §6-7)
AUDIT READY
  ↓ (first outreach sent, §8)
CONTACTED
  ↓ (prospect replies in any form)
RESPONDED
  ↓ (full audit delivered, per the audit-framework's delivery format)
AUDIT SENT
  ↓ (prospect agrees to a call)
CALL BOOKED
  ↓ (scoped proposal sent after the call)
PROPOSAL SENT
  ↓ (price/scope discussion, if any)
NEGOTIATION
  ↓
WON  →  ONBOARDING  →  ACTIVE CLIENT
  or
LOST  →  closed, logged with a real reason (see below)
```

**What causes each transition:**
- **New Lead → Qualified:** passes §4's 4 criteria.
- **Qualified → Audit Ready:** website + GBP audit actually completed
  and scored (§5–7).
- **Audit Ready → Contacted:** first outreach message actually sent.
- **Contacted → Responded:** any reply — including "not interested"
  (log it as Lost with that reason, don't leave it stuck in
  Contacted).
- **Responded → Audit Sent:** the full audit delivered.
- **Audit Sent → Call Booked:** a scheduled call confirmed.
- **Call Booked → Proposal Sent:** scoped proposal delivered after the
  call.
- **Proposal Sent → Negotiation:** any back-and-forth on price/scope.
- **→ Won/Lost:** a decision either way. **Log every Lost with the
  real reason** (price, timing, went with someone else, no response,
  not a fit) — this is the data that improves targeting and scoring
  over time, not just a discard bin.
- **Won → Onboarding → Active Client:** the actual delivery/service
  relationship begins — outside this document's scope, but the
  pipeline should track that the lead became a real client.

## 12. Prospect Database Specification

No existing prospect database was found in this repository — this is
a field specification for a new spreadsheet/table, not a schema for
existing software.

| Field | Notes |
|---|---|
| Business Name | |
| Website | |
| City / State / Country | |
| Phone | |
| Email | |
| GBP URL | |
| Industry | e.g. "Towing" — the field that makes this reusable across verticals |
| Service Area | |
| Reviews (count) | |
| Rating | |
| Website Score | From §6 |
| GBP Score | From §7 |
| SEO Opportunity Score | The composite score from §5 |
| Lead Score | Same as above, or a separate qualitative note if the two diverge |
| Lead Status | One of the pipeline stages in §11 |
| Contact Date | |
| Follow-up 1 / 2 / 3 (dates) | |
| Response | Y/N + short note |
| Audit Sent (Y/N + date) | |
| Call Booked (Y/N + date) | |
| Proposal Sent (Y/N + date) | |
| Deal Status | Won / Lost / In Progress |
| Monthly Value | Only once a real deal value exists — never a projected/assumed number |
| Notes | Free text |
| Source | Where the prospect was found (§3) |

## 13. Sales Call
Not scripted in detail here (out of this phase's scope), but the
call's job is to confirm the audit findings resonate, understand the
prospect's actual priorities/budget, and set expectations honestly —
no guaranteed rankings, no guaranteed lead counts, consistent with
every other page on this site.

## 14. Proposal
Scoped to what the audit actually found — not a fixed package pitched
regardless of findings.

## 15. Onboarding
Outside this phase's scope to fully design; flag as a follow-up item
once the first towing client closes through this system.

## 16. Reporting
Track pipeline counts by stage weekly (how many in each stage, not
just totals) — this is what makes §17's acquisition math real instead
of assumed, once actual data exists.

---

## 17. Owner's Daily Prospecting Workflow

| Target | Find | Qualify | Deep-audit | Contact | Follow-up existing leads |
|---|---|---|---|---|---|
| **Minimum** | 5 | 3 | 1 | 1 | Yes, always |
| **Standard** | 15 | 8 | 3 | 3 | Yes, always |
| **Aggressive** | 30 | 15 | 5 | 5 | Yes, always |

**Consistency matters more than any single day's volume** — the
Minimum target exists specifically so the process never fully stops on
a busy day. Following up with existing leads in the pipeline is listed
as non-negotiable at every level, since a stalled follow-up is a lost
lead regardless of how much new prospecting happens that day.

## 18. Client Acquisition Math (Planning Assumptions — Not a Guarantee)

**Stated explicitly: these are planning assumptions to start from, not
measured Elvic Rank data.** No prospecting has been run yet through
this system, so no real conversion rate exists to report. Replace
every number below with real data as soon as it exists.

```
100 prospects found
 → 60 qualified        (~60% — reasonable web-presence filter rate)
 → 40 contacted         (~67% of qualified — some audits reveal a bad fit)
 → 8 replies            (~20% reply rate — a commonly cited cold-outreach range, not an Elvic Rank measurement)
 → 4 calls booked       (~50% of replies)
 → 2 proposals sent     (~50% of calls)
 → 1 client won         (~50% close rate on proposals)
```

**Under this planning model: roughly 100 contacted prospects → 1
client.** To reach the phase's stated goal of **5 clients**, the
planning assumption is **~500 contacted prospects** (with proportionally
more found/qualified upstream, per the standard daily-workflow table in
§17 — at the Standard pace of 3 contacted/day, that's roughly 165
working days, or faster at the Aggressive pace of 5/day, roughly 100
days).

**This is a planning scaffold to measure against, not a promise.**
Once real reply/booking/close data exists from actual outreach, replace
every ratio above with Elvic Rank's own numbers, and this document
should be updated accordingly — the funnel shape (found → qualified →
contacted → replied → booked → proposed → won) is the durable part;
the percentages are not.
