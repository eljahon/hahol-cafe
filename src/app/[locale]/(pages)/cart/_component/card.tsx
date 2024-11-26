"use client";
import { CardDeleteIcon } from "@/assets/icons/card-delete-icon";
import { CardHeartIcon } from "@/assets/icons/card-heart-icon";
import { CardLocationIcon } from "@/assets/icons/card-location-icon";
import { MinusCalcIcon } from "@/assets/icons/minus-calc-icon";
import { PlusCalcIcon } from "@/assets/icons/plus-calc-icon";
import { Card, CardBody, Checkbox, ScrollShadow } from "@nextui-org/react";
import React, { useState } from "react";
import { cardImg1, cardImg2, cardImg3 } from "@/constants";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import { ChervonCardOrderLeftIcon } from "@/assets/icons/chervon-card-order-left-icon";
import { Link } from "@/hooks/locale";
import { useLocale } from "next-intl";
import { TLocale } from "@/types";

interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string | StaticImageData;
  quantity: number;
}

export const Cart: React.FC = () => {
  const t = useTranslations();
  const locale = useLocale() as TLocale;
  const [items, setItems] = useState<FoodItem[]>([
    {
      id: "1",
      name: "Iskender Kebab",
      description: "Lamb + Cheese Lines + Chips + + Juice 1.2L",
      price: 14500,
      image: cardImg1,
      quantity: 1,
    },
    {
      id: "2",
      name: "Mediterranean Pizza",
      description: "Large + Cheese Lines - Olives + + Cider 1.2Lx2",
      price: 19900,
      image: cardImg2,
      quantity: 1,
    },
    {
      id: "3",
      name: "Gourmet Halal Burger",
      description: "Medium + Cheese Layer - Onion + + Cider 0.5L",
      price: 6900,
      image: cardImg3,
      quantity: 1,
    },
  ]);

  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set([]));
  //   const [couponApplied, setCouponApplied] = useState(true);

  const isAllSelected = selectedItems.size === items.length && items.length > 0;

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(new Set(items.map((item) => item.id)));
    } else {
      setSelectedItems(new Set());
    }
  };

  const handleItemSelect = (id: string, checked: boolean) => {
    const newSelected = new Set(selectedItems);
    if (checked) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelectedItems(newSelected);
  };

  const updateQuantity = (id: string, increment: boolean) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = increment
            ? item.quantity + 1
            : Math.max(1, item.quantity - 1);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }),
    );
  };

  const cardMainItems = [
    {
      brandName: "tashkentBurger",
      addedItems: [
        {
          id: "1",
          name: "Iskender Kebab",
          description: "Lamb + Cheese Lines + Chips + + Juice 1.2L",
          price: 14500,
          image: cardImg1,
          quantity: 1,
        },
        {
          id: "2",
          name: "Mediterranean Pizza",
          description: "Large + Cheese Lines - Olives + + Cider 1.2Lx2",
          price: 19900,
          image: cardImg2,
          quantity: 1,
        },
        {
          id: "3",
          name: "Gourmet Halal Burger",
          description: "Medium + Cheese Layer - Onion + + Cider 0.5L",
          price: 6900,
          image: cardImg3,
          quantity: 1,
        },
      ],
    },
    {
      brandName: "cairoHalal",
      addedItems: [
        {
          id: "4",
          name: "Iskender Kebab",
          description: "Lamb + Cheese Lines + Chips + + Juice 1.2L",
          price: 14500,
          image: cardImg1,
          quantity: 1,
        },
        {
          id: "5",
          name: "Mediterranean Pizza",
          description: "Large + Cheese Lines - Olives + + Cider 1.2Lx2",
          price: 19900,
          image: cardImg2,
          quantity: 1,
        },
      ],
    },
    {
      brandName: "samarkandCafe",
      addedItems: [
        {
          id: "6",
          name: "Gourmet Halal Burger",
          description: "Medium + Cheese Layer - Onion + + Cider 0.5L",
          price: 6900,
          image: cardImg3,
          quantity: 1,
        },
      ],
    },
  ];

  return (
    <ScrollShadow hideScrollBar className="h-[calc(100vh)]">
      <div className="container pb-[220px]">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-x-5">
            <Link locale={locale} href="/">
              <ChervonCardOrderLeftIcon />
            </Link>
            <h3 className="font-ubuntu text-[18px] font-semibold text-Clr5959">
              Cart (3)
            </h3>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="flex items-center gap-x-1 font-ubuntu text-Clr5959">
              <CardLocationIcon />
              Incheon
            </div>
            <div className="flex items-center gap-x-2">
              <CardHeartIcon />
              <CardDeleteIcon />
            </div>
          </div>
        </div>

        {cardMainItems.map((item) => (
          <Card
            key={item.brandName}
            className="mx-auto mb-4 max-w-md bg-ClrEAE9"
          >
            <CardBody className="p-4">
              <div className="mb-4 flex items-center gap-2">
                <Checkbox
                  isSelected={isAllSelected}
                  onValueChange={handleSelectAll}
                />
                <h2 className="text-Clr3C3A text-[15px]">
                  {t(item.brandName)}
                </h2>
              </div>

              <div className="space-y-4">
                {item.addedItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 border-b border-white pb-4"
                  >
                    <Checkbox
                      isSelected={selectedItems.has(item.id)}
                      onValueChange={(checked) =>
                        handleItemSelect(item.id, checked)
                      }
                    />

                    <Image
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-lg object-cover"
                    />

                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-Clr3C3A font-overpass text-[12px]">
                            {item.name}
                          </h3>
                          <p className="w-[143px] text-[10px] text-Clr5959">
                            {item.description}
                          </p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          X
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="mt-1 font-semibold">
                          {item.price.toLocaleString()} won
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            disabled={item.quantity === 1}
                            onClick={() => updateQuantity(item.id, false)}
                          >
                            <MinusCalcIcon />
                          </button>
                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>
                          <button onClick={() => updateQuantity(item.id, true)}>
                            <PlusCalcIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-center gap-x-4">
                <p className="text-Clr3C3A font-overpass text-[12px]">
                  {t("storeCupon")}
                </p>
                <input className="h-[24px] w-[107px] rounded-[10px] border-1 border-Clr4002 bg-transparent px-2 text-[10px] outline-none" />
                <button className="h-[24px] w-full max-w-[72px] rounded-[10px] bg-Clr4002 font-overpass text-[10px] text-white">
                  {t("apply")}
                </button>
              </div>

              <p className="text-Clr3C3A mt-2 text-center font-overpass text-[8px] text-sm">
                5,000 won {t("cuponApplyed")}
              </p>
            </CardBody>
          </Card>
        ))}

        <div className="shadow-cardOrderShadow fixed bottom-0 left-0 right-0 rounded-calculateOrderTopRadius bg-white p-4">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <Checkbox>{t("all")}</Checkbox>
            </div>
            <div>
              <p className="text-Clr3C3A text-end font-overpass text-[30px]">
                22 330 won
              </p>
              <p className="text-ClrFF00 font-overpass text-[21px]">
                {t("saved")}: 70 900 won
              </p>
            </div>
          </div>
          <button className="mx-auto mt-4 w-full max-w-[340px] rounded-[18px] bg-Clr4002 py-2 text-white">
            {t("checkout")}
          </button>

          <span className="shadow-cardOrderShadow absolute top-[10px] left-[120px] block h-[6px] w-[146px] rounded-[6px] bg-Clr4002"></span>
        </div>
      </div>
    </ScrollShadow>
  );
};

export default Cart;
