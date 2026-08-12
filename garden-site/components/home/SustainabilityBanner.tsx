import Image from "next/image";
import Button from "@/components/shared/Button";

/**
 * Sustainability callout — full-width band after attractions (destination-site pattern).
 */
export default function SustainabilityBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-garden-leaf/85" />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-20 xl:px-6 md:flex-row md:items-center md:justify-between md:py-24">
        <div className="max-w-xl">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-garden-sage">
            Sustainability
          </p>
          <h2 className="mt-2 font-display text-3xl text-white md:text-4xl">
            Secrets to a greener garden
          </h2>
          <p className="mt-3 font-body text-garden-mist">
            Uncover the ideas behind energy-efficient glasshouses, water recycling, and habitats
            designed to thrive for generations.
          </p>
        </div>
        <Button
          href="/about-us/sustainability"
          variant="outline"
          className="shrink-0 border-white text-white hover:bg-white/10"
        >
          Find out more
        </Button>
      </div>
    </section>
  );
}
