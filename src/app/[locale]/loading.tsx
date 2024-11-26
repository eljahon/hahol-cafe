import { Skeleton } from "@nextui-org/react";
import { loadingMockData } from "@/constants";
// import {CatalogCardLoading, ProductCardLoading} from "@/components";

export default function Loading() {
  return (
    <section className="page container pb-5">
      <Skeleton className="h-60 w-full rounded-lg sm:h-72 md:h-80 lg:h-[420px]" />
      <Skeleton className="my-4 h-5 w-full max-w-sm rounded" />
      <div className="hide-scroll mb-4 flex gap-3 overflow-x-auto sm:mb-6 md:mb-8 lg:mb-10">
        <p>loading ...</p>
      </div>
      <Skeleton className="mb-4 h-5 w-full max-w-sm rounded" />
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 sm:gap-2 md:gap-3 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 3xl:grid-cols-6">
        <p>loading ...</p>
      </div>
    </section>
  );
}
