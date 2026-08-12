import Image from "next/image";
import Button from "@/components/shared/Button";

/**
 * Mobile app download banner.
 */
export default function AppDownloadBanner() {
  return (
    <section className="bg-garden-mist">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 md:grid-cols-2 xl:px-6 md:py-20">
        <div>
          <h2 className="font-display text-3xl text-garden-canopy md:text-4xl">Take the gardens with you</h2>
          <p className="mt-3 max-w-md font-body text-garden-earth/80">
            Maps, opening hours, event alerts, and audio guides — all in the Gardens by the Bay app.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/plan-your-visit/mobile-app" size="lg">
              Get the app
            </Button>
            <Button href="/plan-your-visit/mobile-app" variant="outline" size="lg">
              Learn more
            </Button>
          </div>
        </div>
        <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
            alt="Visitor using a phone in the gardens"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
