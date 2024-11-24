import { createSharedPathnamesNavigation } from "next-intl/navigation";

import { locales } from "@/constants";

export const { Link, useRouter, usePathname } = createSharedPathnamesNavigation(
  { locales }
);

export { Footer } from "./footer";
export { Header } from "./header";
export { NavigationButtons } from "./navigation";
export { ProductCard } from "./product-card";
// export { Slider } from "./slider";
export { NoData } from "./no-data";
export { BaseLayout } from "./layout";
// export { MobileNav } from "./mobile-nav";
export { NoProducts } from "./no-products";
// export { OrderModal } from "./order-modal";
export { LocaleSwitcher } from "./locale-switcher";
