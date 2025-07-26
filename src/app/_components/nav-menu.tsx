"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface NavMenuProps {
  initialLanguage: string;
}

export default function NavMenu({ initialLanguage }: NavMenuProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(initialLanguage);

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
    document.cookie = `lang=${value}; path=/; max-age=3600`;
    router.push(pathname);
  };
  return (
    <div className="flex gap-2 items-center justify-between px-3 xl:px-32 2xl:px-64 py-3 bg-white sticky top-0 z-50 w-full border-b border-gray-50 shadow-sm">
      <div className="flex gap-2 items-center">
        <Link href="/">
          <Image
            src="/10mslogo.svg"
            alt="Logo"
            width={100}
            height={40}
            className="w-[100px] h-[40px]"
          />
        </Link>
        <div className="hidden sm:block w-[350px] h-full">
          <Input
            className="rounded-4xl"
            startIcon={Search}
            placeholder={t("searchText")}
          />
        </div>
      </div>

      <div>
        <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
          <SelectTrigger>
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
    </div>
  );
}
