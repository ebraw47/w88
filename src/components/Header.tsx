'use client';

import Image from 'next/image';
import Link from 'next/link';
import MobileNavigation from './MobileNavigation';
import { HEADER_LOGO_PATH } from '@/lib/constants';

export default function Header() {
  return (
    <header className="bg-[#1f1f1f]/80 backdrop-blur-md py-3 px-4 md:px-8 sticky top-0 z-30 border-b border-accent/20 shadow-[0_1px_0_rgba(251,223,3,0.08)]">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center flex-shrink-0" aria-label="W88 Home">
          <Image
            src={HEADER_LOGO_PATH}
            alt="W88"
            width={366}
            height={86}
            className="h-7 w-auto sm:h-8 md:h-9 object-contain"
            priority
            quality={95}
            sizes="160px"
          />
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-accent font-medium transition-colors">
            Home
          </Link>
          <Link href="/join-w88" className="text-white hover:text-accent font-medium transition-colors">
            Join
          </Link>
          <Link href="/deposit-money-in-w88" className="text-white hover:text-accent font-medium transition-colors">
            Deposit
          </Link>
          <Link href="/withdraw-money-from-w88" className="text-white hover:text-accent font-medium transition-colors">
            Withdraw
          </Link>
          <Link href="/w88-game-layout-guide" className="text-white hover:text-accent font-medium transition-colors">
            Games
          </Link>
          <Link href="/w88-for-pc" className="text-white hover:text-accent font-medium transition-colors">
            PC Version
          </Link>
          <Link href="/about-us" className="text-white hover:text-accent font-medium transition-colors">
            About Us
          </Link>
          <Link href="/blog" className="text-white hover:text-accent font-medium transition-colors">
            Blog
          </Link>
          <Link href="/contact-us" className="text-white hover:text-accent font-medium transition-colors">
            Contact Us
          </Link>
        </nav>

        <MobileNavigation />
      </div>
    </header>
  );
}
