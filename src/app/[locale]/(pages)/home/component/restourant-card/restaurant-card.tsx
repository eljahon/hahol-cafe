import { RestaurantLikeIcons } from "@/assets/icons/restaurant-like-icons";
import { RestaurantStarIcon } from "@/assets/icons/restaurant-star-icon";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface Restaurant {
  id: number;
  restourantName: string;
  image: string | StaticImageData;
  rating: number;
  reviews: number;
  distance: string;
  deliveryTime: string;
  status: string;
  avatar: string | StaticImageData;
  review: number;
}

export const RestaurantCard: React.FC<Restaurant> = ({
  restourantName,
  image,
  rating,
  reviews,
  distance,
  deliveryTime,
  review,
  status,
  avatar,
}) => {
  return (
    <div className="mx-auto mb-4 w-[360px] overflow-hidden rounded-[20px] bg-ClrEAE9 shadow-bannerItemBoxShadow">
      <Image
        src={image}
        alt={restourantName}
        width={360}
        height={200}
        className="h-[180px] w-full object-cover"
      />
      <div className="relative px-3">
        <div className="flex items-center justify-end gap-x-[14px]">
          <h3 className="font-ubuntu text-[19px] font-medium text-Clr4002">
            {restourantName}
          </h3>
          <div className="flex items-center gap-x-2">
            <span className="flex items-center gap-x-1">
              <RestaurantLikeIcons />
              <p className="font-ubuntu text-Clr4002">{reviews}</p>
            </span>
            <span className="flex items-center gap-x-1">
              <span className="mb-[3px]">
                <RestaurantStarIcon />
              </span>
              <p className="font-ubuntu text-Clr4002">{rating}</p>
            </span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between pb-2">
          <p className="text-ClrFE01 font-ubuntu text-[11px]">{status}</p>
          <span className="block h-3 w-[1.5px] bg-slate-600"></span>
          <p className="font-ubuntu text-[11px] text-ClrA5A1">
            {review}+ review
          </p>
          <span className="block h-3 w-[1.5px] bg-slate-600"></span>
          <p className="font-ubuntu text-[11px] text-ClrA5A1">{distance}</p>
          <span className="block h-3 w-[1.5px] bg-slate-600"></span>
          <p className="font-ubuntu text-[11px] text-ClrA5A1">
            Delivery: {deliveryTime}
          </p>
        </div>
        <div className="absolute left-0 top-[-45px]">
          {avatar && (
            <Image
              src={avatar}
              alt={restourantName}
              className="h-[84px] w-[84px] rounded-[21px]"
            />
          )}
        </div>
      </div>
    </div>
  );
};
