"use server";

import { FC } from "react";
import { IChildren } from "@/types";
import { TCategoryData } from "@/types/category";
import { getQueryClient, queryFn } from "@/utils";
import { Header, NavigationButtons } from "@/components";
// import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export const BaseLayout: FC<IChildren> = async ({ children }) => {
  const queryClient = getQueryClient();
  const params = { isParent: true, limit: "all" };

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
      <NavigationButtons />
    </>
  );
};
