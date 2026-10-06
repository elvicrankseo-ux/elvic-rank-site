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
    <div className="relative pb-24 sm:pb-32">
      
      {/* Clean, Subtle Glassmorphic Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-indigo-50/50 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 sm:pt-32 lg:px-8">
        {/* Intro Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.h1 variants={fadeUp} className="font-display text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
            About Elvic Rank
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 text-2xl leading-8 text-muted-dark font-medium">
            We help businesses become easier to find, trust, and choose.
          </motion.p>
          
          <motion.div variants={fadeUp} className="mt-16 space-y-6 text-xl leading-relaxed text-muted-dark text-left bg-ink p-10 sm:p-16 rounded-3xl [box-shadow:var(--shadow-neo-flat)]">
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
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="flex flex-col gap-8"
          >
            {/* Real Business Growth */}
            <motion.div variants={fadeUp} className="bg-ink rounded-3xl p-10 sm:p-14 h-full transition-all duration-300 [box-shadow:var(--shadow-neo-flat)] hover:[box-shadow:var(--shadow-neo-pressed)]">
              <h2 className="font-display text-4xl font-bold tracking-tight text-foreground">
                Built Around Real Business Growth
              </h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-dark">
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
            <motion.div variants={fadeUp} className="bg-ink rounded-3xl p-10 sm:p-14 transition-all duration-300 [box-shadow:var(--shadow-neo-flat)] hover:[box-shadow:var(--shadow-neo-pressed)]">
              <h2 className="font-display text-4xl font-bold tracking-tight text-foreground">
                Where We're Going
              </h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-dark">
                <p>Elvic Rank is being built to become a modern digital growth partner for businesses that want to compete seriously online.</p>
                <p>We're particularly focused on local and service-based businesses, where search visibility, strong websites, local presence, and customer acquisition can have a direct impact on growth.</p>
                <p>As search continues to evolve from traditional Google results to AI-powered discovery we're helping businesses prepare for where customers are searching next, not just where they search today.</p>
                <p>We believe the future of digital growth belongs to businesses that can be found, understood, trusted, and chosen across every important search and digital touchpoint.</p>
              </div>
            </motion.div>
            
            {/* Our Philosophy */}
            <motion.div variants={fadeUp} className="bg-ink rounded-3xl p-10 sm:p-14 transition-all duration-300 [box-shadow:var(--shadow-neo-flat)] hover:[box-shadow:var(--shadow-neo-pressed)]">
              <h2 className="font-display text-4xl font-bold tracking-tight text-foreground">
                Our Philosophy
              </h2>
              <p className="mt-4 text-xl font-bold text-accent-deep">Better visibility. Better digital experiences. Better opportunities.</p>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-dark">
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
          className="mt-16 max-w-5xl mx-auto bg-ink rounded-3xl overflow-hidden transition-all duration-300 [box-shadow:var(--shadow-neo-flat)] hover:[box-shadow:var(--shadow-neo-pressed)] p-1 lg:p-0"
        >
          <div className="grid lg:grid-cols-5 gap-0">
            <div className="lg:col-span-2 relative min-h-[400px] lg:min-h-full bg-accent/5 overflow-hidden rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl [box-shadow:var(--shadow-neo-pressed)]">
              <Image 
                src="/founder.jpg" 
                alt="Peter Emmanuel Victor, Founder of Elvic Rank"
                fill
                className="object-cover object-center mix-blend-multiply"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="lg:col-span-3 p-10 sm:p-14">
              <h2 className="font-display text-4xl font-bold tracking-tight text-foreground">
                Meet the Founder
              </h2>
              <div className="mt-3 text-xl font-bold text-accent-deep">
                Peter Emmanuel Victor
              </div>
              <div className="text-sm uppercase tracking-wider text-muted-dark font-bold mt-1">
                Founder & CEO, Elvic Rank
              </div>

              <blockquote className="mt-10 border-l-4 border-accent-deep pl-6 italic text-2xl leading-relaxed text-foreground font-display">
                “I started Elvic Rank with a simple goal: to help businesses stop being invisible online.”
              </blockquote>

              <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-dark">
                <p>Elvic Rank was built from a desire to help businesses compete in an increasingly digital marketplace.</p>
                <p>Too many businesses invest in having a website or maintaining an online presence without having a clear system for actually being discovered by potential customers.</p>
                <p>I wanted to build a company that approaches that problem differently.</p>
                <p>Elvic Rank brings together search visibility, websites, AI-driven search optimization, and customer acquisition to help businesses build a stronger presence online and create more opportunities for growth.</p>
                <p>I'm particularly interested in the intersection between search, technology, websites, and customer behavior — and how those elements can work together to help a business move from being overlooked to becoming a serious option in its market.</p>
                <p>My vision for Elvic Rank is bigger than simply running an agency.</p>
                <p>I want to build a company that businesses can rely on when they need to improve their digital presence, compete more effectively, and adapt to the rapidly changing way people discover and choose businesses online.</p>
                <p>We're still building. But the standard is clear: do real work, create real value, and build for long-term growth.</p>
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
          className="mt-24 lg:mt-32 max-w-4xl mx-auto text-center bg-accent-deep rounded-3xl p-12 sm:p-20 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] relative overflow-hidden transition-transform duration-500"
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
