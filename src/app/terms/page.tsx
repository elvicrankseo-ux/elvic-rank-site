import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: `The terms that govern your use of the ${siteConfig.name} website.`,
  path: "/terms",
  noIndex: true,
});

const lastUpdated = "August 2026";

export default function TermsPage() {
  return (
    <main className="flex-1 bg-paper py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Terms of Service" }]} />
        <h1 className="mt-6 font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-muted">Last updated: {lastUpdated}</p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="font-display text-xl font-medium text-foreground">
              Acceptance of Terms
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              By accessing and using this website ({siteConfig.domain}), you
              accept and agree to be bound by these terms. If you do not
              agree, please do not use this site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-foreground">
              Use of This Website
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              This website is provided for informational purposes about{" "}
              {siteConfig.name}&apos;s services. You agree not to use this
              site in any way that could damage, disable, or impair it, or
              interfere with any other party&apos;s use of it.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-foreground">
              No Guaranteed Results
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              SEO and digital marketing outcomes depend on factors outside
              our control, including search engine algorithm changes and
              market competition. Nothing on this website constitutes a
              guarantee of specific rankings, traffic, or revenue. Any
              service engagement is governed by the specific terms agreed to
              separately for that engagement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-foreground">
              Intellectual Property
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              The content, design, and branding on this website are the
              property of {siteConfig.legalName} unless otherwise noted, and
              may not be reproduced without permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-foreground">
              Third-Party Links
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              This site may contain links to third-party websites (including
              social media and WhatsApp). We are not responsible for the
              content or practices of any linked third-party site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-foreground">
              Limitation of Liability
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              This website and its content are provided &quot;as is&quot;
              without warranties of any kind, express or implied. To the
              fullest extent permitted by law, {siteConfig.legalName} is not
              liable for any damages arising from your use of this website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-foreground">
              Changes to These Terms
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              We may update these terms from time to time. Continued use of
              the website after changes are posted constitutes acceptance of
              the updated terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-foreground">
              Contact Us
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent-deep underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
