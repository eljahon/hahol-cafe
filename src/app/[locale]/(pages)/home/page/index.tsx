"use client";

import { useTranslations, useLocale } from "next-intl";

import { BannerSlider } from "../component/slider";
import { CategorySlider } from "../component";
import { Header, NavigationButtons, ProductCard } from "@/components";
import { StaticImageData } from "next/image";
import { ScrollShadow } from "@nextui-org/react";
import { Link } from "@/hooks/locale";
import { productCardItems } from "@/constants/data";





export const HomePage = () => {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <section className="pb-[70px]">
      <Header />
      <ScrollShadow hideScrollBar orientation="vertical" className="h-[calc(100vh-100px)] w-full">
        <div>
          <BannerSlider />
      </div>
      <div className="container">
        <input
          placeholder={t("searchPlaceholder")}
          className="font-overpass outline-none shadow-searchInputBoxShadow bg-white text-Clr8584 placeholder:text-Clr8584 border-none w-[358px] xsm:w-[390px] flex justify-center mx-auto rounded-[30px] py-3 pl-6"
          type="text"
        />
      </div>
      <div>
        <CategorySlider />
      </div>
      <div className="container">
        <div>
          <h2 className="text-Clr5204 font-openSans font-semibold text-[20px] py-[20px]">
            {t("hotProduct")}
          </h2>
          <div className="grid grid-cols-gridColumnsCardBox gap-2 xs:gap-4 justify-items-center">
            {productCardItems.map((item) => (
              <Link href={`/productDetail/${item.title}`} key={item.id} locale={locale}>
              <ProductCard key={item.id} {...item} />
              </Link>
            ))}
          </div>
          <h2 className="text-Clr5204 font-openSans font-semibold text-[20px] py-[20px] mt-4">
            {t("onlyForYou")}
          </h2>
          <div className="grid grid-cols-gridColumnsCardBox gap-2 xs:gap-4 justify-items-center">
            {productCardItems.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
      </ScrollShadow>

      <NavigationButtons />
    </section>
  );
};
