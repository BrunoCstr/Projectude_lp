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
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"; // Removed SheetHeader import
import { useState } from "react"; // Import useState for mobile menu state
import { motion } from "framer-motion";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center px-4 md:px-6">
        {/* Desktop & Mobile Logo */}
        <div className="mr-auto flex items-center md:mr-4">
          <Link href="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <span className="font-bold hidden sm:inline">Projectude</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm font-medium">
          <Link
            href="#hero"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Home
          </Link>
          <Link
            href="#features"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Sobre
          </Link>
          <Link
            href="#functionalities"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Funcionalidades
          </Link>
          <Link
            href="#pricing"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Planos
          </Link>
          <Link
            href="#faq"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            FAQ
          </Link>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden flex items-center space-x-2 ml-auto">
          {/* Mobile Menu Links - Centered */}
          <nav className="flex items-center gap-2 text-xs font-medium">
            <Link
              href="#hero"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Home
            </Link>
            <Link
              href="#pricing"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Planos
            </Link>
            <Link
              href="#functionalities"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Func.
            </Link>
          </nav>

          {/* Right Side Icons for Mobile */}
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-secondary hover:text-secondary-foreground cursor-pointer transition-all duration-700"
              onClick={() =>
                window.open("https://app.projectude.com", "_blank")
              }
            >
              <LogIn className="h-5 w-5" />{" "}
              {/* Adjusted icon size for mobile */}
              <span className="sr-only">Entrar</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-primary text-primary hover:bg-primary dark:hover:text-black hover:text-primary-foreground cursor-pointer transition-all duration-700"
              onClick={() =>
                window.open("https://app.projectude.com", "_blank")
              }
            >
              <UserRoundPlus className="h-5 w-5" />{" "}
              {/* Adjusted icon size for mobile */}
              <span className="sr-only">Criar Conta</span>
            </Button>
            <LanguageSelector />
            <ThemeToggle />
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
            <span className="hidden md:inline">Entrar</span>
            <span className="sr-only md:hidden">Entrar</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-primary text-primary hover:bg-primary dark:hover:text-black hover:text-primary-foreground md:w-auto md:px-4 cursor-pointer transition-all duration-700"
            onClick={() => window.open("https://app.projectude.com", "_blank")}
          >
            <UserRoundPlus className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Criar Conta</span>
            <span className="sr-only md:hidden">Criar Conta</span>
          </Button>
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function LanguageSelector() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="hover:bg-secondary hover:text-secondary-foreground cursor-pointer transition-all duration-700"
        >
          {" "}
          {/* Use size="icon" */}
          <Globe className="h-[1.2rem] w-[1.2rem]" />{" "}
          {/* Adjusted icon size to match ThemeToggle */}
          <span className="sr-only">Selecionar Idioma</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Idioma</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span className="mr-2 text-lg">🇧🇷</span> Português
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="mr-2 text-lg">🇺🇸</span> English
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="mr-2 text-lg">🇪🇸</span> Español
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="mr-2 text-lg">🇫🇷</span> Français
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
