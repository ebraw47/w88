import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  BRAND_NAME,
  DOWNLOAD_APP_URL,
  LOGO_PATH,
  MIN_AGE,
  SITE_URL,
  WELCOME_BONUS,
} from '@/lib/constants';

import DownloadButton from '@/components/DownloadButton';
import ScreenshotFigure from '@/components/ScreenshotFigure';

const PAGE_URL = `${SITE_URL}/join-w88`;

export const metadata: Metadata = {
  title: 'How to Join W88 Pakistan | Register via Official Mobile Lobby 2026',
  description:
    'Step-by-step guide to join W88 Pakistan (21+): Continue with Email, Google, LINE or Telegram, pick PKR, enter +92 mobile, then deposit via Bank Transfer. $50 100% Welcome Bonus shown at signup.',
  keywords:
    'join W88, W88 Pakistan registration, W88 sign up, W88 referral link, W88 PKR account, W88 Google signup, W88 JazzCash, W88 EasyPaisa, W88 mobile lobby',
  openGraph: {
    title: 'How to Join W88 Pakistan | Official Registration Guide',
    description:
      'Open the official W88 referral link, pick PKR, enter your +92 mobile and register (21+). $50 100% Welcome Bonus shown at signup.',
    url: PAGE_URL,
    siteName: BRAND_NAME,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Join W88 Pakistan',
    description:
      'Register on the W88 official mobile lobby with the referral link — full step-by-step guide.',
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const steps = [
  {
    title: 'Open the Official Referral Link',
    text: 'Tap the “Join W88 Now” button on this page (or open the referral link in your phone browser). It opens the official W88 Pakistan mobile lobby — no APK file is required. Use a stable internet connection.',
  },
  {
    title: 'Tap “Join” and Choose How to Continue',
    text: `The signup screen shows the ${WELCOME_BONUS} and a “Continue with” list: Email, Google, LINE or Telegram. Pick the option you control, or use the Email / full form.`,
  },
  {
    title: 'Fill in the Register Form',
    text: 'The form asks for Username, Password, Currency, Full Name, Email and Mobile (+92). There is also an Affiliate code field and a Newsletter toggle. Use your real name so it matches the bank / EasyPaisa / JazzCash account you will bind later.',
  },
  {
    title: 'Select PKR Pakistani Rupee',
    text: 'In the Currency selector choose PKR (Pakistani Rupee) if you play from Pakistan, and enter your mobile number with the +92 country code.',
  },
  {
    title: `Confirm You Are ${MIN_AGE}+ and Submit`,
    text: `Confirm that you are above ${MIN_AGE} years old and accept the terms, then submit. After registration you land on the Deposit page, where Bank Transfer is shown. A crypto account may also be created.`,
  },
  {
    title: 'Add JazzCash / EasyPaisa (Optional)',
    text: 'Open Banking Details and add a Bank Account, EasyPaisa Phone Number or JazzCash Phone Number (up to 5 each). Then use Deposit → Bank Transfer or the methods shown in your Cashier.',
  },
];

const requirements = [
  `You must be above ${MIN_AGE} years old (${MIN_AGE}+).`,
  'Use your real full name, email and +92 mobile number — they should match your verification and banking details.',
  'Select PKR Pakistani Rupee as your currency during registration.',
  'Follow the on-screen password rules; keep your login private.',
  'One account per person. Duplicate accounts may be closed.',
];

const faqs = [
  {
    q: 'Do I need to download an APK to join W88?',
    a: 'No. W88 Pakistan is available through the official mobile lobby (a progressive web app) that runs in your browser. Just open the referral link and tap Join.',
  },
  {
    q: 'What is the minimum age?',
    a: `You must be above ${MIN_AGE} years old (${MIN_AGE}+). The registration form asks you to confirm this.`,
  },
  {
    q: 'What signup options are there?',
    a: 'Continue with Email, Google, LINE or Telegram, or complete the register form with Username, Password, Currency, Full Name, Email and Mobile (+92). An Affiliate code field and Newsletter toggle are also on the form.',
  },
  {
    q: 'Which currency should I choose?',
    a: 'Choose PKR (Pakistani Rupee) when registering from Pakistan. The Cashier then shows the deposit and withdrawal methods available for your account.',
  },
  {
    q: 'What happens after I register?',
    a: 'You are taken to the Deposit page with Bank Transfer. A crypto account may also be created. You can add JazzCash or EasyPaisa phone numbers under Banking Details.',
  },
  {
    q: 'Can I register from a PC?',
    a: 'Yes. Open the same link in a desktop browser. See our W88 for PC guide for details.',
  },
];

export default function JoinW88Page() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero */}
      <section className="relative py-12 md:py-20 bg-secondary border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left order-2 md:order-1">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                How to Join <span className="text-[#fbdf03]">W88</span> Pakistan?
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Register through the official mobile lobby — PKR, +92 mobile, Google / Email / LINE / Telegram signup, no APK needed. 21+ only.
              </p>
              <div className="flex justify-center md:justify-start">
                <DownloadButton label="JOIN W88 NOW" />
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-[#fbdf03]/35 shadow-[0_12px_40px_rgba(0,0,0,0.45)] bg-[#2c2c2c]">
                <Image
                  src={LOGO_PATH}
                  alt="W88 Pakistan - Join via official mobile lobby"
                  fill
                  className="object-contain p-4"
                  priority
                  sizes="(max-width: 768px) 176px, 224px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Joining <Link href="/" className="text-accent hover:underline font-semibold">W88</Link> in Pakistan takes only a few minutes. Players register through the official mobile lobby using the{' '}
                <a href={DOWNLOAD_APP_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">official referral link</a>, then log in with their username and password.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                After registration, continue with our guides to{' '}
                <Link href="/deposit-money-in-w88" className="text-accent hover:underline font-semibold">deposit money in W88</Link> and{' '}
                <Link href="/withdraw-money-from-w88" className="text-accent hover:underline font-semibold">withdraw money from W88</Link>. You can also{' '}
                <Link href="/w88-for-pc" className="text-accent hover:underline font-semibold">play W88 on PC</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
              What the Signup Looks Like
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ScreenshotFigure shot="signup" priority />
              <ScreenshotFigure shot="register" />
              <ScreenshotFigure shot="currency" />
              <ScreenshotFigure shot="google" />
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Steps to Join W88 Pakistan
            </h2>
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#2c2c2c] text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
              Registration Requirements
            </h2>
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-10">
              <ul className="space-y-4">
                {requirements.map((item) => (
                  <li key={item} className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="bg-secondary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-accent mb-3">{faq.q}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Responsible gaming */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <p className="max-w-3xl mx-auto text-center text-sm text-gray-400">
            W88 is for adults above 21 (21+). Play responsibly and only with money you can afford to lose. Read our{' '}
            <Link href="/disclaimer" className="text-accent hover:underline">disclaimer</Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-secondary border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join W88?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Open the official W88 Pakistan lobby and create your account now.
            </p>
            <DownloadButton label="JOIN W88 NOW" />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': `${PAGE_URL}#webpage`,
                url: PAGE_URL,
                name: 'How to Join W88 Pakistan | Official Registration Guide 2026',
                description:
                  'Step-by-step guide to join W88 Pakistan through the official mobile lobby.',
                inLanguage: 'en-US',
                about: { '@type': 'Thing', name: BRAND_NAME, url: SITE_URL },
                mainEntity: { '@id': `${PAGE_URL}#howto` },
                primaryImageOfPage: { '@type': 'ImageObject', url: `${SITE_URL}${LOGO_PATH}` },
              },
              {
                '@type': 'HowTo',
                '@id': `${PAGE_URL}#howto`,
                name: 'How to Join W88 Pakistan',
                description: 'Register a W88 account in Pakistan using the official referral link.',
                totalTime: 'PT5M',
                url: PAGE_URL,
                step: steps.map((s, i) => ({
                  '@type': 'HowToStep',
                  position: i + 1,
                  name: s.title,
                  text: s.text,
                })),
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              },
            ],
          }).replace(/</g, '\\u003c'),
        }}
      />
    </div>
  );
}
