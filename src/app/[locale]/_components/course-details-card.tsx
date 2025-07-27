import { TypographyH3 } from "@/components/ui/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { CourseDetailsCardProps } from "@/types/data-type";

export default function CourseDetailsCard({ data }: CourseDetailsCardProps) {
  return (
    <div className="items-center p-3 xl:px-48 2xl:px-96">
      <div className="flex flex-col gap-4 md:pr-96">
        <TypographyH3 className="pt-4">{data.name}</TypographyH3>
        <div className="md:border md:rounded-lg md:py-5 md:px-3">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            {data.values.map((item, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger>
                  <div
                    className="text-base"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div
                    className="leading-8 text-neutral-800"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
