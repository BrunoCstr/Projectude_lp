// src/components/ui/language-selector.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { locales } from "@/i18n-config"; // ou onde você definiu seus idiomas

export function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations("Header");

  const query = searchParams.toString();
  const search = query ? `?${query}` : "";

  function changeLocale(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    router.push(newPath + search);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="w-full max-w-[200px] justify-start gap-2 hover:bg-secondary hover:text-secondary-foreground text-xs"
        >
          <Globe className="h-4 w-4" />
          {t("selectLanguage")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>{t("language")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {locales.map((loc) => {
          const label = {
            "pt-BR": "Português",
            en: "English",
            es: "Español",
            fr: "Français",
          }[loc];

          const flag = {
            "pt-BR": "🇧🇷",
            en: "🇺🇸",
            es: "🇪🇸",
            fr: "🇫🇷",
          }[loc];

          return (
            <DropdownMenuItem
              key={loc}
              onSelect={() => changeLocale(loc)}
              className="flex items-center gap-2"
            >
              <span className="text-lg">{flag}</span>
              {label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
