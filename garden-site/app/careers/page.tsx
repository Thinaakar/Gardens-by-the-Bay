import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join a team that grows experiences every day.",
};

export default function Page() {
  return (
    <PageShell
      title="Careers"
      description="Join a team that grows experiences every day."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Careers page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
