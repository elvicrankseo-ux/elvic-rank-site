# Google Search Console Setup

**Status: not connected.** No Search Console credentials, property, or
access exist in this project as of Phase 13. The technical prerequisites
were verified live on production and are all in place — see
[Readiness Verification](#readiness-verification) below — but connecting
GSC itself is a manual step only the site owner can complete.

## Setup Steps

### 1. Open Google Search Console
Go to [search.google.com/search-console](https://search.google.com/search-console).

### 2. Add elvicrank.com as a Domain property
Use the **Domain** property type (not "URL prefix") so it covers
`https://elvicrank.com` and any subdomain/protocol variant in one property.

### 3. Verify ownership
Domain properties verify via a DNS TXT record added at your domain
registrar/DNS provider. Google will give you the exact record to add;
propagation can take anywhere from a few minutes to 24-48 hours.

### 4. Submit the sitemap
Once verified, go to Sitemaps in the left nav and submit:

```
https://elvicrank.com/sitemap.xml
```

### 5. Confirm sitemap processing
Check back within a few hours to a day — GSC will show "Success" and a
count of discovered URLs. It should discover **25 URLs**, matching what
was verified live on production during this phase (see
[Readiness Verification](#readiness-verification)).

### 6. Inspect the homepage
Use URL Inspection on `https://elvicrank.com` to confirm it's indexed (or
request indexing if it isn't yet, since the site is newly live).

### 7. Inspect important service pages
At minimum, spot-check `/services/seo-audit`,
`/services/local-seo-google-business-profile`, and
`/services/technical-seo-audit` — the three deepest, most content-rich
commercial pages.

### 8. Inspect important blog pages
Spot-check the 3 newest articles, since they were only deployed to
production in Phase 12: `/blog/local-citations-explained`,
`/blog/how-to-rank-locally-on-google`,
`/blog/seo-strategy-for-local-service-businesses`.

### 9. Monitor indexing
Check the Pages report under Indexing periodically over the following
1-2 weeks. A brand-new domain/deploy can take time to fully crawl and
index — this is normal and not a sign of a technical problem on its own.

### 10. Wait for sufficient query data before making content decisions
Search Console's Performance report needs real traffic and time to
accumulate meaningful query data. See
[`gsc-data-collection-plan.md`](./gsc-data-collection-plan.md) for exactly
what to look at once that data exists — don't act on a handful of days of
data.

## Readiness Verification

All checked live against production this phase, not assumed:

| Check | Result |
|---|---|
| `sitemap.xml` reachable and valid | ✅ 25/25 URLs, verified live |
| No duplicate sitemap URLs | ✅ confirmed |
| No query-string or malformed URLs in sitemap | ✅ confirmed |
| `robots.txt` reachable and correct | ✅ `Allow: /`, correct sitemap reference |
| HTTPS | ✅ site is served over HTTPS |
| Canonical URLs | ✅ every page sets an explicit canonical via `buildMetadata()` — no www/http/trailing-slash variants possible |
| `/privacy` and `/terms` excluded from sitemap | ✅ both correctly `noindex`, correctly absent from the sitemap |
| No accidental `noindex` on public pages | ✅ every service and blog page verified indexable |
| No accidental `Disallow` in robots.txt | ✅ confirmed — `Allow: /` with no disallow rules |

The site is technically ready for GSC connection. **I cannot connect it
myself** — that requires DNS access and Google account ownership only you
have.
