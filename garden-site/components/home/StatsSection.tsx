import type { StatItem } from "@/lib/types";

const stats: StatItem[] = [
  { value: "No. 3", label: "Top attraction ranking (placeholder)" },
  { value: "115M+", label: "Visitors to date (placeholder)" },
  { value: "Top 10", label: "Most photo-worthy places (placeholder)" },
  { value: "1.5M+", label: "Plants from around the world" },
];

/**
 * Stats band with intro — “gardens for all” style destination pattern.
 * Numbers are placeholders only.
 */
export default function StatsSection() {
  return (
    <section className="bg-garden-canopy py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 xl:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-white md:text-4xl">
            Gardens made for <span className="italic text-garden-sage">everyone</span>
          </h2>
          <p className="mt-3 font-body text-garden-mist">
            Discover a horticultural collection with something for everyone — set in the heart of
            the city.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl text-white md:text-4xl">{stat.value}</p>
              <p className="mt-2 font-body text-xs text-garden-sage md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
