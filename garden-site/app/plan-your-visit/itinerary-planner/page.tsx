import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Itinerary Planner",
  description: "Suggested routes for half-day and full-day visits.",
};

export default function Page() {
  return (
    <PageShell
      title="Itinerary Planner"
      description="Suggested routes for half-day and full-day visits."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Itinerary Planner page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
