import Link from 'next/link';
import { Metadata } from 'next';
import { SITE_URL, BRAND_NAME, LOGO_PATH } from '@/lib/constants';

export const metadata: Metadata = {
  title: { absolute: 'W88 Blog - Guides, Reviews & Tips for Pakistan 2026' },
  description:
    'W88 blog for Pakistan: app review, how to join, account and login help, deposit and withdrawal guides, safety, and the Grab A Member referral. 21+ only.',
  keywords: [
    'W88 blog',
    'W88 guide',
    'W88 review',
    'W88 Pakistan',
    'W88 deposit',
    'W88 withdraw',
    'W88 referral',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: 'W88 Blog - Guides, Reviews & Tips 2026',
    description: 'Official W88 Pakistan guides for joining, payments, referrals and safe play.',
    url: `${SITE_URL}/blog`,
    siteName: BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}${LOGO_PATH}`,
        width: 1200,
        height: 630,
        alt: 'W88 Blog',
      },
    ],
  },
};

const posts = [
  {
    slug: 'w88-app-review-2026',
    title: 'W88 App Review 2026',
    description:
      'Honest review: CEZA licence, live casino, sports, PKR support, pros, cons and responsible play for Pakistan.',
    readTime: '10 min read',
    featured: true,
  },
  {
    slug: 'how-to-join-w88-pakistan',
    title: 'How to Join W88 Pakistan',
    description: 'Step-by-step guide to joining through the official referral link and registering safely.',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'create-w88-account-and-login',
    title: 'Create a W88 Account and Login',
    description: 'Registration fields, password rules, and fixes for common login problems.',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'w88-deposit-guide-pakistan',
    title: 'W88 Deposit Guide for Pakistan',
    description: 'Add funds via the Cashier or bank transfer, keep receipts, and fix delays.',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'w88-withdraw-money-guide',
    title: 'W88 Withdraw Money Guide',
    description: 'Cash out steps, documents that may be requested, and why requests get delayed.',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'is-w88-safe-legal-pakistan',
    title: 'Is W88 Safe and Legal in Pakistan?',
    description: 'Licence, SSL, scam warnings, 21+ rules and responsible gaming tips.',
    readTime: '9 min read',
    featured: false,
  },
  {
    slug: 'how-to-use-w88-pakistan-guide',
    title: 'How to Use W88 in Pakistan: Beginner Guide',
    description: 'End-to-end: join, deposit, play, claim offers, withdraw and stay in control.',
    readTime: '10 min read',
    featured: false,
  },
  {
    slug: 'w88-grab-a-member-referral',
    title: 'W88 Grab A Member Referral',
    description: 'Earn USD 10 when a friend deposits USD 88+, up to 5 referrals, with full terms explained.',
    readTime: '7 min read',
    featured: false,
  },
] as const;

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-accent">W88 Blog</h1>
      <p className="text-gray-300 mb-8 text-lg">
        Guides, payment help, referrals and responsible gaming for W88 players in Pakistan
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.slug}
            className={`bg-secondary px-8 py-8 rounded-lg hover:shadow-lg transition-all border-2 ${
              post.featured ? 'border-accent' : 'border-gray-700 hover:border-accent'
            }`}
          >
            {post.featured && (
              <div className="inline-block bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                FEATURED
              </div>
            )}
            <h2 className="text-2xl font-bold mb-4 text-white">{post.title}</h2>
            <p className="text-gray-300 mb-4">{post.description}</p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <span>October 2026</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <Link href={`/blog/${post.slug}`} className="text-accent hover:underline font-semibold">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
