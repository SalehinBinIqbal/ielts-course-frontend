import MediaCarousel from "@/components/media-carousel";
import CtaCard from "./cta-card";
import ChecklistsCard from "./checklists-card";
import type { SideMediaCardProps } from "@/types/data-type";

export default function SideMediaCard({
  media,
  cta,
  checkLists,
}: SideMediaCardProps) {
  return (
    <aside className="w-full bg-white pt-3.5 pb-3.5 rounded-2xl border border-gray-50 shadow-sm">
      <div className="px-3">
        <MediaCarousel carouselItems={media} />
      </div>
      <CtaCard cta={cta} className="mt-4" />
      <ChecklistsCard checkLists={checkLists} className="mt-4" />
    </aside>
  );
}
