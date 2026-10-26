import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import FaqList from '@/components/FaqList';
import { SITE_URL, BRAND_NAME, LOGO_PATH, OFFICIAL_SUPPORT_EMAIL, BANKING_EMAIL } from '@/lib/constants';

const SLUG = 'is-w88-safe-legal-pakistan';
const TITLE = 'Is W88 Safe and Legal in Pakistan? Licence, SSL & Scam Warnings';
const DESCRIPTION =
  'Is W88 safe for Pakistani players? We cover the CEZA licence claim, SSL, fake-site warnings, 21+ rules, legal considerations and responsible gaming tips.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ['is W88 safe', 'is W88 legal Pakistan', 'W88 scam', 'W88 fake', 'W88 CEZA licence', 'W88 SSL'],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/blog/${SLUG}`,
    siteName: BRAND_NAME,
    type: 'article',
    images: [{ url: `${SITE_URL}${LOGO_PATH}`, width: 1200, height: 630, alt: 'Is W88 safe and legal in Pakistan' }],
  },
};

const faqs = [
  {
    q: 'Is W88 a scam?',
    a: 'W88 is an established brand that states a CEZA licence. Scams usually come from fake look-alike sites and impersonators, so only use the official link and never pay private “agents”.',
  },
  {
    q: 'Is W88 legal in Pakistan?',
    a: 'Online gambling rules are complex and can change. W88 operates internationally under its stated licence, but players are responsible for understanding the laws that apply to them. This page is general information, not legal advice.',
  },
  {
    q: 'Does W88 use SSL?',
    a: 'A genuine lobby loads over HTTPS, which encrypts the connection between your phone and the site. Look for the padlock in your browser, but remember that HTTPS alone does not prove a site is official.',
  },
  {
    q: 'How do I spot a fake W88 site?',
    a: 'Warning signs include misspelled domains, requests to pay a personal account, “activation fees”, guaranteed-win claims and pressure to act fast. Return to the official button on this site if unsure.',
  },
  {
    q: 'What is the minimum age?',
    a: 'You must be at least 21 years old. Underage play is not allowed.',
  },
  {
    q: 'What should I do if I think I was scammed?',
    a: `Stop paying, keep screenshots and receipts, contact your bank, and email ${OFFICIAL_SUPPORT_EMAIL} or ${BANKING_EMAIL} if the official brand is involved.`,
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
      <BlogPostSchema title={TITLE} description={DESCRIPTION} slug={SLUG} datePublished="2026-10-23" dateModified="2026-10-27" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">Is W88 Safe and Legal in Pakistan?</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Is W88 Safe and Legal in Pakistan?</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · W88 Pakistan guide · 21+ only</p>

      <div className="relative w-full max-w-xs mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800 bg-secondary p-6">
        <Image src={LOGO_PATH} alt="Is W88 safe and legal in Pakistan" width={320} height={320} className="w-full h-auto object-contain" priority />
      </div>

      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>
          &ldquo;Is W88 safe?&rdquo; and &ldquo;Is W88 legal in Pakistan?&rdquo; are fair questions, and you deserve straight
          answers rather than marketing. Below we explain the licence claim, how the connection is protected,
          how to avoid fake sites, and where your own responsibility begins. This is general information, not legal or
          financial advice.
        </p>

        <div className="bg-secondary border border-gray-800 rounded-xl p-5">
          <h2 className="text-xl font-bold text-white mb-3">Short answer</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>W88 is an established brand that states a <strong>CEZA</strong> licence.</li>
            <li>The genuine lobby uses HTTPS, but fake sites can use it too.</li>
            <li>Most scams come from <strong>impersonators</strong>, not from the official lobby.</li>
            <li>Legality depends on local law; check what applies to you.</li>
            <li>Players must be <strong>21 or older</strong> and should gamble responsibly.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8">Licence: what CEZA means</h2>
        <p>
          W88 states that it operates under a licence issued by the Cagayan Economic Zone Authority (CEZA) in the
          Philippines. Licensing means an operator is accountable to a regulator rather than answering to nobody. It does
          not make losing impossible, and it does not replace your own checks. Confirm licence information on the
          official site, and read our{' '}
          <Link href="/blog/w88-app-review-2026" className="text-accent hover:underline">W88 app review 2026</Link> for the wider picture.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">SSL and account security</h2>
        <p>
          SSL (shown as HTTPS and a padlock) encrypts data between your device and the website, which protects passwords
          and payment details from being read in transit. Good practice from your side completes the picture:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use a unique password that you do not use anywhere else.</li>
          <li>Log in only on the official lobby, not through links in chats.</li>
          <li>Avoid public Wi-Fi for payments, or use mobile data instead.</li>
          <li>Keep your phone and browser updated.</li>
          <li>Log out on shared devices.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8">Common scam warnings</h2>
        <p>Most losses reported by players come from copycats and social-media impersonators. Watch for these signs:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Private agents</strong> who ask you to pay a personal account for &ldquo;faster deposits&rdquo;.</li>
          <li><strong>Activation or tax fees</strong> demanded before you can withdraw.</li>
          <li><strong>Guaranteed winnings</strong>, fixed matches or &ldquo;insider tips&rdquo; for money.</li>
          <li><strong>Look-alike domains</strong> with extra words, odd endings or spelling changes.</li>
          <li><strong>Pressure and urgency</strong> in WhatsApp, Telegram or Facebook messages.</li>
          <li><strong>Requests for your password or OTP</strong>. Genuine support never needs them.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8">How to confirm you are on the official lobby</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Use the official join button on this site, which opens the Pakistan lobby.</li>
          <li>Check the address bar and padlock before typing credentials.</li>
          <li>Make payments only through the Cashier inside your logged-in account.</li>
          <li>Contact support only through channels listed in the lobby or at {OFFICIAL_SUPPORT_EMAIL} and {BANKING_EMAIL}.</li>
        </ol>
        <div className="text-center py-2">
          <DownloadButton size="lg" label="OPEN OFFICIAL W88 LOBBY" />
        </div>

        <h2 className="text-2xl font-bold text-white mt-8">Is it legal in Pakistan?</h2>
        <p>
          Laws around online gambling in Pakistan are restrictive and subject to interpretation and change. W88 operates as
          an international platform under its stated licence, but that does not tell you how the law applies to you
          personally. You are responsible for checking local rules, taxes and any restrictions before you play. If you are
          unsure, consult a qualified professional or choose not to play. We do not encourage anyone to break the law.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">Age and identity</h2>
        <p>
          W88 is for adults aged 21 and over. Expect identity checks before larger withdrawals, which protect real
          account holders. Read the{' '}
          <Link href="/blog/w88-withdraw-money-guide" className="text-accent hover:underline">withdrawal guide</Link> to see what documents may be
          requested. Providing accurate details at registration, as explained in{' '}
          <Link href="/blog/create-w88-account-and-login" className="text-accent hover:underline">create a W88 account and login</Link>,
          prevents most problems.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">Responsible gaming checklist</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Decide your limit before you deposit and never exceed it.</li>
          <li>Never borrow money or use funds meant for essentials.</li>
          <li>Accept that losses are part of gambling and do not chase them.</li>
          <li>Take regular breaks and avoid playing when tired or upset.</li>
          <li>If it stops being fun, stop. Seek support from family, friends or a counsellor.</li>
        </ul>

        <p>
          Next steps: <Link href="/blog/how-to-join-w88-pakistan" className="text-accent hover:underline">how to join W88 Pakistan</Link>,{' '}
          <Link href="/join-w88" className="text-accent hover:underline">the join page</Link>, and{' '}
          <Link href="/blog/how-to-use-w88-pakistan-guide" className="text-accent hover:underline">the beginner guide</Link>.
          For payments see <Link href="/deposit-money-in-w88" className="text-accent hover:underline">deposit</Link> and{' '}
          <Link href="/withdraw-money-from-w88" className="text-accent hover:underline">withdraw</Link>.
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
