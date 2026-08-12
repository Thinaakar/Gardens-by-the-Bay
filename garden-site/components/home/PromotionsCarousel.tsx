import Image from "next/image";
import Link from "next/link";
import { promotions } from "@/lib/data/promotions";
import CardStripCarousel from "@/components/shared/CardStripCarousel";
import { formatDate } from "@/lib/utils";

function CalendarIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="1" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/**
 * Dark teal promotions band — card strip + side CTA on the right
 * (layout patterned after destination gardens homepage).
 */
export default function PromotionsCarousel() {
  return (
    <section className="overflow-x-hidden bg-[#0F4C48] py-12 text-white md:py-16">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-4 xl:px-6 lg:flex-row-reverse lg:items-stretch lg:gap-6">
        {/* Right CTA panel */}
        <div className="flex w-full shrink-0 flex-col justify-center border border-white/80 px-6 py-10 lg:w-56 xl:w-64 xl:px-8">
          <h2 className="font-body text-2xl font-semibold leading-snug text-white xl:text-[1.65rem]">
            Fresh deals are calling
          </h2>
          <Link
            href="/promotions"
            className="mt-8 inline-flex w-fit bg-white px-5 py-3 font-body text-xs font-semibold uppercase tracking-wide text-[#0F4C48] transition hover:bg-white/90"
          >
            View all promotions
          </Link>
        </div>

        {/* Card strip */}
        <CardStripCarousel ariaLabel="Current promotions">
          {promotions.map((promo) => (
            <Link
              key={promo.id}
              href={promo.ctaHref}
              className="w-[240px] shrink-0 snap-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-[260px]"
            >
              <article>
                <div className="relative aspect-[4/3] overflow-hidden bg-black/20">
                  <Image
                    src={promo.image}
                    alt=""
                    fill
                    sizes="260px"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                  <span
                    className="absolute left-0 top-0 px-3 py-1.5 font-body text-[10px] font-semibold uppercase tracking-wide text-white"
                    style={{ backgroundColor: "#6B3D9A" }}
                  >
                    {promo.badge}
                  </span>
                </div>
                <div className="pt-4">
                  <h3 className="font-body text-sm font-semibold leading-snug text-white sm:text-base">
                    {promo.title}
                  </h3>
                  <ul className="mt-3 space-y-1.5 font-body text-xs text-white/90">
                    <li className="flex gap-2">
                      <CalendarIcon />
                      <span>Till {formatDate(promo.validUntil)}</span>
                    </li>
                    <li className="flex gap-2">
                      <PinIcon />
                      <span>{promo.location}</span>
                    </li>
                  </ul>
                </div>
              </article>
            </Link>
          ))}
        </CardStripCarousel>
      </div>
    </section>
  );
}
