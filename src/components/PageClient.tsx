"use client"; // ✋ habilita React Context, hooks, estado e useTranslations

import * as React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProjectPreviewCard } from "@/components/project-preview-card";
import { DashboardPreviewCard } from "@/components/dashboard-preview-card";
import { ProjectCardPreview } from "@/components/project-card-preview";
import { CommentsPreviewCard } from "@/components/comments-preview-card";
import { TagsPreviewCard } from "@/components/tags-preview-card";
import { HelpCenterPreviewCard } from "@/components/help-center-preview-card";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import type { Locale, CurrencyDetails } from "@/i18n-config";
import { prices } from "@/config/pricing";
import { formatCurrency } from "@/i18n-config";
import {
  Check,
  Cog,
  Users,
  Palette,
  MonitorSmartphone,
  Tags,
  ArrowRight,
  Package,
  Zap,
  UserPlus,
  DollarSign,
  Briefcase,
  UserRoundPlus,
  Settings,
  MessageCircleQuestion,
  LayoutDashboard,
  FileSignature,
  MessageCircle,
  Lock,
  Sparkles,
  CircleHelp,
  BarChart,
} from "lucide-react";


interface HomeClientProps {
  locale: Locale;
  currencyDetails: CurrencyDetails;
}

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HomeClient({
  locale,
  currencyDetails,
}: HomeClientProps) {
  const t = useTranslations("Pricing");

  // 2️⃣ UI completa: HeroSection, FeaturesSection, PricingSection, etc.
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <HeroSection />
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <FeaturesSection />
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="functionalities-section"
        >
          <FunctionalitiesSection />
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <PricingSection locale={locale} currencyDetails={currencyDetails} />
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <TestimonialsSection />
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <FAQSection />
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <CtaSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

// Header component moved to src/components/layout/header.tsx
// LanguageSelector component moved to src/components/layout/header.tsx

function HeroSection() {
  const t = useTranslations("Hero");
  return (
    <section
      id="hero"
      className="w-full pt-12 md:pt-24 lg:pt-32 pb-12 md:pb-24 bg-gradient-to-b from-background to-secondary/30 dark:from-background dark:to-secondary/10"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 md:gap-10 lg:grid-cols-[1fr_450px] lg:gap-12 xl:grid-cols-[1fr_550px] items-center">
          {" "}
          {/* Removed redundant mx-auto */}
          <div className="flex flex-col justify-center space-y-4 md:space-y-6 text-left lg:text-left">
            {" "}
            {/* Adjusted text alignment for mobile */}
            <div className="space-y-2 md:space-y-3">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                {" "}
                {/* Adjusted font size for mobile */}
                {t("title")}
              </h1>
              <p className="max-w-[600px] text-muted-foreground text-base md:text-xl mx-0">
                {" "}
                {/* Adjusted text alignment for mobile */}
                {t("description")}
              </p>
              <p className="max-w-[600px] text-muted-foreground text-sm md:text-lg pt-2 mx-0">
                {" "}
                {/* Adjusted text alignment for mobile */}
                {t("subDescription")}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row justify-start">
              {" "}
              {/* Adjusted button order */}
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
              >
                <Briefcase className="mr-2 h-5 w-5" />
                {t("subscribePremium")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-secondary hover:text-secondary-foreground w-full sm:w-auto border-border"
              >
                <UserRoundPlus className="mr-2 h-5 w-5" />
                {t("getStarted")}
              </Button>
            </div>
          </div>
          {/* ProjectPreviewCard */}
          <div className="lg:order-last flex justify-center mt-8 lg:mt-0">
            <ProjectPreviewCard />
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: Package, titleKey: "management", descriptionKey: "managementDesc" }, // Use keys
  {
    icon: UserPlus,
    titleKey: "collaboration",
    descriptionKey: "collaborationDesc",
  },
  { icon: BarChart, titleKey: "reports", descriptionKey: "reportsDesc" },
  { icon: Palette, titleKey: "theme", descriptionKey: "themeDesc" },
  {
    icon: MonitorSmartphone,
    titleKey: "responsive",
    descriptionKey: "responsiveDesc",
  },
  { icon: Zap, titleKey: "performance", descriptionKey: "performanceDesc" },
];

function FeaturesSection() {
  const t = useTranslations("Features");
  return (
    <section
      id="features"
      className="w-full py-12 md:py-20 lg:py-28 bg-background"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12 lg:mb-16">
          <div className="space-y-2 md:space-y-3">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-2 md:mb-3">
              <Settings className="inline-block mr-1.5 h-4 w-4" />
              {t("mainFeatures")}
            </div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              {t("title")}
            </h2>
            <p className="max-w-[900px] text-muted-foreground text-base md:text-lg lg:text-xl xl:text-xl/relaxed">
              {t("description")}
            </p>
          </div>
        </div>
        <div className="grid max-w-sm gap-6 sm:max-w-4xl sm:grid-cols-2 md:gap-8 lg:max-w-none lg:grid-cols-3 mx-auto">
          {" "}
          {/* Added mx-auto for centering on all screens */}
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 25,
                delay: index * 0.2,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card
                key={feature.titleKey}
                className="h-full transition-transform transform hover:-translate-y-2 hover:shadow-2xl border-border/60 flex flex-col bg-card p-4 sm:p-6"
              >
                <CardHeader className="flex flex-row items-center gap-3 md:gap-4 pb-3 md:pb-4 p-0">
                  <div className="bg-primary/10 p-2 md:p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <CardTitle className="text-lg md:text-xl font-semibold">
                      {t(feature.titleKey)}
                    </CardTitle>{" "}
                    {/* Use key */}
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-0 p-0">
                  <p className="text-muted-foreground text-sm md:text-base">
                    {t(feature.descriptionKey)}
                  </p>{" "}
                  {/* Use key */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const functionalities = [
  {
    icon: LayoutDashboard,
    titleKey: "dashboardTitle",
    descriptionKey: "dashboardDesc",
    benefitKeys: [
      "dashboardBenefit1",
      "dashboardBenefit2",
      "dashboardBenefit3",
    ],
    cardComponent: <DashboardPreviewCard />,
  },
  {
    icon: FileSignature,
    titleKey: "projectManagementTitle",
    descriptionKey: "projectManagementDesc",
    benefitKeys: [
      "projectManagementBenefit1",
      "projectManagementBenefit2",
      "projectManagementBenefit3",
    ],
    cardComponent: <ProjectCardPreview />,
  },
  {
    icon: MessageCircle,
    titleKey: "commentsTitle",
    descriptionKey: "commentsDesc",
    benefitKeys: ["commentsBenefit1", "commentsBenefit2", "commentsBenefit3"],
    cardComponent: <CommentsPreviewCard />,
  },
  {
    icon: Tags,
    titleKey: "tagsTitle",
    descriptionKey: "tagsDesc",
    benefitKeys: ["tagsBenefit1", "tagsBenefit2", "tagsBenefit3"],
    cardComponent: <TagsPreviewCard />,
  },
  {
    icon: MessageCircleQuestion,
    titleKey: "helpCenterTitle",
    descriptionKey: "helpCenterDesc",
    benefitKeys: [
      "helpCenterBenefit1",
      "helpCenterBenefit2",
      "helpCenterBenefit3",
    ],
    cardComponent: <HelpCenterPreviewCard />,
  },
];

function FunctionalitiesSection() {
  const t = useTranslations("Functionalities");
  return (
    <section
      id="functionalities"
      className="w-full py-12 md:py-20 lg:py-28 bg-secondary/30 dark:bg-secondary/10"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-2 md:mb-3">
            <Cog className="inline-block mr-1.5 h-4 w-4" />
            {t("howItWorks")}
          </div>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="max-w-[900px] text-muted-foreground text-base md:text-lg lg:text-xl xl:text-xl/relaxed">
            {t("description")}
          </p>
        </div>
        <div className="grid gap-10 md:gap-16 lg:gap-20">
          {functionalities.map((func, index) => (
            <div
              key={func.titleKey}
              className={`grid gap-6 md:grid-cols-2 md:gap-10 lg:gap-16 items-center ${
                index % 2 !== 0
                  ? "md:[&>*:last-child]:col-start-1 md:[&>*:first-child]:col-start-2"
                  : ""
              }`}
            >
              <div
                className={`flex flex-col justify-center space-y-3 md:space-y-4 text-left ${
                  index % 2 !== 0 ? "md:order-1" : "md:order-none"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <func.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold sm:text-2xl md:text-3xl">
                    {t(func.titleKey)}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-[600px]">
                  {t(func.descriptionKey)}
                </p>{" "}
                {/* Removed mx-0 */}
                <ul className="grid gap-1.5 md:gap-2 text-sm text-muted-foreground list-none pt-1 md:pt-2 max-w-[600px]">
                  {" "}
                  {/* Removed mx-0 */}
                  {func.benefitKeys.map((benefitKey, i) => (
                    <li key={i} className="flex items-start gap-2 text-left">
                      <Check className="text-primary w-4 h-4 flex-shrink-0 mt-1" />{" "}
                      <span>{t(benefitKey)}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="link"
                  className="self-start px-0 text-primary hover:text-primary/80 mt-2"
                  onClick={() => {window.open("https://app.projectude.com", "_blank")}}
                >
                  {t("learnMore")} <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              {/* Render the card component dynamically */}
              <div
                className={`w-full flex justify-center ${
                  index % 2 !== 0 ? "md:order-none" : "md:order-last"
                }`}
              >
                {" "}
                {/* Removed mx-auto */}
                {func.cardComponent ? (
                  func.cardComponent
                ) : (
                  <Image
                    data-ai-hint="dashboard project management"
                    src={`https://picsum.photos/550/310?grayscale&random=${
                      index + 1
                    }`}
                    width={550}
                    height={310}
                    alt={t(func.titleKey)}
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center shadow-lg border border-border/50 transition-transform transform hover:scale-105 duration-300 w-full"
                  />
                )}{" "}
                {/* Removed mx-auto */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface PricingSectionProps {
  locale: Locale;
  currencyDetails: CurrencyDetails;
}

function PricingSection({ locale, currencyDetails }: PricingSectionProps) {
  const t = useTranslations("Pricing"); // Use 'Pricing' namespace

  const formatPrice = (value: number) =>
    formatCurrency(value, locale, currencyDetails.currency); // Helper to format price with currency

  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-20 lg:py-28 bg-background"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-2 md:mb-3">
            <DollarSign className="inline-block mr-1.5 h-4 w-4" />
            {t("pricing")}
          </div>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="max-w-[900px] text-muted-foreground text-base md:text-lg lg:text-xl xl:text-xl/relaxed">
            {t("description")}
          </p>
        </div>
        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="premium-mensal" className="w-full">
            {" "}
            {/* Changed default value */}
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8 h-auto gap-1 sm:gap-2">
              <TabsTrigger
                value="free"
                className="py-2 sm:py-2.5 text-xs sm:text-sm text-center"
              >
                {t("free")}
              </TabsTrigger>
              <TabsTrigger
                value="premium-mensal"
                className="py-2 sm:py-2.5 text-xs sm:text-sm text-center"
              >
                {t("premiumMonthly")}
              </TabsTrigger>
              <TabsTrigger
                value="premium-anual"
                className="py-2 sm:py-2.5 text-xs sm:text-sm text-center relative"
              >
                {t("premiumAnnual")}
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-1 sm:-right-2 text-[10px] sm:text-xs px-1 sm:px-1.5 py-0.5"
                >
                  {t("discount15")}
                </Badge>
              </TabsTrigger>
              <TabsTrigger
                value="premium-2anos"
                className="py-2 sm:py-2.5 text-xs sm:text-sm text-center relative"
              >
                {t("premium2Years")}
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-1 sm:-right-2 text-[10px] sm:text-xs px-1 sm:px-1.5 py-0.5"
                >
                  {t("discount25")}
                </Badge>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="free">
              <Card className="shadow-md border-border/60 dark:border-border/40 bg-card">
                <CardContent className="p-4 sm:p-6 flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="flex-1 space-y-3 md:space-y-4">
                    <div className="flex items-center gap-2">
                      <Package className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      <h3 className="text-xl md:text-2xl font-semibold">
                        {t("freeTitle")}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {t("freeDesc")}
                    </p>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      {t("freeSubDesc")}
                    </p>
                    <ul className="space-y-2 md:space-y-2.5 text-xs md:text-sm text-muted-foreground pt-2 md:pt-3">
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        {t("freeBenefit1")}
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        {t("freeBenefit2")}
                      </li>
                      <li className="flex items-start gap-2">
                        <Lock className="text-muted-foreground w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        {t("freeBenefit3")}
                      </li>
                      <li className="flex items-start gap-2">
                        <Lock className="text-muted-foreground w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        {t("freeBenefit4")}
                      </li>
                      <li className="flex items-start gap-2">
                        <Lock className="text-muted-foreground w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        {t("freeBenefit5")}
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-center md:items-end justify-between space-y-3 md:space-y-4 w-full md:w-auto md:text-right pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-border/50 md:pl-6 lg:pl-8">
                    <p className="text-3xl md:text-4xl font-bold">
                      {t("freePrice")}
                    </p>
                    <p className="text-xs text-muted-foreground h-6 md:h-8 flex items-center">
                      {t("freePerfectFor")}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full md:w-auto mt-auto hover:bg-secondary hover:text-secondary-foreground text-sm md:text-base"
                    >
                      <UserRoundPlus className="mr-2 h-4 w-4" />
                      {t("getStartedNow")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="premium-mensal">
              <Card className="shadow-lg border-primary/50 dark:border-primary/40 bg-card relative overflow-hidden">
                <CardContent className="p-4 sm:p-6 flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="flex-1 space-y-3 md:space-y-4">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      <h3 className="text-xl md:text-2xl font-semibold">
                        {t("premiumMonthlyTitle")}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {t("premiumDesc")}
                    </p>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      {t("premiumSubDesc")}
                    </p>
                    <ul className="space-y-2 md:space-y-2.5 text-xs md:text-sm text-muted-foreground pt-2 md:pt-3">
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        {t("premiumBenefit1")}
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        {t("premiumBenefit2")}
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        {t("premiumBenefit3")}
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        {t("premiumBenefit4")}
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-center md:items-end justify-between space-y-3 md:space-y-4 w-full md:w-auto md:text-right pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-primary/30 md:pl-6 lg:pl-8">
                    <p className="text-3xl md:text-4xl font-bold">
                      {formatPrice(prices.monthly)}
                      <span className="text-xs md:text-sm font-normal text-muted-foreground">
                        {t("perMonth")}
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground h-6 md:h-8 flex items-center">
                      {t("cancelAnytime")}
                    </p>
                    <Button className="w-full md:w-auto mt-auto bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base">
                      <Zap className="mr-2 h-4 w-4" />
                      {t("subscribePremium")}{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="premium-anual">
              <Card className="shadow-lg border-primary/50 dark:border-primary/40 bg-card relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-bl-lg">
                  {t("popular")}
                </div>
                <CardContent className="p-4 sm:p-6 flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="flex-1 space-y-3 md:space-y-4">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      <h3 className="text-xl md:text-2xl font-semibold">
                        {t("premiumAnnual")}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {t("premiumDesc")}
                    </p>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      {t("premiumSubDesc")}
                    </p>
                    <ul className="space-y-2 md:space-y-2.5 text-xs md:text-sm text-muted-foreground pt-2 md:pt-3">
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        {t("premiumBenefit1")}
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        {t("premiumBenefit2")}
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        {t("premiumBenefit3")}
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        {t("premiumBenefit4")}
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-center md:items-end justify-between space-y-3 md:space-y-4 w-full md:w-auto md:text-right pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-primary/30 md:pl-6 lg:pl-8">
                    <p className="text-3xl md:text-4xl font-bold">
                      {formatPrice(prices.annually)}
                      <span className="text-xs md:text-sm font-normal text-muted-foreground">
                        {t("perYear")}
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground h-6 md:h-8 flex items-center">
                      {t("annualEquivalent", {
                        price: formatPrice(prices.monthly * 0.85),
                      })}
                    </p>
                    <Button className="w-full md:w-auto mt-auto bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base">
                      <Zap className="mr-2 h-4 w-4" />
                      {t("subscribePremium")}{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="premium-2anos">
              <Card className="shadow-lg border-primary/50 dark:border-primary/40 bg-card relative overflow-hidden">
                <CardContent className="p-4 sm:p-6 flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="flex-1 space-y-3 md:space-y-4">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      <h3 className="text-xl md:text-2xl font-semibold">
                        {t("premium2Years")}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {t("premiumDesc")}
                    </p>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      {t("premiumSubDesc")}
                    </p>
                    <ul className="space-y-2 md:space-y-2.5 text-xs md:text-sm text-muted-foreground pt-2 md:pt-3">
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        {t("premiumBenefit1")}
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        {t("premiumBenefit2")}
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        {t("premiumBenefit3")}
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        {t("premiumBenefit4")}
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-center md:items-end justify-between space-y-3 md:space-y-4 w-full md:w-auto md:text-right pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-primary/30 md:pl-6 lg:pl-8">
                    <p className="text-3xl md:text-4xl font-bold">
                      {formatPrice(prices.biannually)}
                      <span className="text-xs md:text-sm font-normal text-muted-foreground">
                        {t("per2Years")}
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground h-6 md:h-8 flex items-center">
                      {t("twoYearsEquivalent", {
                        price: formatPrice(prices.monthly * 0.75),
                      })}
                    </p>
                    <Button className="w-full md:w-auto mt-auto bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base">
                      <Zap className="mr-2 h-4 w-4" />
                      {t("subscribePremium")}{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "João P.",
    roleKey: "devRole",
    quoteKey: "testimonial1",
    img: "https://picsum.photos/100/100?grayscale&random=t1",
  },
  {
    name: "Ana C.",
    roleKey: "pmRole",
    quoteKey: "testimonial2",
    img: "https://picsum.photos/100/100?grayscale&random=t2",
  },
  {
    name: "Carlos S.",
    roleKey: "freelancerRole",
    quoteKey: "testimonial3",
    img: "https://picsum.photos/100/100?grayscale&random=t3",
  },
];

function TestimonialsSection() {
  const t = useTranslations("Testimonials");
  return (
    <section
      id="testimonials"
      className="w-full py-12 md:py-20 lg:py-28 bg-secondary/30 dark:bg-secondary/10"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-2 md:mb-3">
            <Users className="inline-block mr-1.5 h-4 w-4" />
            {t("title")}
          </div>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            {t("subtitle")}
          </h2>
          <p className="max-w-[900px] text-muted-foreground text-base md:text-lg lg:text-xl xl:text-xl/relaxed">
            {t("description")}
          </p>
        </div>
        <div className="grid max-w-sm gap-6 sm:max-w-4xl sm:grid-cols-1 md:grid-cols-2 lg:max-w-none lg:grid-cols-3 mx-auto md:gap-8">
          {" "}
          {/* Added mx-auto for centering, adjusted gap */}
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="h-full flex flex-col transition-shadow duration-300 hover:shadow-xl bg-card border-border/60 dark:border-border/40 p-4 sm:p-6"
            >
              <CardContent className="pt-0 flex-1 flex flex-col justify-between p-0">
                <blockquote className="text-sm md:text-base leading-relaxed italic text-foreground/90 mb-4 md:mb-6 border-l-4 border-primary pl-4 text-left">
                  “{t(testimonial.quoteKey)}”
                </blockquote>
                <div className="flex items-center gap-3 md:gap-4 mt-auto pt-4 border-t border-border/50">
                  <Image
                    data-ai-hint="person face"
                    src={testimonial.img}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-primary/50 w-10 h-10 md:w-12 md:h-12"
                  />
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t(testimonial.roleKey)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqData = [
  { questionKey: "faq1_question", answerKey: "faq1_answer" },
  { questionKey: "faq2_question", answerKey: "faq2_answer" },
  { questionKey: "faq3_question", answerKey: "faq3_answer" },
  { questionKey: "faq4_question", answerKey: "faq4_answer" },
  { questionKey: "faq5_question", answerKey: "faq5_answer" },
];

function FAQSection() {
  const t = useTranslations("FAQ");
  return (
    <section id="faq" className="w-full py-12 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        {" "}
        {/* Adjusted max-width */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-2 md:mb-3">
            <CircleHelp className="inline-block mr-1.5 h-4 w-4" />
            {t("title")}
          </div>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            {t("subtitle")}
          </h2>
          <p className="max-w-[900px] text-muted-foreground text-base md:text-lg lg:text-xl xl:text-xl/relaxed">
            {t("description")}
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-3 md:space-y-4"
        >
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="border border-border/60 dark:border-border/40 rounded-lg bg-card shadow-sm"
            >
              <AccordionTrigger className="flex justify-between items-center w-full py-3 px-4 md:py-4 md:px-6 text-left font-medium hover:no-underline text-sm md:text-base">
                <span className="flex-1 pr-2">{t(item.questionKey)}</span>
              </AccordionTrigger>
              <AccordionContent className="pt-0 pb-3 px-4 md:pb-4 md:px-6 text-muted-foreground text-sm md:text-base text-left">
                {t(item.answerKey)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CtaSection() {
  const t = useTranslations("CTA");
  return (
    <section
      id="cta"
      className="w-full py-12 md:py-20 lg:py-28 border-t border-border/50 bg-gradient-to-b from-background to-secondary/30 dark:from-background dark:to-secondary/10"
    >
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        {" "}
        {/* Adjusted max-width */}
        <div className="mx-auto grid items-center justify-center gap-4 md:gap-6 text-left md:text-center">
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-primary">
              {t("title")}
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground text-base md:text-lg lg:text-xl xl:text-xl/relaxed">
              {t("description")}
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2 md:mx-auto">
            {" "}
            {/* Centered button div */}
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-accent to-accent/80 text-accent-foreground hover:from-accent/90 hover:to-accent/70 text-base md:text-lg py-2.5 md:py-3"
            >
              <UserRoundPlus className="mr-2 h-5 w-5" />
              {t("buttonText")} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              {t("subtext")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
