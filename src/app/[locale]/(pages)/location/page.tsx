import React from "react";
import { useTranslations } from "next-intl";

export default function LocationPage() {
  const t = useTranslations();
  return <div>{t("locationPage")}</div>;
}
