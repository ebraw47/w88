import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DOWNLOAD_APP_URL } from '@/lib/constants';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'About W88 - Pakistan\'s Premier Gaming Platform',
  description: 'Learn about W88, our history, mission, and vision for creating the best gaming platform in Pakistan, with guides for joining, depositing and withdrawing.',
  keywords: ['W88 about', 'about us', 'gaming company Pakistan', 'W88 history', 'gaming platform', 'slots', 'W88'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://w88.net.pk/about-us",
  },
  openGraph: {
    title: 'About W88 - Pakistan\'s Premier Gaming Platform',
    description: 'Learn about W88, our history, mission, and vision for creating the best gaming platform in Pakistan, with guides for joining, depositing and withdrawing.',
    url: "https://w88.net.pk/about-us",
    siteName: "W88",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://w88.net.pk/w88-logo.webp",
        width: 1200,
        height: 630,
        alt: "About W88 - Premier Gaming Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'About W88 - Pakistan\'s Premier Gaming Platform',
    description: 'Learn about W88, our history, mission, and vision for creating the best gaming platform in Pakistan, with guides for joining, depositing and withdrawing.',
    images: ["https://w88.net.pk/w88-logo.webp"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Us</h1>
          </div>
          
          {/* Main Content */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 mb-8">
              <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
                <Link href="/" className="block">
                  <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] mx-auto md:mx-0 rounded-lg overflow-hidden bg-[#2c2c2c]">
                    <Image 
                      src="/w88-logo.webp" 
                      alt="W88 Logo" 
                      width={320}
                      height={320}
                      sizes="(max-width: 768px) 280px, 320px"
                      className="object-contain p-4 w-full h-full"
                      priority
                    />
                  </div>
                </Link>
              </div>
              <div className="w-full md:w-2/3 md:pl-4">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Welcome to <Link href="/" className="text-accent hover:underline font-semibold">w88.net.pk</Link>, a trusted platform for the latest information about <Link href="/" className="text-accent hover:underline font-semibold">W88</Link>. W88 is an online gaming brand available to players in Pakistan through its official mobile lobby (PWA), with PKR support and a Cashier for deposits and withdrawals. <a href={DOWNLOAD_APP_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Join W88</a> through the official referral link, or read our <Link href="/join-w88" className="text-accent hover:underline font-semibold">join guide</Link>.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Our guides cover <Link href="/join-w88" className="text-accent hover:underline font-semibold">joining</Link>, <Link href="/deposit-money-in-w88" className="text-accent hover:underline font-semibold">depositing</Link>, <Link href="/withdraw-money-from-w88" className="text-accent hover:underline font-semibold">withdrawing</Link> and <Link href="/w88-for-pc" className="text-accent hover:underline font-semibold">playing W88 on PC</Link>. Please play responsibly and only if you are 21+.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Aim Section */}
          <div className="bg-gradient-to-r from-[#2c2c2c] to-[#3a3a3a] rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-accent/25">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">Our Aim!</h2>
            <p className="text-lg md:text-xl text-white leading-relaxed text-center">
              Our aim is to provide the users with the latest and updated information and practical guides about W88 Pakistan. For any type of information or query, you can visit our <Link href="/contact-us" className="underline hover:text-accent font-semibold">contact us page</Link>.
            </p>
          </div>
          
          {/* Contact CTA */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Have Questions?</h2>
            <p className="text-gray-300 mb-6 text-lg">
              We're here to help! Contact our team for any information or queries about W88.
            </p>
            <Link 
              href="/contact-us" 
              className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "W88",
              "alternateName": "W88",
              "url": "https://w88.net.pk",
              "logo": "https://w88.net.pk/w88-logo.webp",
              "description": "W88 is an online gaming brand for Pakistan players with an official mobile lobby (PWA), PKR support and a Cashier.",
              "sameAs": [],
            },
            "about": {
              "@type": "Thing",
              "name": "Gaming Platform",
              "description": "Online gaming platform serving Pakistani users via the official mobile lobby"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://w88.net.pk/about-us"
            }
          })
        }}
      />
    </div>
  );
} 