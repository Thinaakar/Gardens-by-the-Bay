import Image from "next/image";
import Link from "next/link";
import { homepageAttractions } from "@/lib/data/homepage-attractions";
import { cn } from "@/lib/utils";

/**
 * Attractions intro + masonry — same full-width gutters so text and tiles align.
 * No centered max-width column (avoids large left/right white space).
 */
export default function AttractionsGrid() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="site-container">
        {/* Intro — same horizontal edges as the grid below */}
        <div className="mb-8 grid gap-6 md:mb-10 md:grid-cols-12 md:items-start md:gap-8 lg:gap-12">
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="font-body text-[1.75rem] font-bold leading-tight text-garden-canopy md:text-[2.125rem] lg:text-[2.5rem]">
              No. 3 Top Attraction
              <br />
              in the World
            </h2>
          </div>
          <div className="md:col-span-8 lg:col-span-9">
            <p className="font-body text-base font-bold text-garden-ink md:text-lg">
              Beauty abounds in the Gardens.
            </p>
            <p className="mt-3 max-w-4xl font-body text-base leading-relaxed text-garden-earth md:text-[1.05rem]">
              Beyond the flora and fauna that you&apos;ll find here, admire the Gardens&apos;
              iconic structures – architectural marvels that reimagine nature with artistic
              finesse.
            </p>
          </div>
        </div>

        {/* Masonry — fills the same width as the intro */}
        <div className="grid w-full auto-rows-[170px] grid-cols-2 gap-2 sm:auto-rows-[200px] md:auto-rows-[220px] md:grid-cols-4 md:gap-2.5 lg:auto-rows-[260px] xl:auto-rows-[300px] xl:gap-3">
          {homepageAttractions.map((item) => {
            if (item.layout === "link") {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group relative col-span-1 flex min-h-0 items-end bg-garden-canopy p-5 transition hover:bg-garden-moss focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-garden-canopy md:p-6"
                >
                  <span className="font-body text-sm font-bold leading-snug text-white md:text-base lg:text-lg">
                    View other
                    <br />
                    Attractions
                  </span>
                  <span
                    className="absolute right-4 top-4 text-lg text-white/80 transition group-hover:translate-x-0.5"
                    aria-hidden
                  >
                    →
                  </span>
                </Link>
              );
            }

            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "group relative min-h-0 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-garden-canopy",
                  item.layout === "tall" && "row-span-2",
                  item.layout === "wide" && "col-span-2"
                )}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes={
                    item.layout === "wide"
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 lg:p-6">
                  <h3 className="font-body text-base font-bold text-white md:text-lg lg:text-xl">
                    {item.title}
                  </h3>
                  {item.tagline && (
                    <p className="mt-1 font-body text-xs text-white/90 md:text-sm">
                      {item.tagline}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
