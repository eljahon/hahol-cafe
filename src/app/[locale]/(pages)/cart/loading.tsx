"use client";
import { Skeleton } from "@nextui-org/react";
import React from "react";

export default function CartLoading() {
  return (
    <div className="container pb-[220px]">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-x-5">
          <Skeleton className="h-10 w-[120px] rounded-[10px]"></Skeleton>
        </div>
        <Skeleton className="flex w-[100px] items-center gap-x-4"></Skeleton>
      </div>

      <Skeleton className="mx-auto mb-4 max-w-md"></Skeleton>

      <Skeleton className="shadow-cardOrderShadow fixed bottom-0 left-0 right-0 rounded-calculateOrderTopRadius bg-white p-4"></Skeleton>
    </div>
  );
}
