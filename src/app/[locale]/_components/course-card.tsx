import Image from "next/image";

import {
  TypographyH3,
  TypographyMedium,
  TypographyMuted,
} from "@/components/ui/typography";
import type { CourseCardProps } from "@/types/data-type";

export default function CourseCard({ data }: CourseCardProps) {
  return (
    <div className="items-center p-3 xl:px-48 2xl:px-96">
      <div className="flex flex-col gap-4 md:pr-96">
        <TypographyH3 className="pt-4">{data.name}</TypographyH3>
        <div className="flex flex-col sm:flex-row flex-wrap p-2 bg-gray-900 w-full rounded-lg">
          {data.values.map((item, index) => (
            <div key={index} className="flex sm:w-1/2 gap-4 mt-2 mb-4 px-2">
              <Image
                src={item.icon}
                alt={item.id}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <TypographyMedium className="text-white">
                  {item.title}
                </TypographyMedium>
                <TypographyMuted className="mt-3 pr-2 leading-6">
                  {item.subtitle}
                </TypographyMuted>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
