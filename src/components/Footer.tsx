import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import { FACEBOOK_URL, SITE_DOMAIN } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[#171717]/95 text-white pt-8 pb-2 px-4 md:px-8 border-t border-accent/15 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">W88</h3>
            <p className="text-sm text-gray-300 mb-4">
              W88 Pakistan — join via our referral lobby, use PKR, Bank Transfer, JazzCash &amp;
              EasyPaisa in Banking Details. Play responsibly (21+).
            </p>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="W88 on Facebook"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-accent transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="#1877F2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.77,7.46H14.5v-1.9c0-0.9,0.6-1.1,1-1.1h3V0.13H14.5c-4.1,0-5,2.9-5,4.8v2.5H6v4.5h3.5V22h5V11.96h3.35L18.77,7.46z" />
              </svg>
              Facebook
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/join-w88" className="text-gray-300 hover:text-accent transition-colors">
                  Join W88
                </Link>
              </li>
              <li>
                <Link href="/w88-game-layout-guide" className="text-gray-300 hover:text-accent transition-colors">
                  Game Layout Guide
                </Link>
              </li>
              <li>
                <Link href="/w88-for-pc" className="text-gray-300 hover:text-accent transition-colors">
                  PC Version
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-300 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/deposit-money-in-w88" className="text-gray-300 hover:text-accent transition-colors">
                  Deposit Guide
                </Link>
              </li>
              <li>
                <Link href="/withdraw-money-from-w88" className="text-gray-300 hover:text-accent transition-colors">
                  Withdraw Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/create-w88-account-and-login" className="text-gray-300 hover:text-accent transition-colors">
                  Account & Login
                </Link>
              </li>
              <li>
                <Link href="/blog/is-w88-safe-legal-pakistan" className="text-gray-300 hover:text-accent transition-colors">
                  Safety Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/w88-grab-a-member-referral" className="text-gray-300 hover:text-accent transition-colors">
                  Referral Bonus
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-300 hover:text-accent transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Join W88</h3>
            <p className="text-sm text-gray-300 mb-4">
              Open the official W88 Pakistan mobile lobby, register in minutes, and explore live
              casino, sports, and promotions.
            </p>
            <div className="flex flex-col gap-3 items-start">
              <DownloadButton size="sm" label="JOIN W88" />
              <Link
                href="/join-w88"
                className="inline-flex w-fit items-center justify-center px-4 py-2 rounded-full border border-gray-600 text-sm text-white font-semibold hover:border-accent hover:text-accent transition-colors"
              >
                Registration Guide
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 pb-3 text-center text-sm text-gray-400">
          <p className="mb-0">
            © 2026 W88. All rights reserved. |{' '}
            <Link href="/" className="hover:text-accent">
              {SITE_DOMAIN}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
