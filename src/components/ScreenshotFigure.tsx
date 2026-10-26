import Image from 'next/image';
import { W88_SHOTS, type W88ShotKey } from '@/lib/screenshots';

type ScreenshotFigureProps = {
  shot: W88ShotKey;
  caption?: string;
  priority?: boolean;
  className?: string;
};

/** Framed real-product screenshot with optional caption. */
export default function ScreenshotFigure({
  shot,
  caption,
  priority = false,
  className = '',
}: ScreenshotFigureProps) {
  const s = W88_SHOTS[shot];
  return (
    <figure className={`mx-auto w-full max-w-2xl ${className}`}>
      <div className="rounded-2xl overflow-hidden border border-accent/30 bg-[#071f0a] shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
        <Image
          src={s.src}
          alt={s.alt}
          width={s.width}
          height={s.height}
          priority={priority}
          sizes="(max-width: 768px) 92vw, 672px"
          className="w-full h-auto block"
        />
      </div>
      <figcaption className="text-center text-sm text-gray-400 mt-3">{caption ?? s.title}</figcaption>
    </figure>
  );
}
