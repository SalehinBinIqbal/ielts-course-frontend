import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { TypographyH4, TypographyMedium } from "@/components/ui/typography";
import type { CheckListsComponentProps } from "@/types/data-type";

export default async function CheckListsComponent({
  checkLists,
}: CheckListsComponentProps) {
  const t = await getTranslations();

  return (
    <section className="w-full mt-2" aria-labelledby="checklist-heading">
      <TypographyH4 id="checklist-heading">{t("checkListTitle")}</TypographyH4>
      <ul className="mt-4 space-y-3">
        {checkLists.map((item) => (
          <li key={item.id} className="flex gap-3 items-start">
            <Image
              src={item.icon}
              alt="" // Decorative icon
              width={20}
              height={20}
              className="w-5 h-5 mt-0.5 flex-shrink-0"
              aria-hidden="true"
            />
            <TypographyMedium className="text-stone-800">
              {item.text}
            </TypographyMedium>
          </li>
        ))}
      </ul>
    </section>
  );
}
