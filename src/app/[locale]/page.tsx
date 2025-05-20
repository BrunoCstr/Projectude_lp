// app/[locale]/page.tsx
import type { Locale, CurrencyDetails } from "@/i18n-config";
import {
  defaultLocale,
  getCurrencyDetails,
  localeDetailsMap,
} from "@/i18n-config";
import HomeClient from "../../components/PageClient";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Page({ params }: PageProps) {
  // Aguarda os params antes de usar
  const { locale } = await params;

  // Lógica de servidor: preparação dos dados
  const localeDetail =
    localeDetailsMap[locale] ?? localeDetailsMap[defaultLocale];
  const currencyDetails: CurrencyDetails = getCurrencyDetails(
    localeDetail.currency
  );

  // Retorna o Client Component com props prontas
  return <HomeClient locale={locale} currencyDetails={currencyDetails} />;
}
