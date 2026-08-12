import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "Membership",
  description: "Unlimited visits, member events, and exclusive early access.",
};

export default function Page() {
  return (
    <PageShell
      title="Membership"
      description="Unlimited visits, member events, and exclusive early access."
      links={[]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the Membership page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
