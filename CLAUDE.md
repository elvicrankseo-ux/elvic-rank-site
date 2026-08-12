# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

Marketing site for **Elvic Rank**, an SEO agency for local service businesses. A single-page Next.js App Router site (`src/app/page.tsx` stacks ~12 homepage sections) plus statically generated per-service landing pages at `/services/[slug]`. No backend, no database, no auth — content lives in TypeScript data files, forms fall back to `mailto:` links, and everything is SEO/metadata-driven.

Stack: Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · Framer Motion · lucide-react icons.

**Read `AGENTS.md` before writing any code** — this Next.js version has breaking API changes from your training data; the docs it points to (`node_modules/next/dist/docs/`) only exist after `npm install`.

## Commands

```bash
npm install      # required before anything else — node_modules is gitignored and not present by default
npm run dev      # start dev server (localhost:3000)
npm run build    # production build — also the fastest way to catch type errors across the whole app
npm run start    # serve the production build
npm run lint     # eslint (flat config: eslint-config-next core-web-vitals + typescript)
```

There is no test suite/runner configured in this repo. `npm run build` (which runs `tsc` via Next) is the primary correctness check; run `npm run lint` alongside it before considering a change done.

`scripts/dev-server.js` is only for an external IDE/preview launcher that spawns Next from outside the repo root — irrelevant to normal `npm run dev` usage.

## Architecture

### Content is centralized, components are dumb

Two files are the source of truth for nearly everything rendered on the site:

- **`src/config/site.ts`** — business facts (name, email, WhatsApp, social links, nav items, CTA labels/hrefs). Every component that shows NAP info, social links, or a CTA target pulls from `siteConfig`, never hardcodes it. Note `phone` and `location` are deliberately `null`/placeholder-free rather than faked — check this file before assuming contact info is wrong or needs "fixing."
- **`src/data/services.ts`** — one array of `Service` objects driving both the homepage services grid *and* the individual `/services/[slug]` pages (title, copy, benefits, FAQs, icon). Adding a service is normally just adding an entry here; `generateStaticParams` in the `[slug]` route picks it up automatically, and it flows into the sitemap too.

When changing copy or business info, edit these data files rather than the components that render them.

### SEO plumbing (this is the point of the site)

- **`src/lib/metadata.ts`** — `buildMetadata()` builds page-level `Metadata` on top of the root defaults in `layout.tsx`, always setting an explicit canonical URL. Use it for any new page.
- **`src/lib/schema.ts`** — JSON-LD builders (Organization, WebSite, FAQPage, Service, BreadcrumbList). `layout.tsx` renders Organization+WebSite globally; individual pages (e.g. `services/[slug]/page.tsx`) add their own Service/Breadcrumb/FAQ schema via `<script type="application/ld+json">`.
- **`src/app/sitemap.ts`** / **`src/app/robots.ts`** — generated from `siteConfig` and `services`; new static routes should be added to the sitemap here.

Any new page should follow the same pattern: `generateMetadata` via `buildMetadata`, JSON-LD via `lib/schema.ts` helpers, and a sitemap entry.

### Design tokens, not ad hoc colors

`src/app/globals.css` defines the palette as CSS custom properties (`--color-ink`, `--color-paper`, `--color-accent`, etc.) wired into Tailwind v4 via `@theme inline`. Two backgrounds recur throughout: light "paper" sections (`bg-paper`/`bg-paper-muted`, `text-foreground`/`text-muted`) and dark "ink" sections (`bg-ink`, `text-ink-foreground`/`text-muted-dark`). Components that can render on either (e.g. `SectionHeading`) take a `tone: "light" | "dark"` prop rather than assuming a background. Match this pattern instead of introducing raw hex colors or new tokens ad hoc.

`cn()` in `src/lib/utils.ts` (clsx + tailwind-merge) is the standard way to compose/override Tailwind classes — used everywhere className logic is conditional.

### Component conventions

- `src/components/ui/` — generic, reusable primitives (`Button`, `SectionHeading`, `FaqAccordion`, `Breadcrumbs`, social links/icons). `Button` polymorphically renders as `next/link` (internal `/` paths), a plain `<a>` (external/`mailto:`), or `<button>` based on props — reuse it rather than hand-rolling links/buttons.
- `src/components/sections/` — one file per homepage section (`hero.tsx`, `services.tsx`, `contact.tsx`, …), composed in order by `src/app/page.tsx`. Each is self-contained with its own copy/data.
- `src/components/layout/` — `Navbar`/`Footer`, rendered once in the root layout so they appear on every route.
- Interactive sections (scroll listeners, forms, `framer-motion` animation, accordions) are marked `"use client"`; everything else stays server-rendered by default. Scroll-triggered entrance animation (`initial`/`whileInView`/`viewport={{ once: true }}`) is the standard pattern for section reveals — copy the existing transition easing (`[0.16, 1, 0.3, 1]`) for consistency.

### Forms have no backend yet

`Contact` and `FreeAudit` are client-side forms with manual validation (see `validate()` in each) that build a `mailto:` link via `src/lib/mailto.ts` and set `window.location.href` — there is no API route or email service wired up (see the `TODO(elvic)` comment in `free-audit.tsx`). If asked to wire up real form submission, expect to add a route handler or third-party form service (Formspree/Resend are mentioned as candidates) and update the submit handler; the rest of each component (state, validation, success UI) shouldn't need to change.

### Path alias

`@/*` maps to `src/*` (see `tsconfig.json`). Use it for all internal imports instead of relative paths.
