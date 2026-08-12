/**
 * Factory helper content for static attraction route pages.
 * Each route imports a slug and renders from typed attractions data.
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAttractionBySlug,
  getRelatedAttractions,
} from "@/lib/data/attractions";
import AttractionHero from "@/components/attraction/AttractionHero";
import AttractionGallery from "@/components/attraction/AttractionGallery";
import RelatedAttractions from "@/components/attraction/RelatedAttractions";

interface AttractionPageProps {
  slug: string;
}

export function buildAttractionMetadata(slug: string): Metadata {
  const attraction = getAttractionBySlug(slug);
  if (!attraction) {
    return { title: "Attraction" };
  }
  return {
    title: attraction.title,
    description: attraction.shortDescription,
  };
}

/**
 * Renders a full attraction detail page for a given slug.
 */
export default function AttractionPageContent({ slug }: AttractionPageProps) {
  const attraction = getAttractionBySlug(slug);
  if (!attraction) notFound();

  const related = getRelatedAttractions(attraction.relatedIds);

  return (
    <>
      <AttractionHero attraction={attraction} />

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-3 xl:px-6">
          <div className="md:col-span-2">
            <h2 className="font-display text-3xl text-garden-canopy">About</h2>
            <p className="mt-4 font-body text-lg leading-relaxed text-garden-earth/80">
              {attraction.description}
            </p>
            <ul className="mt-6 space-y-2">
              {attraction.highlights.map((h) => (
                <li key={h} className="flex gap-2 font-body text-garden-leaf">
                  <span aria-hidden="true">✓</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <aside className="h-fit border border-garden-mist bg-garden-cream p-6">
            <h3 className="font-display text-xl text-garden-canopy">Visit info</h3>
            <dl className="mt-4 space-y-4 font-body text-sm">
              <div>
                <dt className="text-garden-sage">Hours</dt>
                <dd className="mt-1 text-garden-canopy">{attraction.hours}</dd>
              </div>
              <div>
                <dt className="text-garden-sage">Suggested duration</dt>
                <dd className="mt-1 text-garden-canopy">{attraction.duration}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <AttractionGallery images={attraction.gallery} title={attraction.title} />
      <RelatedAttractions attractions={related} />
    </>
  );
}
