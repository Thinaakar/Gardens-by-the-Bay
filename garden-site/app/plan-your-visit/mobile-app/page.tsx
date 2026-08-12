import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Mobile App",
  description: "Maps, alerts, and audio guides on your phone.",
};

export default function Page() {
  return (
    <PageShell
      title="Mobile App"
      description="Maps, alerts, and audio guides on your phone."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Mobile App page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
