import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Gardens Map",
  description: "Interactive and printable maps of the grounds.",
};

export default function Page() {
  return (
    <PageShell
      title="Gardens Map"
      description="Interactive and printable maps of the grounds."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Gardens Map page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
