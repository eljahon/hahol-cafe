import React, { FC } from "react";
import Slider from "react-slick";
import { useTranslations } from "next-intl";

import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/// Import Image's
import CategoryImg1 from "@/assets/imgs/category-img.png";
import CategoryImg2 from "@/assets/imgs/category-img-2.png";
import CategoryImg3 from "@/assets/imgs/category-img-3.png";
import CategoryImg4 from "@/assets/imgs/category-img-4.png";
import CategoryImg5 from "@/assets/imgs/category-img-5.png";
import CategoryImg6 from "@/assets/imgs/category-img-6.png";
import CategoryImg7 from "@/assets/imgs/category-img-7.png";
import CategoryImg8 from "@/assets/imgs/category-img-8.png";
import CategoryImg9 from "@/assets/imgs/category-img-9.png";
import CategoryImg10 from "@/assets/imgs/category-img-10.png";
import CategoryImg11 from "@/assets/imgs/category-img-11.png";
import CategoryImg12 from "@/assets/imgs/category-img-12.png";

const bannerImages = [
  {
    id: 1,
    src: CategoryImg1,
    title: "dessert",
  },
  {
    id: 2,
    src: CategoryImg2,
    title: "arab",
  },
  {
    id: 3,
    src: CategoryImg3,
    title: "turksih",
  },
  {
    id: 4,
    src: CategoryImg4,
    title: "middleEast",
  },
  {
    id: 5,
    src: CategoryImg5,
    title: "wrap",
  },
  {
    id: 6,
    src: CategoryImg6,
    title: "pizza",
  },
  {
    id: 7,
    src: CategoryImg7,
    title: "burger",
  },
  {
    id: 8,
    src: CategoryImg8,
    title: "chicken",
  },
  {
    id: 9,
    src: CategoryImg9,
    title: "kebab",
  },
  {
    id: 10,
    src: CategoryImg10,
    title: "plov",
  },
  {
    id: 11,
    src: CategoryImg11,
    title: "steak",
  },
  {
    id: 12,
    src: CategoryImg12,
    title: "somsa",
  },
];

export const CategorySlider: FC = () => {
  const settings = {
    slidesToShow: 3,
    infinite: false,
    speed: 500,
  };

  const t = useTranslations();

  return (
    <div>
      <Slider {...settings}>
        {bannerImages.map((item) => (
          <div key={item.id}>
            <div className="relative my-5 bg-white border-[1px] border-Clr611F flex flex-col items-center justify-between py-1 w-[110px] xsm:w-[120px] mx-auto h-[100px] shadow-bannerItemBoxShadow rounded-[20px]">
              <Image
                width={80}
                src={item.src}
                alt={`Banner ${item.id + 1}`}
                className="object-contain"
                priority={item.id === 0}
              />
              <p>{t(item.title)}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
