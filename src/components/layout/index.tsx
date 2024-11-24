"use client";

import { FC } from "react";
import { IChildren } from "@/types";
import { Header, NavigationButtons } from "@/components";
import { usePathname } from "next/navigation";
// import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export const BaseLayout: FC<IChildren> = async ({ children }) => {
  const params = { isParent: true, limit: "all" };
  const pathname = usePathname();

  // await queryClient.prefetchQuery<TCategoryData>({
  //   queryKey: ["/categories/public", params],
  //   queryFn: (context) => queryFn<TCategoryData>(context, params),
  // });

  return (
    <>
      <div>
        <Header />
        {/* <HydrationBoundary state={dehydrate(queryClient)}>
        <div>Main</div>
      </HydrationBoundary> */}
        <main className="custom_height">{children}</main>
      </div>
      <div>{pathname === "/productDetail/id" ? "" : <NavigationButtons />}</div>
    </>
  );
};
