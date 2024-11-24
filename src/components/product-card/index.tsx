"use client";
import React, { FC } from "react";
import { IProductCardItemsType } from "@/app/[locale]/(pages)/home/page";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { StarIcon } from "@/assets/icons/star-icon";
import { CardLocationIcon } from "@/assets/icons/card-location-icon";
import { AddCartIcon } from "@/assets/icons/add-cart-icon";
import { useRouter } from "next/navigation";

export const ProductCard: FC<IProductCardItemsType> = (props) => {
  const { img, title, price, salePrice, restaurantName } = props;
  const t = useTranslations();
  const router = useRouter();

  const handleProductDetail = () => {
    console.log("clicked");
    router.push(`/productDetail/${title}`);
  };
  return (
    <div
      onClick={handleProductDetail}
      className="relative w-[159px] xs:w-full xs:h-[308px] h-[270px] rounded-[12px] bg-ClrEAE9 shadow-cardShadow"
    >
      <Image
        className="rounded-t-[12px] xs:w-full xs:h-[190px]"
        src={img}
        alt={title}
      />
      <h3 className=" font-ubuntu text-[16px] pl-[9px] py-[5px] border-b-[1px] border-white text-Clr4002 font-light">
        {t(title)}
      </h3>
      <div className="px-[9px]">
        <div className="flex justify-between items-center">
          <p className="text-Clr4002 text-[14px] xs:text-[18px]">
            {salePrice} won
          </p>
          <strong className="text-ClrA5A1 text-[12px] xs:text-[16px] font-medium line-through">
            {price.toUpperCase()} w
          </strong>
        </div>
        <div className="flex items-center gap-x-1">
          <div className="flex gap-[2px] items-center">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <p className="text-ClrA5A1 text-[12px] xs:text-[14px]">5.0 (1k+)</p>
        </div>
        <div className="flex items-center gap-x-1 mt-2">
          <CardLocationIcon />
          <p className="text-Clr4002 font-light font-overpass text-[12px] xs:text-[16px]">
            {t(restaurantName)}
          </p>
        </div>

        <div className="absolute shadow-bannerItemBoxShadow border-2 border-Clr4002 right-2 top-2 bg-ClrDFDD w-[32px] h-[32px] pr-[3px] flex items-center justify-center rounded-full">
          <button>
            <AddCartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
