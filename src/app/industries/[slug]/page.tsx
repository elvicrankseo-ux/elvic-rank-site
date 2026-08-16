import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Send } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { ArticleContent } from "@/components/ui/article-content";
import { industries, getIndustryBySlug } from "@/data/industries";
import { getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";
import {
  getIndustryPageSchema,
  getBreadcrumbSchema,
  getFaqSchema,
} from "@/lib/schema";

/**
 * Industry acquisition pages — mirrors src/app/services/[slug]/page.tsx
 * structure deliberately (header hero, rich content, FAQ, related
 * services, final CTA) so the two page families stay visually and
 * behaviorally consistent. Reuses the exact same CTA/event/schema
 * building blocks rather than introducing new ones — see
 * docs/phase-30-growth-strategy.md for the reasoning.
 */
type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  return buildMetadata({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const relatedServices = industry.relatedServiceSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  const jsonLd = [
    getIndustryPageSchema(industry),
    getBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Industries", path: "/#industries" },
      { name: industry.label, path: `/industries/${industry.slug}` },
    ]),
    getFaqSchema(industry.faqs),
  ];

  const Icon = industry.icon;

  return (
    <main className="flex-1">
      {jsonLd.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Header */}
      <section className="bg-paper py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Industries", href: "/#industries" },
              { name: industry.label },
            ]}
          />

          <div className="mt-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent-deep">
            <Icon size={26} aria-hidden />
          </div>

          <h1 className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            {industry.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {industry.heroIntro}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              href={siteConfig.cta.primary.href}
              variant="accent"
              size="lg"
              gaEvent="seo_audit_cta_click"
              gaParams={{ location: "industry_header", industry: industry.slug }}
            >
              Get a Free Towing SEO Audit
              <ArrowRight size={18} aria-hidden />
            </Button>
            <Button
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              gaEvent="strategy_call_click"
              gaParams={{ location: "industry_header", industry: industry.slug }}
            >
              Book a Free Strategy Call
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted">
            Not sure which to pick? The audit is self-serve — send your
            details and we reply directly. The strategy call is a live
            30-minute conversation if you&apos;d rather talk it through
            first.
          </p>
        </div>
      </section>

      {/* Rich content */}
      <section className="bg-paper-muted py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ArticleContent blocks={industry.richContent} />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper-muted py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-display text-2xl font-medium text-foreground sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-8">
            <FaqAccordion items={industry.faqs} />
          </div>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="bg-paper py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="font-display text-2xl font-medium text-foreground sm:text-3xl">
              Related services
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {relatedServices.map((related) => {
                const RelatedIcon = related.icon;
                return (
                  <Link
                    key={related.slug}
                    href={`/services/${related.slug}`}
                    className="group flex flex-col rounded-2xl border border-paper-border bg-paper-muted p-5 transition-colors hover:border-accent/40"
                  >
                    <RelatedIcon size={20} className="text-accent-deep" aria-hidden />
                    <span className="mt-3 text-sm font-medium text-foreground">
                      {related.title}
                    </span>
                    <span className="mt-2 flex items-center gap-1 text-xs font-medium text-accent-deep">
                      Learn more
                      <ArrowRight
                        size={12}
                        aria-hidden
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section id="contact-cta" className="bg-ink py-16 lg:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center lg:px-8">
          <h2 className="font-display text-2xl font-medium text-ink-foreground sm:text-3xl">
            {industry.ctaHeading ?? `Ready to talk about ${industry.label.toLowerCase()}?`}
          </h2>
          <p className="max-w-xl text-muted-dark">
            Start with a free audit, or book a strategy call — either way,
            you&apos;ll walk away with a clearer picture of where you stand.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              href={siteConfig.cta.primary.href}
              variant="accent"
              size="lg"
              gaEvent="seo_audit_cta_click"
              gaParams={{ location: "industry_footer", industry: industry.slug }}
            >
              {siteConfig.cta.primary.label}
              <ArrowRight size={18} aria-hidden />
            </Button>
            <Button
              href="/#contact"
              variant="outline-dark"
              size="lg"
              gaEvent="contact_cta_click"
              gaParams={{ location: "industry_footer", industry: industry.slug }}
            >
              Contact Us
              <Send size={16} aria-hidden />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
