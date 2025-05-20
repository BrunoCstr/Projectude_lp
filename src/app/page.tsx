// src/app/page.tsx
export const dynamic = "force-dynamic";

import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n-config";

export default function Page() {
  // redireciona automaticamente para /pt-BR (ou qualquer defaultLocale)
  redirect(`/${defaultLocale}`);
}