import { siteConfig } from "@/config/site";

/** Organization + WebSite JSON-LD, rendered once in the root layout. */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    ...(siteConfig.phone ? { telephone: siteConfig.phone.e164 } : {}),
    email: siteConfig.email,
    areaServed: [
      "United States",
      "Canada",
      "United Kingdom",
      "Australia",
      "Africa",
    ],
    sameAs: Object.values(siteConfig.social),
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

/** FAQPage JSON-LD — pass the same Q&A pairs rendered in the FAQ section. */
export function getFaqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** Service JSON-LD for individual /services/[slug] landing pages. */
export function getServiceSchema(service: {
  title: string;
  metaDescription: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.metaDescription,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: [
      "United States",
      "Canada",
      "United Kingdom",
      "Australia",
      "Africa",
    ],
    url: `${siteConfig.url}/services/${service.slug}`,
  };
}

/** Service JSON-LD for individual /industries/[slug] acquisition pages. */
export function getIndustryPageSchema(industry: {
  title: string;
  metaDescription: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: industry.title,
    name: industry.title,
    description: industry.metaDescription,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: [
      "United States",
      "Canada",
      "United Kingdom",
      "Australia",
      "Africa",
    ],
    url: `${siteConfig.url}/industries/${industry.slug}`,
  };
}

/** Article JSON-LD for individual /blog/[slug] posts. */
export function getArticleSchema(post: {
  title: string;
  metaDescription: string;
  slug: string;
  publishDate: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: { "@id": `${siteConfig.url}/#organization` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    url: `${siteConfig.url}/blog/${post.slug}`,
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };
}

/** BreadcrumbList JSON-LD helper for non-homepage pages. */
export function getBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}
