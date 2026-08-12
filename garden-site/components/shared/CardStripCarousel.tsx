"use client";

import { useRef, useCallback, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardStripCarouselProps {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

/**
 * Horizontal multi-card strip with prev/next — destination homepage pattern.
 */
export default function CardStripCarousel({
  children,
  className,
  ariaLabel = "Content carousel",
}: CardStripCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCards = useCallback((direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.75, 320);
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }, []);

  return (
    <div
      className={cn("relative min-w-0 max-w-full flex-1 overflow-hidden", className)}
      role="region"
      aria-label={ariaLabel}
    >
      <button
        type="button"
        onClick={() => scrollByCards(-1)}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white/15 px-2 py-3 text-xl text-white transition hover:bg-white/25"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => scrollByCards(1)}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white/15 px-2 py-3 text-xl text-white transition hover:bg-white/25"
        aria-label="Next"
      >
        ›
      </button>

      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-8 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
    </div>
  );
}
