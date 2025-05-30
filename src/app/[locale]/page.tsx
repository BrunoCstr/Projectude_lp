// app/[locale]/page.tsx

import type { Locale } from "@/i18n-config";
import HomeClientWrapper from "@/components/HomeClientWrapper"; // novo client wrapper

interface PageProps {
  params: { locale: Locale };
}

export default function Page({ params }: PageProps) {
  const locale = params.locale;

  return <HomeClientWrapper locale={locale} />;
}
