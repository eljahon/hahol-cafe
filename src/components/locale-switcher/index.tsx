"use client";

import { FC } from "react";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";

import { TLocale } from "@/types";
import { localesData } from "@/constants";
import { usePathname, useRouter } from "@/components";
import { Avatar, Select, SelectItem } from "@nextui-org/react";

interface ILocaleSwitcher {
  className?: string;
}

export const LocaleSwitcher: FC<ILocaleSwitcher> = ({ className }) => {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams().toString();

  const pathnameWithParams = searchParams?.length
    ? `${pathname}?${searchParams}`
    : pathname;

  const handleChange = (locale: TLocale) => {
    router.replace(pathnameWithParams, { locale });
  };

  return (
    <Select
      size="sm"
      placeholder="Select"
      classNames={{
        base: `w-[90px] bg-red ${className}`,
        popoverContent: "w-min -translate-x-[30px]",
        value: "text-sm font-medium",
        trigger: "bg-transparent shadow-none",
      }}
      aria-label="language-switch"
      onChange={({ target: { value } }) => handleChange(value as TLocale)}
      defaultSelectedKeys={[locale]}
      startContent={<Avatar
        alt={locale}
        className="w-10 h-5 rounded-full"
        src={`https://flagcdn.com/${locale === "en" ? "gb" : locale}.svg`}
      />}
    >
      {localesData.map((item) => (
        <SelectItem
          startContent={
            <Avatar
              alt={item.label}
              className="w-6 h-6"
              src={`https://flagcdn.com/${item.icon}.svg`}
            />
          }
          key={item.value}
          value={item.value}
          color="primary"
        >
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
};
