"use client";

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export default function PoliticaDePrivacidadePage() {
  const t = useTranslations("privacy-police");

  return (
    <div className="min-h-screen bg-background text-foreground py-12 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <div className="mb-8">
          <Button variant="outline" size="sm" asChild>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              {t("backToHome")}
            </Link>
          </Button>
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-primary">
          {t("title")}
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          {t("lastUpdate")}
        </p>

        <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none space-y-6 text-foreground/90">
          <p>{t("intro")}</p>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section1Title")}</h2>
          <p>{t("section1Intro")}</p>

          <h3 className="text-lg font-medium pt-2">{t("section1_1Title")}</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("section1_1Item1")}</li>
            <li>{t("section1_1Item2")}</li>
            <li>{t("section1_1Item3")}</li>
            <li>{t("section1_1Item4")}</li>
            <li>{t("section1_1Item5")}</li>
            <li>{t("section1_1Item6")}</li>
          </ul>

          <h3 className="text-lg font-medium pt-2">{t("section1_2Title")}</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("section1_2Item1")}</li>
            <li>{t("section1_2Item2")}</li>
            <li>{t("section1_2Item3")}</li>
            <li>{t("section1_2Item4")}</li>
          </ul>

          <h3 className="text-lg font-medium pt-2">{t("section1_3Title")}</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("section1_3Item1")}</li>
            <li>{t("section1_3Item2")}</li>
            <li>{t("section1_3Item3")}</li>
          </ul>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section2Title")}</h2>
          <p>{t("section2Intro")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("section2Item1")}</li>
            <li>{t("section2Item2")}</li>
            <li>{t("section2Item3")}</li>
            <li>{t("section2Item4")}</li>
            <li>{t("section2Item5")}</li>
            <li>{t("section2Item6")}</li>
          </ul>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section3Title")}</h2>
          <p>{t("section3Intro")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("section3Item1")}</li>
            <li>{t("section3Item2")}</li>
            <li>{t("section3Item3")}</li>
          </ul>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section4Title")}</h2>
          <p>{t("section4Intro")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("section4Item1")}</li>
            <li>{t("section4Item2")}</li>
            <li>{t("section4Item3")}</li>
          </ul>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section5Title")}</h2>
          <p>{t("section5Text")}</p>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section6Title")}</h2>
          <p>{t("section6Intro")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("section6Item1")}</li>
            <li>{t("section6Item2")}</li>
            <li>{t("section6Item3")}</li>
            <li>{t("section6Item4")}</li>
          </ul>
          <p>{t("section6Note")}</p>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section7Title")}</h2>
          <p>{t("section7Intro")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("section7Item1")}</li>
            <li>{t("section7Item2")}</li>
            <li>{t("section7Item3")}</li>
          </ul>
          <p>{t("section7Note")}</p>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section8Title")}</h2>
          <p>{t("section8Text")}</p>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section9Title")}</h2>
          <p>{t("section9Intro")}</p>
          <ul className="list-none pl-0 space-y-1">
            <li>📧 {t("section9Email")}</li>
            <li>🌐 {t("section9Site")}</li>
          </ul>

          <p className="pt-4 border-t border-border/50">
            {t("conclusion")}
          </p>
        </div>
      </div>
    </div>
  );
}
