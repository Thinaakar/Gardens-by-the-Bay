import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Reach our visitor services and partnerships teams.",
};

export default function Page() {
  return (
    <PageShell
      title="Contact Us"
      description="Reach our visitor services and partnerships teams."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Contact Us page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
