import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "What's Visiting",
  description: "Seasonal animal and insect highlights across the gardens.",
};

export default function Page() {
  return (
    <PageShell
      title="What's Visiting"
      description="Seasonal animal and insect highlights across the gardens."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the What's Visiting page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
