import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://w88.net.pk';

  const robotsTxt = `# robots.txt for w88.net.pk

User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Allow: /join-w88
Allow: /deposit-money-in-w88
Allow: /withdraw-money-from-w88
Allow: /w88-for-pc
Allow: /about-us
Allow: /blog
Allow: /contact-us
Allow: /privacy
Allow: /disclaimer

Allow: /blog/w88-app-review-2026
Allow: /blog/how-to-join-w88-pakistan
Allow: /blog/create-w88-account-and-login
Allow: /blog/w88-deposit-guide-pakistan
Allow: /blog/w88-withdraw-money-guide
Allow: /blog/is-w88-safe-legal-pakistan
Allow: /blog/how-to-use-w88-pakistan-guide
Allow: /blog/w88-grab-a-member-referral

User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: meta-externalagent
Disallow: /

User-agent: Amazonbot
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: cohere-ai
Disallow: /

User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Googlebot-Mobile
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${baseUrl}/sitemap-index.xml
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/image-sitemap.xml
Sitemap: ${baseUrl}/api/sitemap
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
