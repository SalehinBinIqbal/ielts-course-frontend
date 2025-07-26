import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyMedium } from "@/components/ui/typography";

interface CtaComponentProps {
  cta: {
    name: string;
  };
}
export default async function CtaComponent({ cta }: CtaComponentProps) {
  const t = await getTranslations();
  return (
    <div className="w-full mt-2 pt-2 pb-5">
      <TypographyH3>৳{t("priceValue")}</TypographyH3>
      <Button className="w-full bg-red-700 hover:bg-red-800 not-hover:shadow-[inset_0_-4px_0_rgba(0,0,0,0.2)] rounded-sm py-5 mt-2">
        <TypographyMedium>{cta?.name}</TypographyMedium>
      </Button>
    </div>
  );
}
