"use client";
import React, { FC } from "react";
import Image from "next/image";
import { IProductCardItemsType } from "@/constants/data";
import { useLocale, useTranslations } from "next-intl";
import { StarIcon } from "@/assets/icons/star-icon";
import { CardLocationIcon } from "@/assets/icons/card-location-icon";
import { AddCartIcon } from "@/assets/icons/add-cart-icon";
import { Link } from "@/hooks/locale";
import type { TLocale } from "@/types";

export const ProductCard: FC<IProductCardItemsType> = (props) => {
  const { img, title, price, salePrice, restaurantName } = props;
  const t = useTranslations();
  const locale = useLocale() as TLocale;

  return (
    <Link
      href={`/productDetail/${title}`}
      locale={locale}
      className="relative h-[270px] w-[159px] rounded-[12px] bg-ClrEAE9 shadow-cardShadow xs:h-[308px] xs:w-full"
    >
      <Image
        className="rounded-t-[12px] xs:h-[190px] xs:w-full"
        src={img}
        alt={title}
      />
      <h3 className="border-b-[1px] border-white py-[5px] pl-[9px] font-ubuntu text-[16px] font-light text-Clr4002">
        {t(title)}
      </h3>
      <div className="px-[9px]">
        <div className="flex items-center justify-between">
          <p className="text-[14px] text-Clr4002 xs:text-[18px]">
            {salePrice} won
          </p>
          <strong className="text-[12px] font-medium text-ClrA5A1 line-through xs:text-[16px]">
            {price.toUpperCase()} w
          </strong>
        </div>
        <div className="flex items-center gap-x-1">
          <div className="flex items-center gap-[2px]">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <p className="text-[12px] text-ClrA5A1 xs:text-[14px]">5.0 (1k+)</p>
        </div>
        <div className="mt-2 flex items-center gap-x-1">
          <CardLocationIcon />
          <p className="font-overpass text-[12px] font-light text-Clr4002 xs:text-[16px]">
            {t(restaurantName)}
          </p>
        </div>

        <div className="absolute right-2 top-2 flex h-[32px] w-[32px] items-center justify-center rounded-full border-2 border-Clr4002 bg-ClrDFDD pr-[3px] shadow-bannerItemBoxShadow">
          <button>
            <AddCartIcon />
          </button>
        </div>
      </div>
    </Link>
  );
};
