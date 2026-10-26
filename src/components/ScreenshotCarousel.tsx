'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export type ScreenshotItem = {
  src: string;
  alt: string;
  title: string;
};

type ScreenshotCarouselProps = {
  screenshots: ScreenshotItem[];
  /** Landscape screenshots: show uncropped in a wide frame instead of a 9:16 phone. */
  wide?: boolean;
  /** Intrinsic size hint for wide mode (defaults to 1024x652). */
  wideSize?: { width: number; height: number };
};

export default function ScreenshotCarousel({
  screenshots,
  wide = false,
  wideSize = { width: 1024, height: 652 },
}: ScreenshotCarouselProps) {
  const imgW = wide ? wideSize.width : 720;
  const imgH = wide ? wideSize.height : 1280;
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);
  const count = screenshots.length;
  const current = screenshots[active] ?? screenshots[0];

  const go = useCallback(
    (dir: -1 | 1) => {
      setActive((i) => (i + dir + count) % count);
    },
    [count]
  );

  useEffect(() => {
    const rail = railRef.current;
    const el = rail?.querySelector<HTMLElement>(`[data-thumb="${active}"]`);
    if (!rail || !el) return;
    const left = el.offsetLeft - rail.clientWidth / 2 + el.clientWidth / 2;
    rail.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
  }, [active]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(false);
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox, go]);

  if (!current) return null;

  return (
    <div className={`dx-gallery container mx-auto px-4${wide ? ' dx-gallery--wide' : ''}`} aria-label="W88 screenshots gallery">
      {/* Featured stage */}
      <div className="dx-gallery-stage relative mx-auto max-w-5xl">
        <div className="absolute inset-0 dx-gallery-aura pointer-events-none" aria-hidden="true" />

        <div className="relative flex items-center justify-center gap-3 sm:gap-6 py-4 md:py-8">
          <button
            type="button"
            onClick={() => go(-1)}
            className="dx-gallery-nav hidden sm:flex"
            aria-label="Previous screenshot"
          >
            <Chevron dir="left" />
          </button>

          <button
            type="button"
            onClick={() => setLightbox(true)}
            className="dx-gallery-phone group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`Open ${current.title} fullscreen`}
          >
            <span className="dx-gallery-phone-bezel">
              <span className="dx-gallery-phone-notch" aria-hidden="true" />
              <Image
                src={current.src}
                alt={current.alt}
                width={imgW}
                height={imgH}
                priority
                sizes={wide ? '(max-width: 768px) 88vw, 560px' : '(max-width: 640px) 220px, 280px'}
                className="dx-gallery-phone-img"
              />
            </span>
            <span className="dx-gallery-open-hint opacity-0 group-hover:opacity-100 transition-opacity">
              Tap to enlarge
            </span>
          </button>

          <button
            type="button"
            onClick={() => go(1)}
            className="dx-gallery-nav hidden sm:flex"
            aria-label="Next screenshot"
          >
            <Chevron dir="right" />
          </button>
        </div>

        <div className="text-center mb-6 md:mb-8">
          <p className="text-accent font-bold text-lg md:text-xl tracking-wide">{current.title}</p>
          <p className="text-gray-400 text-sm mt-1">
            {active + 1} / {count}
          </p>
        </div>

        {/* Mobile prev/next */}
        <div className="flex sm:hidden justify-center gap-3 mb-6">
          <button type="button" onClick={() => go(-1)} className="dx-gallery-nav" aria-label="Previous">
            <Chevron dir="left" />
          </button>
          <button type="button" onClick={() => go(1)} className="dx-gallery-nav" aria-label="Next">
            <Chevron dir="right" />
          </button>
        </div>
      </div>

      {/* Thumbnail rail */}
      <div
        ref={railRef}
        className="dx-gallery-rail flex gap-3 md:gap-4 overflow-x-auto pb-3 px-1 snap-x snap-mandatory scroll-smooth"
        role="listbox"
        aria-label="Screenshot thumbnails"
      >
        {screenshots.map((shot, i) => {
          const selected = i === active;
          return (
            <button
              key={shot.src}
              type="button"
              data-thumb={i}
              role="option"
              aria-selected={selected}
              onClick={() => setActive(i)}
              className={`dx-gallery-thumb snap-center flex-shrink-0 ${selected ? 'is-active' : ''}`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={360}
                height={640}
                sizes="96px"
                className="w-full h-full object-cover object-top"
              />
              <span className="dx-gallery-thumb-label">{shot.title}</span>
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="dx-gallery-lightbox fixed inset-0 z-[80] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={() => setLightbox(false)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close"
            onClick={() => setLightbox(false)}
          >
            ✕
          </button>
          <button
            type="button"
            className="dx-gallery-nav absolute left-3 sm:left-8 z-10"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
          >
            <Chevron dir="left" />
          </button>
          <div
            className="relative max-h-[88vh] w-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={imgW}
              height={imgH}
              className="max-h-[88vh] w-auto rounded-2xl border border-accent/30 shadow-2xl object-contain"
              sizes="(max-width: 768px) 90vw, 420px"
            />
            <p className="text-center text-accent font-semibold mt-3">{current.title}</p>
          </div>
          <button
            type="button"
            className="dx-gallery-nav absolute right-3 sm:right-8 z-10"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
          >
            <Chevron dir="right" />
          </button>
        </div>
      )}
    </div>
  );
}

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      className="w-5 h-5"
      aria-hidden="true"
    >
      {dir === 'left' ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      )}
    </svg>
  );
}
