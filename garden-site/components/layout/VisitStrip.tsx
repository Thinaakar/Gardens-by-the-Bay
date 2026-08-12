import Link from "next/link";
import Image from "next/image";

/**
 * Pre-footer visit strip — address, hours, app CTA
 * (mirrors destination-site “See you at the gardens” band).
 */
export default function VisitStrip() {
  return (
    <section className="border-t border-garden-mist bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 xl:px-6 md:py-16">
        <div>
          <h2 className="font-display text-2xl text-garden-canopy md:text-3xl">
            See you at the gardens!
          </h2>
          <address className="mt-4 not-italic font-body text-sm leading-relaxed text-garden-earth">
            18 Marina Gardens Drive
            <br />
            Singapore 018953
          </address>
          <Link
            href="/plan-your-visit/getting-here"
            className="mt-3 inline-block font-body text-sm font-medium text-garden-leaf underline-offset-4 hover:underline"
          >
            Directions &amp; Parking
          </Link>
        </div>

        <div>
          <ul className="space-y-2 font-body text-sm text-garden-earth">
            <li>Flower Conservatory: 9.00am – 9.00pm daily</li>
            <li>Cloud Canopy: 9.00am – 9.00pm daily</li>
          </ul>
          <Link
            href="/plan-your-visit/opening-hours"
            className="mt-3 inline-block font-body text-sm font-medium text-garden-leaf underline-offset-4 hover:underline"
          >
            See all opening times
          </Link>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-garden-mist">
            <Image
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&q=80"
              alt=""
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-body text-sm leading-relaxed text-garden-earth">
              Download the Gardens by the Bay mobile app to enhance your garden experience!
            </p>
            <Link
              href="/plan-your-visit/mobile-app"
              className="mt-2 inline-block font-body text-sm font-semibold text-garden-leaf underline-offset-4 hover:underline"
            >
              Get the app →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
