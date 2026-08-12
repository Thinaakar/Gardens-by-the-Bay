import Link from "next/link";
import Button from "@/components/shared/Button";

/**
 * Mid-page editorial intro — sits between sustainability and events
 * (mirrors the “always blooming” content band pattern).
 */
export default function BloomingIntro() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center xl:px-6">
        <h2 className="font-display text-3xl text-garden-canopy md:text-5xl">
          Something is always <span className="italic text-garden-leaf">in bloom</span>
        </h2>
        <p className="mt-5 font-body text-base leading-relaxed text-garden-earth/80 md:text-lg">
          There&apos;s always a reason to return. Spend an afternoon among unusual plants in the
          cooled conservatories, take in sweeping views from the sky walkway, and discover programmes
          for a fun-filled day with family and friends.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/things-to-do/calendar-of-events">See what&apos;s on</Button>
          <Link
            href="/learn-with-us/explore-resources/whats-blooming"
            className="font-body text-sm font-medium text-garden-leaf underline-offset-4 hover:underline"
          >
            What&apos;s blooming →
          </Link>
        </div>
      </div>
    </section>
  );
}
