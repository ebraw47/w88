import { NextResponse } from 'next/server';

const baseUrl = 'https://w88.net.pk';

const blogSlugs = [
  'w88-app-review-2026',
  'how-to-join-w88-pakistan',
  'create-w88-account-and-login',
  'w88-deposit-guide-pakistan',
  'w88-withdraw-money-guide',
  'is-w88-safe-legal-pakistan',
  'how-to-use-w88-pakistan-guide',
  'w88-grab-a-member-referral',
];

export async function GET() {
  type PageType = {
    url: string;
    lastMod: string;
    changeFreq: string;
    priority: number;
    images?: Array<{ loc: string; title: string; caption: string }>;
  };

  const now = new Date().toISOString();

  const mainPages: PageType[] = [
    {
      url: '/',
      lastMod: now,
      changeFreq: 'daily',
      priority: 1.0,
      images: [
        {
          loc: '/w88-hero-logo.webp',
          title: 'W88 Pakistan Hero Logo',
          caption: 'W88 Pakistan official brand mark',
        },
        {
          loc: '/w88-header-logo.webp',
          title: 'W88 Header Logo',
          caption: 'W88 horizontal logo',
        },
        {
          loc: '/w88-signup.webp',
          title: 'W88 Signup',
          caption: 'W88 Pakistan signup and welcome bonus screen',
        },
        {
          loc: '/w88-deposit.webp',
          title: 'W88 Deposit',
          caption: 'W88 Bank Transfer deposit screen',
        },
        {
          loc: '/w88-banking.webp',
          title: 'W88 Banking',
          caption: 'JazzCash and EasyPaisa banking details',
        },
      ],
    },
    {
      url: '/join-w88',
      lastMod: now,
      changeFreq: 'weekly',
      priority: 0.95,
      images: [
        {
          loc: '/w88-signup.webp',
          title: 'Join W88',
          caption: 'How to join W88 Pakistan via the official referral lobby',
        },
        {
          loc: '/w88-currency.webp',
          title: 'W88 PKR Currency',
          caption: 'Select PKR Pakistani Rupee at signup',
        },
      ],
    },
    {
      url: '/deposit-money-in-w88',
      lastMod: now,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/w88-deposit.webp',
          title: 'W88 Deposit Guide',
          caption: 'Bank Transfer deposit on W88 Pakistan',
        },
        {
          loc: '/w88-banking.webp',
          title: 'W88 Banking Details',
          caption: 'Add JazzCash and EasyPaisa numbers',
        },
      ],
    },
    { url: '/withdraw-money-from-w88', lastMod: now, changeFreq: 'weekly', priority: 0.9 },
    {
      url: '/w88-game-layout-guide',
      lastMod: now,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/game-guide/w88-guide-01.webp',
          title: 'W88 Live Casino Layout',
          caption: 'Live Casino clubs inside W88 Pakistan lobby',
        },
        {
          loc: '/game-guide/w88-guide-13.webp',
          title: 'W88 Slots Layout',
          caption: 'Slots providers inside W88 Pakistan lobby',
        },
      ],
    },
    {
      url: '/w88-for-pc',
      lastMod: now,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/w88-logo.webp',
          title: 'W88 for PC',
          caption: 'Play W88 on PC in a desktop browser',
        },
      ],
    },
    {
      url: '/about-us',
      lastMod: now,
      changeFreq: 'monthly',
      priority: 0.7,
      images: [
        {
          loc: '/w88-logo.webp',
          title: 'About W88',
          caption: 'Learn about W88 Pakistan',
        },
      ],
    },
    {
      url: '/blog',
      lastMod: now,
      changeFreq: 'weekly',
      priority: 0.8,
      images: [
        {
          loc: '/w88-logo.webp',
          title: 'W88 Blog',
          caption: 'Guides and tutorials for W88 Pakistan',
        },
      ],
    },
    { url: '/contact-us', lastMod: now, changeFreq: 'monthly', priority: 0.7 },
    { url: '/privacy', lastMod: now, changeFreq: 'yearly', priority: 0.6 },
    { url: '/disclaimer', lastMod: now, changeFreq: 'yearly', priority: 0.6 },
  ];

  const blogPosts: PageType[] = blogSlugs.map((slug) => ({
    url: `/blog/${slug}`,
    lastMod: now,
    changeFreq: 'monthly',
    priority: 0.8,
  }));

  const allPages = [...mainPages, ...blogPosts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${
      page.images
        ?.map(
          (img) => `
    <image:image>
      <image:loc>${baseUrl}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`
        )
        .join('') || ''
    }
  </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
