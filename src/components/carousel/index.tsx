'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps {
  children: React.ReactNode;
  settings?: any;
}

const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};

const Carousel: React.FC<CarouselProps> = ({ children, settings = {} }) => {
  const sliderSettings = {
    ...defaultSettings,
    ...settings,
  };

  return (
    <div className="relative w-full">
      <Slider {...sliderSettings}>
        {children}
      </Slider>
    </div>
  );
};

export default Carousel;
