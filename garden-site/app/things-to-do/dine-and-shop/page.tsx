import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Dine & Shop",
  description: "Cafes, restaurants, and garden-inspired retail.",
};

export default function Page() {
  return (
    <PageShell
      title="Dine & Shop"
      description="Cafes, restaurants, and garden-inspired retail."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Dine & Shop page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
