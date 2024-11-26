import { ChevronLeftIcon } from "@/assets/icons/chevron-left-icon";
import { Link } from "@/hooks/locale";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { SearchWhitIcon } from "@/assets/icons/search-white-icon";
import { SliderCatImage } from "./_component/slider-cat-image";
import { NavigationButtons } from "@/components";
import { TashBurgerIcon } from "@/assets/icons/tash-burger-icon";
import { LikeDarkIcon } from "@/assets/icons/like-dark-icon";
import { ShareDarkIcon } from "@/assets/icons/share-dark-icon";
import { ReviewStarIcon } from "@/assets/icons/review-star-icon";
import { ChevronRightIcon } from "@/assets/icons/chevron-right-icon";
import { SliderCurrentCategory } from "./_component/slider-current-category";
import { catgDetailCardItems } from "@/constants/data";
import { CatgDetailProductCard } from "./_component/catg-detail-product-card";
import { ScrollShadow } from "@nextui-org/react";
import { TLocale } from "@/types";

const CategoryDetailPage = ({ params }: { params: { id: string } }) => {
  const locale = useLocale() as TLocale;
  const t = useTranslations();
  const categoryId = params.id;

  console.log(categoryId);

  return (
    <div className="bg-ClrEAE9">
      <ScrollShadow hideScrollBar className="h-[calc(100vh)] pb-[50px]">
        <div className="fixed left-0 right-0 top-0 z-30 flex items-center justify-between bg-gradient-to-b from-black to-transparent px-4 py-3">
          <Link href="/" key={locale} locale={locale}>
            <ChevronLeftIcon />
          </Link>
          <button>
            <SearchWhitIcon />
          </button>
        </div>
        <SliderCatImage />
        <div>
          <div className="container flex items-center justify-between py-1">
            <div className="flex items-center gap-x-2">
              <TashBurgerIcon />
              <h3 className="text-[20px] font-semibold text-Clr5204">
                {t("tashkentBurger")}
              </h3>
            </div>
            <div className="flex items-center">
              <div>
                <ShareDarkIcon />
              </div>
              <div className="flex items-center gap-x-1 rounded-[12px] px-3 py-[2px] text-sm text-Clr4002">
                <LikeDarkIcon />
                1.2K
              </div>
            </div>
          </div>

          <div className="border-y-2 border-white px-4 py-2">
            <div className="flex items-center gap-x-[12px]">
              <p className="flex items-center gap-x-[2px] text-[13px] text-ClrA5A1">
                <ReviewStarIcon /> 5.0
              </p>
              <div className="flex items-center gap-x-3">
                <div className="flex items-center gap-x-1">
                  <strong className="text-[13px] font-medium text-ClrA5A1">
                    1000+
                  </strong>
                  <p className="text-[13px] font-medium text-ClrA5A1">review</p>
                </div>
                <ChevronRightIcon />
              </div>
            </div>

            <p className="pt-[7px] text-[14px] font-light text-Clr4a23">
              Delivery from 3.000 won (~3km), 25 mins
            </p>
          </div>
        </div>

        <SliderCurrentCategory currentId={categoryId} />

        <div className="container grid grid-cols-gridColumnsCardBox justify-items-center gap-2 xs:gap-4">
          {catgDetailCardItems.map((item) => (
            <CatgDetailProductCard key={item.id} {...item} />
          ))}
        </div>
      </ScrollShadow>
      <NavigationButtons />
    </div>
  );
};

export default CategoryDetailPage;
