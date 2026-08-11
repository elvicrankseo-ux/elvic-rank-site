import Script from "next/script";

/**
 * Loads GA4 site-wide, but only if a real measurement ID is configured via
 * NEXT_PUBLIC_GA_MEASUREMENT_ID. Renders nothing when the variable is
 * absent — no placeholder ID is ever hard-coded here, so an unconfigured
 * build never sends tracking data anywhere. See .env.example.
 */
export function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!measurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
