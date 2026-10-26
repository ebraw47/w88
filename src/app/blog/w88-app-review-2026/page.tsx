import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import FaqList from '@/components/FaqList';
import { SITE_URL, BRAND_NAME, LOGO_PATH, OFFICIAL_SUPPORT_EMAIL } from '@/lib/constants';

const SLUG = 'w88-app-review-2026';
const TITLE = 'W88 App Review 2026 – Is W88 Worth It in Pakistan?';
const DESCRIPTION =
  'Honest W88 review for Pakistan 2026: CEZA licence, live casino, sports betting, PKR support, pros and cons, plus responsible play tips. 21+ only.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'W88 review',
    'W88 app review 2026',
    'W88 Pakistan',
    'W88 CEZA',
    'W88 live casino',
    'W88 sports betting',
    'W88 PKR',
  ],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/blog/${SLUG}`,
    siteName: BRAND_NAME,
    type: 'article',
    images: [{ url: `${SITE_URL}${LOGO_PATH}`, width: 1200, height: 630, alt: 'W88 App Review 2026' }],
  },
};

const faqs = [
  {
    q: 'Is W88 a real platform?',
    a: 'W88 is an established online gaming brand that states it operates under a CEZA licence. Always reach it through the official Pakistan link and confirm licence details on the official site before depositing.',
  },
  {
    q: 'Does W88 support PKR?',
    a: 'The Pakistan lobby is built around PKR play, with deposit and withdrawal options shown inside the Cashier. Available methods and limits can change, so check the Cashier screen for current details.',
  },
  {
    q: 'Do I need to download an APK?',
    a: 'No. The Pakistan lobby runs as a mobile web app (PWA) in your browser. Open the official link and, if you like, add it to your home screen.',
  },
  {
    q: 'What games can I play on W88?',
    a: 'Live dealer casino, sports betting, slots, keno and lottery-style games are available in the lobby, with promotions that vary by period.',
  },
  {
    q: 'Is W88 suitable for beginners?',
    a: 'Yes, as long as you start with small stakes, read each promotion’s terms, and treat play as entertainment. Our beginner guide walks through the full journey.',
  },
  {
    q: 'Who do I contact for help?',
    a: `Use live chat inside the official lobby, or email ${OFFICIAL_SUPPORT_EMAIL}.`,
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
      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={SLUG}
        datePublished="2026-10-20"
        dateModified="2026-10-27"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">W88 App Review 2026</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">W88 App Review 2026: Is It Worth Joining in Pakistan?</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · W88 Pakistan guide · 21+ only</p>

      <div className="relative w-full max-w-xs mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800 bg-secondary p-6">
        <Image src={LOGO_PATH} alt="W88 Pakistan logo" width={320} height={320} className="w-full h-auto object-contain" priority />
      </div>

      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>
          If you are searching for an honest <strong>W88 review</strong> before you register, this page covers what matters
          for players in Pakistan: licensing, the games on offer, PKR support, how the mobile lobby feels, and where W88
          falls short. We have no interest in hype; the goal is to help you decide calmly.
        </p>

        <div className="bg-secondary border border-gray-800 rounded-xl p-5">
          <h2 className="text-xl font-bold text-white mb-3">Quick verdict</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Best for:</strong> players who want live dealer casino and sports in one lobby, in PKR.</li>
            <li><strong>Access:</strong> mobile web app (PWA) — no APK file required.</li>
            <li><strong>Licence:</strong> W88 states a CEZA (Cagayan Economic Zone Authority) licence.</li>
            <li><strong>Biggest caution:</strong> always read promotion rollover rules and play within a budget.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8">What is W88?</h2>
        <p>
          W88 is a long-running online gaming brand with a dedicated Pakistan lobby. Instead of a separate download,
          the Pakistan version loads in your phone browser as a progressive web app, so it works on both Android and
          iPhone and updates without manual installs. You sign in or register, load your wallet through the Cashier,
          and pick from the game categories on the home screen.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">Licence and trust: the CEZA point</h2>
        <p>
          W88 states that it operates under a licence from the <strong>CEZA</strong>, the Philippines-based
          Cagayan Economic Zone Authority. A regulator-backed operator is a reassuring sign compared with anonymous
          clone sites, but a licence is not a guarantee of any outcome. We suggest two habits: confirm licence wording on
          the official site yourself, and only ever enter your details on the genuine domain.
        </p>
        <p>
          For a deeper look at fake-site risks and legal context, read our guide{' '}
          <Link href="/blog/is-w88-safe-legal-pakistan" className="text-accent hover:underline">Is W88 safe and legal in Pakistan?</Link>
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">Live casino</h2>
        <p>
          The live casino section streams real dealers in real time. Typical categories include baccarat, roulette,
          blackjack and Asian-style table games. Streams are designed for mobile, with simple betting chips and a
          visible balance. Table limits differ between rooms, so lower-limit tables are the sensible place to learn.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">Sports betting</h2>
        <p>
          Sports fans get pre-match and in-play markets across popular sports, with cricket and football the usual
          favourites in Pakistan. Odds and markets move fast during live events, so double-check your slip before
          confirming — bets generally cannot be reversed once accepted.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">Slots, keno and lottery</h2>
        <p>
          Beyond live tables and sports, the lobby also lists slot games, keno and lottery-style draws for quick
          sessions. These are pure chance games, so treat them as entertainment with a fixed budget, not income.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">PKR support and payments</h2>
        <p>
          Wallet play in PKR keeps things simple: you see balances in rupees, with no mental currency conversion.
          Deposits and withdrawals are handled through the in-lobby Cashier, and the options displayed there are the
          only ones you should trust. Our payment guides explain the process in detail:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/deposit-money-in-w88" className="text-accent hover:underline">Deposit money in W88</Link> and the <Link href="/blog/w88-deposit-guide-pakistan" className="text-accent hover:underline">W88 deposit guide</Link></li>
          <li><Link href="/withdraw-money-from-w88" className="text-accent hover:underline">Withdraw money from W88</Link> and the <Link href="/blog/w88-withdraw-money-guide" className="text-accent hover:underline">W88 withdrawal guide</Link></li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8">Promotions and referral</h2>
        <p>
          New and existing players see periodic offers. Every promotion has terms such as rollover and time limits, so
          open the details before opting in. There is also the Grab A Member programme, where you can earn USD 10 per
          qualifying friend; see the full rules in our{' '}
          <Link href="/blog/w88-grab-a-member-referral" className="text-accent hover:underline">W88 Grab A Member referral guide</Link>.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">Pros and cons</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-secondary border border-gray-800 rounded-xl p-5">
            <h3 className="text-lg font-bold text-white mb-2">Pros</h3>
            <ul className="list-disc pl-5 space-y-1 text-base">
              <li>Stated CEZA licence</li>
              <li>Live casino and sports in one lobby</li>
              <li>PKR-friendly wallet experience</li>
              <li>No APK — works in the mobile browser</li>
              <li>Referral programme for active players</li>
              <li>Help via live chat and email</li>
            </ul>
          </div>
          <div className="bg-secondary border border-gray-800 rounded-xl p-5">
            <h3 className="text-lg font-bold text-white mb-2">Cons</h3>
            <ul className="list-disc pl-5 space-y-1 text-base">
              <li>Promotions carry rollover conditions</li>
              <li>Withdrawals may need identity checks</li>
              <li>Lookalike fake sites exist online</li>
              <li>Gambling carries financial risk</li>
              <li>Local legality varies — you must check yourself</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8">Responsible play</h2>
        <p>
          W88 is for adults aged 21 and over. Gambling can lead to losses, and no strategy removes the house edge.
          A few rules worth following:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Only use money you can afford to lose; never borrow to play.</li>
          <li>Set a deposit limit per week and stick to it.</li>
          <li>Take breaks, and stop after a loss rather than chasing it.</li>
          <li>Keep your login private and never share your wallet.</li>
          <li>If play stops being fun, step away and talk to someone you trust.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8">Our rating summary</h2>
        <div className="bg-secondary border border-gray-800 rounded-xl p-5">
          <ul className="space-y-1 text-base">
            <li><strong>Game variety:</strong> strong, led by live casino and sports</li>
            <li><strong>Mobile experience:</strong> smooth PWA, no install needed</li>
            <li><strong>Payments:</strong> in-lobby Cashier, PKR focus</li>
            <li><strong>Trust signals:</strong> stated CEZA licence; verify on the official site</li>
            <li><strong>Promotions:</strong> useful, but read the rollover first</li>
          </ul>
        </div>

        <p>
          Ready to try it? Follow the steps in <Link href="/blog/how-to-join-w88-pakistan" className="text-accent hover:underline">how to join W88 Pakistan</Link>{' '}
          or open the <Link href="/join-w88" className="text-accent hover:underline">join page</Link>. New to everything? Start with the{' '}
          <Link href="/blog/how-to-use-w88-pakistan-guide" className="text-accent hover:underline">beginner guide</Link>.
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
