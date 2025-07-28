"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyMedium } from "@/components/ui/typography";
import type { CtaComponentProps } from "@/types/data-type";

export default function CtaComponent({ cta }: CtaComponentProps) {
  const t = useTranslations();

  return (
    <section className="w-full mt-2 pt-2 pb-5" aria-labelledby="cta-heading">
      <TypographyH3 id="cta-heading" className="text-gray-900">
        ৳{t("priceValue")}
      </TypographyH3>
      <Button
        className="w-full bg-red-700 hover:bg-red-800 active:bg-red-900 
                  shadow-[inset_0_-4px_0_rgba(0,0,0,0.2)] 
                  hover:shadow-[inset_0_-4px_0_rgba(0,0,0,0.3)]
                  rounded-sm py-5 mt-2 transition-all duration-200 cursor-pointer"
      >
        <TypographyMedium className="font-semibold text-white">
          {cta?.name}
        </TypographyMedium>
      </Button>
    </section>
  );
}
