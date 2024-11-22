"use client";

import { useTranslations } from "next-intl";

import { BannerSlider } from "../component/slider";
import { CategorySlider } from "../component";
import { Header, NavigationButtons, ProductCard } from "@/components";
import {
  cardImg1,
  cardImg2,
  cardImg3,
  cardImg4,
  cardImg5,
  cardImg6,
  cardImg7,
  cardImg8,
} from "@/constants";
import { StaticImageData } from "next/image";
import { ScrollShadow } from "@nextui-org/react";

export interface IProductCardItemsType {
  id: number;
  img: string | StaticImageData;
  title: string;
  price: string;
  salePrice: string;
  restaurantName: string;
}

const productCardItems: IProductCardItemsType[] = [
  {
    id: 1,
    img: cardImg1,
    title: "biryani",
    price: "15 000",
    salePrice: "12 500",
    restaurantName: "kebabHose",
  },
  {
    id: 2,
    img: cardImg2,
    title: "shawarma",
    price: "12 000",
    salePrice: "9 500",
    restaurantName: "asianHalal",
  },
  {
    id: 3,
    img: cardImg3,
    title: "shashlik",
    price: "8 000",
    salePrice: "5 500",
    restaurantName: "samarkandCafe",
  },
  {
    id: 4,
    img: cardImg4,
    title: "mediterranean",
    price: "18 000",
    salePrice: "10 900",
    restaurantName: "tashkentBurger",
  },
  {
    id: 5,
    img: cardImg5,
    title: "chickenbiryani",
    price: "12 5000",
    salePrice: "10 500",
    restaurantName: "cairoHalal",
  },
  {
    id: 6,
    img: cardImg6,
    title: "satayset",
    price: "15 000",
    salePrice: "18 000",
    restaurantName: "noodleHalal",
  },
  {
    id: 7,
    img: cardImg7,
    title: "hummus",
    price: "10 000",
    salePrice: "7 500",
    restaurantName: "cairoHalal",
  },
  {
    id: 8,
    img: cardImg8,
    title: "hummusset",
    price: "13 500",
    salePrice: "18 000",
    restaurantName: "asianHalal",
  },
];

export const HomePage = () => {
  const t = useTranslations();

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
              <ProductCard key={item.id} {...item} />
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
