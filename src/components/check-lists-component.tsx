import Image from "next/image";
import { TypographyH4, TypographyMedium } from "@/components/ui/typography";
import { getTranslations } from "next-intl/server";

interface CheckListsComponentProps {
  language?: string;
  checkLists: Array<{
    icon: string;
    id: string;
    text: string;
  }>;
}

export default async function CheckListsComponent({
  language,
  checkLists,
}: CheckListsComponentProps) {
  const t = await getTranslations();
  return (
    <div className="w-full mt-2">
      <TypographyH4>{t("checkListTitle")}</TypographyH4>
      <div className="mt-4">
        {checkLists.map((item) => (
          <div key={item.id} className="flex gap-4 mt-2 items-center">
            <Image
              src={item.icon}
              alt={item.text}
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <TypographyMedium className="text-stone-800">
              {item.text}
            </TypographyMedium>
          </div>
        ))}
      </div>
    </div>
  );
}
