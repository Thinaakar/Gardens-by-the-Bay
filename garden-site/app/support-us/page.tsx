import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Support Us",
  description: "Donate, volunteer, or partner with the gardens.",
};

export default function Page() {
  return (
    <PageShell
      title="Support Us"
      description="Donate, volunteer, or partner with the gardens."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Support Us page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
