// src/components/layout/footer.tsx
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
import { Separator } from "@/components/ui/separator";
import { Globe, Facebook, Twitter, Instagram } from "lucide-react";
import { FaThreads } from "react-icons/fa6";
import { LanguageSelector } from "../LanguageSelector";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="py-8 md:py-12 w-full bg-secondary/30 dark:bg-secondary/10 border-t border-border/50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col md:grid md:grid-cols-4 gap-8 text-left">
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">


          {/* Logo para desktop */}
          <img
            src="/logo_dark_mode.png"
            alt="Logo Desktop"
            width={150}
            height={150}
          />
            </Link>
            <p className="text-sm text-muted-foreground">{t("title")}</p>
            <div className="flex space-x-3 pt-2">
              <Link
                href="https://www.facebook.com/share/16MuntccRB/?mibextid=wwXIfr"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
                target="_blank"

              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.x.com/projectude"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
                target="_blank"

              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.threads.com/@projectude"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Threads"
                target="_blank"

              >
                <FaThreads className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/projectude"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
                target="_blank"

              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:col-span-3 md:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">
                {t("headers.navigation")}
              </h4>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="#hero"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("links.home")}
                </Link>
                <Link
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("links.Sobre")}
                </Link>
                <Link
                  href="#functionalities"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("links.functionalities")}
                </Link>
                <Link
                  href="#pricing"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("links.plans")}
                </Link>
                <Link
                  href="#faq"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("links.FAQ")}
                </Link>
              </nav>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">
                {t("headers.legal")}
              </h4>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/termos-de-servico"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("links.terms-and-services")}
                </Link>
                <Link
                  href="/politica-de-privacidade"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("links.policy-and-privacy")}
                </Link>
                <Link
                  href="/politica-de-cookies"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("links.policy-of-cookies")}
                </Link>
              </nav>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">
                {t("headers.contato")}
              </h4>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="mailto:help@projectude.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  help@projectude.com
                </Link>{" "}
                {/* Updated email */}
                <Link
                  href="/central-de-ajuda"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("links.help-central")}
                </Link>{" "}
                {/* Link to Help Center */}
              </nav>
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  {t("headers.language")}
                </h4>
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6 md:my-8" />

        <div className="text-center text-xs md:text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Projectude.{" "}
          {t("headers.allDirectivesReserved")}
        </div>
      </div>
    </footer>
  );
}
