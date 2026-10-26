import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import FaqList from '@/components/FaqList';
import ScreenshotCarousel from '@/components/ScreenshotCarousel';
import ScreenshotFigure from '@/components/ScreenshotFigure';
import { W88_SHOTS } from '@/lib/screenshots';
import {
  APP_OS,
  APP_SIZE,
  APP_VERSION,
  BRAND_NAME,
  HERO_LOGO_PATH,
  LOGO_PATH,
  MIN_AGE,
  SITE_URL,
  SUPPORT_EMAIL,
  WELCOME_BONUS,
} from '@/lib/constants';

export const metadata: Metadata = {
  title: 'W88 Pakistan — $50 Welcome Bonus, PKR, JazzCash & EasyPaisa 2026',
  description:
    'Join W88 Pakistan: $50 100% Welcome Bonus, PKR (Pakistani Rupee) signup with +92 mobile, Bank Transfer deposits and JazzCash / EasyPaisa in Banking Details. 21+ only.',
  keywords: [
    'W88',
    'W88 Pakistan',
    'W88 login',
    'W88 join',
    'W88 PKR',
    'W88 JazzCash',
    'W88 EasyPaisa',
    'W88 welcome bonus',
    'W88 casino',
    'W88 sports',
    'W88 referral',
    'w88.net.pk',
    'W88 2026',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'W88 Pakistan — $50 Welcome Bonus, PKR, JazzCash & EasyPaisa',
    description:
      'Pakistan W88 lobby — PKR signup, $50 100% Welcome Bonus, Bank Transfer deposit, JazzCash & EasyPaisa banking details. 21+.',
    url: SITE_URL,
    siteName: BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/feature/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'W88 - Official Pakistan Gaming',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'W88 Pakistan — $50 Welcome Bonus & PKR',
    description: 'Join W88 Pakistan — PKR, JazzCash, EasyPaisa, Bank Transfer and a $50 100% Welcome Bonus. 21+.',
    images: [`${SITE_URL}/feature/og-image.webp`],
  },
};

const appInfo = [
  { label: 'Brand', value: 'W88' },
  { label: 'Welcome Offer', value: WELCOME_BONUS },
  {
    label: 'Lobby Menu',
    value:
      'Sports, Casino, Slots, Fishing, Games, Esports, P2P, Poker, Promotions, Rewards, Refer A Friend, W Signature Club, Affiliate, Download',
  },
  { label: 'Access', value: APP_SIZE },
  { label: 'Version', value: APP_VERSION },
  { label: 'Devices', value: APP_OS },
  { label: 'Currency', value: 'PKR Pakistani Rupee (selectable at signup)' },
  { label: 'Mobile', value: 'Pakistan +92' },
  { label: 'Local Banking', value: 'Bank Account, EasyPaisa, JazzCash' },
  { label: 'Signup Options', value: 'Email, Google, LINE, Telegram' },
  { label: 'Language', value: 'English' },
  { label: 'Support', value: 'Live Chat & Email' },
  { label: 'Age', value: `${MIN_AGE}+ only` },
];

const lobbyProducts = [
  'Sports',
  'Casino',
  'Slots',
  'Fishing',
  'Games',
  'Esports',
  'P2P',
  'Poker',
  'Promotions',
  'Rewards',
  'Refer A Friend',
  'W Signature Club',
  'Affiliate',
  'Download',
];

const features = [
  {
    title: '$50 100% Welcome Bonus',
    text: 'New signups see a $50 100% Welcome Bonus on the signup screen. Always read the promotion terms and rollover in Promotions before you opt in.',
  },
  {
    title: 'PKR & +92 Mobile',
    text: 'Pakistan players can pick PKR Pakistani Rupee as currency at signup and enter a +92 mobile number on the register form.',
  },
  {
    title: 'JazzCash & EasyPaisa',
    text: 'In Banking Details you can add a Bank Account, an EasyPaisa Phone Number and a JazzCash Phone Number — up to 5 of each.',
  },
  {
    title: 'Bank Transfer Deposit',
    text: 'After registration you land on the Deposit page with Bank Transfer. A crypto account may also be created for you. Follow the methods shown in the Cashier.',
  },
  {
    title: 'Flexible Signup',
    text: 'Continue with Email, Google, LINE or Telegram — or fill in the full form with username, password, currency, name, email and mobile.',
  },
  {
    title: 'Full Product Lobby',
    text: 'Sports, Casino, Slots, Fishing, Games, Esports, P2P, Poker, plus Promotions, Rewards, Refer A Friend, W Signature Club and Affiliate from one menu.',
  },
];

const faqs = [
  {
    q: 'How old do I need to be to join W88?',
    a: `You must be above ${MIN_AGE} years old (${MIN_AGE}+). The registration form asks you to confirm this before you can create an account.`,
  },
  {
    q: 'How do I open a W88 account in Pakistan?',
    a: `Open the official lobby with our Join button and tap Join / Register. You can Continue with Email, Google, LINE or Telegram, or fill in Username, Password, Currency (choose PKR Pakistani Rupee), Full Name, Email and Mobile (+92). Affiliate code and Newsletter toggle are also on the form. You must be ${MIN_AGE}+.`,
  },
  {
    q: 'What is the welcome offer?',
    a: `The signup screen shows a ${WELCOME_BONUS}. Terms, rollover and eligibility are shown in Promotions — read them before you claim.`,
  },
  {
    q: 'Can I use JazzCash or EasyPaisa?',
    a: 'Yes — in Banking Details you can add an EasyPaisa Phone Number and a JazzCash Phone Number (up to 5 each), as well as a Bank Account (up to 5). Then use Deposit → Bank Transfer or the methods shown in your Cashier. Availability can change, so always follow the Cashier screen.',
  },
  {
    q: 'What happens after I register?',
    a: 'You are taken to the Deposit page, where Bank Transfer is shown. A crypto account may also be created. Use only the details shown inside the official lobby or given by official Live Chat.',
  },
  {
    q: 'Which currency should I choose?',
    a: 'Choose PKR Pakistani Rupee in the Currency selector at signup if you play from Pakistan. Pair it with a +92 mobile number.',
  },
  {
    q: 'Can I sign up with Google?',
    a: 'Yes. The signup screen offers Continue with Email, Google, LINE and Telegram. Pick the option you can access securely and keep that account protected.',
  },
  {
    q: 'What is the Affiliate code field?',
    a: 'The register form includes an Affiliate code field. If you opened the lobby through our referral link, keep that referral intact and follow the on-screen instructions.',
  },
  {
    q: 'How do I deposit and withdraw?',
    a: 'Open the Cashier. For deposits use Bank Transfer or the methods shown for your account. For withdrawals, add your Bank Account, EasyPaisa or JazzCash number under Banking Details first, then choose from the methods shown. First withdrawals may need ID and bank proof.',
  },
  {
    q: 'Is there a risk of losing money?',
    a: `Yes. Real-money gaming always carries risk. Only use money you can afford to lose and play responsibly (${MIN_AGE}+).`,
  },
];

const carouselItems = [
  W88_SHOTS.signup,
  W88_SHOTS.register,
  W88_SHOTS.currency,
  W88_SHOTS.google,
  W88_SHOTS.deposit,
  W88_SHOTS.banking,
  W88_SHOTS.menu,
].map(({ src, alt, title }) => ({ src, alt, title }));

export default function HomePage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BRAND_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}${LOGO_PATH}`,
        description:
          'W88 Pakistan guide — PKR signup, $50 100% Welcome Bonus, Bank Transfer, JazzCash & EasyPaisa banking details. 21+.',
        areaServed: { '@type': 'Country', name: 'Pakistan', alternateName: 'PK' },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: SUPPORT_EMAIL,
          areaServed: 'PK',
          availableLanguage: ['English', 'Urdu'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND_NAME,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: ['en', 'ur'],
      },
      {
        '@type': 'SoftwareApplication',
        name: BRAND_NAME,
        operatingSystem: APP_OS,
        applicationCategory: 'GameApplication',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'PKR' },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.6',
          ratingCount: '12000',
          bestRating: '5',
        },
        downloadUrl: `${SITE_URL}/join-w88`,
        softwareVersion: APP_VERSION,
        fileSize: APP_SIZE,
        image: `${SITE_URL}${LOGO_PATH}`,
        author: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="dx-hero relative py-12 md:py-20 px-4 overflow-hidden">
        <div className="dx-hero-bg" aria-hidden="true">
          <span className="dx-hero-orb dx-hero-orb-a" />
          <span className="dx-hero-orb dx-hero-orb-b" />
          <span className="dx-hero-orb dx-hero-orb-c" />
          <span className="dx-hero-grid" />
          <span className="dx-hero-fade" />
        </div>
        <div className="container mx-auto relative z-[1]">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
                W88 Pakistan
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-4 text-cyan">
                Instant PKR · JazzCash &amp; EasyPaisa Ready
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Step into the official W88 Pakistan experience — choose{' '}
                <strong className="text-white">PKR</strong> at signup, verify with your{' '}
                <strong className="text-white">+92</strong> number, then link{' '}
                <strong className="text-white">JazzCash</strong> or{' '}
                <strong className="text-white">EasyPaisa</strong> in Banking Details for smooth
                deposits and withdrawals. Built for modern play. {MIN_AGE}+ only.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start justify-center lg:justify-start mb-8">
                <DownloadButton size="lg" label="JOIN W88 NOW" />
              </div>
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                {[
                  { n: 'PKR', l: 'Pakistan' },
                  { n: 'USDT', l: 'Crypto' },
                  { n: '40+', l: 'Currencies' },
                ].map((s) => (
                  <div key={s.l} className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-accent">{s.n}</div>
                    <div className="text-sm text-gray-400">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">*Mobile browser lobby · Android &amp; iOS</p>
            </div>
            <div className="flex-shrink-0">
              <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
                <Image
                  src={HERO_LOGO_PATH}
                  alt="W88 Official Logo"
                  width={1024}
                  height={1024}
                  className="object-cover w-full h-full rounded-[2rem]"
                  priority
                  fetchPriority="high"
                  quality={95}
                  sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, 320px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome bonus */}
      <section className="py-10 md:py-14 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="rounded-2xl border border-accent/35 bg-secondary/50 px-6 py-8 md:px-10 md:py-10 text-center">
            <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">
              New player offer
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {WELCOME_BONUS}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-xl mx-auto">
              Claim the welcome boost when you join W88 Pakistan. Check Promotions for current terms,
              rollover, and eligibility before you opt in.
            </p>
            <DownloadButton size="md" label="CLAIM & JOIN W88" />
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-12 md:py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <p className="text-accent font-semibold tracking-wide uppercase text-center text-sm mb-3">
            Real product screenshots
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">
            See W88 Pakistan Signup, PKR, Deposit &amp; Banking
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-8">
            Signup options, PKR currency, Bank Transfer deposit, JazzCash / EasyPaisa banking details and
            the full lobby menu — straight from the official W88 lobby.
          </p>
          <ScreenshotCarousel screenshots={carouselItems} wide />
          <div className="text-center mt-8">
            <DownloadButton size="md" label="JOIN W88 NOW" />
          </div>
        </div>
      </section>

      {/* App info */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            W88 Pakistan Info
          </h2>

          <div className="dx-scifi mx-auto">
            <div className="dx-scifi-frame">
              <span className="dx-scifi-corner dx-scifi-corner-tl" aria-hidden="true" />
              <span className="dx-scifi-corner dx-scifi-corner-tr" aria-hidden="true" />
              <span className="dx-scifi-corner dx-scifi-corner-bl" aria-hidden="true" />
              <span className="dx-scifi-corner dx-scifi-corner-br" aria-hidden="true" />
              <span className="dx-scifi-scan" aria-hidden="true" />

              <div className="dx-scifi-header">
                <span className="dx-scifi-chip">SYS // PWA</span>
                <span className="dx-scifi-chip dx-scifi-chip-live">ONLINE</span>
              </div>

              <div className="dx-scifi-body">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-accent/30">
                  <div className="relative h-12 w-20 rounded-lg overflow-hidden bg-black/50 border border-accent/50 flex-shrink-0 shadow-[0_0_18px_rgba(251,223,3,0.35)] flex items-center justify-center">
                    <Image
                      src={LOGO_PATH}
                      alt="W88"
                      width={72}
                      height={24}
                      className="object-contain w-16 h-auto"
                    />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg leading-tight tracking-wide">
                      W88 Lobby Details
                    </p>
                    <p className="text-accent text-sm font-semibold uppercase tracking-wider">
                      Official Pakistan Access
                    </p>
                  </div>
                </div>
                <table className="w-full text-left dx-scifi-table">
                  <tbody>
                    {appInfo.map((row, i) => (
                      <tr key={row.label} className={i % 2 === 0 ? 'bg-accent/[0.06]' : 'bg-transparent'}>
                        <th className="py-2.5 px-3 md:px-4 text-accent font-semibold text-sm md:text-base w-[42%] align-top">
                          {row.label}
                        </th>
                        <td className="py-2.5 px-3 md:px-4 text-white text-sm md:text-base">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="dx-scifi-footer" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <DownloadButton size="md" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What is W88?</h2>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              <Link href="/" className="text-accent hover:underline font-semibold">
                W88
              </Link>{' '}
              is an online gaming lobby with Sports, Casino, Slots, Fishing, Games, Esports, P2P and
              Poker, plus Promotions, Rewards, Refer A Friend, W Signature Club and Affiliate. Players
              in Pakistan can register with PKR and a +92 mobile number, then manage Bank Transfer,
              EasyPaisa and JazzCash details from the account.
            </p>
            <p>
              You must be above {MIN_AGE} years old to register. Use accurate profile details so
              banking and verification go smoothly, and use Live Chat when you need help.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {lobbyProducts.map((p) => (
              <span
                key={p}
                className="text-sm font-semibold text-accent border border-accent/30 bg-accent/5 rounded-full px-3 py-1"
              >
                {p}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <ScreenshotFigure shot="menu" caption="W88 lobby menu — all products in one place" />
          </div>
        </div>
      </section>

      {/* Why popular */}
      <section className="py-12 md:py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why W88 is Popular in Pakistan
          </h2>
          <ul className="space-y-3 text-lg text-gray-300">
            {[
              `${WELCOME_BONUS} shown on the signup screen.`,
              'PKR Pakistani Rupee currency and +92 mobile on the register form.',
              'EasyPaisa and JazzCash phone numbers can be added in Banking Details.',
              'Bank Transfer on the Deposit page right after you register.',
              'Signup with Email, Google, LINE or Telegram.',
              'Promotions, Rewards, Refer A Friend and W Signature Club in the lobby menu.',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to start */}
      <section className="py-14 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="dx-poster">
            <div className="dx-poster-glow" aria-hidden="true" />
            <div className="dx-poster-inner">
              <div className="dx-poster-top">
                <p className="dx-poster-kicker">Player Guide · 2026</p>
                <h2 className="dx-poster-title">
                  How to Start
                  <span>with W88</span>
                </h2>
                <p className="dx-poster-tagline">
                  Six clear steps from the join link to your first deposit and cash-out — built for
                  Pakistan players.
                </p>
                <div className="dx-poster-rule" aria-hidden="true" />
              </div>

              <ol className="dx-poster-grid">
                {[
                  {
                    title: 'Open the Official Lobby',
                    detail:
                      'Tap Join W88 on this site. Always use the official referral / lobby link so your account is tracked correctly.',
                  },
                  {
                    title: 'Sign Up (21+)',
                    detail: `Continue with Email, Google, LINE or Telegram, or fill in Username, Password, Currency (PKR), Full Name, Email and Mobile (+92). You must be above ${MIN_AGE} years old.`,
                  },
                  {
                    title: 'Check the Welcome Offer',
                    detail: `The signup screen shows a ${WELCOME_BONUS}. Read Promotions and the rollover rules before you claim anything.`,
                  },
                  {
                    title: 'Deposit via Bank Transfer',
                    detail:
                      'After registering you reach the Deposit page with Bank Transfer. A crypto account may also be created. Follow the methods shown in the Cashier.',
                  },
                  {
                    title: 'Bind JazzCash / EasyPaisa',
                    detail:
                      'Open Banking Details and add a Bank Account, EasyPaisa Phone Number or JazzCash Phone Number (up to 5 each).',
                  },
                  {
                    title: 'Withdraw Safely',
                    detail: `Request a withdrawal with a method shown in the Cashier. First cash-outs may need ID and bank proof. Play responsibly (${MIN_AGE}+).`,
                  },
                ].map((step, i) => (
                  <li key={step.title} className="dx-poster-card">
                    <span className="dx-poster-num" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="dx-poster-card-body">
                      <h3>{step.title}</h3>
                      <p>{step.detail}</p>
                    </div>
                    <span className="dx-poster-card-edge" aria-hidden="true" />
                  </li>
                ))}
              </ol>

              <div className="dx-poster-cta">
                <p className="dx-poster-cta-note">
                  Official lobby · PKR · JazzCash &amp; EasyPaisa · {MIN_AGE}+ only
                </p>
                <DownloadButton size="md" label="JOIN W88 NOW" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="py-14 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">Account</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                W88 Signup — Create Your Account
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-5">
                Open the lobby and tap <strong className="text-white">Join</strong>. Choose{' '}
                <strong className="text-white">Continue with</strong> Email, Google, LINE or Telegram,
                or complete the register form. You must be above {MIN_AGE} years old.
              </p>
              <ol className="space-y-3 text-gray-300 mb-6">
                {[
                  'Tap Join on the official lobby',
                  'Pick Email / Google / LINE / Telegram, or use the form',
                  'Fill Username, Password, Currency (PKR), Full Name, Email, Mobile (+92)',
                  `Add Affiliate code if asked, confirm ${MIN_AGE}+ and submit`,
                ].map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-primary text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <Link
                href="/blog/create-w88-account-and-login"
                className="text-accent hover:underline font-semibold"
              >
                Full signup &amp; login guide →
              </Link>
            </div>
            <div className="space-y-6">
              <ScreenshotFigure shot="register" caption="Register form — Username, Password, Currency, Full Name, Email, Mobile +92" />
              <div className="bg-secondary/40 border border-accent/25 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-accent mb-4">Registration checklist</h3>
                <ul className="space-y-3 text-gray-300">
                  {[
                    `Age above ${MIN_AGE} (${MIN_AGE}+)`,
                    'Username + strong password',
                    'Currency: PKR Pakistani Rupee',
                    'Full name that matches your bank / wallet account',
                    'Email only you can access',
                    'Mobile number with +92',
                    'Affiliate code (if provided) and Newsletter toggle',
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Currency + Google */}
      <section className="py-12 md:py-16 px-4 bg-secondary/25">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Pick <span className="text-accent">PKR</span> Pakistani Rupee
              </h2>
              <p className="text-gray-300 leading-relaxed mb-5">
                The Currency selector at signup includes <strong className="text-white">PKR Pakistani Rupee</strong>.
                Choose it with a +92 mobile number so your wallet matches Pakistan banking.
              </p>
              <ScreenshotFigure shot="currency" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Continue with <span className="text-accent">Google</span> (or Email, LINE, Telegram)
              </h2>
              <p className="text-gray-300 leading-relaxed mb-5">
                Prefer one-tap signup? The signup screen lists Email, Google, LINE and Telegram under
                &ldquo;Continue with&rdquo;. Use an account only you control and keep it secure.
              </p>
              <ScreenshotFigure shot="google" />
            </div>
          </div>
        </div>
      </section>

      {/* Referral */}
      <section id="referral" className="py-14 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <p className="text-cyan font-semibold tracking-wide uppercase text-sm mb-3">Promo</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Grab A Member — Earn Referral Bonus
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            The lobby menu includes <strong className="text-white">Refer A Friend</strong>. Active W88
            members can invite friends with a personalized referral link. When a new player registers
            through that link, deposits at least USD 88 (or equivalent) and places a bet, you receive{' '}
            <strong className="text-white">USD 10 instantly</strong> — up to five successful referrals.
            Friends must click your link; otherwise the bonus will not apply.
          </p>
          <ul className="space-y-3 text-gray-300 mb-8">
            {[
              'You must have deposited and placed at least one wager to qualify as a referrer.',
              'Existing W88 accounts are not eligible as “new” referrals.',
              'Close relatives / same household / shared e-wallets or computers are not accepted.',
              'Referral bonus has 1× rollover and must be used within 60 days.',
              `Referrers and referred players must both be above ${MIN_AGE}.`,
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-cyan font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <DownloadButton size="md" label="JOIN WITH REFERRAL LINK" />
            <Link
              href="/blog/w88-grab-a-member-referral"
              className="text-accent hover:underline font-semibold self-center"
            >
              Full referral terms →
            </Link>
          </div>
        </div>
      </section>

      {/* Deposit */}
      <section id="deposit" className="py-14 md:py-20 px-4 bg-secondary/25">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">Wallet</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                W88 Deposit — Bank Transfer
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-5">
                After you register, W88 opens the <strong className="text-white">Deposit</strong> page
                with <strong className="text-white">Bank Transfer</strong>. A crypto account may also be
                created. Use only the details shown inside the lobby or from official Live Chat — cheques
                and bank drafts are not accepted.
              </p>
              <ol className="space-y-3 text-gray-300 mb-6">
                {[
                  'Register, then open the Deposit page',
                  'Choose Bank Transfer (or another method listed in the Cashier)',
                  'Send the exact amount from an account in your own name',
                  'Submit the form and upload a receipt if asked',
                ].map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-primary text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <Link
                href="/deposit-money-in-w88"
                className="text-accent hover:underline font-semibold"
              >
                Full deposit guide →
              </Link>
            </div>
            <div className="space-y-6">
              <ScreenshotFigure shot="deposit" />
              <div className="bg-secondary/40 border border-accent/25 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-accent mb-4">Deposit tips</h3>
                <ul className="space-y-3 text-gray-300">
                  {[
                    'Only use bank details shown inside W88 or given by official Live Chat',
                    'Save your transaction ID — it is not proof until funds are verified',
                    'Your bank may charge a separate fee',
                    'Avoid unofficial “agent” numbers from social media',
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banking: JazzCash / EasyPaisa */}
      <section id="banking" className="py-14 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <ScreenshotFigure shot="banking" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-cyan font-semibold tracking-wide uppercase text-sm mb-3">Local banking</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                JazzCash &amp; EasyPaisa in Banking Details
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-5">
                Open <strong className="text-white">Banking Details</strong> in your account. W88 supports a{' '}
                <strong className="text-white">Bank Account</strong>, an{' '}
                <strong className="text-white">EasyPaisa Phone Number</strong> and a{' '}
                <strong className="text-white">JazzCash Phone Number</strong> — up to 5 of each.
              </p>
              <ul className="space-y-3 text-gray-300 mb-6">
                {[
                  'Add your EasyPaisa or JazzCash number under Banking Details',
                  'Then use Deposit → Bank Transfer or the methods shown in the Cashier',
                  'Account holder name should match your W88 profile',
                  'Always follow what the Cashier shows for your account',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-cyan font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <DownloadButton size="md" label="JOIN W88 NOW" />
                <Link
                  href="/withdraw-money-from-w88"
                  className="text-accent hover:underline font-semibold self-center"
                >
                  Withdrawal guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Withdrawal */}
      <section id="withdraw" className="py-14 md:py-20 px-4 bg-secondary/25">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 bg-secondary/40 border border-cyan/25 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-cyan mb-4">First withdrawal</h3>
              <p className="text-gray-300 mb-4">
                W88 may request photo ID, proof of your bank account (balances blanked) and — if
                applicable — card copies. Allow up to 3 business days for first-time verification.
              </p>
              <ul className="space-y-3 text-gray-300">
                {[
                  'Bank / EasyPaisa / JazzCash account name should match your W88 profile',
                  'Email documents to support@w88.net.pk when asked',
                  'Meet any bonus rollover before cashing out',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-cyan font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-cyan font-semibold tracking-wide uppercase text-sm mb-3">Cash out</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                W88 Withdrawal — Bank, EasyPaisa, JazzCash
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-5">
                Add your Bank Account, EasyPaisa or JazzCash number in Banking Details first, then
                request a withdrawal from the Cashier using the method shown for your account.
              </p>
              <Link
                href="/withdraw-money-from-w88"
                className="text-accent hover:underline font-semibold"
              >
                Full withdrawal guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            Top Features of W88 Pakistan
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div key={f.title} className="bg-secondary rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-accent mb-2">
                  {i + 1}. {f.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-12 md:py-16 px-4 bg-secondary/30 overflow-visible">
        <div className="container mx-auto max-w-5xl overflow-visible">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            W88 Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 py-4 overflow-visible">
            {[
              {
                href: '/join-w88',
                title: 'Join W88',
                text: 'Signup with PKR, +92 mobile and Email / Google / LINE / Telegram. 21+.',
              },
              {
                href: '/deposit-money-in-w88',
                title: 'Deposit Guide',
                text: 'Bank Transfer, plus bind JazzCash / EasyPaisa in Banking Details.',
              },
              {
                href: '/withdraw-money-from-w88',
                title: 'Withdraw Guide',
                text: 'Cash out via Bank Account, EasyPaisa or JazzCash with verification tips.',
              },
            ].map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="dx-guide-card bg-primary rounded-xl overflow-hidden border border-gray-800 hover:border-accent group block p-6"
              >
                <h3 className="text-xl font-bold text-accent mb-2 group-hover:underline">{g.title}</h3>
                <p className="text-gray-300 text-sm">{g.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 px-4 overflow-visible">
        <div className="container mx-auto max-w-3xl overflow-visible">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            Frequently Asked Questions
          </h2>
          <FaqList faqs={faqs} />
          <p className="text-center text-gray-500 text-sm mt-8">
            Need help? Visit{' '}
            <Link href="/contact-us" className="text-accent hover:underline">
              Contact Us
            </Link>{' '}
            or email {SUPPORT_EMAIL}
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 px-4 bg-secondary/40">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join W88?</h2>
          <p className="text-gray-300 mb-8">
            {WELCOME_BONUS} · PKR · JazzCash &amp; EasyPaisa. Open the official Pakistan lobby — play
            responsibly, {MIN_AGE}+ only.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
            <DownloadButton size="lg" label="JOIN W88 NOW" />
          </div>
        </div>
      </section>
    </>
  );
}
