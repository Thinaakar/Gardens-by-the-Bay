import Image from "next/image";
import Link from "next/link";
import { attractions } from "@/lib/data/attractions";
import Button from "@/components/shared/Button";

/**
 * Featured attractions strip — large cards with short taglines,
 * styled closer to destination homepage attraction showcases.
 */
export default function AttractionsGrid() {
  const featured = attractions.slice(0, 4);

  return (
    <section className="bg-garden-cream py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 xl:px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-3xl text-garden-canopy md:text-4xl">
              Explore the gardens
            </h2>
            <p className="mt-2 max-w-xl font-body text-garden-earth/80">
              Beyond flora and fauna, discover structures and spaces shaped for wonder.
            </p>
          </div>
          <Button href="/things-to-do/attractions" variant="outline">
            View other attractions
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((a) => (
            <Link
              key={a.id}
              href={`/things-to-do/attractions/${a.slug}`}
              className="group relative block aspect-[3/4] overflow-hidden rounded-lg shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-garden-moss"
            >
              <Image
                src={a.image}
                alt={a.title}
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-garden-canopy/90 via-garden-canopy/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-2xl text-white">{a.title}</h3>
                <p className="mt-1 font-body text-sm text-garden-mist">{a.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
