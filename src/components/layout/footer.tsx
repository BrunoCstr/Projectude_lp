// src/components/layout/footer.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
    Globe, Facebook, Twitter, Linkedin, Instagram
} from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 md:py-12 w-full bg-secondary/30 dark:bg-secondary/10 border-t border-border/50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col md:grid md:grid-cols-4 gap-8 text-left">
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 md:h-7 md:w-7 text-primary"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span className="font-bold text-lg md:text-xl">Projectude</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Gerenciamento moderno de projetos para equipes de todos os tamanhos.
            </p>
            <div className="flex space-x-3 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

           <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:col-span-3 md:grid-cols-3">
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Navegação</h4>
                <nav className="flex flex-col space-y-2">
                  <Link href="#hero" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
                  <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sobre</Link>
                  <Link href="#functionalities" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Funcionalidades</Link>
                  <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Planos</Link>
                  <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
                </nav>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Legal</h4>
                <nav className="flex flex-col space-y-2">
                  <Link href="/termos-de-servico" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Termos de Serviço</Link>
                  <Link href="/politica-de-privacidade" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Política de Privacidade</Link>
                  <Link href="/politica-de-cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Política de Cookies</Link>
                </nav>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Contato</h4>
                <nav className="flex flex-col space-y-2">
                  <Link href="mailto:help@projectude.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">help@projectude.com</Link> {/* Updated email */}
                   <Link href="/central-de-ajuda" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Central de Ajuda</Link> {/* Link to Help Center */}
                </nav>
                 <div className="mt-6">
                     <h4 className="text-sm font-semibold text-foreground mb-3">Idioma</h4>
                     <DropdownMenu>
                         <DropdownMenuTrigger asChild>
                           <Button variant="outline" size="sm" className="w-full max-w-[200px] justify-start gap-2 hover:bg-secondary hover:text-secondary-foreground text-xs">
                             <Globe className="h-4 w-4" /> Selecionar Idioma
                           </Button>
                         </DropdownMenuTrigger>
                         <DropdownMenuContent align="start">
                            <DropdownMenuLabel>Idiomas</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                           <DropdownMenuItem>
                              <span className="mr-2 text-base">🇧🇷</span> Português
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                              <span className="mr-2 text-base">🇺🇸</span> English
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                             <span className="mr-2 text-base">🇪🇸</span> Español
                           </DropdownMenuItem>
                           <DropdownMenuItem>
                             <span className="mr-2 text-base">🇫🇷</span> Français
                           </DropdownMenuItem>
                         </DropdownMenuContent>
                       </DropdownMenu>
                 </div>
              </div>
           </div>
        </div>

        <Separator className="my-6 md:my-8" />

        <div className="text-center text-xs md:text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Projectude. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
