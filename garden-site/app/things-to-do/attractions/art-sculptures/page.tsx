import AttractionPageContent, {
  buildAttractionMetadata,
} from "@/components/attraction/AttractionPageContent";

const SLUG = "art-sculptures";

export const metadata = buildAttractionMetadata(SLUG);

export default function ArtSculpturesPage() {
  return <AttractionPageContent slug={SLUG} />;
}
