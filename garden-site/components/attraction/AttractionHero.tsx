import Image from "next/image";
import type { Attraction } from "@/lib/types";
import Button from "@/components/shared/Button";

interface AttractionHeroProps {
  attraction: Attraction;
}

/**
 * Full-bleed hero for individual attraction pages.
 */
export default function AttractionHero({ attraction }: AttractionHeroProps) {
  return (
    <section className="relative min-h-[70svh] w-full overflow-hidden">
      <Image
        src={attraction.image}
        alt={attraction.title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-garden-canopy/85 via-garden-canopy/35 to-transparent" />
      <div className="relative mx-auto flex min-h-[70svh] max-w-7xl flex-col justify-end px-4 pb-14 xl:px-6">
        <p className="mb-2 font-body text-sm uppercase tracking-wider text-garden-sage">Attraction</p>
        <h1 className="font-display text-4xl text-white sm:text-5xl md:text-6xl">{attraction.title}</h1>
        <p className="mt-3 max-w-2xl font-body text-lg text-garden-mist">{attraction.shortDescription}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/plan-your-visit" size="lg">
            Buy tickets
          </Button>
          <Button href="/plan-your-visit/opening-hours" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            Opening hours
          </Button>
        </div>
      </div>
    </section>
  );
}
