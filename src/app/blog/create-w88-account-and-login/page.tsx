import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import FaqList from '@/components/FaqList';
import ScreenshotFigure from '@/components/ScreenshotFigure';
import { SITE_URL, BRAND_NAME, LOGO_PATH, OFFICIAL_SUPPORT_EMAIL } from '@/lib/constants';

const SLUG = 'create-w88-account-and-login';
const TITLE = 'Create a W88 Account and Login – Registration & Troubleshooting';
const DESCRIPTION =
  'How to create a W88 account in Pakistan (21+): Continue with Email, Google, LINE or Telegram, pick PKR, enter +92 mobile, plus fixes for common W88 login problems.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ['W88 Google signup', 'W88 PKR', 'W88 login', 'create W88 account', 'W88 register', 'W88 password', 'W88 login problem Pakistan'],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/blog/${SLUG}`,
    siteName: BRAND_NAME,
    type: 'article',
    images: [{ url: `${SITE_URL}${LOGO_PATH}`, width: 1200, height: 630, alt: 'Create W88 account and login' }],
  },
};

const faqs = [
  {
    q: 'What details do I need to register on W88?',
    a: 'The register form asks for Username, Password, Currency (choose PKR), Full Name, Email and Mobile (+92). It also has an Affiliate code field and a Newsletter toggle. You must be above 21.',
  },
  {
    q: 'Can I sign up with Google, LINE or Telegram?',
    a: 'Yes. The signup screen has a “Continue with” list: Email, Google, LINE and Telegram.',
  },
  {
    q: 'Which currency should I choose?',
    a: 'Select PKR Pakistani Rupee in the Currency selector if you play from Pakistan.',
  },
  {
    q: 'What happens after I register?',
    a: 'You are taken to the Deposit page with Bank Transfer, and a crypto account may also be created. Add EasyPaisa or JazzCash numbers under Banking Details if you want them on file.',
  },
  {
    q: 'Why does W88 ask for my real name?',
    a: 'Your account name should match the name on the account you use to withdraw. Matching details avoid delays during verification.',
  },
  {
    q: 'I forgot my password. What now?',
    a: 'Use the Forgot Password option on the login screen and follow the instructions. If it does not work, contact support with your username.',
  },
  {
    q: 'Can I log in on two phones?',
    a: 'You can usually sign in from another device, but avoid sharing your login. If you see activity you do not recognise, change your password at once.',
  },
  {
    q: 'My login says wrong password but I am sure it is right.',
    a: 'Check Caps Lock, remove accidental spaces, and avoid auto-filled old passwords. If you keep failing, reset the password rather than guessing repeatedly.',
  },
  {
    q: 'Can I change my username later?',
    a: 'Usernames are normally fixed once created. Choose carefully and write it down in a safe place.',
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
        <span className="text-gray-300">Create W88 Account and Login</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Create a W88 Account and Log In</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · W88 Pakistan guide · 21+ only</p>

      <div className="relative w-full max-w-xs mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800 bg-secondary p-6">
        <Image src={LOGO_PATH} alt="W88 account registration and login" width={320} height={320} className="w-full h-auto object-contain" priority />
      </div>

      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>
          A clean registration saves headaches later. This guide explains which details to enter when you create a{' '}
          <strong>W88 account</strong>, the password rules that keep your wallet safe, and the quickest fixes for the most
          common <strong>W88 login</strong> problems in Pakistan.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">Step 1: Open the official lobby first</h2>
        <p>
          Start from the official referral button below rather than a search ad or a message from a stranger. It opens the
          W88 Pakistan lobby with the right referral attached, which matters for{' '}
          <Link href="/blog/w88-grab-a-member-referral" className="text-accent hover:underline">Grab A Member rewards</Link>.
        </p>
        <div className="text-center py-2">
          <DownloadButton size="lg" label="JOIN W88 NOW" />
        </div>

        <h2 className="text-2xl font-bold text-white mt-8">Step 2: Fill in the registration form</h2>
        <p>On the official lobby the signup screen shows a <strong>$50 100% Welcome Bonus</strong> and a &ldquo;Continue with&rdquo; list. The form may change slightly over time, but expect these fields:</p>
        <ScreenshotFigure shot="signup" priority />
        <ScreenshotFigure shot="register" />
        <div className="overflow-x-auto">
          <table className="w-full text-left text-base border border-gray-800 rounded-lg">
            <thead className="bg-secondary text-white">
              <tr>
                <th className="p-3">Field</th>
                <th className="p-3">What to enter</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr><td className="p-3 font-semibold">Username</td><td className="p-3">A unique handle you will remember; avoid personal data like your CNIC.</td></tr>
              <tr><td className="p-3 font-semibold">Password</td><td className="p-3">A strong, new password (see rules below).</td></tr>
              <tr><td className="p-3 font-semibold">Currency</td><td className="p-3">PKR Pakistani Rupee for Pakistan play.</td></tr>
              <tr><td className="p-3 font-semibold">Full name</td><td className="p-3">Your real name, as it appears on your bank or wallet account.</td></tr>
              <tr><td className="p-3 font-semibold">Email</td><td className="p-3">An address you check regularly, for recovery and notices.</td></tr>
              <tr><td className="p-3 font-semibold">Mobile (+92)</td><td className="p-3">A Pakistani mobile number you control.</td></tr>
              <tr><td className="p-3 font-semibold">Affiliate code</td><td className="p-3">If you arrived through our referral link, keep the referral intact and follow the on-screen prompt.</td></tr>
              <tr><td className="p-3 font-semibold">Newsletter</td><td className="p-3">Optional toggle for promotions by email.</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Accuracy beats speed. If the name on your account does not match your bank account, your first withdrawal can
          be held for review. See the{' '}
          <Link href="/blog/w88-withdraw-money-guide" className="text-accent hover:underline">withdrawal guide</Link> for details.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">Choose PKR and sign in with Google (optional)</h2>
        <p>
          Open the Currency selector and choose <strong>PKR Pakistani Rupee</strong>. If you prefer not to type a
          password, the signup screen also offers <strong>Continue with Google</strong>, LINE or Telegram.
        </p>
        <ScreenshotFigure shot="currency" />
        <ScreenshotFigure shot="google" />

        <h2 className="text-2xl font-bold text-white mt-8">Password rules that actually protect you</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use at least 8 characters with both letters and numbers; a longer phrase is better.</li>
          <li>Do not use your name, birthday, phone number or &ldquo;123456&rdquo;.</li>
          <li>Never reuse a password from email, Facebook or other betting sites.</li>
          <li>Avoid spaces and unusual symbols if the form rejects them.</li>
          <li>Store it in a password manager or a private note, not a screenshot.</li>
          <li>Change it immediately if you suspect someone else knows it.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8">Step 3: Submit and sign in</h2>
        <p>
          After you submit the form you land on the Deposit page with Bank Transfer (a crypto account may also be created).
          You can sign in later with your username and password. Check your profile once to confirm your details, and add
          EasyPaisa or JazzCash numbers under Banking Details if you plan to use them. Then you can explore the lobby, or head to{' '}
          <Link href="/blog/how-to-join-w88-pakistan" className="text-accent hover:underline">the full join guide</Link>{' '}
          and the <Link href="/join-w88" className="text-accent hover:underline">join page</Link>.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8">W88 login troubleshooting</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-white">&ldquo;Wrong username or password&rdquo;</h3>
            <p>Check Caps Lock, trim spaces, and type the password manually instead of using an old autofill entry. After a few failed tries, reset it rather than guessing.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Page loads but stays blank</h3>
            <p>Refresh, switch between Wi-Fi and mobile data, and update your browser. A private or incognito tab often fixes cache issues.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Locked or restricted account</h3>
            <p>Too many failed attempts or unusual activity can pause access. Contact support from your registered email at {OFFICIAL_SUPPORT_EMAIL} and describe the problem.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Forgot username</h3>
            <p>Search your inbox for the registration message, or ask support to help you verify your identity.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Not sure you are on the real site</h3>
            <p>Close the tab and return through the official button on this page. Never enter your password on a link sent via a message.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-8">Account security habits</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Log out on shared or borrowed phones.</li>
          <li>Do not hand your login to anyone offering to &ldquo;play for you&rdquo;.</li>
          <li>Check your balance and history regularly.</li>
          <li>One person, one account: duplicates can lead to restrictions.</li>
        </ul>
        <p>
          For a broader view, see <Link href="/blog/is-w88-safe-legal-pakistan" className="text-accent hover:underline">Is W88 safe and legal in Pakistan?</Link>
          {' '}You must be 21 or older to register, and gambling should always stay within a budget.
        </p>
      </div>

      <div className="mt-10 text-center">
        <DownloadButton size="lg" label="REGISTER ON W88" />
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
