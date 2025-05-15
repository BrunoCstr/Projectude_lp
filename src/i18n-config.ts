export const locales = ['en', 'pt-BR'] as const; // Removed 'es', 'fr'
export const defaultLocale = 'pt-BR';

export type Locale = (typeof locales)[number];

export interface LocaleDetails {
  name: string;
  flag: string;
  currency: Currency;
  currencySymbol: string;
  dateFormat: string; // Example: 'MM/DD/YYYY' or 'DD.MM.YYYY'
  timeFormat: string; // Example: 'hh:mm A' or 'HH:mm'
}

// Define Currency type (should match the one in i18n.ts or be imported)
export type Currency = 'BRL' | 'USD' | 'EUR';

// Add details for each locale
export const localeDetailsMap: Record<Locale, LocaleDetails> = {
  'en': {
    name: 'English',
    flag: '🇺🇸',
    currency: 'USD',
    currencySymbol: '$',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: 'hh:mm A',
  },
  'pt-BR': {
    name: 'Português (Brasil)',
    flag: '🇧🇷',
    currency: 'BRL',
    currencySymbol: 'R$',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'HH:mm',
  },
  // Removed 'es' and 'fr' entries
};
