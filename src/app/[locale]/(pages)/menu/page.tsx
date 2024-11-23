import React from "react";
import { useTranslations } from "next-intl";

const MenuPage = () => {
  const t = useTranslations();

  return <div>{t("menuPage")}</div>;
};

export default MenuPage;
