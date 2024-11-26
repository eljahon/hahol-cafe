"use client";
import Link from "next/link";
import { FC, useEffect } from "react";

import { usePathname } from "next/navigation";
/// Import Icon's
import { CartInActiveIcon } from "@/assets/icons/cart-in-active-icon";
import { HomeInActiveIcon } from "@/assets/icons/home-in-active-icon";
import { LocationInActiveIcon } from "@/assets/icons/location-in-active-icon";
import { ProfileInActiveIcon } from "@/assets/icons/profile-in-active-icon";
import { ShopInActiveIcon } from "@/assets/icons/shop-in-active-icon";
import { HomeActiveIcon } from "@/assets/icons/home-active-icon";
import { ShopActiveIcon } from "@/assets/icons/shop-active-icon";
import { CartActiveIcon } from "@/assets/icons/cart-active-icon";
import { ProfileActiveIcon } from "@/assets/icons/profile-active-icon";
import { LocationActiveIcon } from "@/assets/icons/location-active-icon";
import { useLocale } from "next-intl";
import type { TLocale } from "@/types";
import path from "path";

export const NavigationButtons: FC = () => {
  const pathname = usePathname();
  const locale = useLocale() as TLocale;
  useEffect(() => {
    console.log(locale, pathname, "locale =>>>");
  }, [locale, pathname]);

  const links = [
    {
      href: "/",
      active: ["/", "/uz", "/ru"],
      label: "Home",
      icon: pathname === "/" ? HomeActiveIcon : HomeInActiveIcon,
    },
    {
      href: "/menu",
      active: ["/menu", "/uz/menu", "/ru/menu"],
      label: "Menu",
      icon: pathname === "/menu" ? ShopActiveIcon : ShopInActiveIcon,
    },
    {
      href: "/location",
      active: ["/location", "/uz/location", "/ru/location"],
      label: "Location",
      icon:
        pathname === "/location" ? LocationActiveIcon : LocationInActiveIcon,
    },
    {
      href: "/cart",
      active: ["/cart", "/uz/cart", "/ru/cart"],
      label: "Cart",
      icon: pathname === "/cart" ? CartActiveIcon : CartInActiveIcon,
    },
    {
      href: "/profile",
      active: ["/profile", "/uz/profile", "/ru/profile"],
      label: "Profile",
      icon: pathname === "/profile" ? ProfileActiveIcon : ProfileInActiveIcon,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full rounded-bottomButtonBorderRadius bg-white shadow-bottomButtonBoxShadow">
      <div className="h-13 flex items-center justify-around">
        {links.map(({ href, label, icon: Icon, active }, index) => {
          const isActive = active.includes(pathname);
          return (
            <Link
              key={index}
              href={href}
              locale={locale}
              className={`relative flex h-full w-full flex-col items-center justify-center space-y-1 transition-all duration-300 ease-in-out ${
                isActive ? "text-primary" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <span
                className={`${
                  isActive &&
                  "flex w-[50px] -translate-y-[23px] items-center justify-center rounded-full border-2 border-transparent bg-white py-2 shadow-lg"
                }`}
              >
                <Icon />
              </span>
              <span className="absolute -bottom-[6px] pb-2 text-xs">
                {isActive && label}
              </span>

              {label === "Cart" && (
                <span className="absolute -top-2.5 right-4 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[12px] text-white shadow-bannerItemBoxShadow">
                  3
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
