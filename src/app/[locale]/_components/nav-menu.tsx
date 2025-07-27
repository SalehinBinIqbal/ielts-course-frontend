"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { useRouter, usePathname } from "@/i18n/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import type { NavMenuProps } from "@/types/data-type";

export default function NavMenu({ initialLanguage }: NavMenuProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(initialLanguage);

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
    document.cookie = `lang=${value}; path=/; max-age=3600`;
    router.push(pathname, { locale: value });
  };

  return (
    <nav className="flex gap-2 items-center justify-between px-3 xl:px-32 2xl:px-64 py-3 bg-white sticky top-0 z-50 w-full border-b border-gray-50 shadow-sm">
      <div className="flex gap-2 items-center">
        <Link href="/" aria-label="Home">
          <Image
            src="/10mslogo.svg"
            alt="10ms Logo"
            width={100}
            height={40}
            className="w-[100px] h-[40px]"
            priority
          />
        </Link>
        <div className="hidden sm:block w-[350px]">
          <Input
            className="rounded-full"
            startIcon={Search}
            placeholder={t("searchText")}
            aria-label={t("searchText")}
          />
        </div>
      </div>

      <div className="min-w-[120px]">
        <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
          <SelectTrigger className="min-w-[120px]">
            <SelectValue>
              {selectedLanguage === "en" ? "English" : "বাংলা"}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="bn">বাংলা</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </nav>
  );
}
