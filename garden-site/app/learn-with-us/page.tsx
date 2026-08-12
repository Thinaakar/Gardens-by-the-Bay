import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Learn With Us",
  description: "Programmes and resources for schools, families, and curious minds.",
};

export default function Page() {
  return (
    <PageShell
      title="Learn With Us"
      description="Programmes and resources for schools, families, and curious minds."
      links={[{ label: "For Schools", href: "/learn-with-us/for-schools" }, { label: "Explore Resources", href: "/learn-with-us/explore-resources" }]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Learn With Us page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
