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
