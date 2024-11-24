"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import DeatailImage1 from "@/assets/imgs/card-img.png";
import DeatailImage2 from "@/assets/imgs/card-img-2.png";
import DeatailImage3 from "@/assets/imgs/card-img-3.png";
import DeatailImage4 from "@/assets/imgs/card-img-4.png";
import DeatailImage5 from "@/assets/imgs/card-img-5.png";
import Image from "next/image";
import { DetailLikeIcon } from "@/assets/icons/detail-like-icon";

const images = [
  DeatailImage1,
  DeatailImage2,
  DeatailImage3,
  DeatailImage4,
  DeatailImage5,
];

export const SliderImage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };
  return (
    <div className="relative">
      <Slider {...settings}>
        {images.map((image, idx) => (
          <div key={idx}>
            <div>
              <div className="relative h-72 rounded-detaiImageBorderRadius shadow-bannerItemBoxShadow">
                <Image
                  src={image}
                  alt={`Banner ${idx + 1}`}
                  fill
                  className="rounded-detaiImageBorderRadius object-cover"
                  priority={idx === 0}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="absolute bottom-4 left-4 rounded-[12px] bg-black/50 px-3 py-[2px] text-sm text-white/60">
        {currentSlide + 1}/{images.length}
      </div>

      <div className="absolute bottom-4 flex items-center gap-x-1 right-4 rounded-[12px] bg-black/50 px-3 py-[2px] text-sm text-white/60">
        <DetailLikeIcon />
        1.2K
      </div>
    </div>
  );
};
