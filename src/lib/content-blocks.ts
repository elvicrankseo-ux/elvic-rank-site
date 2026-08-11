/**
 * Shared rich-content block model — used by blog articles and, where a
 * service page needs to be a fuller pillar-style page (e.g. Local SEO &
 * Google Business Profile), by src/data/services.ts too. Kept intentionally
 * simple: no markdown/MDX dependency, just typed blocks the ArticleContent
 * component knows how to render, with a minimal inline-link syntax for
 * paragraph/list text — [anchor text](/href).
 */
export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "orderedList"; items: string[] };
