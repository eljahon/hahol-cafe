"use client";
import { Link } from "@/hooks/locale";
import Image from "next/image";
import React from "react";
import { ICatgDetailCardItemsType } from "@/constants/data";
import { useLocale, useTranslations } from "next-intl";
import { AddCartIcon } from "@/assets/icons/add-cart-icon";
import { CardCatgDetailHeartIcon } from "@/assets/icons/card-catg-detail-heart-icon";

export const CatgDetailProductCard: React.FC<ICatgDetailCardItemsType> = (
  props,
) => {
  const locale = useLocale();
  const t = useTranslations();
  const { title, img, salePrice, price, description } = props;
  return (
    <Link
      href={`/productDetail/${title}`}
      locale={locale}
      className="relative h-[270px] w-[159px] rounded-[12px] bg-slate-500 xs:h-[308px] xs:w-full"
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
        <p className="font-overpass text-[10px] text-Clr5959">
          {t(description)}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-[14px] text-Clr4002 xs:text-[18px]">
            {salePrice} won
          </p>
          <strong className="text-[12px] font-medium text-ClrA5A1 line-through xs:text-[16px]">
            {price.toUpperCase()} w
          </strong>
        </div>

        <div className="absolute right-2 top-2 flex h-[32px] w-[32px] items-center justify-center rounded-full border-2 border-Clr4002 bg-ClrDFDD pr-[3px] shadow-bannerItemBoxShadow">
          <button>
            <AddCartIcon />
          </button>
        </div>

        <div className="flex items-center absolute bottom-[90px] text-Clr4002 right-2 gap-x-1 w-[51px] py-[2px] px-[5px] rounded-[6px] bg-[#D9D9D9B2] text-[9px] font-medium font-overpass">
          <CardCatgDetailHeartIcon />
          1,200
        </div>
      </div>
    </Link>
  );
};
