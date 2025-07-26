import MediaCarousel from "@/components/media-carousel";
import CtaCard from "./cta-card";
import ChecklistsCard from "./checklists-card";

interface SideMediaCardProps {
  media: Array<{
    name: string;
    resource_type: string;
    resource_value: string;
    thumbnail_url?: string;
  }>;
  cta: {
    name: string;
  };
  checkLists: Array<{
    icon: string;
    id: string;
    text: string;
  }>;
}

export default function SideMediaCard({
  media,
  cta,
  checkLists,
}: SideMediaCardProps) {
  return (
    <div className="w-full bg-white pt-3.5 pb-3.5 rounded-2xl border border-gray-50 shadow-sm">
      <div className="px-3">
        <MediaCarousel carouselItems={media} />
      </div>
      <CtaCard cta={cta} />
      <ChecklistsCard checkLists={checkLists} />
    </div>
  );
}
