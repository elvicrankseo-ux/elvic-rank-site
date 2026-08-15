# Phase 24 — Trust Improvements

## Trust Gaps Reviewed

Re-audited the site's trust architecture against Objective B's list
(transparency, process, expectations, service explanation, realistic
outcomes, who it's for, what happens after contact/during a call/during
an audit):

| Question | Where answered | Status |
|---|---|---|
| What happens during a strategy call? | Homepage FAQ (Phase 23) + **new service-page caption (this phase)** | Now answered at both the homepage and, more importantly, in-context on every service page |
| What happens during/after an SEO audit? | `seo-audit` page richContent (process) + **new FAQ (this phase)** on how results are delivered | Improved — the "how do I get my results" gap is now closed |
| What happens after someone contacts the agency? | `free-audit.tsx` (Phase 23) and now `contact.tsx` (this phase) both state the mailto mechanism honestly before submission | Now consistent across both forms |
| Realistic outcomes / no guarantees | FAQ ("Can you guarantee a #1 ranking...No"), service FAQs, About section | Already strong, unchanged |
| Who Elvic Rank is for / not for | Hero ("SEO for local service businesses"), Industries section (10 named trades) | Already clear, unchanged |
| Proof before promises | `testimonials.tsx` (Phase 23 rewrite) | Already strong, unchanged this phase |

## Improvements Implemented

See `docs/phase-24-conversion-improvements.md` for the full technical
detail. In trust terms, specifically:

1. The new service-page CTA caption is also a trust move, not just a
   conversion one — it tells a visitor honestly that the audit is
   self-serve (not a disguised sales call) and that the strategy call
   is a live conversation (not an automated booking into a pitch),
   before they click anything.
2. The contact form now discloses its actual mechanism
   (mailto, no backend) before submission, matching the standard
   already set for the free-audit form.
3. The new seo-audit FAQ entry removes ambiguity about how results
   are actually delivered, without promising a turnaround time that
   isn't established anywhere in the codebase.

## Proof Limitations (Unchanged, Restated Honestly)

- No real testimonials exist yet. None were fabricated. The
  `testimonials.tsx` section already states this directly.
- The Akanaby Logistics Inc. case study remains honest: work performed
  and current status are shown per-item; no results (traffic, rankings,
  leads, revenue) are claimed, because none are measurable yet. Nothing
  was added or changed here this phase — see Task 8: reviewed, no
  fabrication-free improvement was found beyond what Phase 20/23 already
  built.
- No founder identity, certification, or award exists. None invented.

## Owner-Side Trust Opportunities

Unchanged from Phase 20's checklist (`docs/phase-20-owner-actions.md`):
real testimonials as client relationships mature, a founder/expert
identity decision, and Google Business Profile verification (itself a
trust signal for local searchers, beyond its ranking value). None of
these can be built from this environment — they require the owner's
own participation, credentials, or client permissions.
