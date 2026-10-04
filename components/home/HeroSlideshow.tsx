'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * Rotating background slideshow for the homepage Hero.
 *
 * Crossfades between images every 7 seconds with a subtle slow zoom.
 * Respects prefers-reduced-motion (shows first image only, no rotation).
 * Purely decorative: aria-hidden, pointer-events-none.
 */
export function HeroSlideshow({ images }: { images: readonly string[] }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === current ? 0.15 : 0,
            transform: i === current ? 'scale(1.08)' : 'scale(1)',
            transition:
              i === current
                ? 'opacity 2s ease-in-out, transform 7s ease-out'
                : 'opacity 2s ease-in-out',
          }}
        />
      ))}
      {/* Dark gradient overlays for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      <div className="absolute inset-0 bg-background/40" />
    </div>
  );
}
