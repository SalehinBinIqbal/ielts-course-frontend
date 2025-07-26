import CtaComponent from "@/components/cta-component";
import { cn } from "@/lib/utils";

interface CtaCardProps {
  cta: {
    name: string;
  };
  className?: string;
}

export default function CtaCard({ cta, className }: CtaCardProps) {
  return (
    <div className={cn("px-4", className)}>
      <CtaComponent cta={cta} />
    </div>
  );
}
