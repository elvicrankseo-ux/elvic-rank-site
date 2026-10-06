import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Send, AlertTriangle, Lightbulb, Workflow } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { services, getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

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

  const Icon = service.icon;

  // Determine section order based on layout style to prevent identical-looking pages
  const isLayoutA = service.layoutStyle === "a";
  const isLayoutB = service.layoutStyle === "b";

  return (
    <main className="flex-1">
      {/* 1. Hero / What it is */}
      <section className="relative overflow-hidden bg-paper pt-20 pb-16 lg:pt-28 lg:pb-24">
        {isLayoutA && (
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 h-[40rem] w-[40rem] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
        )}
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: service.title },
              ]}
            />
          </div>
          
          <div className="mt-8 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-deep/10 text-accent-deep">
            <Icon size={32} aria-hidden />
          </div>

          <h1 className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg sm:text-xl leading-relaxed text-muted">
            {service.heroIntro}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center items-center">
            <Button
              href={siteConfig.cta.primary.href}
              variant="accent"
              size="lg"
              className="px-8"
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
            >
              Book a Strategy Call
            </Button>
          </div>
        </div>
      </section>

      {/* 2 & 3. Who it's for & Problems it solves */}
      <section className={cn("py-16 lg:py-24", isLayoutB ? "bg-ink text-white" : "bg-paper-muted")}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className={cn("p-2 rounded-lg", isLayoutB ? "bg-accent-deep/20 text-accent-bright" : "bg-accent/10 text-accent-deep")}>
                  <AlertTriangle size={20} />
                </div>
                <h2 className="font-display text-2xl font-medium">The Problem</h2>
              </div>
              <ul className="space-y-4">
                {service.problemsSolved.map((problem, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-accent-deep mt-1 font-bold">×</span>
                    <span className={cn(isLayoutB ? "text-muted-dark" : "text-muted", "leading-relaxed")}>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={cn("p-8 rounded-3xl", isLayoutB ? "bg-white/5 border border-white/10" : "bg-paper border border-paper-border [box-shadow:var(--shadow-neo-sm)]")}>
              <h2 className="font-display text-2xl font-medium mb-4">Who This Is For</h2>
              <p className={cn("text-lg leading-relaxed", isLayoutB ? "text-muted-dark" : "text-muted")}>
                {service.whoItsFor}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 & 5. What we do & What's included */}
      <section className={cn("py-16 lg:py-24", isLayoutA ? "bg-paper-muted" : "bg-paper")}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className={cn(isLayoutA ? "order-2" : "")}>
              <h2 className="font-display text-3xl font-medium text-foreground mb-6">What We Do</h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                {service.whatWeDo}
              </p>
            </div>
            <div className={cn(isLayoutA ? "order-1" : "")}>
              <h2 className="font-display text-2xl font-medium text-foreground mb-6">What&apos;s Included</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 rounded-2xl border border-paper-border bg-paper p-4"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-deep">
                      <Check size={14} aria-hidden />
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Process */}
      <section className={cn("py-16 lg:py-24", isLayoutB ? "bg-paper-muted" : "bg-ink")}>
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-deep/10 text-accent-deep font-semibold text-sm mb-6">
              <Workflow size={16} /> How It Works
            </div>
            <h2 className={cn("font-display text-3xl md:text-4xl font-medium", isLayoutB ? "text-foreground" : "text-white")}>Our Proven Process</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <div key={idx} className={cn("p-6 rounded-2xl", isLayoutB ? "bg-paper border border-paper-border" : "bg-white/5 border border-white/10")}>
                <span className="text-4xl font-display font-bold text-accent/20 block mb-4">0{idx + 1}</span>
                <h3 className={cn("font-display text-lg font-bold mb-2", isLayoutB ? "text-foreground" : "text-white")}>{step.title}</h3>
                <p className={cn("text-sm leading-relaxed", isLayoutB ? "text-muted" : "text-muted-dark")}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why it matters (Benefits) */}
      <section className="py-16 lg:py-24 bg-paper">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="font-display text-3xl font-medium text-foreground">Why It Matters</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {service.benefits.map((benefit) => (
              <div key={benefit.title} className="p-8 rounded-3xl bg-paper-muted border border-paper-border text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent-deep flex items-center justify-center mb-6">
                  <Lightbulb size={20} />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="bg-paper-muted py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-medium text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={service.faqs} />
        </div>
      </section>

      {/* Related services */}
      <section className="bg-paper py-16 lg:py-20 border-t border-paper-border">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="font-display text-2xl font-medium text-foreground mb-8">
            Continue Exploring
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {relatedServices.map((related) => {
              const RelatedIcon = related.icon;
              return (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="group flex flex-col rounded-2xl border border-paper-border bg-paper p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-accent/40"
                >
                  <RelatedIcon size={24} className="text-accent-deep" aria-hidden />
                  <span className="mt-4 text-base font-bold text-foreground">
                    {related.title}
                  </span>
                  <span className="mt-2 flex items-center gap-1 text-sm font-medium text-accent-deep">
                    View service
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section id="contact-cta" className="bg-ink py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03]" />
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center lg:px-8">
          <h2 className="font-display text-4xl lg:text-5xl font-medium text-white">
            {service.ctaHeading ?? `Ready to grow with ${service.title}?`}
          </h2>
          <p className="max-w-xl text-lg text-muted-dark">
            Start with a free visibility audit, or book a strategy call — either way,
            you'll walk away with a clear roadmap to scalable growth.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Button
              href={siteConfig.cta.primary.href}
              variant="accent"
              size="lg"
              className="px-8"
            >
              {siteConfig.cta.primary.label}
              <ArrowRight size={18} aria-hidden />
            </Button>
            <Button
              href="/contact"
              variant="outline-dark"
              size="lg"
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
