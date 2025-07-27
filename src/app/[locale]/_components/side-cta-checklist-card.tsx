import CtaCard from "./cta-card";
import ChecklistsCard from "./checklists-card";
import type { SideCtaChecklistCardProps } from "@/types/data-type";

export default function SideCtaChecklistCard({
  cta,
  checkLists,
}: SideCtaChecklistCardProps) {
  return (
    <aside className="w-full bg-white pt-3.5 pb-3.5 rounded-2xl border border-gray-50 shadow-sm">
      <CtaCard cta={cta} className="mt-4" />
      <ChecklistsCard checkLists={checkLists} className="mt-4" />
    </aside>
  );
}
