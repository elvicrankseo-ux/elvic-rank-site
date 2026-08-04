import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = { name: string; href?: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-accent-deep"
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={isLast ? "text-foreground" : undefined}
                >
                  {item.name}
                </span>
              )}
              {!isLast && <ChevronRight size={14} aria-hidden />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
