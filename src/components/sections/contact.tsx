"use client";

import { useId, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  CalendarCheck,
  MapPin,
  Send,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/ui/social-links";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { buildMailtoLink } from "@/lib/mailto";
import { trackEvent } from "@/lib/analytics";

type FormState = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  website: string;
  serviceNeeded: string;
  message: string;
};
type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  website: "",
  serviceNeeded: "",
  message: "",
};

const inputClass =
  "mt-1.5 w-full rounded-lg border border-paper-border bg-paper px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent-deep focus:outline-none";

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "That doesn't look like a valid email.";
  }
  if (!values.message.trim()) errors.message = "Tell us a little about what you need.";
  return errors;
}

type QuickContact = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string | null;
  external?: boolean;
  gaEvent?: string;
};

const quickContacts: QuickContact[] = [
  {
    icon: Mail,
    title: "Email us",
    description: "Best for detailed questions or sending over your website.",
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: CalendarCheck,
    title: "Book a free strategy call",
    description: "30 minutes, no pitch — just a plan for your rankings.",
    href: siteConfig.calendlyUrl,
    external: true,
    gaEvent: "strategy_call_click",
  },
];

function QuickContactCard({
  icon: Icon,
  title,
  description,
  href,
  external,
  gaEvent,
}: QuickContact) {
  const content = (
    <>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-deep transition-transform duration-300 group-hover:scale-110">
        <Icon size={20} aria-hidden />
      </span>
      <span className="flex-1">
        <span className="block text-base font-bold text-foreground group-hover:text-accent-deep transition-colors">
          {title}
        </span>
        <span className="mt-1 block text-sm leading-relaxed text-muted-dark">
          {description}
        </span>
      </span>
      {href && (
        <ArrowUpRight
          size={18}
          className="mt-1 shrink-0 text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-deep"
          aria-hidden
        />
      )}
    </>
  );

  if (!href) {
    return (
      <div className="flex items-start gap-5 rounded-2xl border border-dashed border-black/10 bg-paper/50 p-6 opacity-70">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-paper text-muted-dark [box-shadow:var(--shadow-neo-flat)]">
          <Icon size={20} aria-hidden />
        </span>
        <span className="flex-1">
          <span className="block text-base font-bold text-foreground">{title}</span>
          <span className="mt-1 block text-sm text-muted-dark">Coming soon</span>
        </span>
      </div>
    );
  }

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={gaEvent ? () => trackEvent(gaEvent, { location: "contact_section" }) : undefined}
      className="group flex items-start gap-4 rounded-2xl bg-paper p-5 transition-all duration-300 [box-shadow:var(--shadow-neo-flat)] hover:shadow-xl hover:-translate-y-1 border border-black/5"
    >
      {content}
    </a>
  );
}

export function Contact() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const formId = useId();

  function handleChange(field: keyof FormState) {
    return (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    window.location.href = buildMailtoLink(
      siteConfig.email,
      `Message from ${values.name} via elvicrank.com`,
      [
        `Name: ${values.name}`,
        values.businessName ? `Business name: ${values.businessName}` : null,
        `Email: ${values.email}`,
        values.phone ? `Phone: ${values.phone}` : null,
        values.website ? `Website: ${values.website}` : null,
        values.serviceNeeded ? `Service needed: ${values.serviceNeeded}` : null,
        "",
        values.message,
      ]
    );
    trackEvent("generate_lead", { form: "contact" });
    setStatus("sent");
  }

  return (
    <section id="contact" className="relative overflow-hidden pt-4 pb-20 lg:pt-8 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-deep border border-accent/20">
                Contact
              </span>
              <h2 className="mt-8 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Let's talk about your rankings.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-dark max-w-md">
                Questions, partnership ideas, or you're just not sure where to start — reach out directly.
              </p>

              <div className="mt-8 flex items-start gap-4 rounded-2xl bg-paper p-6 [box-shadow:var(--shadow-neo-flat)] border border-black/5">
                <MapPin size={24} className="mt-1 shrink-0 text-accent-deep" aria-hidden />
                <p className="text-base font-medium leading-relaxed text-foreground">
                  {siteConfig.location.servingLine}
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-4">
                {quickContacts.map((contact) => (
                  <QuickContactCard key={contact.title} {...contact} />
                ))}
              </div>

              <div className="mt-12 pt-6">
                <SocialLinks />
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 lg:col-span-7 lg:pl-16 lg:border-l lg:border-black/5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              {status === "sent" ? (
                <div role="status" className="flex flex-col items-center gap-4 py-20 text-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-paper [box-shadow:var(--shadow-neo-flat)] text-accent-deep">
                    <Send size={32} aria-hidden />
                  </span>
                  <p className="mt-4 font-display text-3xl font-bold text-foreground">
                    Opening your email...
                  </p>
                  <p className="mt-2 max-w-sm text-base text-muted-dark">
                    If nothing happened, email us directly at{" "}
                    <a href={`mailto:${siteConfig.email}`} className="text-accent-deep font-bold hover:underline">
                      {siteConfig.email}
                    </a>
                    .
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      setValues(initialState);
                      setStatus("idle");
                    }}
                    className="mt-8"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor={`${formId}-name`} className="text-xs font-bold tracking-wide text-muted-dark uppercase">
                        Full name
                      </label>
                      <input
                        id={`${formId}-name`}
                        type="text"
                        value={values.name}
                        onChange={handleChange("name")}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? `${formId}-name-error` : undefined}
                        className="mt-2 w-full rounded-xl px-4 py-3 transition-all focus:ring-2 focus:ring-accent/50"
                        placeholder="Jane Doe"
                      />
                      {errors.name && (
                        <p id={`${formId}-name-error`} className="mt-2 text-xs font-bold text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor={`${formId}-business`} className="text-xs font-bold tracking-wide text-muted-dark uppercase">
                        Business name <span className="font-normal normal-case text-muted/70">(optional)</span>
                      </label>
                      <input
                        id={`${formId}-business`}
                        type="text"
                        value={values.businessName}
                        onChange={handleChange("businessName")}
                        className="mt-2 w-full rounded-xl px-4 py-3 transition-all focus:ring-2 focus:ring-accent/50"
                        placeholder="Jane's Plumbing Co."
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor={`${formId}-email`} className="text-xs font-bold tracking-wide text-muted-dark uppercase">
                        Email
                      </label>
                      <input
                        id={`${formId}-email`}
                        type="email"
                        value={values.email}
                        onChange={handleChange("email")}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                        className="mt-2 w-full rounded-xl px-4 py-3 transition-all focus:ring-2 focus:ring-accent/50"
                        placeholder="jane@business.com"
                      />
                      {errors.email && (
                        <p id={`${formId}-email-error`} className="mt-2 text-xs font-bold text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor={`${formId}-phone`} className="text-xs font-bold tracking-wide text-muted-dark uppercase">
                        Phone <span className="font-normal normal-case text-muted/70">(optional)</span>
                      </label>
                      <input
                        id={`${formId}-phone`}
                        type="tel"
                        value={values.phone}
                        onChange={handleChange("phone")}
                        className="mt-2 w-full rounded-xl px-4 py-3 transition-all focus:ring-2 focus:ring-accent/50"
                        placeholder="(000) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor={`${formId}-website`} className="text-xs font-bold tracking-wide text-muted-dark uppercase">
                        Website <span className="font-normal normal-case text-muted/70">(optional)</span>
                      </label>
                      <input
                        id={`${formId}-website`}
                        type="text"
                        value={values.website}
                        onChange={handleChange("website")}
                        className="mt-2 w-full rounded-xl px-4 py-3 transition-all focus:ring-2 focus:ring-accent/50"
                        placeholder="yourbusiness.com"
                      />
                    </div>

                    <div>
                      <label htmlFor={`${formId}-service`} className="text-xs font-bold tracking-wide text-muted-dark uppercase">
                        Service needed <span className="font-normal normal-case text-muted/70">(optional)</span>
                      </label>
                      <select
                        id={`${formId}-service`}
                        value={values.serviceNeeded}
                        onChange={handleChange("serviceNeeded")}
                        className="mt-2 w-full rounded-xl px-4 py-3 transition-all focus:ring-2 focus:ring-accent/50 appearance-none bg-paper"
                      >
                        <option value="">Not sure yet</option>
                        {services.map((service) => (
                          <option key={service.slug} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor={`${formId}-message`} className="text-xs font-bold tracking-wide text-muted-dark uppercase">
                      Message
                    </label>
                    <textarea
                      id={`${formId}-message`}
                      value={values.message}
                      onChange={handleChange("message")}
                      rows={5}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? `${formId}-message-error` : undefined}
                      className="mt-2 w-full resize-none rounded-xl px-4 py-3 transition-all focus:ring-2 focus:ring-accent/50"
                      placeholder="What can we help with?"
                    />
                    {errors.message && (
                      <p id={`${formId}-message-error`} className="mt-2 text-xs font-bold text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full sm:w-auto bg-accent-deep hover:bg-accent text-white shadow-xl hover:-translate-y-1 transition-transform px-8 py-4 text-base rounded-2xl">
                      Send Message
                      <Send size={18} aria-hidden className="ml-2" />
                    </Button>
                    <p className="mt-6 text-sm font-medium leading-relaxed text-muted-dark">
                      Sending opens your email app with this message pre-filled — no backend, no automated reply.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
