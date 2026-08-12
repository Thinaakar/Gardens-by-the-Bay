import type { Metadata } from "next";
import { attractions } from "@/lib/data/attractions";
import Card from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "Attractions",
  description: "Explore conservatories, walkways, lookouts, and outdoor art.",
};

export default function AttractionsPage() {
  return (
    <div className="bg-garden-cream">
      <header className="border-b border-garden-mist bg-garden-leaf">
        <div className="mx-auto max-w-7xl px-4 py-16 xl:px-6 md:py-20">
          <h1 className="font-display text-4xl text-white md:text-5xl">Attractions</h1>
          <p className="mt-3 max-w-2xl font-body text-lg text-garden-mist">
            Conservatories, elevated walkways, lookouts, and outdoor art — all in one landscape.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-12 xl:px-6 md:py-16">
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
    </div>
  );
}
