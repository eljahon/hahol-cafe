"use client";

import Image from "next/image";
import { FC } from "react";
import Slider from "react-slick";
import bannerImg1 from "@/assets/imgs/banner-img.png";
import bannerImg2 from "@/assets/imgs/banner-img-2.png";
import bannerImg3 from "@/assets/imgs/banner-img-3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bannerImages = [bannerImg1, bannerImg2, bannerImg3];

export const BannerSlider: FC = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <div>
      <Slider {...settings}>
        {bannerImages.map((image, idx) => (
          <div key={idx}>
            <div>
              <div className="relative w-[360px] h-[121px]">
                <Image
                  src={image}
                  alt={`Banner ${idx + 1}`}
                  fill
                  className="object-cover rounded-[20px]"
                  priority={idx === 0}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};