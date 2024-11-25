"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeftIcon } from "@/assets/icons/chevron-left-icon";
import { ShareIcon } from "@/assets/icons/share-icon";
import {
  Accordion,
  AccordionItem,
  Button,
  Checkbox,
  Radio,
  RadioGroup,
  ScrollShadow,
  cn
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { SliderImage } from "./_component/slider-image";
import { DetailStarIcon } from "@/assets/icons/detail-star-icon";
import { PlusCalcIcon } from "@/assets/icons/plus-calc-icon";
import { MinusCalcIcon } from "@/assets/icons/minus-calc-icon";
import { AddBasketIcon } from "@/assets/icons/add-basket-icon";
import { productCardItems } from "@/constants/data";
import { Link } from "@/hooks/locale";
import { ProductCard } from "@/components/product-card";
import { CategorySlider } from "../../home/component/category-slider";
type ScrollShadowVisibility = "auto" | "top" | "bottom" | "left" | "right"
export default function CompanyDetailPage() {
  const t = useTranslations();
  const router = useRouter();
  const [count, setCount] = React.useState(1);
  const [open, setOpen] = React.useState(true);
  const locale = useLocale();
  const IncrementCalc = () => {
    setCount(count + 1);
  };

  const DecrementCalc = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const backToHome = () => {
    router.push("/");
  };  

  const handleVisibilityChange = (overflow: ScrollShadowVisibility) => {
    console.log(overflow, "overflow =>>>");
  };


  return (
    <div className="bg-ClrEAE9">
      <div className="relative mx-auto max-w-md xsm:max-w-full">
      <ScrollShadow hideScrollBar className="h-[calc(100vh)]" onVisibilityChange={handleVisibilityChange}>
        <div className="fixed left-0 right-0 top-0 z-30 flex items-center justify-between bg-gradient-to-b from-black to-transparent px-4 py-3">
          <Link href="/"  key={locale} locale={locale}>
            <ChevronLeftIcon />
          </Link>
          <button>
            <ShareIcon />
          </button>
        </div>
        <SliderImage />
        
        <div className="p-4">
        <CategorySlider />

        <div className="grid grid-cols-gridColumnsCardBox gap-2 xs:gap-4 justify-items-center">
            {productCardItems.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
         
        </div>
        </ScrollShadow>
      </div>
   
    </div>
  );
}
