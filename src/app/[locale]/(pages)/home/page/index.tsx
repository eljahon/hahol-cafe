"use client";

import { useTranslations, useLocale } from "next-intl";

import { BannerSlider } from "../component/slider";
import { CategorySlider } from "../component";
import { Header, NavigationButtons, ProductCard } from "@/components";
import { ScrollShadow } from "@nextui-org/react";
import { productCardItems, restaurantsData } from "@/constants/data";
import { TLocale } from "@/types";
import { RestaurantCard } from "../component/restourant-card/restaurant-card";

export const HomePage = () => {
  const t = useTranslations();
  const locale = useLocale() as TLocale;
  return (
    <section className="pb-[70px]">
      <Header />
      <ScrollShadow
        hideScrollBar
        orientation="vertical"
        className="h-[calc(100vh-100px)] w-full"
      >
        <div>
          <BannerSlider />
        </div>
        <div className="container">
          <input
            placeholder={t("searchPlaceholder")}
            className="mx-auto flex w-[358px] justify-center rounded-[30px] border-none bg-white py-3 pl-6 font-overpass text-Clr8584 shadow-searchInputBoxShadow outline-none placeholder:text-Clr8584 xsm:w-[390px]"
            type="text"
          />
        </div>
        <div>
          <CategorySlider />
        </div>
        <div className="container">
          <h2 className="py-[20px] font-openSans text-[20px] font-semibold text-Clr5204">
            {t("hotProduct")}
          </h2>
          <div className="grid grid-cols-gridColumnsCardBox justify-items-center gap-2 xs:gap-4">
            {productCardItems.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
          <h2 className="mt-4 py-[20px] font-openSans text-[20px] font-semibold text-Clr5204">
            {t("onlyForYou")}
          </h2>
          <div className="grid grid-cols-gridColumnsCardBox justify-items-center gap-2 xs:gap-4">
            {productCardItems.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="px-4 text-Clr5204 font-semibold text-[20px] pb-4 pt-[80px]">{t("restaurants")}</h3>
          {restaurantsData.map((item) => (
            <RestaurantCard key={item.id} {...item} />
          ))}
        </div>
      </ScrollShadow>

      <NavigationButtons />
    </section>
  );
};
