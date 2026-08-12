import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Information Guides",
  description: "Downloadable guides for first-time and returning visitors.",
};

export default function Page() {
  return (
    <PageShell
      title="Information Guides"
      description="Downloadable guides for first-time and returning visitors."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Information Guides page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
