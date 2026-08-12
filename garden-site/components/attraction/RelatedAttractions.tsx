import type { Attraction } from "@/lib/types";
import Card from "@/components/shared/Card";

interface RelatedAttractionsProps {
  attractions: Attraction[];
}

/**
 * Related attractions grid at the bottom of attraction pages.
 */
export default function RelatedAttractions({ attractions }: RelatedAttractionsProps) {
  if (attractions.length === 0) return null;

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 xl:px-6">
        <h2 className="mb-8 font-display text-3xl text-garden-canopy">You may also like</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {attractions.map((a) => (
            <Card
              key={a.id}
              title={a.title}
              description={a.shortDescription}
              image={a.image}
              href={`/things-to-do/attractions/${a.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
