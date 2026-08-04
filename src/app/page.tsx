import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Industries } from "@/components/sections/industries";
import { Process } from "@/components/sections/process";
import { CaseStudies } from "@/components/sections/case-studies";
import { Testimonials } from "@/components/sections/testimonials";
import { About } from "@/components/sections/about";
import { Blog } from "@/components/sections/blog";
import { FreeAudit } from "@/components/sections/free-audit";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main id="top" className="flex-1">
      <Hero />
      <Services />
      <WhyUs />
      <Industries />
      <Process />
      <CaseStudies />
      <Testimonials />
      <About />
      <Blog />
      <FreeAudit />
      <FAQ />
      <Contact />
    </main>
  );
}
