import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Things to Do",
  description: "Attractions, performances, dining, and seasonal events.",
};

export default function Page() {
  return (
    <PageShell
      title="Things to Do"
      description="Attractions, performances, dining, and seasonal events."
      links={[{ label: "Attractions", href: "/things-to-do/attractions" }, { label: "Theatre", href: "/things-to-do/theatre" }, { label: "Garden Pod", href: "/things-to-do/garden-pod" }, { label: "Calendar of Events", href: "/things-to-do/calendar-of-events" }, { label: "Dine & Shop", href: "/things-to-do/dine-and-shop" }]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Things to Do page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
