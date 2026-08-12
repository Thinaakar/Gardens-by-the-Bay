import Image from "next/image";
import { homepageStats } from "@/lib/data/homepage-stats";

/**
 * Stats band — purple #530f66 + icon panel matching live homepage.
 */
export default function StatsSection() {
  return (
    <section className="bg-garden-purple py-12 text-white md:py-16">
      <div className="site-container">
        <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-start md:gap-10">
          <div className="md:col-span-4">
            <h2 className="font-body text-[1.75rem] font-bold leading-tight text-white md:text-[2.25rem]">
              A world of{" "}
              <span className="font-bold">gardens for all</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="font-body text-base font-bold text-white md:text-lg">
              Discover this horticultural treasure trove with something for everyone!
            </p>
            <p className="mt-3 font-body text-base leading-relaxed text-white/90 md:text-[1.05rem]">
              Set in the heart of Singapore&apos;s downtown, Gardens by the Bay is home to a diverse
              collection of over 1.5 million plants that hail from every continent except
              Antarctica.
            </p>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {homepageStats.map((stat) => (
            <div key={stat.heading} className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center">
                <Image
                  src={stat.icon}
                  alt=""
                  width={80}
                  height={80}
                  className="h-16 w-16 object-contain brightness-0 invert"
                />
              </div>
              <p className="font-body text-sm font-bold text-white md:text-base">
                {stat.heading}
              </p>
              <p className="mt-2 font-body text-sm leading-snug text-white/90">
                {stat.value}
              </p>
              {stat.subtext && (
                <p className="mt-1 font-body text-xs text-white/70">{stat.subtext}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
