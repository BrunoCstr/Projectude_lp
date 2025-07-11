import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PoliticaDeCookiesPage() {
  const t = useTranslations("CookiesPolicyPage");

  return (
    <div className="min-h-screen bg-background text-foreground py-12 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <div className="mb-8">
          <Button variant="outline" size="sm" asChild>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              {t("back")}
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
          <p>{t("section1Text")}</p>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section2Title")}</h2>
          <h3 className="text-lg font-medium pt-2">{t("strictlyNecessaryTitle")}</h3>
          <p>{t("strictlyNecessaryText")}</p>
          <ul className="list-disc pl-6 space-y-2">
            {t.raw("strictlyNecessaryList").map((item: string, i: number) => <li key={i}>{item}</li>)}
          </ul>

          <h3 className="text-lg font-medium pt-2">{t("performanceTitle")}</h3>
          <p>{t("performanceText")}</p>
          <ul className="list-disc pl-6 space-y-2">
            {t.raw("performanceList").map((item: string, i: number) => <li key={i}>{item}</li>)}
          </ul>
          <p>{t("performanceExample")}</p>

          <h3 className="text-lg font-medium pt-2">{t("functionalityTitle")}</h3>
          <p>{t("functionalityText")}</p>
          <ul className="list-disc pl-6 space-y-2">
            {t.raw("functionalityList").map((item: string, i: number) => <li key={i}>{item}</li>)}
          </ul>

          <h3 className="text-lg font-medium pt-2">{t("marketingTitle")}</h3>
          <p>{t("marketingText")}</p>
          <ul className="list-disc pl-6 space-y-2">
            {t.raw("marketingList").map((item: string, i: number) => <li key={i}>{item}</li>)}
          </ul>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section3Title")}</h2>
          <p>{t("section3Text")}</p>
          <ul className="list-disc pl-6 space-y-2">
            {t.raw("section3List").map((item: string, i: number) => <li key={i}>{item}</li>)}
          </ul>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section4Title")}</h2>
          <p>{t("section4Text")}</p>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section5Title")}</h2>
          <p>{t("section5Text")}</p>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section6Title")}</h2>
          <p>{t("section6Text")}</p>
          <ul className="list-none pl-0 space-y-1">
            {t.raw("contactList").map((item: string, i: number) => <li key={i}>{item}</li>)}
          </ul>

          <p className="pt-4 border-t border-border/50">{t("consent")}</p>
        </div>
      </div>
    </div>
  );
} 