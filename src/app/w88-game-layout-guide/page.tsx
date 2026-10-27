import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import { GAME_LAYOUT_GUIDE } from '@/lib/gameLayoutGuide';
import { BRAND_NAME, MIN_AGE, SITE_URL } from '@/lib/constants';

const PAGE_PATH = '/w88-game-layout-guide';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: 'W88 Game Layout Guide Pakistan — Lobby, Casino, Slots, Sports',
  description:
    'Inside W88 Pakistan lobby guide: Live Casino, Slots, Fishing, Games, P2P, E-Sports, Sports, Lottery, New Member and Special promos with real screenshots.',
  keywords: [
    'W88 game layout',
    'W88 lobby guide',
    'W88 Pakistan casino',
    'W88 slots',
    'W88 fishing',
    'W88 sports',
    'W88 P2P',
    'W88 live casino',
    'w88.net.pk',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'W88 Game Layout Guide — Pakistan Lobby Walkthrough',
    description:
      'See how W88 Pakistan is laid out inside the lobby: Live Casino, Slots, Fishing, Games, Sports and more.',
    url: PAGE_URL,
    siteName: BRAND_NAME,
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/game-guide/w88-guide-01.webp`,
        width: 1024,
        height: 191,
        alt: 'W88 Live Casino layout',
      },
    ],
  },
};

const categories = [
  'Live Casino',
  'Slots',
  'Games',
  'Fishing',
  'P2P',
  'E-Sports',
  'Sports',
  'Casino',
  'Lottery',
  'New Member',
  'Special',
];

export default function GameLayoutGuidePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to navigate the W88 Pakistan game lobby',
    description:
      'A visual guide to W88 Pakistan lobby tabs: Live Casino, Slots, Fishing, Games, P2P, E-Sports, Sports, Lottery, New Member and Special.',
    url: PAGE_URL,
    step: GAME_LAYOUT_GUIDE.map((shot, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: shot.title,
      text: shot.blurb,
      image: `${SITE_URL}${shot.src}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">
            Inside the lobby
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            W88 Game Layout Guide
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-6">
            Real screenshots from the W88 Pakistan lobby. Use the top menu to jump between Live
            Casino, Slots, Fishing, Games, P2P, E-Sports, Sports, Lottery, New Member and Special —
            then tap Play / Try on any tile. {MIN_AGE}+ only.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((c) => (
              <span
                key={c}
                className="px-3 py-1 rounded-full border border-accent/30 text-sm text-gray-200 bg-secondary/40"
              >
                {c}
              </span>
            ))}
          </div>
          <DownloadButton size="md" label="JOIN W88 & OPEN LOBBY" />
        </div>
      </section>

      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-5xl space-y-10">
          {GAME_LAYOUT_GUIDE.map((shot) => (
            <article
              key={shot.src}
              id={shot.category.toLowerCase().replace(/\s+/g, '-')}
              className="rounded-2xl border border-white/10 bg-secondary/35 overflow-hidden"
            >
              <div className="px-5 pt-5 pb-3 md:px-6 md:pt-6 flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-accent px-2.5 py-1 rounded-full">
                  {shot.category}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-white">{shot.title}</h2>
              </div>
              <p className="px-5 md:px-6 text-gray-300 text-sm md:text-base leading-relaxed mb-4 max-w-3xl">
                {shot.blurb}
              </p>
              <div className="relative w-full bg-black/40 border-t border-white/5">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  quality={90}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-secondary/40">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to explore the lobby?
          </h2>
          <p className="text-gray-300 mb-6">
            Join with the referral link, pick PKR, then open any category above. Need banking help? See
            our{' '}
            <Link href="/deposit-money-in-w88" className="text-accent hover:underline">
              deposit guide
            </Link>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <DownloadButton size="lg" label="JOIN W88 NOW" />
            <Link
              href="/join-w88"
              className="text-accent hover:underline font-semibold text-sm"
            >
              Registration steps →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
