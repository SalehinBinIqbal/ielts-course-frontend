import {
  TypographyH2,
  TypographyH3,
  TypographyMedium,
} from "@/components/ui/typography";
import MediaCarousel from "@/components/media-carousel";
import type { HeroSectionProps } from "@/types/data-type";

export default function HeroSection({
  title,
  description,
  media,
}: HeroSectionProps) {
  return (
    <div className="h-fit bg-[url(/bg.jpeg)] bg-cover bg-center">
      <div className="flex flex-col items-center p-6 xl:px-48 2xl:px-96">
        <div className="block md:hidden w-full -mx-6">
          <MediaCarousel carouselItems={media} />
        </div>
        <div className="flex flex-col gap-4 md:py-24 md:pr-96">
          <div>
            <TypographyH2 className="hidden md:block text-white">
              {title}
            </TypographyH2>
            <TypographyH3 className="block pt-4 md:hidden text-white">
              {title}
            </TypographyH3>
          </div>
          <div>
            <TypographyMedium className="text-stone-400 leading-7">
              <span dangerouslySetInnerHTML={{ __html: description }} />
            </TypographyMedium>
          </div>
        </div>
      </div>
    </div>
  );
}
