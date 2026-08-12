import Image from "next/image";
import Link from "next/link";
import { assets } from "@/lib/assets";

/**
 * Sustainability full-width banner — live copy + local banner image.
 */
export default function SustainabilityBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={assets.banners.sustainability}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0F4C48]/70" />
      </div>
      <div className="relative site-container flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between md:py-16">
        <div className="max-w-xl">
          <h2 className="font-body text-xl font-bold text-white md:text-2xl">
            Secrets to Sustainability
          </h2>
          <p className="mt-3 font-body text-base leading-relaxed text-white/95">
            Uncover the innovative thought behind our iconic architecture that continues to keep
            the Gardens sustainable!
          </p>
        </div>
        <Link
          href="/about-us/sustainability"
          className="shrink-0 border border-white px-6 py-3 font-body text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white/10"
        >
          Find out more
        </Link>
      </div>
    </section>
  );
}
