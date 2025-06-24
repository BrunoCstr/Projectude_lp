"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import * as React from "react"; // Import React
import { Header } from "@/components/layout/header"; // Import Header
import { Footer } from "@/components/layout/footer"; // Import Footer
import type { Locale, Currency, CurrencyDetails } from "@/i18n-config"; // Use alias
import {
  getCurrencyDetails,
  formatCurrency,
  getLocaleFromCountry,
  getCurrencyByCountry,
} from "@/i18n-config"; // Use alias
import { useTranslations } from "next-intl"; // Import translation hook
import { prices } from "@/config/pricing";
import { motion, useInView, useScroll, useTransform } from "framer-motion"; // Import Framer Motion

import {
  Check,
  Moon,
  Sun,
  Cog,
  Users,
  Palette,
  MonitorSmartphone,
  Menu,
  Dot,
  TrendingUp,
  MessageSquare,
  Tags,
  HelpCircle,
  ArrowRight,
  Package,
  Zap,
  UserPlus,
  FolderKanban,
  Files,
  LifeBuoy,
  Home as HomeIcon,
  Info,
  ListChecks,
  DollarSign,
  User,
  FileText,
  Briefcase,
  LogIn,
  UserRoundPlus,
  Settings,
  MessageCircleQuestion,
  LayoutDashboard,
  FilePenLine as FileSignature,
  MessageCircle,
  PlusCircle,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Lock,
  Sparkles,
  Search,
  CircleHelp,
  Eye,
  MenuIcon,
  ArrowLeft,
  ChartNoAxesColumnIncreasing as BarChart,
} from "lucide-react";

// Hook personalizado para animações de scroll
function useScrollAnimation() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  
  return { y, opacity };
}

interface HomePageProps {
  params: { locale: Locale };
}
export default function Home({ params }: HomePageProps) {
  // Use a default currency for client-side rendering
  const { currency, locale: priceLocale } = getCurrencyByCountry("BR"); // Default to Brazil

  // Scroll progress animation
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <FunctionalitiesSection />
        <PricingSection priceLocale={priceLocale} currency={currency} />
        <TestimonialsSection />
        <FAQSection />
        <CtaSection />
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
          <motion.div 
            className="flex flex-col justify-center space-y-4 md:space-y-6 text-left lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {" "}
            {/* Adjusted text alignment for mobile */}
            <motion.div 
              className="space-y-2 md:space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              >
                {" "}
                {/* Adjusted font size for mobile */}
                {t("title")}
              </motion.h1>
              <motion.p 
                className="max-w-[600px] text-muted-foreground text-base md:text-xl mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                {" "}
                {/* Adjusted text alignment for mobile */}
                {t("description")}
              </motion.p>
              <motion.p 
                className="max-w-[600px] text-muted-foreground text-sm md:text-lg pt-2 mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              >
                {" "}
                {/* Adjusted text alignment for mobile */}
                {t("subDescription")}
              </motion.p>
            </motion.div>
            <motion.div 
              className="flex flex-col gap-3 sm:flex-row justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
              {" "}
              {/* Adjusted button order */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
                  onClick={() => window.open("https://app.projectude.com", "_blank")}
                >
                  <Briefcase className="mr-2 h-5 w-5" />
                  {t("subscribePremium")}
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:bg-secondary hover:text-secondary-foreground w-full sm:w-auto border-border"
                  onClick={() => window.open("https://app.projectude.com", "_blank")}
                >
                  <UserRoundPlus className="mr-2 h-5 w-5" />
                  {t("getStarted")}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          {/* ProjectPreviewCard */}
          <motion.div 
            className="lg:order-last flex justify-center mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <ProjectPreviewCard />
          </motion.div>
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

// Variants para animações de stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

function FeaturesSection() {
  const t = useTranslations("Features");
  return (
    <section
      id="features"
      className="w-full py-12 md:py-20 lg:py-28 bg-background"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-2 md:space-y-3">
            <motion.div 
              className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-2 md:mb-3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Settings className="inline-block mr-1.5 h-4 w-4" />
              {t("mainFeatures")}
            </motion.div>
            <motion.h2 
              className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t("title")}
            </motion.h2>
            <motion.p 
              className="max-w-[900px] text-muted-foreground text-base md:text-lg lg:text-xl xl:text-xl/relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t("description")}
            </motion.p>
          </div>
        </motion.div>
        <motion.div 
          className="grid max-w-sm gap-6 sm:max-w-4xl sm:grid-cols-2 md:gap-8 lg:max-w-none lg:grid-cols-3 mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {" "}
          {/* Added mx-auto for centering on all screens */}
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full transition-transform transform hover:-translate-y-2 hover:shadow-2xl border-border/60 flex flex-col bg-card p-4 sm:p-6">
                <CardHeader className="flex flex-row items-center gap-3 md:gap-4 pb-3 md:pb-4 p-0">
                  <motion.div 
                    className="bg-primary/10 p-2 md:p-3 rounded-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                  </motion.div>
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
        </motion.div>
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
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-2 md:mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Cog className="inline-block mr-1.5 h-4 w-4" />
            {t("howItWorks")}
          </motion.div>
          <motion.h2 
            className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t("title")}
          </motion.h2>
          <motion.p 
            className="max-w-[900px] text-muted-foreground text-base md:text-lg lg:text-xl xl:text-xl/relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t("description")}
          </motion.p>
        </motion.div>
        <div className="grid gap-10 md:gap-16 lg:gap-20">
          {functionalities.map((func, index) => (
            <motion.div
              key={func.titleKey}
              className={`grid gap-6 md:grid-cols-2 md:gap-10 lg:gap-16 items-center ${
                index % 2 !== 0
                  ? "md:[&>*:last-child]:col-start-1 md:[&>*:first-child]:col-start-2"
                  : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                className={`flex flex-col justify-center space-y-3 md:space-y-4 text-left ${
                  index % 2 !== 0 ? "md:order-1" : "md:order-none"
                }`}
                initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
              >
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                >
                  <motion.div 
                    className="bg-primary/10 p-2 rounded-md"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <func.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold sm:text-2xl md:text-3xl">
                    {t(func.titleKey)}
                  </h3>
                </motion.div>
                <motion.p 
                  className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-[600px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                >
                  {t(func.descriptionKey)}
                </motion.p>{" "}
                {/* Removed mx-0 */}
                <motion.ul 
                  className="grid gap-1.5 md:gap-2 text-sm text-muted-foreground list-none pt-1 md:pt-2 max-w-[600px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.9 }}
                >
                  {" "}
                  {/* Removed mx-0 */}
                  {func.benefitKeys.map((benefitKey, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-2 text-left"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 1.1 + i * 0.1 }}
                    >
                      <Check className="text-primary w-4 h-4 flex-shrink-0 mt-1" />{" "}
                      <span>{t(benefitKey)}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    variant="link"
                    className="self-start px-0 text-primary hover:text-primary/80 mt-2"
                  >
                    {t("learnMore")} <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>
              {/* Render the card component dynamically */}
              <motion.div
                className={`w-full flex justify-center ${
                  index % 2 !== 0 ? "md:order-none" : "md:order-last"
                }`}
                initial={{ opacity: 0, x: index % 2 !== 0 ? -50 : 50, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                {" "}
                {/* Removed mx-auto */}
                {func.cardComponent ? (
                  func.cardComponent
                ) : (
                  <Image
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
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface PricingSectionProps {
  priceLocale: string;
  currency: "BRL" | "EUR" | "USD";
}

function PricingSection({ priceLocale, currency }: PricingSectionProps) {
  const t = useTranslations("Pricing"); // Use 'Pricing' namespace

  const formatPrice = (value: number) =>
    new Intl.NumberFormat(priceLocale, { style: "currency", currency }).format(
      value
    );

  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-20 lg:py-28 bg-background"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-2 md:mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DollarSign className="inline-block mr-1.5 h-4 w-4" />
            {t("pricing")}
          </motion.div>
          <motion.h2 
            className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t("title")}
          </motion.h2>
          <motion.p 
            className="max-w-[900px] text-muted-foreground text-base md:text-lg lg:text-xl xl:text-xl/relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t("description")}
          </motion.p>
        </motion.div>
        <motion.div 
          className="mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
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
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
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
                          <Check className="text-muted-foreground w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                          {t("freeBenefit3")}
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="text-muted-foreground w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                          {t("freeBenefit4")}
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="text-muted-foreground w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
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
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          variant="outline"
                          className="w-full md:w-auto mt-auto hover:bg-secondary hover:text-secondary-foreground text-sm md:text-base"
                          onClick={() =>
                            window.open("https://app.projectude.com/", "_blank")
                          }
                        >
                          <UserRoundPlus className="mr-2 h-4 w-4" />
                          {t("getStartedNow")}
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="premium-mensal">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="shadow-lg border-primary/50 dark:border-primary/40 bg-card relative overflow-hidden">
                  <CardContent className="p-4 sm:p-6 flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="flex-1 space-y-3 md:space-y-4">
                      <div className="flex items-center gap-2">
                        <Zap className="h-5 w-5 md:h-6 md:w-6 text-primary" />
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
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button className="w-full md:w-auto mt-auto bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base" onClick={() => window.open("https://app.projectude.com", "_blank")}>
                          <Zap className="mr-2 h-4 w-4" />
                          {t("subscribePremium")}{" "}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="premium-anual">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="shadow-lg border-primary/50 dark:border-primary/40 bg-card relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-bl-lg">
                    {t("popular")}
                  </div>
                  <CardContent className="p-4 sm:p-6 flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="flex-1 space-y-3 md:space-y-4">
                      <div className="flex items-center gap-2">
                        <Zap className="h-5 w-5 md:h-6 md:w-6 text-primary" />
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
                          price: formatPrice(prices.annually / 12),
                        })}
                      </p>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button className="w-full md:w-auto mt-auto bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base" onClick={() => window.open("https://app.projectude.com", "_blank")}>
                          <Zap className="mr-2 h-4 w-4" />
                          {t("subscribePremium")}{" "}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="premium-2anos">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="shadow-lg border-primary/50 dark:border-primary/40 bg-card relative overflow-hidden">
                  <CardContent className="p-4 sm:p-6 flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="flex-1 space-y-3 md:space-y-4">
                      <div className="flex items-center gap-2">
                        <Zap className="h-5 w-5 md:h-6 md:w-6 text-primary" />
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
                          price: formatPrice(prices.biannually / 24),
                        })}
                      </p>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button className="w-full md:w-auto mt-auto bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base" onClick={() => window.open("https://app.projectude.com", "_blank")}>
                          <Zap className="mr-2 h-4 w-4" />
                          {t("subscribePremium")}{" "}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
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
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-2 md:mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Users className="inline-block mr-1.5 h-4 w-4" />
            {t("title")}
          </motion.div>
          <motion.h2 
            className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t("subtitle")}
          </motion.h2>
          <motion.p 
            className="max-w-[900px] text-muted-foreground text-base md:text-lg lg:text-xl xl:text-xl/relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t("description")}
          </motion.p>
        </motion.div>
        <div className="grid max-w-sm gap-6 sm:max-w-4xl sm:grid-cols-1 md:grid-cols-2 lg:max-w-none lg:grid-cols-3 mx-auto md:gap-8">
          {" "}
          {/* Added mx-auto for centering, adjusted gap */}
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full flex flex-col transition-shadow duration-300 hover:shadow-xl bg-card border-border/60 dark:border-border/40 p-4 sm:p-6">
                <CardContent className="pt-0 flex-1 flex flex-col justify-between p-0">
                  <blockquote className="text-sm md:text-base leading-relaxed italic text-foreground/90 mb-4 md:mb-6 border-l-4 border-primary pl-4 text-left">
                    "{t(testimonial.quoteKey)}"
                  </blockquote>
                  <div className="flex items-center gap-3 md:gap-4 mt-auto pt-4 border-t border-border/50">
                    <Image
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
            </motion.div>
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
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-2 md:mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CircleHelp className="inline-block mr-1.5 h-4 w-4" />
            {t("title")}
          </motion.div>
          <motion.h2 
            className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t("subtitle")}
          </motion.h2>
          <motion.p 
            className="max-w-[900px] text-muted-foreground text-base md:text-lg lg:text-xl xl:text-xl/relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t("description")}
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-3 md:space-y-4"
          >
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AccordionItem
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
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
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
        <motion.div 
          className="mx-auto grid items-center justify-center gap-4 md:gap-6 text-left md:text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="space-y-3 md:space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t("title")}
            </motion.h2>
            <motion.p 
              className="mx-auto max-w-[600px] text-muted-foreground text-base md:text-lg lg:text-xl xl:text-xl/relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t("description")}
            </motion.p>
          </motion.div>
          <motion.div 
            className="mx-auto w-full max-w-sm space-y-2 md:mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {" "}
            {/* Centered button div */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base md:text-lg py-2.5 md:py-3"
                onClick={() => window.open("https://app.projectude.com", "_blank")}
              >
                <UserRoundPlus className="mr-2 h-5 w-5" />
                {t("buttonText")} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.p 
              className="text-xs text-muted-foreground text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {t("subtext")}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer component moved to src/components/layout/footer.tsx


