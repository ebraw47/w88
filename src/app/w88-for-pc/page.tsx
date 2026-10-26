import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  BRAND_NAME,
  DOWNLOAD_APP_URL,
  LOGO_PATH,
  SITE_URL,
} from '@/lib/constants';

import DownloadButton from '@/components/DownloadButton';

const PAGE_URL = `${SITE_URL}/w88-for-pc`;

export const metadata: Metadata = {
  title: 'W88 for PC | Play W88 Pakistan on Desktop Browser 2026',
  description:
    'Play W88 on PC without an emulator. Open the official W88 mobile web lobby (PWA) in Chrome, Edge or Firefox, log in and play from your computer.',
  keywords:
    'W88 for PC, W88 desktop, play W88 on computer, W88 PWA, W88 Pakistan PC, W88 browser',
  openGraph: {
    title: 'W88 for PC | Play on Desktop Browser',
    description:
      'No emulator needed — open the official W88 mobile web URL in your desktop browser.',
    url: PAGE_URL,
    siteName: BRAND_NAME,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'W88 for PC | Play on Desktop Browser',
    description: 'Open the W88 official lobby in your PC browser — step-by-step guide.',
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const steps = [
  {
    title: 'Open a Modern Browser',
    text: 'Launch Google Chrome, Microsoft Edge or Firefox on your Windows PC or Mac. Make sure the browser is up to date.',
  },
  {
    title: 'Open the Official W88 Mobile Web URL',
    text: 'Click the “Join W88 Now” button on this page, or paste the official referral link into the address bar. It opens the W88 Pakistan mobile lobby (a progressive web app) directly in your browser.',
  },
  {
    title: 'Switch to Mobile View if Needed',
    text: 'The lobby is designed for phone screens. If it looks narrow, that is normal — you can zoom in with Ctrl/Cmd and + , or press F12 and enable the device toolbar for a phone-style layout.',
  },
  {
    title: 'Register or Log In',
    text: 'New players tap Join and complete registration (see our join guide). Existing players log in with their username and password.',
  },
  {
    title: 'Bookmark or Install the Lobby',
    text: 'Bookmark the page for quick access. In Chrome or Edge you can also use the browser’s Install option (address bar or menu) to add the W88 lobby as a desktop shortcut.',
  },
];

const benefits = [
  'No emulator or APK required — it runs in your browser.',
  'Bigger screen and keyboard for easier navigation.',
  'Same account, balance and Cashier as on mobile.',
  'Always the latest version — nothing to update manually.',
];

const faqs = [
  {
    q: 'Is there a W88 PC app?',
    a: 'W88 Pakistan is delivered as a mobile web lobby (PWA), so you simply open the official URL in a desktop browser. No emulator is needed.',
  },
  {
    q: 'Is my account shared between PC and mobile?',
    a: 'Yes. Log in with the same username and password on any device.',
  },
  {
    q: 'Which browser works best?',
    a: 'Chrome and Edge work well and also support installing the lobby as a shortcut. Firefox works for browsing the lobby.',
  },
  {
    q: 'Can I deposit and withdraw on PC?',
    a: 'Yes. Use the Cashier exactly as on mobile. See our deposit and withdrawal guides for details.',
  },
];

export default function W88ForPcPage() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero */}
      <section className="relative py-12 md:py-20 bg-secondary border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left order-2 md:order-1">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Play <span className="text-[#fbdf03]">W88</span> on PC
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Open the official mobile web lobby in your desktop browser — no emulator needed.
              </p>
              <div className="flex justify-center md:justify-start">
                <DownloadButton label="JOIN W88 NOW" />
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-[#fbdf03]/35 shadow-[0_12px_40px_rgba(0,0,0,0.45)] bg-[#2c2c2c]">
                <Image
                  src={LOGO_PATH}
                  alt="W88 for PC - play in desktop browser"
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
                <Link href="/" className="text-accent hover:underline font-semibold">W88</Link> in Pakistan runs as a progressive web app (PWA). That means you can play on a PC or laptop by opening the{' '}
                <a href={DOWNLOAD_APP_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">official mobile web URL</a> in a desktop browser.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Already have an account?{' '}
                <a href={DOWNLOAD_APP_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Open the referral lobby</a> and log in. New here? Read{' '}
                <Link href="/join-w88" className="text-accent hover:underline font-semibold">how to join W88</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Steps to Open W88 on PC
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

      {/* Benefits */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
              Why Play W88 in a PC Browser?
            </h2>
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-10">
              <ul className="space-y-4">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 mt-6">
                Next: <Link href="/deposit-money-in-w88" className="text-accent hover:underline font-semibold">deposit money in W88</Link> or learn how to{' '}
                <Link href="/withdraw-money-from-w88" className="text-accent hover:underline font-semibold">withdraw from W88</Link>.
              </p>
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

      {/* CTA */}
      <section className="py-12 md:py-16 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Play W88 on Your Computer</h2>
            <p className="text-lg text-gray-300 mb-8">
              Open the official lobby in your browser and join W88 Pakistan. 21+ only — play responsibly.
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
                name: 'W88 for PC | Play W88 Pakistan on Desktop Browser 2026',
                description: 'Play W88 on PC by opening the official mobile web lobby in a desktop browser.',
                inLanguage: 'en-US',
                about: { '@type': 'Thing', name: BRAND_NAME, url: SITE_URL },
                mainEntity: { '@id': `${PAGE_URL}#howto` },
                primaryImageOfPage: { '@type': 'ImageObject', url: `${SITE_URL}${LOGO_PATH}` },
              },
              {
                '@type': 'HowTo',
                '@id': `${PAGE_URL}#howto`,
                name: 'How to Play W88 on PC',
                description: 'Open the W88 PWA lobby in a desktop browser.',
                totalTime: 'PT3M',
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
