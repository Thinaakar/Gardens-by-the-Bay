import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Comics",
  description: "Illustrated stories that introduce plant science playfully.",
};

export default function Page() {
  return (
    <PageShell
      title="Comics"
      description="Illustrated stories that introduce plant science playfully."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Comics page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
