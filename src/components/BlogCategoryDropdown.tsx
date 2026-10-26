'use client';

import Link from 'next/link';

const categories = [
  { name: 'Account & Login', href: '/blog/create-w88-account-and-login' },
  { name: 'How to Join', href: '/blog/how-to-join-w88-pakistan' },
  { name: 'Deposit Guide', href: '/blog/w88-deposit-guide-pakistan' },
  { name: 'Withdraw Guide', href: '/blog/w88-withdraw-money-guide' },
  { name: 'App Review', href: '/blog/w88-app-review-2026' },
  { name: 'Safety', href: '/blog/is-w88-safe-legal-pakistan' },
  { name: 'Beginner Guide', href: '/blog/how-to-use-w88-pakistan-guide' },
  { name: 'Referral Bonus', href: '/blog/w88-grab-a-member-referral' },
];

export default function BlogCategoryDropdown() {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((cat) => (
        <Link
          key={cat.href}
          href={cat.href}
          className="px-3 py-1.5 text-sm rounded-full border border-gray-700 text-gray-300 hover:border-accent hover:text-accent transition-colors"
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
}
