"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      
      {/* Intro Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.h1 variants={fadeUp} className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          About Elvic Rank
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 text-xl leading-8 text-muted-dark font-medium">
          We help businesses become easier to find, trust, and choose.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-10 space-y-6 text-lg leading-relaxed text-muted-dark text-left bg-paper p-8 sm:p-12 rounded-3xl border border-black/5 [box-shadow:var(--shadow-neo-flat)]">
          <p>
            Elvic Rank is a digital growth agency built around one simple idea: being online is not enough. Your business needs to be visible to the right people, in the right places, at the right moment.
          </p>
          <p>
            We combine SEO, Local SEO, GEO and AI Search optimization, conversion-focused web design, website development, and digital acquisition to help businesses strengthen their online presence and turn that visibility into meaningful opportunities.
          </p>
          <p>
            We pay attention to the things that often get overlooked how your business appears in search, how your website performs, how customers experience your brand, and how easily someone can move from discovering your business to contacting you.
          </p>
        </motion.div>
      </motion.div>

      {/* Philosophy & Growth Grid */}
      <div className="mt-20 lg:mt-32 grid gap-12 lg:grid-cols-2 lg:gap-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col gap-8"
        >
          {/* Real Business Growth */}
          <motion.div variants={fadeUp} className="bg-ink text-ink-foreground rounded-3xl p-8 sm:p-12">
            <h2 className="font-display text-3xl font-bold tracking-tight">
              Built Around Real Business Growth
            </h2>
            <div className="mt-6 space-y-6 text-base leading-relaxed text-ink-foreground/80">
              <p>We don't believe in chasing rankings or traffic simply for the sake of having better numbers.</p>
              <p>The real goal is to help a business get discovered, build trust, generate enquiries, and win more customers.</p>
              <p>That means our work starts with understanding the business, its market, its customers, and its competitive landscape.</p>
              <p>From there, we identify what is holding its digital presence back and build a practical strategy around it.</p>
              <p>Our approach brings together search visibility, strong digital experiences, conversion-focused websites, and customer acquisition into one connected growth system.</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="flex flex-col gap-8"
        >
          {/* Where We're Going */}
          <motion.div variants={fadeUp} className="bg-accent/5 rounded-3xl p-8 sm:p-12 border border-accent/10">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
              Where We're Going
            </h2>
            <div className="mt-6 space-y-6 text-base leading-relaxed text-muted-dark">
              <p>Elvic Rank is being built to become a modern digital growth partner for businesses that want to compete seriously online.</p>
              <p>We're particularly focused on local and service-based businesses, where search visibility, strong websites, local presence, and customer acquisition can have a direct impact on growth.</p>
              <p>As search continues to evolve from traditional Google results to AI-powered discovery we're helping businesses prepare for where customers are searching next, not just where they search today.</p>
              <p>We believe the future of digital growth belongs to businesses that can be found, understood, trusted, and chosen across every important search and digital touchpoint.</p>
            </div>
          </motion.div>
          
          {/* Our Philosophy */}
          <motion.div variants={fadeUp} className="bg-paper rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
              Our Philosophy
            </h2>
            <p className="mt-4 font-bold text-accent-deep">Better visibility. Better digital experiences. Better opportunities.</p>
            <div className="mt-6 space-y-6 text-base leading-relaxed text-muted-dark">
              <p>We believe good digital work should connect to a real business outcome.</p>
              <p>That means we focus on building systems that are useful, measurable, and aligned with the businesses we work with rather than chasing empty metrics or making promises we cannot support.</p>
              <p>We would rather build something that genuinely works than make something that simply looks impressive.</p>
              <p>That's the standard we're building Elvic Rank around.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Meet the Founder */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="mt-20 lg:mt-32 max-w-5xl mx-auto bg-paper rounded-[2.5rem] border border-black/5 overflow-hidden [box-shadow:var(--shadow-neo-flat)]"
      >
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 relative min-h-[400px] lg:min-h-full bg-accent/5">
            {/* Placeholder for Founder Image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center border-r border-accent/10">
              <div className="h-32 w-32 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-accent-deep/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-accent-deep uppercase tracking-wider">Image Placeholder</p>
              <p className="text-xs text-muted-dark mt-2">Upload a real professional photograph of Peter Emmanuel Victor here.</p>
            </div>
          </div>
          <div className="lg:col-span-3 p-8 sm:p-12 lg:py-16 lg:pr-16">
            <h2 className="font-display text-4xl font-bold tracking-tight text-foreground">
              Meet the Founder
            </h2>
            <div className="mt-2 text-lg font-medium text-accent-deep">
              Peter Emmanuel Victor
            </div>
            <div className="text-sm uppercase tracking-wider text-muted-dark font-semibold mt-1">
              Founder & CEO, Elvic Rank
            </div>

            <blockquote className="mt-8 border-l-4 border-accent-deep pl-6 italic text-xl leading-relaxed text-foreground font-display">
              “I started Elvic Rank with a simple goal: to help businesses stop being invisible online.”
            </blockquote>

            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-dark">
              <p>Elvic Rank was built from a desire to help businesses compete in an increasingly digital marketplace.</p>
              <p>Too many businesses invest in having a website or maintaining an online presence without having a clear system for actually being discovered by potential customers.</p>
              <p>I wanted to build a company that approaches that problem differently.</p>
              <p>Elvic Rank brings together search visibility, websites, AI-driven search optimization, and customer acquisition to help businesses build a stronger presence online and create more opportunities for growth.</p>
              <p>I'm particularly interested in the intersection between search, technology, websites, and customer behavior — and how those elements can work together to help a business move from being overlooked to becoming a serious option in its market.</p>
              <p>My vision for Elvic Rank is bigger than simply running an agency.</p>
              <p>I want to build a company that businesses can rely on when they need to improve their digital presence, compete more effectively, and adapt to the rapidly changing way people discover and choose businesses online.</p>
              <p>We're still building. But the standard is clear: do real work, create real value, and build for long-term growth.</p>
            </div>

            <div className="mt-10 pt-8 border-t border-black/5">
              <p className="font-bold text-foreground font-display text-xl">Peter Emmanuel Victor</p>
              <p className="text-sm text-muted-dark mt-1">Founder & CEO</p>
              <p className="text-sm text-accent-deep font-semibold">Elvic Rank</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="mt-24 lg:mt-32 max-w-4xl mx-auto text-center bg-accent-deep rounded-[2.5rem] p-10 sm:p-16 lg:p-20 relative overflow-hidden"
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
            external
            size="lg" 
            className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-bold"
          >
            Work With Elvic Rank
          </Button>
        </div>
      </motion.div>

    </div>
  );
}
