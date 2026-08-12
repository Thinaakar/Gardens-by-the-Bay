import Image from "next/image";
import Link from "next/link";
import { assets } from "@/lib/assets";

/**
 * Pre-footer visit strip — live "See you at the Gardens!" band.
 */
export default function VisitStrip() {
  return (
    <section className="relative overflow-hidden border-t border-black/5">
      <div className="absolute inset-0">
        <Image
          src={assets.banners.visitStrip}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/92" />
      </div>

      <div className="relative site-container grid gap-10 py-12 md:grid-cols-3 md:py-14">
        <div>
          <h2 className="font-body text-xl font-bold text-garden-canopy md:text-2xl">
            See you at the Gardens!
          </h2>
          <address className="mt-4 not-italic font-body text-sm leading-relaxed text-garden-earth">
            18 Marina Gardens Drive
            <br />
            Singapore 018953
          </address>
          <Link
            href="/plan-your-visit/getting-here"
            className="mt-3 inline-block font-body text-sm font-bold text-garden-canopy underline underline-offset-4 hover:opacity-80"
          >
            Directions &amp; Parking
          </Link>
        </div>

        <div>
          <ul className="space-y-2 font-body text-sm text-garden-earth">
            <li>Flower Dome: 9.00am - 9.00pm daily</li>
            <li>Cloud Forest: 9.00am - 9.00pm daily</li>
          </ul>
          <Link
            href="/plan-your-visit/opening-hours"
            className="mt-3 inline-block font-body text-sm font-bold text-garden-canopy underline underline-offset-4 hover:opacity-80"
          >
            See all opening times
          </Link>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center">
          <div className="relative h-24 w-24 shrink-0">
            <Image
              src={assets.mobileApp}
              alt=""
              fill
              sizes="96px"
              className="object-contain"
            />
          </div>
          <div>
            <p className="font-body text-sm leading-relaxed text-garden-earth">
              Download the Gardens by the Bay Mobile App to enhance your Garden experience!
            </p>
            <Link
              href="/plan-your-visit/mobile-app"
              className="mt-2 inline-block font-body text-sm font-bold text-garden-canopy underline underline-offset-4 hover:opacity-80"
            >
              Get the app →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
