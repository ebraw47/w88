import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  BANKING_EMAIL,
  BRAND_NAME,
  LOGO_PATH,
  MIN_AGE,
  SITE_URL,
} from '@/lib/constants';

import DownloadButton from '@/components/DownloadButton';
import ScreenshotFigure from '@/components/ScreenshotFigure';

const PAGE_URL = `${SITE_URL}/deposit-money-in-w88`;

export const metadata: Metadata = {
  title: 'How to Deposit Money in W88 Pakistan | Bank Transfer Guide 2026',
  description:
    'Learn how to deposit money in W88 Pakistan: after registering open Deposit → Bank Transfer, follow the Cashier details, and bind EasyPaisa / JazzCash in Banking Details. Fees may apply. 21+.',
  keywords:
    'deposit W88, W88 deposit Pakistan, W88 bank transfer, W88 JazzCash, W88 EasyPaisa, W88 banking details, W88 cashier, add funds W88',
  openGraph: {
    title: 'How to Deposit Money in W88 Pakistan | Bank Transfer Guide',
    description:
      'Step-by-step W88 deposit guide: Deposit → Bank Transfer, plus EasyPaisa / JazzCash in Banking Details.',
    url: PAGE_URL,
    siteName: BRAND_NAME,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Deposit Money in W88 Pakistan',
    description: 'Complete W88 deposit guide using the Cashier and bank transfer.',
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const steps = [
  {
    title: 'Register or Log In to W88',
    text: `Open the official W88 mobile lobby. New players register (${MIN_AGE}+, PKR, +92 mobile) and are taken to the Deposit page. Existing players log in with their username and password.`,
  },
  {
    title: 'Add EasyPaisa / JazzCash in Banking Details',
    text: 'Open Banking Details and add a Bank Account, an EasyPaisa Phone Number or a JazzCash Phone Number (up to 5 each). Use accounts in your own name that match your W88 profile.',
  },
  {
    title: 'Open Deposit → Bank Transfer',
    text: 'Go to Deposit and choose Bank Transfer, or any other method listed in the Cashier for your account. A crypto account may also be created after registration. Check the minimum and maximum limits shown on screen.',
  },
  {
    title: 'Follow the Cashier Instructions',
    text: 'Use only the receiving details shown inside the W88 Cashier or given by official Live Chat. Never use details from social-media “agents”.',
  },
  {
    title: 'Make the Transfer',
    text: 'Transfer the exact amount from your own bank or wallet account. Cheques and bank drafts are not accepted.',
  },
  {
    title: 'Submit the Deposit Form',
    text: `Return to the Cashier and complete the deposit form with your transfer details. If the system asks for proof, upload the receipt, or email it to ${BANKING_EMAIL} with your username and transfer details.`,
  },
  {
    title: 'Wait for Confirmation',
    text: 'Once the transfer is verified, the balance is credited to your account. If it takes longer than expected, contact Live Chat with your receipt.',
  },
];

const tips = [
  'Always get the latest bank account details from Live Chat before every transfer.',
  'Transfer from an account in your own name — third-party payments may be rejected.',
  'Cheques are not accepted for deposits.',
  'Fees may apply depending on your bank or the payment method; check with your bank first.',
  'Keep your transfer receipt until the deposit shows in your balance.',
  'Never share your online banking password or PIN with anyone, including through chat.',
];

const faqs = [
  {
    q: 'How do I deposit money in W88?',
    a: 'After registering you reach the Deposit page, where Bank Transfer is shown. Follow the Cashier instructions, make the transfer from your own account and submit the deposit form (with receipt if required).',
  },
  {
    q: 'How do I use JazzCash or EasyPaisa?',
    a: 'Add your EasyPaisa Phone Number or JazzCash Phone Number under Banking Details (up to 5 each, plus up to 5 bank accounts). Then use Deposit → Bank Transfer or the methods shown in your Cashier.',
  },
  {
    q: 'Which payment methods are available?',
    a: 'The Cashier shows the methods available for your account. Bank Transfer appears on the Deposit page after registration, and a crypto account may also be created.',
  },
  {
    q: 'Is there a welcome bonus on my first deposit?',
    a: 'The signup screen shows a $50 100% Welcome Bonus. Check Promotions for the exact terms and rollover before you opt in.',
  },
  {
    q: 'Are cheques accepted?',
    a: 'No. Cheque deposits are not accepted.',
  },
  {
    q: 'Where do I send my receipt?',
    a: `If a receipt is required and cannot be uploaded in the form, send it to ${BANKING_EMAIL} with your username and transfer details.`,
  },
  {
    q: 'Are there deposit fees?',
    a: 'Fees may apply depending on the method and your bank or wallet. Check the Cashier page and your provider’s charges before depositing.',
  },
];

export default function DepositMoneyPage() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero */}
      <section className="relative py-12 md:py-20 bg-secondary border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left order-2 md:order-1">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                How to Deposit Money in <span className="text-[#fbdf03]">W88</span>?
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Deposit → Bank Transfer, with JazzCash / EasyPaisa in Banking Details. 21+ only.
              </p>
              <div className="flex justify-center md:justify-start">
                <DownloadButton label="JOIN & DEPOSIT" />
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-[#fbdf03]/35 shadow-[0_12px_40px_rgba(0,0,0,0.45)] bg-[#2c2c2c]">
                <Image
                  src={LOGO_PATH}
                  alt="W88 - Deposit via Cashier and bank transfer"
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
                To play on <Link href="/" className="text-accent hover:underline font-semibold">W88</Link>, you add funds through the Cashier. The methods shown depend on your account currency; for PKR accounts the Deposit page shows Bank Transfer after registration, and you can bind JazzCash or EasyPaisa numbers in Banking Details. If you do not have an account yet, follow our{' '}
                <Link href="/join-w88" className="text-accent hover:underline font-semibold">how to join W88</Link> guide first.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When you are ready to cash out, see how to{' '}
                <Link href="/withdraw-money-from-w88" className="text-accent hover:underline font-semibold">withdraw money from W88</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <ScreenshotFigure shot="deposit" priority caption="Deposit page — Bank Transfer" />
            <ScreenshotFigure shot="banking" caption="Banking Details — Bank Account, EasyPaisa, JazzCash" />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Steps to Deposit Money in W88
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

      {/* Tips */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
              Important Deposit Tips
            </h2>
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-10">
              <ul className="space-y-4">
                {tips.map((tip) => (
                  <li key={tip} className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg text-gray-300">{tip}</span>
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

      {/* CTA */}
      <section className="py-12 md:py-16 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Playing?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Open the official W88 Pakistan lobby, log in and make your first deposit. Play responsibly — 21+ only.
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
                name: 'How to Deposit Money in W88 Pakistan | Bank Transfer Guide 2026',
                description: 'Step-by-step guide to deposit money in W88 via Cashier and bank transfer.',
                inLanguage: 'en-US',
                about: { '@type': 'Thing', name: BRAND_NAME, url: SITE_URL },
                mainEntity: { '@id': `${PAGE_URL}#howto` },
                primaryImageOfPage: { '@type': 'ImageObject', url: `${SITE_URL}${LOGO_PATH}` },
              },
              {
                '@type': 'HowTo',
                '@id': `${PAGE_URL}#howto`,
                name: 'How to Deposit Money in W88',
                description: 'Deposit into your W88 account using the Cashier and bank transfer.',
                totalTime: 'PT10M',
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
