import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Sitemap",
  description: `A full list of every page on the ${siteConfig.name} website.`,
  path: "/site-map",
});

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-medium uppercase tracking-wider text-muted-dark">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-accent-deep"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteMapPage() {
  return (
    <main className="flex-1 bg-paper py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Sitemap" }]} />
        <h1 className="mt-6 font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Sitemap
        </h1>
        <p className="mt-3 max-w-xl text-base text-muted">
          Every page on this site, in one place.
        </p>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <LinkColumn
            title="Main"
            links={[
              { label: "Home", href: "/" },
              ...siteConfig.nav.filter((item) => item.label !== "Blog"),
              { label: "Contact", href: "/#contact" },
            ]}
          />
          <LinkColumn
            title="Services"
            links={services.map((service) => ({
              label: service.title,
              href: `/services/${service.slug}`,
            }))}
          />
          <LinkColumn
            title="Blog"
            links={[
              { label: "All Articles", href: "/blog" },
              ...blogPosts.map((post) => ({
                label: post.title,
                href: `/blog/${post.slug}`,
              })),
            ]}
          />
          <LinkColumn
            title="Legal"
            links={[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Sitemap", href: "/site-map" },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
