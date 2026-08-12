import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Plan Your Visit",
  description: "Hours, directions, maps, and tips for a smooth day out.",
};

export default function Page() {
  return (
    <PageShell
      title="Plan Your Visit"
      description="Hours, directions, maps, and tips for a smooth day out."
      links={[{ label: "Opening Hours", href: "/plan-your-visit/opening-hours" }, { label: "Getting Here", href: "/plan-your-visit/getting-here" }, { label: "Itinerary Planner", href: "/plan-your-visit/itinerary-planner" }, { label: "Gardens Map", href: "/plan-your-visit/gardens-map" }, { label: "Amenities", href: "/plan-your-visit/amenities" }, { label: "Information Guides", href: "/plan-your-visit/information-guides" }, { label: "Visiting Guidelines", href: "/plan-your-visit/visiting-guidelines" }, { label: "Mobile App", href: "/plan-your-visit/mobile-app" }]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Plan Your Visit page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
