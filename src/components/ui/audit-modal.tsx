"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, Target, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AuditModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  useEffect(() => {
    // Open if ?modal=audit is in the URL
    if (searchParams.get("modal") === "audit") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsOpen(true);
      // Prevent background scrolling completely
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      setIsOpen(false);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    
    // Cleanup on unmount
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [searchParams]);

  const closeModal = () => {
    setIsOpen(false);
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    // Remove the query param gracefully without a hard refresh
    router.push(window.location.pathname, { scroll: false });
    // Reset form after exit animation
    setTimeout(() => setFormState("idle"), 500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    try {
      await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "Audit Modal (Popup)", data }),
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    
    setFormState("success");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative flex w-full max-w-4xl max-h-[90vh] flex-col md:flex-row overflow-hidden rounded-[2.5rem] bg-paper shadow-2xl border border-paper-border"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-paper border border-paper-border text-muted hover:text-foreground hover:bg-paper-muted transition-all [box-shadow:var(--shadow-neo-sm)]"
              aria-label="Close modal"
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            {/* Left Side: Value Prop (Hidden on small screens) */}
            <div className="hidden md:flex w-[45%] flex-col justify-between bg-[#0B0F19] p-12 text-white relative overflow-hidden">
              {/* Premium Glow Effects */}
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent pointer-events-none" />
              
              <div className="relative z-10 mt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-accent-bright animate-pulse" />
                  <span className="text-xs font-bold tracking-wide text-white/90 uppercase">Free Analysis</span>
                </div>
                
                <h3 className="font-display text-4xl lg:text-5xl font-bold mb-6 leading-[1.1] text-white">
                  Unlock Your<br/>Growth Potential.
                </h3>
                <p className="text-white/60 mb-12 text-lg leading-relaxed max-w-sm">
                  Find out exactly where your business is losing customers to competitors, and get a clear roadmap to win them back.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30 text-accent-bright transition-colors group-hover:bg-accent group-hover:text-white">
                      <Search size={18} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1 text-white/90">Deep SEO Audit</h4>
                      <p className="text-sm text-white/50 leading-relaxed">Discover technical issues and keyword gaps holding your rankings back.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30 text-accent-bright transition-colors group-hover:bg-accent group-hover:text-white">
                      <Target size={18} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1 text-white/90">Competitor Breakdown</h4>
                      <p className="text-sm text-white/50 leading-relaxed">See the exact strategies your top local competitors are using to win.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30 text-accent-bright transition-colors group-hover:bg-accent group-hover:text-white">
                      <Zap size={18} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1 text-white/90">90-Day Action Plan</h4>
                      <p className="text-sm text-white/50 leading-relaxed">A step-by-step custom roadmap to drastically increase your inbound leads.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                     {[1,2,3,4].map(i => (
                       <div key={i} className="w-8 h-8 rounded-full bg-white/10 border-2 border-[#0B0F19]" />
                     ))}
                  </div>
                  <div className="text-xs font-medium text-white/50">
                    Trusted by <strong className="text-white/90">50+</strong> businesses
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full md:w-[55%] p-8 md:p-14 overflow-y-auto bg-[#ffffff] flex flex-col justify-center relative">
              {formState === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center py-10"
                >
                  <div className="w-24 h-24 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mb-6 ring-8 ring-green-500/5">
                    <Check size={48} strokeWidth={3} />
                  </div>
                  <h3 className="font-display text-4xl font-bold text-ink-foreground mb-4">Request Received!</h3>
                  <p className="text-muted-dark text-lg max-w-sm mb-10 leading-relaxed">
                    Our team is already reviewing your details. We&apos;ll send your comprehensive audit within 24-48 hours.
                  </p>
                  <Button onClick={closeModal} variant="accent" size="lg" className="px-10 py-5 text-lg shadow-xl shadow-accent/20">
                    Return to site
                  </Button>
                </motion.div>
              ) : (
                <div className="max-w-md mx-auto w-full">
                  <div className="mb-10">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-foreground mb-3 tracking-tight">
                      Request Your Audit
                    </h2>
                    <p className="text-muted-dark text-base">Fill out the details below to get your free custom growth report.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="firstName" className="text-xs font-bold text-ink-foreground uppercase tracking-wider">First Name</label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-ink-foreground outline-none transition-all focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 placeholder:text-gray-400 font-medium shadow-sm"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="lastName" className="text-xs font-bold text-ink-foreground uppercase tracking-wider">Last Name</label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-ink-foreground outline-none transition-all focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 placeholder:text-gray-400 font-medium shadow-sm"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-ink-foreground uppercase tracking-wider">Work Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-ink-foreground outline-none transition-all focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 placeholder:text-gray-400 font-medium shadow-sm"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="website" className="text-xs font-bold text-ink-foreground uppercase tracking-wider">Website URL</label>
                      <input
                        id="website"
                        name="website"
                        type="url"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-ink-foreground outline-none transition-all focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 placeholder:text-gray-400 font-medium shadow-sm"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="goals" className="text-xs font-bold text-ink-foreground uppercase tracking-wider">Primary Goal</label>
                      <div className="relative">
                        <select
                          id="goals"
                          name="goals"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-ink-foreground outline-none transition-all focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 appearance-none font-medium shadow-sm cursor-pointer"
                          required
                          defaultValue=""
                        >
                          <option value="" disabled>Select your biggest challenge...</option>
                          <option value="more-traffic">Increase overall traffic</option>
                          <option value="more-leads">Generate more qualified leads</option>
                          <option value="better-conversion">Improve website conversion rate</option>
                          <option value="ai-readiness">Optimize for AI search engines (GEO)</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6">
                      <button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="w-full flex items-center justify-center gap-3 rounded-xl bg-accent px-8 py-4 text-base font-bold text-white transition-all hover:bg-accent-deep hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        {formState === "submitting" ? (
                          <span className="flex items-center gap-3">
                            <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                            Processing Request...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Get My Free Audit <ArrowRight size={18} strokeWidth={2.5} />
                          </span>
                        )}
                      </button>
                      <p className="text-center text-xs text-gray-400 mt-5 font-medium flex items-center justify-center gap-1.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        100% secure. No commitment required.
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// Internal Check Icon for Success State
function Check({ size = 24, strokeWidth = 3, className = "" }: { size?: number, strokeWidth?: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}
