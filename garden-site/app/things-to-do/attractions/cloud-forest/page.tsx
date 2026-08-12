import AttractionPageContent, {
  buildAttractionMetadata,
} from "@/components/attraction/AttractionPageContent";

const SLUG = "cloud-forest";

export const metadata = buildAttractionMetadata(SLUG);

export default function CloudForestPage() {
  return <AttractionPageContent slug={SLUG} />;
}
