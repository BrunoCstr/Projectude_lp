"use client";
// src/components/layout/footer.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
    Globe, Facebook, Twitter, Linkedin, Instagram
} from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { locales } from "@/i18n-config";

export function Footer() {
  const t = useTranslations("Footer");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.toString();
  const search = query ? `?${query}` : "";

  function changeLocale(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    router.push(newPath + search);
  }

  return (
    <footer className="py-8 md:py-12 w-full bg-secondary/30 dark:bg-secondary/10 border-t border-border/50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col md:grid md:grid-cols-4 gap-8 text-left">
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo_dark_mode.png"
                alt="Projectude Logo"
                className="h-8 w-auto md:h-10 md:w-auto max-h-8 md:max-h-10 object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              {t("tagline")}
            </p>
            <div className="flex space-x-3 pt-2">
              <Link href="https://www.facebook.com/share/1EjT9RCTWh/?mibextid=wwXIfr" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://www.threads.com/@projectude" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/projectude/" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

           <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:col-span-3 md:grid-cols-3">
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">{t("navigation")}</h4>
                <nav className="flex flex-col space-y-2">
                  <Link href="#hero" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("home")}</Link>
                  <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("about")}</Link>
                  <Link href="#functionalities" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("features")}</Link>
                  <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("pricing")}</Link>
                  <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("faq")}</Link>
                </nav>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">{t("legal")}</h4>
                <nav className="flex flex-col space-y-2">
                  <Link href="/termos-de-servico" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("terms")}</Link>
                  <Link href="/politica-de-privacidade" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("privacy")}</Link>
                  <Link href="/politica-de-cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("cookies")}</Link>
                </nav>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">{t("contact")}</h4>
                <nav className="flex flex-col space-y-2">
                  <Link href="mailto:help@projectude.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("email")}</Link>
                   <Link href="/central-de-ajuda" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("helpCenterLink")}</Link>
                </nav>
                 <div className="mt-6">
                     <h4 className="text-sm font-semibold text-foreground mb-3">{t("language")}</h4>
                     <DropdownMenu>
                         <DropdownMenuTrigger asChild>
                           <Button variant="outline" size="sm" className="w-full max-w-[200px] justify-start gap-2 hover:bg-secondary hover:text-secondary-foreground text-xs">
                             <Globe className="h-4 w-4" /> {t("selectLanguage")}
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
                 </div>
              </div>
           </div>
        </div>

        <Separator className="my-6 md:my-8" />

        <div className="text-center text-xs md:text-sm text-muted-foreground">
          {t("copyright", { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  );
}