import CheckListsComponent from "@/components/check-lists-component";
import { cn } from "@/lib/utils";

interface ChecklistsCardProps {
  language?: string;
  checkLists: Array<{
    icon: string;
    id: string;
    text: string;
  }>;
  className?: string;
}

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
