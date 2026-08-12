import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { promotions } from "@/lib/data/promotions";
import { formatDate } from "@/lib/utils";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Promotions",
  description: "Current offers and bundled ticket deals.",
};

export default function PromotionsPage() {
  return (
    <PageShell
      title="Promotions"
      description="Current offers and bundled ticket deals."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {promotions.map((promo) => (
          <Link
            key={promo.id}
            href={promo.ctaHref}
            className="group block overflow-hidden bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={promo.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span
                className="absolute left-0 top-0 px-3 py-1.5 font-body text-[10px] font-semibold uppercase tracking-wide text-white"
                style={{ backgroundColor: "#6B3D9A" }}
              >
                {promo.badge}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-body text-base font-semibold text-garden-canopy">{promo.title}</h3>
              <p className="mt-2 font-body text-sm text-garden-earth/80">{promo.description}</p>
              <p className="mt-3 font-body text-xs text-garden-moss">
                Till {formatDate(promo.validUntil)} · {promo.location}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
