// components/HomeClientWrapper.tsx
"use client";

import { useUserCurrency } from "@/hooks/useUserCurrency";
import { getCurrencyDetails } from "@/i18n-config";
import HomeClient from "./PageClient";
import type { Locale } from "@/i18n-config";

export default function HomeClientWrapper({ locale }: { locale: Locale }) {
  const currency = useUserCurrency(); // client-only hook
  const currencyDetails = getCurrencyDetails(currency);

  return <HomeClient locale={locale} currencyDetails={currencyDetails} />;
}
