import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Send, AlertTriangle, Lightbulb, Workflow, Target, Zap } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { services, getServiceBySlug, type Service } from "@/data/services";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { getServiceSchema, getBreadcrumbSchema, getFaqSchema } from "@/lib/schema";

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

// -------------------------------------------------------------
// Layout A: The "Modern Bento" Style (Tech/Apple inspired)
// Highly visual, contained cards, subtle glows, centered hero.
// -------------------------------------------------------------
function LayoutA({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-paper overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: service.title }]} />
          <div className="mt-10 mx-auto inline-flex h-20 w-20 items-center justify-center rounded-[2rem] bg-paper border border-paper-border [box-shadow:var(--shadow-neo-flat)] text-accent-deep">
            <Icon size={40} />
          </div>
          <h1 className="mt-8 font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground">{service.title}</h1>
          <p className="mt-6 mx-auto max-w-2xl text-xl text-muted font-medium leading-relaxed">{service.heroIntro}</p>
          <div className="mt-10 flex justify-center gap-4">
            <Button href={siteConfig.cta.primary.href} variant="accent" size="lg" className="px-8">{siteConfig.cta.primary.label}</Button>
          </div>
        </div>
      </section>

      {/* Bento Grid: Problem & Audience */}
      <section className="py-16 bg-paper-muted">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-ink text-white p-10 md:p-12 rounded-[2.5rem]">
              <div className="flex items-center gap-3 mb-6 text-accent-bright">
                <AlertTriangle size={24} />
                <h2 className="font-display text-2xl font-bold">The Problem</h2>
              </div>
              <ul className="space-y-4">
                {service.problemsSolved.map((p, i) => (
                  <li key={i} className="flex gap-4"><span className="text-accent-bright font-bold">×</span><span className="text-white/80">{p}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-paper border border-paper-border p-10 md:p-12 rounded-[2.5rem] [box-shadow:var(--shadow-neo-sm)]">
              <div className="flex items-center gap-3 mb-6 text-accent-deep">
                <Target size={24} />
                <h2 className="font-display text-2xl font-bold">Who It's For</h2>
              </div>
              <p className="text-lg text-muted leading-relaxed">{service.whoItsFor}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do & Process (Horizontal scroll feel) */}
      <section className="py-20 bg-paper">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-4xl font-bold mb-6 text-foreground">How We Execute</h2>
          <p className="text-xl text-muted max-w-3xl mb-12">{service.whatWeDo}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.process.map((step, idx) => (
              <div key={idx} className="bg-paper-muted p-8 rounded-3xl border border-paper-border hover:-translate-y-2 transition-transform duration-300">
                <span className="text-5xl font-display font-bold text-accent/10 mb-4 block">0{idx + 1}</span>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included & Benefits */}
      <section className="py-20 bg-ink text-white rounded-t-[3rem] -mt-6 relative z-20">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">What's Included</h2>
            <ul className="space-y-4">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-accent-deep flex items-center justify-center"><Check size={16} /></div>
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold mb-8">Why It Matters</h2>
            <div className="space-y-6">
              {service.benefits.map((b) => (
                <div key={b.title} className="border-l-2 border-accent-bright pl-6 py-2">
                  <h3 className="font-display text-xl font-bold mb-2">{b.title}</h3>
                  <p className="text-white/70">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// -------------------------------------------------------------
// Layout B: The "Editorial / Split" Style
// Agency feel, large images/text splits, stacked typography.
// -------------------------------------------------------------
function LayoutB({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <div className="flex flex-col w-full">
      {/* Split Hero */}
      <section className="bg-ink text-white pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: service.title }]} />
            <h1 className="mt-8 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">{service.title}</h1>
          </div>
          <div className="lg:pl-12 lg:border-l border-white/10">
            <div className="mb-6 w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-accent-bright">
              <Icon size={32} />
            </div>
            <p className="text-xl leading-relaxed text-white/80 mb-8">{service.heroIntro}</p>
            <div className="flex gap-4">
              <Button href={siteConfig.cta.primary.href} variant="accent" size="lg">{siteConfig.cta.primary.label}</Button>
              <Button href={siteConfig.calendlyUrl} variant="outline-dark" size="lg">Let's Talk</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Massive Typographic Problem/Audience */}
      <section className="py-24 bg-paper">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">Built For You.</h2>
              <p className="text-xl text-muted leading-relaxed pb-8 border-b border-paper-border">{service.whoItsFor}</p>
              <h3 className="font-display text-2xl font-bold text-foreground mt-8 mb-4">What We Do</h3>
              <p className="text-lg text-muted">{service.whatWeDo}</p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 bg-paper-muted p-10 md:p-16 rounded-[2rem] border border-paper-border">
              <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-accent-deep">The Problems We Solve</h2>
              <ul className="space-y-6">
                {service.problemsSolved.map((p, i) => (
                  <li key={i} className="flex gap-4">
                    <Zap className="text-accent-deep shrink-0 mt-1" size={20} />
                    <span className="text-lg text-muted font-medium">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Staggered Process */}
      <section className="py-24 bg-paper-muted">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold mb-16 text-foreground">Our Proven Process</h2>
          <div className="space-y-12 text-left">
            {service.process.map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center bg-paper p-8 rounded-3xl border border-paper-border [box-shadow:var(--shadow-neo-flat)]">
                <div className="text-7xl font-display font-black text-accent-deep/20 md:w-32">0{idx + 1}</div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features/Benefits Grid */}
      <section className="py-24 bg-paper border-t border-paper-border">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
           <div>
             <h2 className="font-display text-3xl font-bold text-foreground mb-8">What's Included</h2>
             <div className="grid grid-cols-2 gap-4">
               {service.points.map(pt => (
                 <div key={pt} className="bg-paper-muted p-4 rounded-xl border border-paper-border font-medium text-foreground flex items-center gap-2">
                   <Check size={16} className="text-accent-deep" /> {pt}
                 </div>
               ))}
             </div>
           </div>
           <div>
             <h2 className="font-display text-3xl font-bold text-foreground mb-8">Why It Matters</h2>
             <div className="space-y-6">
                {service.benefits.map((b) => (
                  <div key={b.title} className="bg-paper-muted p-6 rounded-2xl border border-paper-border">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{b.title}</h3>
                    <p className="text-muted">{b.description}</p>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}

// -------------------------------------------------------------
// Layout C: The "SaaS Conversion" Style
// Zig-zag sections, focused on high conversion, clear grids.
// -------------------------------------------------------------
function LayoutC({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <div className="flex flex-col w-full">
      {/* Contained Hero */}
      <section className="py-12 bg-paper">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="bg-ink rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
            <div className="relative z-10 flex flex-col items-center">
              <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: service.title }]} />
              <div className="mt-8 mb-6 p-4 bg-white/5 rounded-full text-accent-bright border border-white/10">
                <Icon size={40} />
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight">{service.title}</h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">{service.heroIntro}</p>
              <Button href={siteConfig.cta.primary.href} variant="accent" size="lg" className="px-10 py-6 text-lg font-bold">{siteConfig.cta.primary.label}</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Zig-Zag 1: Who & Problem */}
      <section className="py-20 bg-paper">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">Who Needs This?</h2>
            <p className="text-xl text-muted leading-relaxed mb-8">{service.whoItsFor}</p>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">The Impact of Inaction:</h3>
            <ul className="space-y-3">
              {service.problemsSolved.map((p, i) => (
                <li key={i} className="flex gap-3 text-muted">
                  <AlertTriangle size={18} className="text-red-500/80 shrink-0 mt-1" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-paper-muted p-12 rounded-[2rem] border border-paper-border flex flex-col justify-center text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">What We Do</h2>
            <p className="text-lg text-muted">{service.whatWeDo}</p>
          </div>
        </div>
      </section>

      {/* Zig-Zag 2: Included Grid */}
      <section className="py-20 bg-paper-muted border-y border-paper-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">Everything You Need</h2>
            <p className="text-lg text-muted">A complete solution built into one package.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {service.points.map(pt => (
              <div key={pt} className="bg-paper p-6 rounded-2xl border border-paper-border [box-shadow:var(--shadow-neo-sm)] text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent-deep flex items-center justify-center mb-4">
                  <Check size={20} />
                </div>
                <h3 className="font-medium text-foreground">{pt}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Process side-by-side */}
      <section className="py-20 bg-paper">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">Why It Matters</h2>
            <div className="space-y-8">
              {service.benefits.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-deep text-white flex items-center justify-center shrink-0">
                    <Lightbulb size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-1">{b.title}</h3>
                    <p className="text-muted">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 bg-ink text-white p-10 md:p-12 rounded-[2.5rem]">
            <h2 className="font-display text-3xl font-bold mb-8 text-accent-bright">How We Work</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {service.process.map((step, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                   <div className="text-sm font-bold text-accent-bright tracking-wider uppercase mb-2">Step 0{idx + 1}</div>
                   <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
                   <p className="text-white/70 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// -------------------------------------------------------------
// Main Page Shell (Wraps the chosen layout + Shared Footer)
// -------------------------------------------------------------
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = service.relatedSlugs
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  const jsonLd = [
    getServiceSchema(service),
    getBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: service.title, path: `/services/${service.slug}` },
    ]),
    getFaqSchema(service.faqs),
  ];

  return (
    <main className="flex-1 w-full overflow-hidden">
      {jsonLd.map((schema) => (
        <script key={schema["@type"]} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* Render Unique Layout */}
      {service.layoutStyle === "a" && <LayoutA service={service} />}
      {service.layoutStyle === "b" && <LayoutB service={service} />}
      {service.layoutStyle === "c" && <LayoutC service={service} />}

      {/* Shared FAQs */}
      <section className="bg-paper py-20 lg:py-24 border-t border-paper-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={service.faqs} />
        </div>
      </section>

      {/* Shared Related Services */}
      <section className="bg-paper-muted py-20 lg:py-24 border-t border-paper-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10 text-center">
            Continue Exploring
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {relatedServices.map((related) => {
              const RelatedIcon = related.icon;
              return (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="group flex flex-col rounded-3xl border border-paper-border bg-paper p-8 transition-all hover:-translate-y-2 hover:shadow-xl hover:border-accent/40 [box-shadow:var(--shadow-neo-sm)]"
                >
                  <RelatedIcon size={32} className="text-accent-deep" aria-hidden />
                  <span className="mt-6 text-xl font-display font-bold text-foreground">
                    {related.title}
                  </span>
                  <span className="mt-3 flex items-center gap-2 text-sm font-bold text-accent-deep">
                    View service
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shared Final CTA */}
      <section className="bg-ink py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-white leading-tight">
            {service.ctaHeading ?? `Ready to grow with ${service.title}?`}
          </h2>
          <p className="max-w-2xl text-xl text-white/80">
            Start with a free visibility audit, or book a strategy call — either way,
            you'll walk away with a clear roadmap to scalable growth.
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Button href={siteConfig.cta.primary.href} variant="accent" size="lg" className="px-10 py-6 text-lg font-bold">
              {siteConfig.cta.primary.label}
              <ArrowRight size={20} aria-hidden />
            </Button>
            <Button href="/contact" variant="outline-dark" size="lg" className="px-10 py-6 text-lg font-bold">
              Contact Us <Send size={18} aria-hidden />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
