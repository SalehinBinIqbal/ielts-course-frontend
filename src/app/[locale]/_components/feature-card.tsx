import Image from "next/image";
import { Check } from "lucide-react";

import {
  TypographyH3,
  TypographyMuted,
  TypographySmall,
} from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import type { FeatureCardProps } from "@/types/data-type";

export default function FeatureCard({ data }: FeatureCardProps) {
  return (
    <div className="items-center p-3 xl:px-48 2xl:px-96">
      <div className="flex flex-col gap-4 md:pr-96">
        <TypographyH3 className="pt-4">{data.name}</TypographyH3>
        <div className="flex flex-col p-2 border py-5 px-3 w-full rounded-lg">
          {data.values.map((item, index) => (
            <div key={index} className="px-2">
              <TypographySmall>{item.title}</TypographySmall>
              <div className="flex flex-col sm:flex-row w-full sm:items-center">
                <div className="flex flex-col gap-1 mt-2 mb-2 sm:w-1/2">
                  {item.checklist?.map((checkItem, checkIndex) => (
                    <div
                      key={checkIndex}
                      className="flex items-center gap-2 mb-2"
                    >
                      <Check
                        width={20}
                        height={20}
                        className="flex-shrink-0 text-blue-500"
                      />
                      <TypographyMuted>{checkItem}</TypographyMuted>
                    </div>
                  ))}
                </div>
                <div className="sm:w-1/2 flex justify-center">
                  <Image
                    src={item.file_url}
                    alt={item.title}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
              </div>
              {index !== data.values.length - 1 && (
                <Separator className="mb-4 mt-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
