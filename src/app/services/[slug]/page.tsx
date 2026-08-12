import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Send } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { ArticleContent } from "@/components/ui/article-content";
import { services, getServiceBySlug } from "@/data/services";
import { getBlogPostBySlug } from "@/data/blog";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";
import {
  getServiceSchema,
  getBreadcrumbSchema,
  getFaqSchema,
} from "@/lib/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = service.relatedSlugs
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  // Only used by services without richContent — pages with richContent
  // embed their supporting-article link inline, in context, instead.
  const relatedArticle = service.relatedArticleSlug
    ? getBlogPostBySlug(service.relatedArticleSlug)
    : undefined;

  const jsonLd = [
    getServiceSchema(service),
    getBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/#services" },
      { name: service.title, path: `/services/${service.slug}` },
    ]),
    getFaqSchema(service.faqs),
  ];

  const Icon = service.icon;

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
              { name: "Services", href: "/#services" },
              { name: service.title },
            ]}
          />

          <div className="mt-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent-deep">
            <Icon size={26} aria-hidden />
          </div>

          <h1 className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {service.heroIntro}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              href={siteConfig.cta.primary.href}
              variant="accent"
              size="lg"
              gaEvent="seo_audit_cta_click"
              gaParams={{ location: "service_header", service: service.slug }}
            >
              {siteConfig.cta.primary.label}
              <ArrowRight size={18} aria-hidden />
            </Button>
            <Button
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              gaEvent="strategy_call_click"
              gaParams={{ location: "service_header", service: service.slug }}
            >
              Book a Free Strategy Call
            </Button>
          </div>
        </div>
      </section>

      {service.richContent ? (
        /* Pillar-style rich content, for services that need to be a fuller
           commercial landing page (currently only Local SEO & GBP). */
        <section className="bg-paper-muted py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <ArticleContent blocks={service.richContent} />
          </div>
        </section>
      ) : (
        <>
          {/* What's included */}
          <section className="bg-paper-muted py-16 lg:py-20">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
              <h2 className="font-display text-2xl font-medium text-foreground sm:text-3xl">
                What&apos;s included
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-paper-border bg-paper p-5"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Check size={13} aria-hidden />
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Benefits */}
          <section className="bg-paper py-16 lg:py-20">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
              <h2 className="font-display text-2xl font-medium text-foreground sm:text-3xl">
                Why it matters
              </h2>
              <div className="mt-8 space-y-8">
                {service.benefits.map((benefit) => (
                  <div key={benefit.title} className="border-l-2 border-accent pl-6">
                    <h3 className="font-display text-lg font-medium text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
              {relatedArticle && (
                <p className="mt-8 text-sm leading-relaxed text-muted">
                  Further reading:{" "}
                  <Link
                    href={`/blog/${relatedArticle.slug}`}
                    className="text-accent-deep underline underline-offset-2 hover:text-accent"
                  >
                    {relatedArticle.title}
                  </Link>
                </p>
              )}
            </div>
          </section>
        </>
      )}

      {/* FAQ */}
      <section className="bg-paper-muted py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-display text-2xl font-medium text-foreground sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-8">
            <FaqAccordion items={service.faqs} />
          </div>
        </div>
      </section>

      {/* Related services */}
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

      {/* Final CTA */}
      <section id="contact-cta" className="bg-ink py-16 lg:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center lg:px-8">
          <h2 className="font-display text-2xl font-medium text-ink-foreground sm:text-3xl">
            {service.ctaHeading ?? `Ready to talk about ${service.title.toLowerCase()}?`}
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
              gaParams={{ location: "service_footer", service: service.slug }}
            >
              {siteConfig.cta.primary.label}
              <ArrowRight size={18} aria-hidden />
            </Button>
            <Button
              href="/#contact"
              variant="outline-dark"
              size="lg"
              gaEvent="contact_cta_click"
              gaParams={{ location: "service_footer", service: service.slug }}
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
