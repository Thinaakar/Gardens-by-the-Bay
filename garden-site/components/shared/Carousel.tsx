"use client";

import { useState, useCallback, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: ReactNode[];
  className?: string;
  ariaLabel?: string;
}

/**
 * Simple client-side carousel with prev/next controls and dots.
 */
export default function Carousel({
  children,
  className,
  ariaLabel = "Content carousel",
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const total = children.length;

  const goPrev = useCallback(() => {
    setIndex((i) => (i === 0 ? total - 1 : i - 1));
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((i) => (i === total - 1 ? 0 : i + 1));
  }, [total]);

  if (total === 0) return null;

  return (
    <div
      className={cn("relative", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {children.map((child, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0"
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} of ${total}`}
              aria-hidden={i !== index}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-white/90 px-3 py-2 text-garden-canopy shadow-sm transition hover:bg-white"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-white/90 px-3 py-2 text-garden-canopy shadow-sm transition hover:bg-white"
            aria-label="Next slide"
          >
            ›
          </button>
          <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="Slide indicators">
            {children.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2 w-2 rounded-full transition-colors",
                  i === index ? "bg-garden-leaf" : "bg-garden-sage/50"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
