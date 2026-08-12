import AttractionPageContent, {
  buildAttractionMetadata,
} from "@/components/attraction/AttractionPageContent";

const SLUG = "observatory";

export const metadata = buildAttractionMetadata(SLUG);

export default function ObservatoryPage() {
  return <AttractionPageContent slug={SLUG} />;
}
