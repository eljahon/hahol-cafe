"use client";
import React from "react";
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
import { checkboxData, radioData } from "@/constants/data";
import { Link } from "@/hooks/locale";

export default function ProductDetailPage() {
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
  return (
    <div className="bg-ClrEAE9">
      <div className="relative mx-auto max-w-md xsm:max-w-full">
      <ScrollShadow hideScrollBar className="h-[calc(100vh)]">
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
          <Accordion defaultExpandedKeys={["1"]}>
            <AccordionItem
              key="1"
              aria-label="Vegan Pizza"
              startContent={
                <div>
                  <h2 className="text-start text-[23px] font-medium text-Clr4002">
                    {t("shawarma")}
                  </h2>
                  <p className="w-[300px] text-start font-light text-Clr5959">
                    {t("detailDescription")}
                  </p>
                  <div className="mb-6 flex items-center gap-x-3">
                    <div className="flex items-center gap-x-1">
                      <DetailStarIcon />
                      <span className="font-medium text-Clr5959">4.8</span>
                    </div>
                    <span className="block h-4 w-[1px] bg-Clr5959"></span>
                    <div>
                      <span className="text-muted-foreground text-sm text-Clr5959">
                        1K+ {t("sold")}
                      </span>
                    </div>
                  </div>
                </div>
              }
            >
              <div className="border-t-2 border-white py-4">
                <div className="flex items-center justify-between pb-3">
                  <h3 className="text-[18px] text-Clr4002">{t("size")}</h3>
                  <p className="text-[14px] font-medium text-ClrEF67">
                    {t("required")}
                  </p>
                </div>
                <RadioGroup color="secondary" defaultValue="radio">
                  {radioData.map((item, index) => (
                    <div className="flex items-center justify-between" key={index}>
                      <Radio classNames={{wrapper: cn("border-2 border-Clr4a23")}} value={item.value}>{t(item.label)}</Radio>
                      <p className="text-[15px] text-Clr5959">{ index === 0 ? t("extraFree") : item.price}</p>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div className="border-t-2 border-white pt-3">
                <div className="pb-3">
                  <h3 className="text-[18px] text-Clr4002">{t("exclude")}</h3>
                </div>
                <RadioGroup color="primary" defaultValue="radio">
                  {checkboxData.map((item, index) => (
                    <div className="flex items-center justify-between" key={index}>
                      <Checkbox classNames={{wrapper: cn("border-2 border-Clr4a23")}} value={item.value}>{t(item.label)}</Checkbox>
                      <p className="text-[15px] text-Clr5959">{index === 0 ? t("extraFree") : item.price}</p>
                    </div>
                  ))}
                  {/* <div className="flex items-center justify-between">
                    <Checkbox value="onion">{t("onion")}</Checkbox>
                    <p className="text-[15px] text-Clr5959">+1.500</p>
                  </div> */}
                  {/* <div className="flex items-center justify-between">
                    <Checkbox value="olives">{t("olives")}</Checkbox>
                    <p className="text-[15px] text-Clr5959">+2.500</p>
                  </div> */}
                  {/* <div className="flex items-center justify-between">
                    <Checkbox value="souse">{t("souse")}</Checkbox>
                    <p className="text-[15px] text-Clr5959">+3.500</p>
                  </div> */}
                </RadioGroup>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
        <p className="container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          dolore eveniet. Dolor nulla quaerat numquam odio laborum inventore ex
          fugiat sapiente pariatur vitae, quibusdam deserunt aliquam! Soluta,
          molestiae. Similique, rerum! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Molestias, dolore eveniet. Dolor nulla quaerat
          numquam odio laborum inventore ex fugiat sapiente pariatur vitae,
          quibusdam deserunt aliquam! Soluta, molestiae. Similique, rerum! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolore
          eveniet. Dolor nulla quaerat numquam odio laborum inventore ex fugiat
          sapiente pariatur vitae, quibusdam deserunt aliquam! Soluta,
          molestiae. Similique, rerum!
        </p>
        </ScrollShadow>
      </div>
     {/* <BottomSheet onDismiss={() => setOpen(false)}
        blocking={false} open={open} snapPoints={({ maxHeight }) => [maxHeight / 4, maxHeight * 0.6]} > */}
     <div className="rounded-calculateOrderTopRadius fixed bottom-0 w-full border-t bg-white py-4 shadow-bottomButtonBoxShadow">
        <div className="mb-4 flex items-center justify-between px-5">
          <div className="flex items-center gap-x-4">
            <button onClick={IncrementCalc}>
              <PlusCalcIcon />
            </button>
            <span className="font-medium">{count}</span>
            <button disabled={count === 1} onClick={DecrementCalc}>
              <MinusCalcIcon />
            </button>
          </div>
          <div>
            <div className="flex justify-between gap-x-[80px]">
              <div className="text-Clr5959">{t("delivery")}</div>
              <div className="text-Clr5959">3,000</div>
            </div>
            <div className="flex justify-between gap-x-[80px]">
              <div className="text-[20px] font-medium text-Clr5959">
                {t("totla")}
              </div>
              <div className="text-[20px] font-medium text-Clr5959">10,900</div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[300px]">
          <Button className="w-full flex items-center gap-x-2 rounded-[30px] bg-Clr4a23 text-[20px] font-medium text-white">
            <AddBasketIcon />
            {t("addCard")}
          </Button>
        </div>
      </div>
      {/* <BottomSheet /> */}
     {/* </BottomSheet> */}
    </div>
  );
}
