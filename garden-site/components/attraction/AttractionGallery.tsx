"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/lib/types";

interface AttractionGalleryProps {
  images: GalleryImage[];
  title: string;
}

/**
 * Responsive attraction gallery with click-to-open lightbox.
 * Supports keyboard Escape / ArrowLeft / ArrowRight navigation.
 */
export default function AttractionGallery({ images, title }: AttractionGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((i) => {
      if (i === null) return i;
      return i === 0 ? images.length - 1 : i - 1;
    });
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((i) => {
      if (i === null) return i;
      return i === images.length - 1 ? 0 : i + 1;
    });
  }, [images.length]);

  // Lock body scroll + keyboard controls while lightbox is open
  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, closeLightbox, showPrev, showNext]);

  if (images.length === 0) return null;

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  return (
    <section className="bg-garden-cream py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 xl:px-6">
        <h2 className="mb-8 font-display text-3xl text-garden-canopy">Gallery</h2>

        {/* Thumbnail grid */}
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, i) => (
            <li
              key={image.id}
              className={
                i === 0
                  ? "relative aspect-[4/3] overflow-hidden rounded-lg shadow-sm sm:col-span-2 sm:row-span-2 sm:aspect-auto sm:min-h-[400px]"
                  : "relative aspect-[4/3] overflow-hidden rounded-lg shadow-sm"
              }
            >
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="group absolute inset-0 h-full w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-garden-moss"
                aria-label={`Open ${image.alt} in lightbox`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={
                    i === 0
                      ? "(max-width: 640px) 100vw, 66vw"
                      : "(max-width: 640px) 100vw, 33vw"
                  }
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-garden-canopy/0 transition group-hover:bg-garden-canopy/20" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Lightbox overlay */}
      {activeImage && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-garden-canopy/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery lightbox`}
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 rounded-md bg-white/10 px-3 py-2 font-body text-sm text-white transition hover:bg-white/20"
            aria-label="Close lightbox"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-md bg-white/10 px-3 py-3 text-white transition hover:bg-white/20 md:left-6"
            aria-label="Previous image"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-md bg-white/10 px-3 py-3 text-white transition hover:bg-white/20 md:right-6"
            aria-label="Next image"
          >
            ›
          </button>

          <figure
            className="relative flex max-h-[85vh] w-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-black/40 shadow-lg">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1024px"
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="mt-4 text-center font-body text-sm text-garden-mist">
              {activeImage.caption ?? activeImage.alt}
              <span className="ml-2 text-garden-sage">
                ({activeIndex + 1} / {images.length})
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
