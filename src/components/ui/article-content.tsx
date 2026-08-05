import type { ContentBlock } from "@/data/blog";

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
        if (block.type === "list") {
          return (
            <ul key={index} className="space-y-2 pl-1">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-muted">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index} className="text-base leading-relaxed text-muted">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
