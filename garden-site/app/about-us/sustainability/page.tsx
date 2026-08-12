import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Sustainability",
  description: "How we design, grow, and operate with the environment in mind.",
};

export default function Page() {
  return (
    <PageShell
      title="Sustainability"
      description="How we design, grow, and operate with the environment in mind."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Sustainability page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
