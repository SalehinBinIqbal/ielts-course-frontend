import Image from "next/image";

import { TypographyH3, TypographyH4 } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import type { InstructorCardProps } from "@/types/data-type";

export default function InstructorCard({ data }: InstructorCardProps) {
  return (
    <div className="items-center p-3 xl:px-48 2xl:px-96">
      <div className="flex flex-col gap-4 md:pr-96">
        <TypographyH3 className="pt-4">{data.name}</TypographyH3>
        <div className="md:border md:rounded-lg md:py-5 md:px-3">
          {data.values.map((item, index) => (
            <div key={index}>
              <div className="flex gap-4 mt-2 items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={84}
                  height={84}
                  className="w-21 h-21 rounded-full object-cover"
                />
                <div>
                  <TypographyH4 className="text-stone-800">
                    {item.name}
                  </TypographyH4>
                  <div
                    className="mt-2"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </div>
              {index !== data.values.length - 1 && (
                <Separator className="mb-2 mt-4 sm:mt-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
