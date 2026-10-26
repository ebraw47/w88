import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import FaqList from '@/components/FaqList';
import ScreenshotFigure from '@/components/ScreenshotFigure';
import { SITE_URL, BRAND_NAME, LOGO_PATH, BANKING_EMAIL } from '@/lib/constants';

const SLUG = 'w88-deposit-guide-pakistan';
const TITLE = 'W88 Deposit Guide Pakistan – Cashier & Bank Transfer Steps';
const DESCRIPTION =
  'How to deposit into W88 from Pakistan: Deposit → Bank Transfer, bind JazzCash / EasyPaisa in Banking Details, receipts, delay fixes and safety tips. 21+ only.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ['W88 JazzCash', 'W88 EasyPaisa', 'W88 deposit', 'W88 deposit Pakistan', 'W88 bank transfer', 'W88 cashier', 'add money W88'],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/blog/${SLUG}`,
    siteName: BRAND_NAME,
    type: 'article',
    images: [{ url: `${SITE_URL}${LOGO_PATH}`, width: 1200, height: 630, alt: 'W88 deposit guide Pakistan' }],
  },
};

const faqs = [
  {
    q: 'Where do I deposit on W88?',
    a: 'After registering you reach the Deposit page, where Bank Transfer is shown. Later, log in and open Deposit / Cashier. Only use the payment details shown there for your session.',
  },
  {
    q: 'Can I add JazzCash or EasyPaisa?',
    a: 'Yes. Under Banking Details add an EasyPaisa Phone Number or a JazzCash Phone Number (up to 5 each), plus up to 5 bank accounts. Then use Deposit → Bank Transfer or the methods shown in your Cashier.',
  },
  {
    q: 'What is the minimum deposit?',
    a: 'Minimums and maximums depend on the payment method and may change. The Cashier shows the exact limits before you confirm.',
  },
  {
    q: 'How long does a bank transfer deposit take?',
    a: 'Many transfers arrive within minutes, but bank hours, weekends and verification can add time. If it takes much longer, contact support with your receipt.',
  },
  {
    q: 'Can I deposit with someone else’s bank account?',
    a: 'No. Use an account in your own name. Third-party payments can be rejected and may delay your withdrawals.',
  },
  {
    q: 'My deposit has not appeared. What should I do?',
    a: `Wait a few minutes, refresh, and check your transaction history. If it is still missing, send your receipt, username and amount to ${BANKING_EMAIL} or use live chat.`,
  },
  {
    q: 'Are there deposit bonuses?',
    a: 'Sometimes. Each bonus has terms, including rollover. Read them before you opt in, because bonus rules can affect when you can withdraw.',
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
        <span className="text-gray-300">W88 Deposit Guide Pakistan</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">W88 Deposit Guide for Pakistan: Cashier and Bank Transfer</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · W88 Pakistan guide · 21+ only</p>

      <div className="relative w-full max-w-xs mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800 bg-secondary p-6">
        <Image src={LOGO_PATH} alt="W88 deposit guide" width={320} height={320} className="w-full h-auto object-contain" priority />
      </div>

      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>
          Adding funds to your wallet should feel routine, not stressful. This <strong>W88 deposit guide</strong> shows how to
          fund your account from Pakistan through the in-lobby Cashier and by bank transfer, what to keep for proof, and
          how to handle delays. Available methods can change, so the Cashier on your screen is always the final word.
        </p>

        <div className="bg-secondary border border-gray-800 rounded-xl p-5">
          <h2 className="text-xl font-bold text-white mb-3">Before you deposit</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>You are logged in on the official W88 Pakistan lobby.</li>
            <li>The name on your W88 account matches your bank account name.</li>
            <li>You have set a budget you can afford to lose.</li>
            <li>You have decided whether you want any promotion and have read its terms.</li>
          </ul>
        </div>

        <div className="text-center py-2">
          <DownloadButton size="lg" label="OPEN W88 CASHIER" />
        </div>

        <h2 className="text-2xl font-bold text-white mt-8">Step 0: Bind JazzCash / EasyPaisa in Banking Details</h2>
        <p>
          Open <strong>Banking Details</strong> and add the accounts you will use: a <strong>Bank Account</strong>, an{' '}
          <strong>EasyPaisa Phone Number</strong> or a <strong>JazzCash Phone Number</strong> (up to 5 each). Then use{' '}
          <strong>Deposit &rarr; Bank Transfer</strong> or the methods shown in your Cashier.
        </p>
        <ScreenshotFigure shot="banking" priority />

        <h2 className="text-2xl font-bold text-white mt-8">Method 1: Deposit through the Cashier</h2>
        <p>
          After registration W88 opens the Deposit page with Bank Transfer. A crypto account may also be created.
        </p>
        <ScreenshotFigure shot="deposit" />
        <ol className="list-decimal pl-6 space-y-3">
          <li><strong>Log in</strong> from the official link and tap <em>Deposit</em> or <em>Cashier</em> in the menu.</li>
          <li><strong>Choose a payment method</strong> from the list currently offered, such as Bank Transfer.</li>
          <li><strong>Enter your amount</strong> within the min and max shown on screen.</li>
          <li><strong>Review the details</strong> carefully: amount, account and any reference code the page gives you.</li>
          <li><strong>Confirm</strong> and follow the instructions, which may open a payment page or show transfer details.</li>
          <li><strong>Check your balance</strong>. When funds credit, you will see them in your wallet and transaction history.</li>
        </ol>

        <h2 className="text-2xl font-bold text-white mt-8">Method 2: Bank transfer</h2>
        <p>
          When bank transfer is available, the Cashier displays the receiving bank details for your deposit request.
          Treat those details as one-time instructions for that request.
        </p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>Select <strong>Bank Transfer</strong> in the Cashier and enter the amount.</li>
          <li>Copy the receiving details exactly and keep the reference code if one is provided.</li>
          <li>Open your mobile banking app or branch service and send the exact amount from <strong>your own account</strong>.</li>
          <li>Take a screenshot of the successful transfer receipt.</li>
          <li>Return to the lobby and submit the transfer confirmation if the form asks for it (amount, time, reference).</li>
          <li>Wait for the wallet to update; most are processed in minutes, though bank cut-off times can slow things down.</li>
        </ol>

        <h2 className="text-2xl font-bold text-white mt-8">Common deposit mistakes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Sending a different amount</strong> than you entered, which can stall matching.</li>
          <li><strong>Paying from a third-party account</strong>, which may be rejected.</li>
          <li><strong>Using old bank details</strong> from a previous deposit instead of the new request.</li>
          <li><strong>Deleting the receipt</strong> before the funds credit.</li>
          <li><strong>Sending money to someone on chat</strong> who says they are an agent.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8">If your deposit is delayed</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Wait a few minutes and refresh the lobby.</li>
          <li>Check your transaction history and your bank statement.</li>
          <li>Gather your username, amount, time of transfer and the receipt screenshot.</li>
          <li>Contact live chat, or email {BANKING_EMAIL} with those details.</li>
        </ol>
        <p>
          Do not make a second payment hoping it will speed things up. That usually creates two problems instead of
          one.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">Bonuses and rollover</h2>
        <p>
          Deposit promotions come with a rollover requirement, meaning you must place qualifying bets before the bonus
          and related winnings can be withdrawn. Read the terms before opting in, and remember that you can skip a
          bonus if you prefer simpler withdrawals. The same idea applies to the{' '}
          <Link href="/blog/w88-grab-a-member-referral" className="text-accent hover:underline">referral reward</Link>, which
          has its own 1x rollover.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">Safe deposit habits</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Deposit only inside the official lobby, never through links in private messages.</li>
          <li>Start with a small amount on your first deposit to confirm everything works.</li>
          <li>Keep every receipt until the funds appear and are played.</li>
          <li>Never deposit money you need for rent, food or bills.</li>
        </ul>

        <p>
          Quick reference: <Link href="/deposit-money-in-w88" className="text-accent hover:underline">deposit money in W88</Link>.
          Not registered yet? Start with <Link href="/blog/how-to-join-w88-pakistan" className="text-accent hover:underline">how to join W88 Pakistan</Link>.
          Ready to cash out later? See <Link href="/blog/w88-withdraw-money-guide" className="text-accent hover:underline">the withdrawal guide</Link> or{' '}
          <Link href="/withdraw-money-from-w88" className="text-accent hover:underline">withdraw money from W88</Link>.
        </p>
        <p className="text-base text-gray-400">
          Gambling involves risk, is restricted to adults above 21 (21+), and should never be treated as income.
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
