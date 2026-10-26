import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  BANKING_EMAIL,
  BRAND_NAME,
  LOGO_PATH,
  SITE_URL,
} from '@/lib/constants';

import DownloadButton from '@/components/DownloadButton';
import ScreenshotFigure from '@/components/ScreenshotFigure';

const PAGE_URL = `${SITE_URL}/withdraw-money-from-w88`;

export const metadata: Metadata = {
  title: 'How to Withdraw Money from W88 Pakistan | Bank Transfer Guide 2026',
  description:
    'Learn how to withdraw from W88 Pakistan to a bank account, EasyPaisa or JazzCash number bound in Banking Details. First withdrawal verification takes about 3 business days. 21+.',
  keywords:
    'withdraw W88, W88 withdrawal Pakistan, W88 JazzCash withdraw, W88 EasyPaisa withdraw, W88 bank transfer withdrawal, W88 verification',
  openGraph: {
    title: 'How to Withdraw Money from W88 Pakistan',
    description:
      'Step-by-step W88 withdrawal guide: bank account, EasyPaisa or JazzCash, with documentary requirements.',
    url: PAGE_URL,
    siteName: BRAND_NAME,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Withdraw Money from W88 Pakistan',
    description: 'Complete W88 withdrawal guide: bank account, EasyPaisa and JazzCash.',
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

const steps = [
  {
    title: 'Log In to W88',
    text: 'Open the official W88 mobile lobby and log in with your username and password.',
  },
  {
    title: 'Bind Your Payout Account in Banking Details',
    text: 'Open Banking Details and add a Bank Account, an EasyPaisa Phone Number or a JazzCash Phone Number (up to 5 each). The account holder name must match your W88 profile.',
  },
  {
    title: 'Open Cashier → Withdrawal',
    text: 'Open the Cashier and choose Withdrawal. Select the method shown for your account — your bound bank account, EasyPaisa or JazzCash number where available.',
  },
  {
    title: 'Enter the Amount and Submit',
    text: 'Enter the amount you want to withdraw, check the minimum and maximum limits shown, provide any details the form asks for, and submit the request.',
  },
  {
    title: 'Complete Verification if Asked',
    text: 'For your first withdrawal, the team verifies your account and documents, which usually takes about 3 business days. Later withdrawals are normally faster.',
  },
  {
    title: 'Receive Your Funds',
    text: 'After approval, the money is sent to the method you selected. Processing times and fees may vary by bank or wallet provider.',
  },
];

const documents = [
  'A valid government-issued ID (CNIC or passport).',
  'Proof of your bank account, such as a recent bank statement or the front of your bank card/passbook showing the account name and number. For EasyPaisa or JazzCash, support may ask for proof the number is registered in your name.',
  'Proof of address, if requested (for example a recent utility bill).',
  'Any additional documents requested by W88 support for security checks.',
];

const faqs = [
  {
    q: 'How do I withdraw money from W88?',
    a: 'Log in, add your Bank Account, EasyPaisa or JazzCash number under Banking Details, then open Cashier → Withdrawal, choose the method shown, enter the amount and submit your request.',
  },
  {
    q: 'Can I withdraw to JazzCash or EasyPaisa?',
    a: 'W88 Banking Details supports EasyPaisa Phone Number and JazzCash Phone Number (up to 5 each) alongside Bank Account (up to 5). Which methods appear at withdrawal depends on your Cashier, so always follow the screen.',
  },
  {
    q: 'How long does the first withdrawal take?',
    a: 'The first withdrawal usually requires verification of about 3 business days. Later withdrawals are typically processed faster.',
  },
  {
    q: 'Do I need to submit ID?',
    a: 'Your first withdrawal may require ID and other documents so that W88 can verify your identity and bank account.',
  },
  {
    q: 'Which email do I use for documents?',
    a: `Follow the instructions given by Live Chat. For banking documents and receipts, ${BANKING_EMAIL} is the official banking address.`,
  },
  {
    q: 'Why was my withdrawal delayed?',
    a: 'Common reasons are mismatched account names, incomplete bank details or missing verification documents. Contact Live Chat for help.',
  },
];

export default function WithdrawMoneyPage() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero */}
      <section className="relative py-12 md:py-20 bg-secondary border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left order-2 md:order-1">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                How to Withdraw Money from <span className="text-[#fbdf03]">W88</span>?
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Withdraw to bank account, EasyPaisa or JazzCash — verification requirements included. 21+ only.
              </p>
              <div className="flex justify-center md:justify-start">
                <DownloadButton label="JOIN W88 NOW" />
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-[#fbdf03]/35 shadow-[0_12px_40px_rgba(0,0,0,0.45)] bg-[#2c2c2c]">
                <Image
                  src={LOGO_PATH}
                  alt="W88 - Withdraw to bank, EasyPaisa or JazzCash"
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
                Withdrawals from <Link href="/" className="text-accent hover:underline font-semibold">W88</Link> are requested in the Cashier. Pakistan players can bind a bank account, EasyPaisa number or JazzCash number in Banking Details first. Before you withdraw, make sure you have{' '}
                <Link href="/join-w88" className="text-accent hover:underline font-semibold">joined W88</Link> with accurate details and{' '}
                <Link href="/deposit-money-in-w88" className="text-accent hover:underline font-semibold">made a deposit</Link>.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Your first withdrawal may require ID verification, so it helps to prepare your documents in advance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ScreenshotFigure shot="banking" priority caption="Banking Details — add Bank Account, EasyPaisa or JazzCash first" />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Steps to Withdraw Money from W88
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

      {/* Documentary requirements */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
              Documentary Requirements
            </h2>
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-10">
              <p className="text-lg text-gray-300 mb-6">
                Documents may be requested to verify your identity and bank account, especially for your first withdrawal (about 3 business days):
              </p>
              <ul className="space-y-4">
                {documents.map((doc) => (
                  <li key={doc} className="flex items-start">
                    <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg text-gray-300">{doc}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-400 mt-6">
                Only send documents through the channels given by official W88 Live Chat or support. Never share your online banking password.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Join W88 through the official lobby. 21+ only — play responsibly.
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
                name: 'How to Withdraw Money from W88 Pakistan | Bank Transfer Guide 2026',
                description: 'Step-by-step guide to withdraw money from W88 via bank transfer.',
                inLanguage: 'en-US',
                about: { '@type': 'Thing', name: BRAND_NAME, url: SITE_URL },
                mainEntity: { '@id': `${PAGE_URL}#howto` },
                primaryImageOfPage: { '@type': 'ImageObject', url: `${SITE_URL}${LOGO_PATH}` },
              },
              {
                '@type': 'HowTo',
                '@id': `${PAGE_URL}#howto`,
                name: 'How to Withdraw Money from W88',
                description: 'Withdraw from your W88 account by bank transfer.',
                totalTime: 'P3D',
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
