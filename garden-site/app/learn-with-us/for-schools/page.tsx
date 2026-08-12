import type { Metadata } from "next";
import PageShell from "@/components/shared/PageShell";

export const metadata: Metadata = {
  title: "For Schools",
  description: "Curriculum-linked visits and outreach for educators.",
};

export default function Page() {
  return (
    <PageShell
      title="For Schools"
      description="Curriculum-linked visits and outreach for educators."
      links={[{ label: "Pre-School", href: "/learn-with-us/for-schools/pre-school" }, { label: "Primary School", href: "/learn-with-us/for-schools/primary-school" }, { label: "Secondary School", href: "/learn-with-us/for-schools/secondary-school" }, { label: "School Engagement", href: "/learn-with-us/for-schools/school-engagement" }, { label: "Learning Activities", href: "/learn-with-us/for-schools/learning-activities" }]}
    >
      <p className="max-w-3xl font-body leading-relaxed text-garden-earth/80">
        Placeholder content for the For Schools page. Replace this copy, imagery, and
        branding with your own materials when ready.
      </p>
    </PageShell>
  );
}
