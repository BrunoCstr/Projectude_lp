import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermosDeServicoPage() {
    const t = useTranslations("TermsOfServicePage");

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
                    <p>
                        {t("intro")}
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section1Title")}</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        {t.raw("section1Items").map((item: any, index: number) => (
                            <li key={index}><strong>{item.term}:</strong> {item.definition}</li>
                        ))}
                    </ul>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section2Title")}</h2>
                    <p>
                        {t("section2Intro")}
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        {t.raw("section2Features").map((feature: string, index: number) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    <p>
                        {t("section2Warning")}
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section3Title")}</h2>
                    <p>
                        {t("section3Text")}
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section4Title")}</h2>
                    <p>
                        {t("section4Text1")}
                    </p>
                    <p>
                        {t("section4Text2")}
                    </p>
                    <p>
                        {t("section4Text3")}
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section5Title")}</h2>
                    <p>
                        {t("section5Text")}
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section6Title")}</h2>
                    <p>
                        {t("section6Text")}
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section7Title")}</h2>
                    <p>
                        {t("section7Text")}
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section8Title")}</h2>
                    <p>
                        {t("section8Text")}
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section9Title")}</h2>
                    <p>
                        {t("section9Text")}
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t("section10Title")}</h2>
                    <p>
                        {t("section10Intro")}
                    </p>
                    <ul className="list-none pl-0 space-y-1">
                        <li>{t("section10Email")} <a href="mailto:help@projectude.com" className="text-primary hover:underline">help@projectude.com</a></li>
                        <li>{t("section10Website")} <a href="https://www.projectude.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.projectude.com</a></li>
                    </ul>

                    <p className="pt-4 border-t border-border/50">
                        {t("conclusion")}
                    </p>
                </div>
            </div>
        </div>
    );
}

