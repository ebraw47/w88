import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import FaqList from '@/components/FaqList';
import { SITE_URL, BRAND_NAME, LOGO_PATH, OFFICIAL_SUPPORT_EMAIL } from '@/lib/constants';

const SLUG = 'w88-grab-a-member-referral';
const TITLE = 'W88 Grab A Member Referral – Earn USD 10 Per Friend (Pakistan)';
const DESCRIPTION =
  'W88 Grab A Member referral explained: earn USD 10 when a friend deposits USD 88+, up to 5 referrals, with full terms (1x rollover, 60 days) for Pakistan players. 21+ only.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ['W88 referral', 'W88 Grab A Member', 'W88 refer a friend', 'W88 USD 10 referral', 'W88 referral bonus Pakistan'],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/blog/${SLUG}`,
    siteName: BRAND_NAME,
    type: 'article',
    images: [{ url: `${SITE_URL}${LOGO_PATH}`, width: 1200, height: 630, alt: 'W88 Grab A Member referral' }],
  },
};

const faqs = [
  {
    q: 'How much can I earn from Grab A Member?',
    a: 'You can receive USD 10 for each qualifying friend who deposits USD 88 or more, up to a maximum of 5 referrals.',
  },
  {
    q: 'What is the maximum reward?',
    a: 'With 5 qualifying referrals at USD 10 each, the maximum is USD 50, subject to the promotion terms.',
  },
  {
    q: 'Does my friend have to use my referral link?',
    a: 'Yes. Your friend must click the referral link before registering so the sign-up is recorded. Registering first from a different page may not qualify.',
  },
  {
    q: 'What is the rollover on the reward?',
    a: 'The reward carries a 1x rollover, meaning you must place qualifying bets equal to the reward amount before it can be withdrawn.',
  },
  {
    q: 'How long do I have to complete the requirements?',
    a: 'The terms mention a 60-day period. Check the official promotion page for exactly how the period is counted.',
  },
  {
    q: 'Who cannot be referred?',
    a: 'Relatives, people in the same household and accounts using shared wallets or shared payment details do not qualify. Referring yourself or duplicate accounts is not allowed.',
  },
  {
    q: 'Is the offer always available?',
    a: `Promotions can change or end. Confirm the current terms on the official W88 lobby or email ${OFFICIAL_SUPPORT_EMAIL}.`,
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
      <BlogPostSchema title={TITLE} description={DESCRIPTION} slug={SLUG} datePublished="2026-10-25" dateModified="2026-10-27" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">W88 Grab A Member Referral</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">W88 Grab A Member Referral: Earn USD 10 per Friend</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · W88 Pakistan guide · 21+ only</p>

      <div className="relative w-full max-w-xs mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800 bg-secondary p-6">
        <Image src={LOGO_PATH} alt="W88 Grab A Member referral" width={320} height={320} className="w-full h-auto object-contain" priority />
      </div>

      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>
          The <strong>W88 Grab A Member</strong> programme rewards you when a friend joins through your referral and makes a
          qualifying deposit. This page explains how it works, who qualifies, and the terms you should read before you
          invite anyone. Offers can change, so always confirm the latest wording on the official lobby.
        </p>

        <div className="bg-secondary border-2 border-accent rounded-xl p-5">
          <h2 className="text-xl font-bold text-white mb-3">Offer at a glance</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Reward:</strong> USD 10 per qualifying friend</li>
            <li><strong>Qualifier:</strong> your friend deposits USD 88 or more</li>
            <li><strong>Limit:</strong> up to 5 referrals</li>
            <li><strong>Rollover:</strong> 1x</li>
            <li><strong>Period:</strong> 60 days</li>
            <li><strong>Requirement:</strong> friend must click the referral link before registering</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8">How Grab A Member works</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li><strong>Share the official referral link</strong> with a friend who is 21 or older and interested in W88.</li>
          <li><strong>Your friend clicks the link first</strong> and opens the W88 Pakistan lobby from it.</li>
          <li><strong>They register</strong> in that same session with their own real details.</li>
          <li><strong>They deposit USD 88 or more</strong> (the equivalent in PKR via the Cashier) to qualify.</li>
          <li><strong>You receive USD 10</strong> for that referral, with a 1x rollover on the reward.</li>
          <li><strong>Repeat</strong> for up to 5 qualifying referrals.</li>
        </ol>

        <h2 className="text-2xl font-bold text-white mt-8">Terms and conditions in plain language</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Referral link required.</strong> The friend must click your referral link before registering. A sign-up that does not come through the link may not be counted.</li>
          <li><strong>Qualifying deposit.</strong> The friend must deposit USD 88 or more. Smaller deposits do not trigger the reward.</li>
          <li><strong>Maximum 5 referrals.</strong> Rewards stop after five qualifying friends.</li>
          <li><strong>1x rollover.</strong> You must place qualifying bets totalling the reward amount once before it can be withdrawn.</li>
          <li><strong>60 days.</strong> The time window to meet the requirements is 60 days.</li>
          <li><strong>No relatives or same household.</strong> Family members and people living at the same address do not qualify.</li>
          <li><strong>No shared wallets.</strong> Accounts using shared wallets, shared payment accounts or shared devices for abuse may be disqualified.</li>
          <li><strong>One account per person.</strong> Duplicate or self-referred accounts are not allowed.</li>
          <li><strong>Company discretion.</strong> W88 may amend or end the promotion and may withhold rewards when it finds abuse.</li>
        </ul>

        <div className="bg-secondary border border-gray-800 rounded-xl p-5">
          <h2 className="text-xl font-bold text-white mb-2">Start with your referral link</h2>
          <p className="text-base">
            If you are not yet a member, joining through our official link is the first step. Already a member? Share the
            link you were given so friends register correctly.
          </p>
          <div className="mt-4 text-center">
            <DownloadButton size="lg" label="JOIN W88 AND GRAB YOUR REFERRAL" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8">Tips to get referrals approved</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Send the link in a private message and ask your friend to open it before anything else.</li>
          <li>Tell them to register in the same browser tab and not to use a saved bookmark.</li>
          <li>Make sure each friend uses their own bank account and their own phone number.</li>
          <li>Remind friends the minimum qualifying deposit is USD 88, so they can plan ahead.</li>
          <li>Keep a note of who you referred and when, in case support asks.</li>
          <li>Be honest about risk: tell friends gambling is for adults and not a way to earn income.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8">Using the reward</h2>
        <p>
          Once credited, your reward has a 1x rollover. Place qualifying bets to complete it, then withdraw as normal
          through the Cashier. If you are unsure how cash-outs work, read the{' '}
          <Link href="/blog/w88-withdraw-money-guide" className="text-accent hover:underline">W88 withdrawal guide</Link> and{' '}
          <Link href="/withdraw-money-from-w88" className="text-accent hover:underline">withdraw money from W88</Link>.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">Helpful reading for you and your friends</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/blog/how-to-join-w88-pakistan" className="text-accent hover:underline">How to join W88 Pakistan</Link> and the <Link href="/join-w88" className="text-accent hover:underline">join page</Link></li>
          <li><Link href="/blog/w88-deposit-guide-pakistan" className="text-accent hover:underline">W88 deposit guide</Link> and <Link href="/deposit-money-in-w88" className="text-accent hover:underline">deposit money in W88</Link></li>
          <li><Link href="/blog/is-w88-safe-legal-pakistan" className="text-accent hover:underline">Is W88 safe and legal in Pakistan?</Link></li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8">Responsible referral</h2>
        <p>
          Never pressure anyone to deposit, and never promise winnings. A referral reward should not be the reason someone
          gambles. Only invite adults who understand the risks and can afford to play. Everyone involved must be 21 or
          older and should set a firm budget.
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
