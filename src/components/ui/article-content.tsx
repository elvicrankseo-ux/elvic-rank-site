import type { ReactNode } from "react";
import Link from "next/link";
import type { ContentBlock } from "@/lib/content-blocks";

/**
 * Paragraph text supports a minimal inline-link syntax — [anchor text](/href)
 * — so blog content can link to service pages without the data model
 * needing a full rich-text/markdown format. Kept intentionally simple:
 * paragraphs only, one small regex, no new dependency.
 */
const INLINE_LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

function renderInlineText(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  INLINE_LINK_PATTERN.lastIndex = 0;
  while ((match = INLINE_LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    nodes.push(
      <Link
        key={`link-${key++}`}
        href={href}
        className="text-accent-deep underline underline-offset-2 hover:text-accent"
      >
        {label}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

export function ArticleContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2
              key={index}
              className="pt-4 font-display text-2xl font-medium text-foreground first:pt-0"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "subheading") {
          return (
            <h3
              key={index}
              className="pt-2 font-display text-lg font-medium text-foreground"
            >
              {block.text}
            </h3>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={index} className="space-y-2 pl-1">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-muted">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  {renderInlineText(item)}
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "orderedList") {
          return (
            <ol key={index} className="space-y-4">
              {block.items.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-medium text-accent-deep">
                    {i + 1}
                  </span>
                  <span className="text-base leading-relaxed text-muted">
                    {renderInlineText(item)}
                  </span>
                </li>
              ))}
            </ol>
          );
        }
        return (
          <p key={index} className="text-base leading-relaxed text-muted">
            {renderInlineText(block.text)}
          </p>
        );
      })}
    </div>
  );
}
