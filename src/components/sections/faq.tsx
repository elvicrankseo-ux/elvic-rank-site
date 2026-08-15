import { SectionHeading } from "@/components/ui/section-heading";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { getFaqSchema } from "@/lib/schema";

const faqs = [
  {
    question: "How long does SEO take to show results?",
    answer:
      "Most clients see meaningful movement in 60–90 days, with compounding gains after that. SEO isn't instant — anyone promising rankings in two weeks is selling something else. What we do guarantee is transparency: you'll know exactly what's been done, and why, every week.",
  },
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "No. We work month-to-month. If the work isn't earning its keep, you're free to leave — we'd rather earn your business every month than lock you into a term.",
  },
  {
    question: "What's included in the free SEO audit?",
    answer:
      "A technical health check, a snapshot of your local/map-pack visibility, and three prioritized quick-wins you could act on immediately — whether or not you end up working with us.",
  },
  {
    question: "What actually happens on a free strategy call?",
    answer:
      "A direct, no-slides conversation about your business, your current SEO situation, and whether working together actually makes sense — not a scripted pitch. You'll walk away with a clearer picture of your priorities either way, and there's no pressure to commit on the call itself.",
  },
  {
    question: "Do you work with businesses outside the US?",
    answer:
      "Yes — we work remotely with local service businesses across the US, Canada, the UK, Australia, and Africa.",
  },
  {
    question: "How is local SEO different from regular SEO?",
    answer:
      "Local SEO weighs proximity, Google Business Profile signals, and citation consistency alongside the usual technical and content factors. Ranking a national e-commerce brand and ranking a plumber for their service area call for different playbooks.",
  },
  {
    question: "Will you build backlinks for my business?",
    answer:
      "Yes, but only white-hat: digital PR, relevant local citations, and outreach to real, relevant sites. We won't touch bulk or paid link schemes that put your domain at risk of a penalty.",
  },
  {
    question: "What if I already have someone doing marketing in-house?",
    answer:
      "That's common, and it works well — we handle the technical SEO and strategy layer, and coordinate directly with your team rather than duplicating effort.",
  },
  {
    question: "What is Technical SEO?",
    answer:
      "Technical SEO is the foundation that lets search engines properly crawl, index, and understand your site — site speed, mobile-friendliness, structured data, and clean architecture. Without it, even great content struggles to rank.",
  },
  {
    question: "Can you rank my Google Business Profile in the map pack?",
    answer:
      "We can't guarantee a specific ranking — no honest agency can — but Google Business Profile optimization is one of the highest-leverage things we do for local visibility, and it's core to what we offer.",
  },
  {
    question: "How much does SEO cost?",
    answer:
      "It depends on your market, competition, and how much work is needed. We'll give you a clear, specific number after the free audit — not a generic package price that doesn't reflect your actual situation.",
  },
  {
    question: "Why do I need Local SEO if I already show up on Google?",
    answer:
      "Showing up when someone searches your business name isn't the same as showing up when a stranger searches for your service. Local SEO is what gets you found by people who don't already know you exist.",
  },
  {
    question: "How does Website Design affect SEO?",
    answer:
      "Site speed, mobile usability, and clean structure are all ranking factors — and a site that's hard to navigate loses visitors even when it does rank. Design and SEO aren't separate conversations.",
  },
  {
    question: "Do you offer Google Ads or Meta Ads alongside SEO?",
    answer:
      "Yes — paid search and social campaigns are available as a complement to SEO, built around the same intent research rather than run as a separate, disconnected strategy.",
  },
  {
    question: "What's the difference between SEO and Google Ads?",
    answer:
      "SEO is a longer-term investment that compounds and keeps paying off; Google Ads is immediate but stops the moment you stop paying. Most businesses benefit from both, weighted differently depending on how fast they need results.",
  },
  {
    question: "How do I know if my current SEO is actually working?",
    answer:
      "If you can't tie your SEO spend to calls, form fills, or booked jobs, that's the clearest sign something's missing. A free audit will show you exactly where you stand.",
  },
];

export function FAQ() {
  const jsonLd = getFaqSchema(faqs);

  return (
    <section id="faq" className="bg-paper-muted py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions worth asking before you hire us"
          description="Straight answers. If yours isn't here, ask us directly."
        />

        <div className="mt-12">
          <FaqAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
