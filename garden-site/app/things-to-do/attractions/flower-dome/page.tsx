import AttractionPageContent, {
  buildAttractionMetadata,
} from "@/components/attraction/AttractionPageContent";

const SLUG = "flower-dome";

export const metadata = buildAttractionMetadata(SLUG);

export default function FlowerDomePage() {
  return <AttractionPageContent slug={SLUG} />;
}
