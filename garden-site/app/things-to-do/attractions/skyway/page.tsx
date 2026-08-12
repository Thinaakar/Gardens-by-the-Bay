import AttractionPageContent, {
  buildAttractionMetadata,
} from "@/components/attraction/AttractionPageContent";

const SLUG = "skyway";

export const metadata = buildAttractionMetadata(SLUG);

export default function SkywayPage() {
  return <AttractionPageContent slug={SLUG} />;
}
