export const locales = ['en', 'pt-BR', 'es', 'fr'] as const;
export const defaultLocale = 'pt-BR';

export type Locale = (typeof locales)[number];

export interface LocaleDetails {
  name: string;
  flag: string;
  currency: Currency;
  currencySymbol: string;
  dateFormat: string;
  timeFormat: string;
}

export type Currency = 'BRL' | 'USD' | 'EUR';

// Detalhes adicionais de moeda para formatação
export interface CurrencyDetails {
  currency: Currency;
  symbol: string;
  locale: Locale;
}

// Mapa de detalhes de moeda
export const currencyDetailsMap: Record<Currency, CurrencyDetails> = {
  BRL: { currency: 'BRL', symbol: 'R$', locale: 'pt-BR' },
  USD: { currency: 'USD', symbol: '$', locale: 'en' },
  EUR: { currency: 'EUR', symbol: '€', locale: 'es' }
};

// Função para obter detalhes de uma moeda
export function getCurrencyDetails(currency: Currency): CurrencyDetails {
  return currencyDetailsMap[currency];
}

// Função para formatar um valor numérico segundo o locale e moeda
export function formatCurrency(
  value: number,
  locale: Locale,
  currencyOverride?: Currency
): string {
  const currencyCode =
    currencyOverride ?? localeDetailsMap[locale].currency;
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
  }).format(value);
}

// Função para mapear código de país (ISO) para locale suportado
export function getLocaleFromCountry(countryCode: string): Locale {
  switch (countryCode.toUpperCase()) {
    case 'BR': return 'pt-BR';
    case 'US': return 'en';
    case 'ES': return 'es';
    case 'FR': return 'fr';
    default: return defaultLocale;
  }
}

// Mapa de detalhes por locale
export const localeDetailsMap: Record<Locale, LocaleDetails> = {
  en: {
    name: 'English',
    flag: '🇺🇸',
    currency: 'USD',
    currencySymbol: '$',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: 'hh:mm A'
  },
  'pt-BR': {
    name: 'Português (Brasil)',
    flag: '🇧🇷',
    currency: 'BRL',
    currencySymbol: 'R$',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'HH:mm'
  },
  es: {
    name: 'Español',
    flag: '🇪🇸',
    currency: 'EUR',
    currencySymbol: '€',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'HH:mm'
  },
  fr: {
    name: 'Français',
    flag: '🇫🇷',
    currency: 'EUR',
    currencySymbol: '€',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'HH:mm'
  }
};

export function getCurrencyByCountry(countryCode?: string): { currency: "BRL" | "EUR" | "USD", locale: string } {
  if (!countryCode) return { currency: "USD", locale: "en" };
  const southAmerica = ["BR", "AR", "BO", "CL", "CO", "EC", "GY", "PY", "PE", "SR", "UY", "VE"];
  const europe = ["PT", "ES", "FR", "DE", "IT", "NL", "BE", "LU", "IE", "FI", "AT", "GR", "SI", "SK", "EE", "LV", "LT", "CY", "MT"];
  if (southAmerica.includes(countryCode.toUpperCase())) return { currency: "BRL", locale: "pt-BR" };
  if (europe.includes(countryCode.toUpperCase())) return { currency: "EUR", locale: "fr" };
  return { currency: "USD", locale: "en" };
}
