import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import FaqList from '@/components/FaqList';
import { SITE_URL, BRAND_NAME, LOGO_PATH, BANKING_EMAIL } from '@/lib/constants';

const SLUG = 'w88-withdraw-money-guide';
const TITLE = 'W88 Withdraw Money Guide – Steps, Documents & Fixes (Pakistan)';
const DESCRIPTION =
  'How to withdraw money from W88 in Pakistan: step-by-step cash out, documents you may need for verification, rollover checks and what to do if a request is delayed.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ['W88 withdraw', 'W88 withdrawal Pakistan', 'W88 cash out', 'W88 verification documents', 'W88 withdrawal pending'],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/blog/${SLUG}`,
    siteName: BRAND_NAME,
    type: 'article',
    images: [{ url: `${SITE_URL}${LOGO_PATH}`, width: 1200, height: 630, alt: 'W88 withdraw money guide' }],
  },
};

const faqs = [
  {
    q: 'How do I withdraw money from W88?',
    a: 'Log in, open the Cashier or Withdraw section, add or select a receiving bank account in your own name, enter the amount, and submit. Keep the request reference until funds arrive.',
  },
  {
    q: 'How long do withdrawals take?',
    a: 'Processing times vary by method, amount and whether verification is needed. The Cashier shows the expected time for your selected method.',
  },
  {
    q: 'What documents might W88 ask for?',
    a: 'Common requests are a clear photo of your national ID (CNIC) and proof that the receiving bank account belongs to you, such as a statement or account screenshot. Only upload through the official lobby or to official W88 contacts.',
  },
  {
    q: 'Why is my withdrawal pending or rejected?',
    a: 'Typical reasons are unfinished rollover on a bonus, name mismatch, an incorrect account number, an unverified account, or multiple requests at once.',
  },
  {
    q: 'Is there a withdrawal limit?',
    a: 'Yes, minimum and maximum limits apply and may differ by method. Check the Cashier for current figures before you request.',
  },
  {
    q: 'Who do I contact about a banking issue?',
    a: `Email ${BANKING_EMAIL} with your username, amount, request time and any screenshots, or use live chat in the lobby.`,
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
      <BlogPostSchema title={TITLE} description={DESCRIPTION} slug={SLUG} datePublished="2026-10-22" dateModified="2026-10-27" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">W88 Withdraw Money Guide</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">W88 Withdraw Money Guide: Steps, Documents and Fixes</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · W88 Pakistan guide · 21+ only</p>

      <div className="relative w-full max-w-xs mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800 bg-secondary p-6">
        <Image src={LOGO_PATH} alt="W88 withdraw money guide" width={320} height={320} className="w-full h-auto object-contain" priority />
      </div>

      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>
          The moment you request a payout is where good preparation pays off. This <strong>W88 withdraw money guide</strong> explains how to
          cash out from Pakistan, which documents may be requested, why a request might stall, and how to get help
          quickly. Amounts and methods can change, so always rely on the Cashier screen for the latest details.
        </p>

        <div className="bg-secondary border border-gray-800 rounded-xl p-5">
          <h2 className="text-xl font-bold text-white mb-3">Withdrawal checklist</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your account name matches the receiving bank account name.</li>
            <li>Any bonus rollover is complete.</li>
            <li>You have no other pending withdrawal request.</li>
            <li>Your amount is inside the minimum and maximum shown.</li>
            <li>You can provide ID or bank proof if asked.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8">How to withdraw from W88: step by step</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li><strong>Log in</strong> through the official lobby link.</li>
          <li><strong>Open the Cashier</strong> and select <em>Withdraw</em>.</li>
          <li><strong>Add or choose a bank account.</strong> Use an account in your own name and double check the number.</li>
          <li><strong>Enter the amount</strong> in PKR, within the stated limits.</li>
          <li><strong>Confirm and submit.</strong> Complete any security step that appears.</li>
          <li><strong>Track the request</strong> under transaction history and save the reference number.</li>
          <li><strong>Check your bank</strong> after the status shows completed.</li>
        </ol>
        <div className="text-center py-2">
          <DownloadButton size="lg" label="LOG IN TO W88" />
        </div>

        <h2 className="text-2xl font-bold text-white mt-8">Documents W88 may ask for</h2>
        <p>
          To protect accounts from fraud, W88 may ask you to verify yourself, especially on a first or larger withdrawal.
          This is routine, not a sign that something is wrong. Be ready with:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>National ID (CNIC):</strong> a clear, uncropped photo of both sides.</li>
          <li><strong>Bank proof:</strong> a statement, cheque image or app screenshot showing your name and account number.</li>
          <li><strong>Selfie with ID:</strong> sometimes requested to confirm you are the account owner.</li>
          <li><strong>Deposit receipts:</strong> useful if the team needs to match an earlier payment.</li>
        </ul>
        <p>
          Send documents only through the official lobby or to official W88 addresses such as {BANKING_EMAIL}. Never send
          your ID to a person who messages you first on social media.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">Why a withdrawal may be delayed or rejected</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Rollover not finished:</strong> bonuses and referral rewards need qualifying bets first.</li>
          <li><strong>Name mismatch:</strong> the bank account is not in the same name as your W88 account.</li>
          <li><strong>Wrong account details:</strong> a mistyped number or bank name.</li>
          <li><strong>Pending verification:</strong> documents are missing or unclear.</li>
          <li><strong>Several requests at once:</strong> submit one and wait for it to finish.</li>
          <li><strong>Banking hours:</strong> weekends, holidays and cut-off times can slow settlement.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8">What to do if it is still pending</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Check the stated processing time for your method before worrying.</li>
          <li>Confirm the status in transaction history.</li>
          <li>Prepare your username, amount, request time and screenshots.</li>
          <li>Contact live chat or email {BANKING_EMAIL}.</li>
          <li>Be polite and give the facts once; repeated duplicate requests slow things down.</li>
        </ol>

        <h2 className="text-2xl font-bold text-white mt-8">Tips for smooth cash-outs</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Test with a small first withdrawal so you know the process end to end.</li>
          <li>Register with real details from day one; read <Link href="/blog/create-w88-account-and-login" className="text-accent hover:underline">how to create your account</Link>.</li>
          <li>Skip bonuses if you want the simplest path to cashing out.</li>
          <li>Withdraw regularly instead of leaving large balances idle.</li>
          <li>Never share your login so nobody else can request a payout.</li>
        </ul>

        <p>
          Quick reference page: <Link href="/withdraw-money-from-w88" className="text-accent hover:underline">withdraw money from W88</Link>. Need to fund your wallet first? See the{' '}
          <Link href="/blog/w88-deposit-guide-pakistan" className="text-accent hover:underline">deposit guide</Link> and{' '}
          <Link href="/deposit-money-in-w88" className="text-accent hover:underline">deposit money in W88</Link>. New here? Read{' '}
          <Link href="/blog/how-to-join-w88-pakistan" className="text-accent hover:underline">how to join W88 Pakistan</Link>.
        </p>
        <p className="text-base text-gray-400">
          Play for entertainment only. Gambling can lose money, is for adults 21+, and winnings are never guaranteed.
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
