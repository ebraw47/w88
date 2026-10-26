import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import FaqList from '@/components/FaqList';
import ScreenshotFigure from '@/components/ScreenshotFigure';
import { SITE_URL, BRAND_NAME, LOGO_PATH, OFFICIAL_SUPPORT_EMAIL } from '@/lib/constants';

const SLUG = 'how-to-join-w88-pakistan';
const TITLE = 'How to Join W88 Pakistan – Step-by-Step Referral Link Guide';
const DESCRIPTION =
  'Learn how to join W88 in Pakistan (21+) using the official referral link: Continue with Email, Google, LINE or Telegram, pick PKR, register with +92 mobile, then deposit via Bank Transfer.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ['W88 Google signup', 'W88 PKR', 'how to join W88', 'W88 Pakistan join', 'W88 referral link', 'W88 register', 'W88 sign up Pakistan'],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/blog/${SLUG}`,
    siteName: BRAND_NAME,
    type: 'article',
    images: [{ url: `${SITE_URL}${LOGO_PATH}`, width: 1200, height: 630, alt: 'How to join W88 Pakistan' }],
  },
};

const faqs = [
  {
    q: 'Do I have to use a referral link to join W88?',
    a: 'It is recommended. Opening the official referral link before you register links your account to the referral and keeps you on the genuine Pakistan lobby. If you register first from another page, a referral cannot usually be added later.',
  },
  {
    q: 'Is joining W88 free?',
    a: 'Creating an account is free. You only spend money when you choose to make a deposit.',
  },
  {
    q: 'Do I need to install an app?',
    a: 'No. The lobby opens in your mobile browser as a web app. You can add it to your home screen for one-tap access.',
  },
  {
    q: 'What age do I need to be?',
    a: 'You must be above 21 years old (21+). Never register on behalf of someone else.',
  },
  {
    q: 'Can I have more than one account?',
    a: 'No. One person should have one account, one wallet and one set of details. Duplicate accounts can lead to restrictions.',
  },
  {
    q: 'What if the link does not open?',
    a: 'Try a different browser, switch between Wi-Fi and mobile data, and clear the page cache. If it still fails, email support@w88.net.pk.',
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
      <BlogPostSchema title={TITLE} description={DESCRIPTION} slug={SLUG} datePublished="2026-10-21" dateModified="2026-10-27" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">How to Join W88 Pakistan</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Join W88 Pakistan: Step-by-Step Referral Guide</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · W88 Pakistan guide · 21+ only</p>

      <div className="relative w-full max-w-xs mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800 bg-secondary p-6">
        <Image src={LOGO_PATH} alt="Join W88 Pakistan" width={320} height={320} className="w-full h-auto object-contain" priority />
      </div>

      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>
          Many people search <strong>how to join W88</strong> and land on look-alike pages that copy the logo but not the
          security. This guide shows the clean path for Pakistan: open the official referral link, register once,
          and make a first deposit only when you are ready. The whole process usually takes a few minutes on a phone.
        </p>

        <div className="bg-secondary border border-gray-800 rounded-xl p-5">
          <h2 className="text-xl font-bold text-white mb-3">Before you start</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>You are above 21 years old (21+).</li>
            <li>You have a +92 mobile number you control.</li>
            <li>You have a phone with a modern browser (Chrome, Safari, Samsung Internet).</li>
            <li>You have a stable connection and a valid email address.</li>
            <li>You have decided on a deposit limit you can afford to lose.</li>
          </ul>
        </div>

        <div className="text-center py-2">
          <DownloadButton size="lg" label="JOIN W88 NOW" />
        </div>

        <h2 className="text-2xl font-bold text-white mt-8">Step-by-step: join using the referral link</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Tap the official join button.</strong> Use the Join button on this page. It opens the W88 Pakistan
            mobile lobby with our referral already attached.
          </li>
          <li>
            <strong>Wait for the lobby to load.</strong> Check the address bar shows the W88 Pakistan lobby domain
            before you type anything.
          </li>
          <li>
            <strong>Choose Register / Join.</strong> The signup screen shows a $50 100% Welcome Bonus and a
            &ldquo;Continue with&rdquo; list: Email, Google, LINE or Telegram. Our full field list is explained in{' '}
            <Link href="/blog/create-w88-account-and-login" className="text-accent hover:underline">create a W88 account and login</Link>.
          </li>
          <li>
            <strong>Enter accurate details.</strong> Fill Username, Password, Currency (select PKR Pakistani Rupee), Full
            Name, Email and Mobile (+92). There is also an Affiliate code field and a Newsletter toggle. Mismatched
            details are the most common reason withdrawals get delayed later.
          </li>
          <li>
            <strong>Create a strong password.</strong> Use a mix of letters and numbers and do not reuse a password from
            social media or email.
          </li>
          <li>
            <strong>Submit and continue.</strong> After registration you land on the Deposit page with Bank Transfer (a
            crypto account may also be created). Look around the lobby menu before depositing &mdash; Sports, Casino,
            Slots, Fishing, Games, Esports, P2P, Poker, Promotions, Rewards, Refer A Friend, W Signature Club,
            Affiliate and Download.
          </li>
          <li>
            <strong>Add the lobby to your home screen (optional).</strong> From your browser menu choose Add to Home Screen
            for faster access next time.
          </li>
        </ol>

        <ScreenshotFigure shot="signup" priority />
        <ScreenshotFigure shot="currency" />
        <ScreenshotFigure shot="deposit" />
        <ScreenshotFigure shot="menu" />

        <h2 className="text-2xl font-bold text-white mt-8">Why the referral link matters</h2>
        <p>
          The referral link ties your sign-up to a referrer, which matters for programmes such as Grab A Member. If you
          open the lobby from a generic search result and register there, the connection may not be recorded. Always
          click the referral link <em>first</em>, then register in the same browser tab. You can read the full terms in{' '}
          <Link href="/blog/w88-grab-a-member-referral" className="text-accent hover:underline">the W88 referral guide</Link>.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">After you join: first-session checklist</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Log in and open your profile to confirm your details are correct.</li>
          <li>Add EasyPaisa, JazzCash or a bank account under Banking Details if you plan to use them.</li>
          <li>Browse the game categories without placing money first.</li>
          <li>Read the terms of any bonus before opting in.</li>
          <li>When ready, follow the <Link href="/blog/w88-deposit-guide-pakistan" className="text-accent hover:underline">deposit guide</Link> or the quick page <Link href="/deposit-money-in-w88" className="text-accent hover:underline">deposit money in W88</Link>.</li>
          <li>Know how cashing out works before you play: <Link href="/withdraw-money-from-w88" className="text-accent hover:underline">withdraw money from W88</Link>.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8">Common sign-up problems</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Page will not load:</strong> switch networks, update your browser, or try a private tab.</li>
          <li><strong>Username unavailable:</strong> add digits or choose a different handle.</li>
          <li><strong>Password rejected:</strong> follow the on-screen rules and avoid spaces.</li>
          <li><strong>Form will not submit:</strong> check every required field and pause any ad blocker.</li>
          <li><strong>Unsure the site is genuine:</strong> close it and return to this page&rsquo;s button.</li>
        </ul>
        <p>
          Still stuck? Contact support through live chat or email {OFFICIAL_SUPPORT_EMAIL}.
          Our <Link href="/join-w88" className="text-accent hover:underline">join page</Link> also has a short summary.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">Stay safe</h2>
        <p>
          Never share your password, never pay anyone to &ldquo;activate&rdquo; an account, and ignore messages offering
          guaranteed winnings. Read{' '}
          <Link href="/blog/is-w88-safe-legal-pakistan" className="text-accent hover:underline">Is W88 safe and legal in Pakistan?</Link>{' '}
          for a full checklist. Gambling is risky and intended only for adults; set limits and play for entertainment.
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
