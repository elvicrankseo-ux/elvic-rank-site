"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export function AboutPageContent() {
  return (
    <div className="relative pb-24 sm:pb-32">
      
      <div
        aria-hidden
        className="pointer-events-none absolute top-[10%] left-1/2 -translate-x-1/2 -z-10 h-[40rem] w-[40rem] rounded-full bg-accent/15 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-6 pt-24 sm:pt-32 lg:px-8">
        {/* Intro Section - Clean Text, No Box */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mx-auto max-w-3xl text-center mb-20"
        >
          <motion.h1 variants={fadeUp} className="font-display text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
            About Elvic Rank
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-8 text-2xl leading-relaxed text-muted-dark font-medium">
            We help businesses become easier to find, trust, and choose.
          </motion.p>
        </motion.div>

        {/* Meet the Founder - Moved Up for Importance */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-24 lg:mb-32 max-w-6xl mx-auto bg-ink rounded-[2.5rem] overflow-hidden transition-all duration-300 [box-shadow:var(--shadow-neo-flat)] p-1 lg:p-0"
        >
          <div className="grid lg:grid-cols-5 gap-0">
            <div className="lg:col-span-2 relative min-h-[500px] lg:min-h-full bg-accent/5 overflow-hidden rounded-t-[2.5rem] lg:rounded-tr-none lg:rounded-l-[2.5rem] [box-shadow:var(--shadow-neo-pressed)]">
              <Image 
                src="/founder.jpg" 
                alt="Peter Emmanuel Victor, Founder of Elvic Rank"
                fill
                priority
                className="object-cover object-center mix-blend-multiply"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="lg:col-span-3 p-10 sm:p-16 lg:p-20">
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                Meet the Founder
              </h2>
              <div className="mt-4 text-2xl font-bold text-accent-deep">
                Peter Emmanuel Victor
              </div>
              <div className="text-sm uppercase tracking-wider text-muted-dark font-bold mt-2">
                Founder & CEO, Elvic Rank
              </div>

              <blockquote className="mt-12 border-l-4 border-accent-deep pl-6 italic text-2xl leading-relaxed text-foreground font-display">
                “I started Elvic Rank with a simple goal: to help businesses stop being invisible online.”
              </blockquote>

              <div className="mt-12 space-y-6 text-lg leading-relaxed text-muted-dark">
                <p>Elvic Rank was built from a desire to help businesses compete in an increasingly digital marketplace.</p>
                <p>Too many businesses invest in having a website or maintaining an online presence without having a clear system for actually being discovered by potential customers.</p>
                <p>Elvic Rank brings together search visibility, websites, AI-driven search optimization, and customer acquisition to help businesses build a stronger presence online and create more opportunities for growth.</p>
                <p>I want to build a company that businesses can rely on when they need to improve their digital presence, compete more effectively, and adapt to the rapidly changing way people discover and choose businesses online.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Philosophy & Growth - 3 Column Grid */}
        <div className="mb-24 lg:mb-32">
          <SectionHeading
            eyebrow="Our Approach"
            title="How We Build Growth"
            description="We focus on building systems that are useful, measurable, and aligned with your business goals."
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {/* Real Business Growth */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-ink rounded-3xl p-10 sm:p-12 transition-all duration-300 [box-shadow:var(--shadow-neo-flat)] hover:[box-shadow:var(--shadow-neo-pressed)] flex flex-col"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-deep/10 text-accent-bright mb-8 [box-shadow:var(--shadow-neo-pressed)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                Real Business Growth
              </h3>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-dark flex-grow">
                <p>We don't believe in chasing rankings or traffic simply for the sake of having better numbers. The real goal is to help a business get discovered, build trust, generate enquiries, and win more customers.</p>
                <p>Our approach brings together search visibility, strong digital experiences, and customer acquisition into one connected growth system.</p>
              </div>
            </motion.div>

            {/* Where We're Going */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-ink rounded-3xl p-10 sm:p-12 transition-all duration-300 [box-shadow:var(--shadow-neo-flat)] hover:[box-shadow:var(--shadow-neo-pressed)] flex flex-col"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-deep/10 text-accent-bright mb-8 [box-shadow:var(--shadow-neo-pressed)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                Where We're Going
              </h3>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-dark flex-grow">
                <p>We're particularly focused on local and service-based businesses, where search visibility, strong websites, and local presence can have a direct impact on growth.</p>
                <p>As search evolves to AI-powered discovery, we're helping businesses prepare for where customers are searching next, not just where they search today.</p>
              </div>
            </motion.div>

            {/* Our Philosophy */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-ink rounded-3xl p-10 sm:p-12 transition-all duration-300 [box-shadow:var(--shadow-neo-flat)] hover:[box-shadow:var(--shadow-neo-pressed)] flex flex-col"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-deep/10 text-accent-bright mb-8 [box-shadow:var(--shadow-neo-pressed)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                Our Philosophy
              </h3>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-dark flex-grow">
                <p className="font-bold text-accent-deep">Better visibility. Better digital experiences. Better opportunities.</p>
                <p>We would rather build something that genuinely works than make something that simply looks impressive.</p>
                <p>That means we focus on systems that are aligned with the businesses we work with rather than chasing empty metrics or making promises we cannot support.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center bg-accent-deep rounded-[2.5rem] p-12 sm:p-20 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] relative overflow-hidden transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-10px_rgba(37,99,235,0.5)]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
          
          <h2 className="relative z-10 font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Ready to become easier to find?
          </h2>
          <p className="relative z-10 mt-6 text-xl leading-relaxed text-white/80 max-w-2xl mx-auto">
            Let's identify what's holding your digital presence back and find the opportunities that can move your business forward.
          </p>
          <div className="relative z-10 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              href={siteConfig.cta.primary.href} 
              size="lg" 
              className="w-full sm:w-auto bg-white text-accent-deep hover:bg-white/90 px-8 py-6 text-lg font-bold"
            >
              Get Your Free Growth Audit
            </Button>
            <Button 
              href={siteConfig.calendlyUrl} 
              target="_blank"
              rel="noopener noreferrer"
              size="lg" 
              className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-bold"
            >
              Work With Elvic Rank
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
