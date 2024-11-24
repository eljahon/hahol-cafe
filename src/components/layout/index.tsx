import { FC } from "react";
import { IChildren } from "@/types";
// import { Header, NavigationButtons } from "@/components";
// import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export const BaseLayout: FC<IChildren> = async ({ children }) => {
  const params = { isParent: true, limit: "all" };

  return (
    <>
      <div>
        {/* <Header /> */}
        {/* <HydrationBoundary state={dehydrate(queryClient)}>
        <div>Main</div>
      </HydrationBoundary> */}
        <main className="custom_height">{children}</main>
      </div>
    </>
  );
};