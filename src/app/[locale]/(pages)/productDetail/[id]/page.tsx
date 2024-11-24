"use client";
import { ChevronLeftIcon } from "@/assets/icons/chevron-left-icon";
import { ShareIcon } from "@/assets/icons/share-icon";
import { StarIcon } from "@/assets/icons/star-icon";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import { cardImg1 } from "@/constants";

export default function ProductDetailPage() {
  const router = useRouter();

  const backToHome = () => {
    router.push("/");
  };
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-md mx-auto">
        <div className=" bg-slate-400">
          <div className="fixed top-0 left-0 right-0 px-4 py-3 z-30 flex items-center justify-between bg-gradient-to-b from-black to-transparent">
            <button onClick={backToHome}>
              <ChevronLeftIcon />
            </button>
            <button>
              <ShareIcon />
            </button>
          </div>

          <div className="relative h-72">
            <Image
              src={cardImg1}
              alt="Mediterranean Pizza"
              fill
              className="object-cover rounded-t-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded px-2 py-1 text-sm">
              1/7
            </div>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Mediterranean Pizza</h2>
          <p className="text-sm text-muted-foreground mb-4">
            The crispy crust, tangy sauce, and gooey cheese melted together
            perfectly
          </p>
          <div className="flex items-center gap-2 mb-6">
            <StarIcon />
            <span className="font-medium">4.8</span>
            <span className="text-muted-foreground text-sm">1K+ sold</span>
          </div>

          <div className="space-y-6">
            <div className="pt-4 border-t">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <Button>-</Button>
                  <span className="font-medium">1</span>
                  <Button>+</Button>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Delivery</div>
                  <div className="font-medium">3,000</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Total</div>
                  <div className="font-medium">10,900</div>
                </div>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
