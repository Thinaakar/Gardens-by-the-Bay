import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Getting Here",
  description: "Public transport, driving, and walking directions.",
};

export default function Page() {
  return (
    <PageShell
      title="Getting Here"
      description="Public transport, driving, and walking directions."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Getting Here page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
