'use client';

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type CarouselImage = {
  src: string;
  alt: string;
};

interface ImageCarouselProps {
  images: ReadonlyArray<CarouselImage>;
  aspectRatio?: number;
  intervalMs?: number;
}

export function ImageCarousel({
  images,
  aspectRatio = 16 / 9,
  intervalMs = 5000,
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const safeInterval = useMemo(
    () => Math.max(1500, intervalMs),
    [intervalMs],
  );

  useEffect(() => {
    if (images.length <= 1 || isPaused) {
      return;
    }
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, safeInterval);
    return () => clearInterval(id);
  }, [images.length, isPaused, safeInterval]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg"
      style={{ aspectRatio }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {images.map((image, i) => (
        <div
          key={`${image.src}-${i}`}
          className="absolute inset-0 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${(i - index) * 100}%)` }}
        >
          <Image
            fill
            src={image.src}
            alt={image.alt}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1024px"
            priority={i === 0}
          />
        </div>
      ))}

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, indicatorIndex) => (
            <button
              key={indicatorIndex}
              type="button"
              aria-label={`スライド${indicatorIndex + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                indicatorIndex === index ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setIndex(indicatorIndex)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
