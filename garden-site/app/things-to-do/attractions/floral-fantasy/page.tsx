import AttractionPageContent, {
  buildAttractionMetadata,
} from "@/components/attraction/AttractionPageContent";

const SLUG = "floral-fantasy";

export const metadata = buildAttractionMetadata(SLUG);

export default function FloralFantasyPage() {
  return <AttractionPageContent slug={SLUG} />;
}
