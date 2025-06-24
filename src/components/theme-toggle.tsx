"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";

export function ThemeToggle({ className = "", iconClassName = "" }: { className?: string, iconClassName?: string } = {}) {
  const { setTheme } = useTheme();
  const t = useTranslations('Header');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className={`hover:bg-secondary hover:text-secondary-foreground ${className}`}>
          <Sun className={`rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 ${iconClassName}`} />
          <Moon className={`absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 ${iconClassName}`} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          {t("dark")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          {t("system")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
