// src/components/layout/header.tsx
"use client"; // Add this directive

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { LogIn, UserRoundPlus, Globe, MenuIcon } from "lucide-react";
import { useState } from "react"; // Import useState for mobile menu state
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { locales } from "@/i18n-config";
import { useTranslations } from "next-intl";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const t = useTranslations("Header");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 md:h-20 max-w-7xl items-center px-4 md:px-6 overflow-x-hidden">
        {/* Desktop & Mobile Logo */}
        <div className="mr-auto flex items-center md:mr-8 min-w-0">
          <img
            src="/logo_projectude.png"
            width={24}
            height={24}
            alt="Logo Projectude"
            className="h-6 w-6 md:h-8 md:w-8 transition-all duration-300 md:hidden"
          />
          <img
            src="/logo_dark_mode.png"
            alt="Logo Projectude"
            className="h-8 w-auto md:h-12 md:w-auto max-h-8 md:max-h-12 transition-all duration-300 hidden md:block object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm font-medium">
          <Link
            href="#hero"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            {t("home")}
          </Link>
          <Link
            href="#features"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            {t("about")}
          </Link>
          <Link
            href="#functionalities"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            {t("features")}
          </Link>
          <Link
            href="#pricing"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            {t("pricing")}
          </Link>
          <Link
            href="#faq"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            {t("faq")}
          </Link>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden flex items-center space-x-2 ml-auto min-w-0 overflow-hidden">
          {/* Mobile Menu Links - Centered */}
          <nav className="flex items-center gap-2 text-xs font-medium min-w-0 overflow-hidden">
            <Link
              href="#hero"
              className="text-foreground/60 transition-colors hover:text-foreground/80 whitespace-nowrap"
            >
              {t("home")}
            </Link>
            <Link
              href="#pricing"
              className="text-foreground/60 transition-colors hover:text-foreground/80 whitespace-nowrap"
            >
              {t("pricing")}
            </Link>
            <Link
              href="#functionalities"
              className="text-foreground/60 transition-colors hover:text-foreground/80 whitespace-nowrap"
            >
              {t("features")}
            </Link>
          </nav>

          {/* Right Side Icons for Mobile */}
          <div className="flex items-center space-x-0.5 gap-1 flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 min-w-0 p-1 hover:bg-secondary hover:text-secondary-foreground cursor-pointer transition-all duration-700"
              onClick={() => window.open("https://app.projectude.com", "_blank")}
            >
              <LogIn className="h-4 w-4" />
              <span className="sr-only">{t("login")}</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 min-w-0 p-1 border-primary text-primary hover:bg-primary dark:hover:text-black hover:text-primary-foreground cursor-pointer transition-all duration-700"
              onClick={() => window.open("https://app.projectude.com", "_blank")}
            >
              <UserRoundPlus className="h-4 w-4" />
              <span className="sr-only">{t("signup")}</span>
            </Button>
            <LanguageSelector buttonClassName="h-8 w-8 min-w-0 p-1" iconClassName="h-4 w-4" />
          </div>
        </div>

        {/* Right Side Controls (Desktop) */}
        <div className="hidden md:flex items-center justify-end space-x-1 md:space-x-2 ml-2 md:ml-auto">
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-secondary hover:text-secondary-foreground md:w-auto md:px-4 cursor-pointer transition-all duration-700"
            onClick={() => window.open("https://app.projectude.com", "_blank")}
          >
            <LogIn className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">{t("login")}</span>
            <span className="sr-only md:hidden">{t("login")}</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-primary text-primary hover:bg-primary dark:hover:text-black hover:text-primary-foreground md:w-auto md:px-4 cursor-pointer transition-all duration-700"
            onClick={() => window.open("https://app.projectude.com", "_blank")}
          >
            <UserRoundPlus className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">{t("signup")}</span>
            <span className="sr-only md:hidden">{t("signup")}</span>
          </Button>
          <LanguageSelector buttonClassName="h-8 w-8 min-w-0 p-1" iconClassName="h-4 w-4" />
          <ThemeToggle className="h-8 w-8 min-w-0 p-1" iconClassName="h-4 w-4" />
        </div>
      </div>
    </header>
  );
}

function LanguageSelector({ buttonClassName = "", iconClassName = "" } = {}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations("Header");

  const query = searchParams.toString();
  const search = query ? `?${query}` : "";

  function changeLocale(newLocale: string) {
    // Remove o "/[locale]" atual do início da rota
    const segments = pathname.split("/");
    segments[1] = newLocale; // substitui o locale (índice 0 é "", 1 é locale)
    const newPath = segments.join("/");
    router.push(newPath + search);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={`hover:bg-secondary hover:text-secondary-foreground ${buttonClassName}`}
        >
          <Globe className={iconClassName || "h-5 w-5"} />
          <span className="sr-only">{t("selectLanguage")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
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