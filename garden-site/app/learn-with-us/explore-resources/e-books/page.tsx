import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "E-Books",
  description: "Downloadable readers for different age groups.",
};

export default function Page() {
  return (
    <PageShell
      title="E-Books"
      description="Downloadable readers for different age groups."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the E-Books page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
