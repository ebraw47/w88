import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import FaqList from '@/components/FaqList';
import { SITE_URL, BRAND_NAME, LOGO_PATH, OFFICIAL_SUPPORT_EMAIL } from '@/lib/constants';

const SLUG = 'how-to-use-w88-pakistan-guide';
const TITLE = 'How to Use W88 in Pakistan – Complete Beginner Guide 2026';
const DESCRIPTION =
  'Beginner guide to using W88 in Pakistan: join, log in, deposit, explore live casino and sports, claim offers, withdraw and stay in control. 21+ only.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ['how to use W88', 'W88 beginner guide', 'W88 Pakistan guide', 'W88 tutorial', 'W88 for beginners 2026'],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/blog/${SLUG}`,
    siteName: BRAND_NAME,
    type: 'article',
    images: [{ url: `${SITE_URL}${LOGO_PATH}`, width: 1200, height: 630, alt: 'How to use W88 in Pakistan' }],
  },
};

const faqs = [
  {
    q: 'Where should a beginner start?',
    a: 'Join through the official referral link, explore the lobby without paying, then make a small first deposit once you are comfortable.',
  },
  {
    q: 'How much should I deposit first?',
    a: 'Only an amount you are fully prepared to lose. A small first deposit lets you learn the Cashier, games and withdrawal process safely.',
  },
  {
    q: 'Which game is best for beginners?',
    a: 'Choose games whose rules you understand and play low stakes at first. Live baccarat or roulette tables with small limits are common starting points, and sports bets are easier once you understand odds.',
  },
  {
    q: 'Can I win guaranteed money?',
    a: 'No. All gambling involves risk and results are never guaranteed. Treat it as paid entertainment.',
  },
  {
    q: 'What if I make a mistake on a bet?',
    a: 'Bets are usually final once accepted, so check your slip carefully before confirming. Contact support quickly if something looks wrong.',
  },
  {
    q: 'How do I get help?',
    a: `Use live chat inside the lobby or email ${OFFICIAL_SUPPORT_EMAIL}.`,
  },
];

export default function Page() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema title={TITLE} description={DESCRIPTION} slug={SLUG} datePublished="2026-10-24" dateModified="2026-10-27" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">How to Use W88 in Pakistan</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Use W88 in Pakistan: Complete Beginner Guide</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · W88 Pakistan guide · 21+ only</p>

      <div className="relative w-full max-w-xs mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800 bg-secondary p-6">
        <Image src={LOGO_PATH} alt="How to use W88 in Pakistan" width={320} height={320} className="w-full h-auto object-contain" priority />
      </div>

      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>
          New to online gaming? This end-to-end <strong>W88 beginner guide</strong> takes you from opening the lobby on your
          phone to cashing out safely. Each stage links to a deeper article, so you can read the overview first and
          dive in only where you need to.
        </p>

        <div className="bg-secondary border border-gray-800 rounded-xl p-5">
          <h2 className="text-xl font-bold text-white mb-3">The journey at a glance</h2>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Join via the official referral link</li>
            <li>Register and log in</li>
            <li>Explore the lobby</li>
            <li>Deposit a small, planned amount</li>
            <li>Play within limits</li>
            <li>Withdraw and review your session</li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8">Step 1: Join through the official link</h2>
        <p>
          W88 Pakistan runs as a mobile web app, so there is no APK to install. Open the official link, wait for the
          lobby to load, and choose Register. The full walk-through is in{' '}
          <Link href="/blog/how-to-join-w88-pakistan" className="text-accent hover:underline">how to join W88 Pakistan</Link>.
        </p>
        <div className="text-center py-2">
          <DownloadButton size="lg" label="JOIN W88 NOW" />
        </div>

        <h2 className="text-2xl font-bold text-white mt-8">Step 2: Register and log in</h2>
        <p>
          Enter accurate personal details and a strong password. Your account name should match the bank account you will
          withdraw to. Details on each field and troubleshooting are in{' '}
          <Link href="/blog/create-w88-account-and-login" className="text-accent hover:underline">create a W88 account and login</Link>.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">Step 3: Explore the lobby</h2>
        <p>Spend a few minutes looking around before you pay anything:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Live casino:</strong> real dealers streamed in real time, with table limits shown per room.</li>
          <li><strong>Sports:</strong> pre-match and in-play markets, including cricket and football.</li>
          <li><strong>Slots, keno and lottery:</strong> quick games that rely entirely on chance.</li>
          <li><strong>Promotions:</strong> current offers and their terms.</li>
          <li><strong>Profile and history:</strong> your details, balance and transaction records.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8">Step 4: Make a small first deposit</h2>
        <p>
          Open the Cashier, choose a PKR method, and deposit an amount that you have budgeted. Keep receipts until funds
          are credited. Our{' '}
          <Link href="/blog/w88-deposit-guide-pakistan" className="text-accent hover:underline">W88 deposit guide</Link> explains Cashier and bank
          transfer steps, and the short page <Link href="/deposit-money-in-w88" className="text-accent hover:underline">deposit money in W88</Link>{' '}
          is a quick reference.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">Step 5: Play within limits</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Learn first:</strong> watch a table or read a rules panel before betting.</li>
          <li><strong>Use small stakes</strong> while you are learning.</li>
          <li><strong>Set a session limit</strong> for both time and money.</li>
          <li><strong>Check slips</strong> before confirming sports bets.</li>
          <li><strong>Stop on a loss</strong> instead of chasing it with a larger bet.</li>
        </ul>
        <p>
          Understand that the house always has an edge. No system, tip or pattern turns gambling into guaranteed income.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">Step 6: Understand offers before claiming</h2>
        <p>
          A bonus is not free money: it comes with rollover and time limits. Read the terms, and skip any offer you do not
          fully understand. If you enjoy W88, you can also earn through{' '}
          <Link href="/blog/w88-grab-a-member-referral" className="text-accent hover:underline">Grab A Member referrals</Link>, which have their own
          conditions.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">Step 7: Withdraw and review</h2>
        <p>
          When you want to cash out, open the Cashier, choose Withdraw, and use a bank account in your own name.
          Expect the possibility of identity checks and finish any rollover first. The details are in the{' '}
          <Link href="/blog/w88-withdraw-money-guide" className="text-accent hover:underline">W88 withdrawal guide</Link> and the{' '}
          <Link href="/withdraw-money-from-w88" className="text-accent hover:underline">withdraw money from W88</Link> page.
          After each session, check your history and ask yourself if you stayed within your plan.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">Common beginner mistakes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Registering from an unofficial link or a stranger&rsquo;s message.</li>
          <li>Depositing more than planned after a first win or loss.</li>
          <li>Ignoring bonus rollover and then being surprised at withdrawal.</li>
          <li>Using someone else&rsquo;s bank account or sharing a login.</li>
          <li>Believing &ldquo;guaranteed&rdquo; tips sold on social media.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8">Safety and responsible play</h2>
        <p>
          Stay on the official lobby, never share passwords or OTPs, and read{' '}
          <Link href="/blog/is-w88-safe-legal-pakistan" className="text-accent hover:underline">Is W88 safe and legal in Pakistan?</Link> for scam
          warnings. W88 is for people aged 21 and over. If gambling begins to cause stress or financial strain, stop
          playing and speak to someone you trust. For an overall verdict, see our{' '}
          <Link href="/blog/w88-app-review-2026" className="text-accent hover:underline">W88 review</Link> and the{' '}
          <Link href="/join-w88" className="text-accent hover:underline">join page</Link>.
        </p>
      </div>

      <div className="mt-10 text-center">
        <DownloadButton size="lg" label="JOIN W88 NOW" />
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">Frequently asked questions</h2>
        <FaqList faqs={faqs} />
      </section>

      <div className="mt-12 text-center">
        <DownloadButton size="lg" label="OPEN OFFICIAL W88 LOBBY" />
        <p className="text-sm text-gray-500 mt-4">
          Official Pakistan lobby · Play responsibly · 21+ only
        </p>
      </div>
    </article>
  );
}
