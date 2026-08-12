import Image from "next/image";
import Link from "next/link";
import Button from "@/components/shared/Button";

/**
 * Full-bleed hero — brand-first, destination-style composition.
 * Generic tagline only (no real-brand slogans).
 */
export default function Hero() {
  return (
    <section className="relative min-h-[88svh] w-full overflow-hidden md:min-h-[92svh]">
      <Image
        src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=2000&q=80"
        alt="Lush garden landscape at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-garden-canopy/75 via-garden-canopy/35 to-transparent" />

      <div className="relative mx-auto flex min-h-[88svh] max-w-7xl flex-col justify-center px-4 py-24 xl:px-6 md:min-h-[92svh]">
        <p className="animate-fade-up font-body text-sm font-medium uppercase tracking-[0.2em] text-garden-sage">
          Gardens by the Bay
        </p>
        <h1 className="mt-3 max-w-2xl animate-fade-up font-display text-5xl leading-tight text-white sm:text-6xl md:text-7xl">
          A garden of discovery
        </h1>
        <p
          className="mt-4 max-w-lg animate-fade-up font-body text-lg text-garden-mist"
          style={{ animationDelay: "0.12s" }}
        >
          Conservatories, elevated walkways, and outdoor trails — a living landscape shaped for
          curiosity and calm.
        </p>
        <div
          className="mt-8 flex animate-fade-up flex-wrap gap-3"
          style={{ animationDelay: "0.24s" }}
        >
          <Button href="/plan-your-visit" size="lg">
            Buy Tickets
          </Button>
          <Link
            href="/things-to-do/attractions"
            className="inline-flex items-center px-2 font-body text-sm font-medium text-white underline-offset-4 hover:underline"
          >
            View other attractions →
          </Link>
        </div>
      </div>
    </section>
  );
}
