import CheckListsComponent from "@/components/check-lists-component";
import { cn } from "@/lib/utils";
import type { ChecklistsCardProps } from "@/types/data-type";

export default function ChecklistsCard({
  language,
  checkLists,
  className,
}: ChecklistsCardProps) {
  return (
    <div className={cn("px-4", className)}>
      <CheckListsComponent language={language} checkLists={checkLists} />
    </div>
  );
}
