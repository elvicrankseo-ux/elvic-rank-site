import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // The `www` host has no automatic redirect at the DNS/hosting level (confirmed
  // live: https://www.elvicrank.com serves 200 directly rather than redirecting),
  // so Google has crawled and indexed it as a separate URL from the canonical
  // apex domain — visible in GSC's Pages report (Phase 26 GSC export). The page
  // itself already declares `https://elvicrank.com` as canonical, but an actual
  // 301/308 redirect is the correct fix rather than relying on canonical alone.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.elvicrank.com" }],
        destination: "https://elvicrank.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
