import Script from 'next/script';

type SchemaType = 'Organization' | 'WebSite' | 'Service' | 'LocalBusiness' | 'FAQPage' | 'Article' | 'BreadcrumbList' | 'Person';

interface SchemaProps {
  type: SchemaType;
  data: Record<string, any>;
}

export default function SchemaMarkup({ type, data }: SchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <Script
      id={`schema-${type.toLowerCase()}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
