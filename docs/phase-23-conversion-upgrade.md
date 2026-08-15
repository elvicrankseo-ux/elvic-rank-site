# Phase 23 — Conversion & Authority Upgrade: Findings Table

Working table produced before any implementation, per the phase's Step
2 instruction. "Priority" reflects confidence that a change is genuinely
justified, not how interesting the area is.

| Area | Current State | Problem | Evidence | Proposed Action | Priority |
|---|---|---|---|---|---|
| Homepage overall | 12 sections: Hero → TrustStrip → Services → WhyUs → Industries → Process → CaseStudies → Testimonials → About → Blog → FreeAudit → FAQ → Contact | None found — already answers all 5 core visitor questions (what/who/outcome/trust/next-step) with a clear primary CTA in the hero and no CTA overload | Direct code inspection (Phase 22 §3, reconfirmed) | KEEP | — |
| Homepage Process section | 5-step "Free SEO Audit → Strategy Session → Technical Implementation → SEO Optimization → Growth Tracking" timeline, already answers "what happens if I book" for the audit path | None on the audit path. Gap: the *Strategy Call* CTA (used as an equal-weight alternative on every service page) has no equivalent explanation anywhere on the site | Read `process.tsx`, `faq.tsx`, all 5 priority service pages — no existing copy answers "what happens on a strategy call" | ADD one FAQ entry answering it directly, using only honest, generic, already-consistent language (no new facts) | HIGH |
| Homepage Testimonials section | Already explicitly explains the no-fake-proof policy ("Proof before promises") and links to Current Projects | None — this section already *is* the legitimate trust-architecture solution Objective C asks for | Read `testimonials.tsx` | KEEP | — |
| Homepage About section | 4 honest principles, collective "we" voice, no invented founder | None — Objective C explicitly forbids inventing founder info if it doesn't exist, and it doesn't | Read `about.tsx`; reconfirmed via Phase 20's `business-identity-reference.md` audit | KEEP | — |
| Case studies (Akanaby Logistics) | Client identity ✓, work performed ✓ (Website Design/GBP/SEO Campaign with status), current status ✓, results honestly absent with an explanation | Objective D asks for an "initial situation" description in addition to what's already shown | No real information about the client's pre-engagement situation exists anywhere in the repo or prior phase docs | Reviewed — cannot add without inventing information (Rule 19); adding a generic placeholder sentence would restate, not add, information | NONE — documented, not implemented |
| `/services/local-seo-google-business-profile` | Full `richContent`, 8 FAQs, 5 supporting-article links, directly aligned to Phase 21's largest GSC query cluster | None found on repeat inspection (4th phase to review this page: 18, 20, 21, 22, now 23) | Direct code inspection | KEEP | — |
| `/services/seo-audit` | Full `richContent`, strongest GA4 engagement signal in Phase 22's sample (20% bounce) | None found | Direct code inspection | KEEP | — |
| `/services/technical-seo-audit` | Full `richContent`, exact-match title to its GSC query, links to `technical-seo-checklist` | None found | Direct code inspection | KEEP | — |
| `/services/off-page-seo` | Full `richContent`, no overpromising language (reconfirmed 3rd time: Phase 20, 22, 23), FAQ covers the "is this the same as link building" objection already | None found; the odd GA4 view/user pattern flagged in Phase 22 has no structural explanation on repeat review | Direct code inspection | MONITOR — no change | — |
| `/services/website-design` | Full `richContent`, covers migration/ranking-preservation objection already | None found | Direct code inspection | KEEP | — |
| CTA wording (all 14 service pages) | Uniform "Book Your Free SEO Audit" / "Book a Free Strategy Call" header CTAs, uniform footer CTAs, tied to `seo_audit_cta_click`/`strategy_call_click`/`contact_cta_click` | Objective F suggests differentiating CTA copy by intent | Phase 22 already tested this hypothesis against real (if thin) evidence: the two best-engagement pages use this exact uniform pattern, contradicting the premise | Reviewed — no change justified; reversing a reasoned Phase 22 conclusion without new evidence would be speculative, not evidence-based | NONE |
| Internal authority flow (blog → service → CTA) | All 4 GSC-visible articles already link to their correct commercial page(s) | None found | Reconfirmed 3rd time (Phase 21, 22, 23) via direct inspection of `blog.ts` | KEEP | — |
| Trust badges / "trusted by" claims | None exist anywhere in the codebase | N/A | Grep confirmed no "trusted by," "#1," or guarantee language exists | N/A — nothing to remove, nothing to add | — |

## What Was Implemented

Exactly one change, matching the single HIGH-priority row above: a new
FAQ entry, **"What actually happens on a free strategy call?"**, added
to `src/components/sections/faq.tsx` immediately after the existing
"What's included in the free SEO audit?" question (the two are the
site's only two "what do I actually get" objection-handling questions,
so grouping them together is the natural placement).

**Why this one, and only this one:** it's the single item across every
objective in this phase's prompt where (a) a genuine, previously
undocumented visitor objection exists ("will someone pressure me on
this call"), (b) it can be answered using only information already
established as true elsewhere on the site (the Process section's
existing tone and the Testimonials section's "no pressure" positioning),
and (c) it requires no new component, no analytics change, no schema
change (the homepage FAQ already feeds `getFaqSchema()` automatically),
and touches exactly one file.

Every other row was reviewed and either already satisfied the
objective (KEEP) or could not be improved without inventing information
that doesn't exist (documented, not implemented) — both are treated as
successful outcomes of the audit, not gaps in the work.
