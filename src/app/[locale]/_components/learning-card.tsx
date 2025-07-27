import { Check } from "lucide-react";

import { TypographyH3, TypographyMedium } from "@/components/ui/typography";
import type { LearningCardProps } from "@/types/data-type";

export default function LearningCard({ data }: LearningCardProps) {
  return (
    <div className="items-center p-3 xl:px-48 2xl:px-96">
      <div className="flex flex-col gap-4 md:pr-96">
        <TypographyH3 className="pt-4">{data.name}</TypographyH3>
        <div className="flex flex-col sm:flex-row flex-wrap sm:p-2 md:border md:rounded-lg md:py-5 md:px-3 w-full">
          {data.values.map((item, index) => (
            <div key={index} className="flex sm:w-1/2 gap-2 mt-2 mb-4 px-2">
              <Check
                width={20}
                height={20}
                className="text-blue-500 flex-shrink-0 mt-1"
              />
              <TypographyMedium className="flex-1">
                {item.text}
              </TypographyMedium>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
