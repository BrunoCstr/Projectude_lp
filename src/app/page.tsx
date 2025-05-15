"use client";

import type { Metadata } from "next"; // Import type for Metadata
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
import { motion } from "framer-motion";

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

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 space-y-24">
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
        >
          <FunctionalitiesSection />
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <PricingSection />
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

// Variáveis do para usar nas animações

// Efeito de escrever aos poucos
const title = "Organize seus\nprojetos do jeito\ncerto.";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: `0.25em` },
  visible: {
    opacity: 1,
    y: `0em`,
    transition: {
      duration: 0.15,
    },
  },
};

function HeroSection() {
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
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
                >
                  {title.split("").map((char, i) =>
                    char === "\n" ? (
                      <br key={i} />
                    ) : (
                      <motion.span key={i} variants={letter}>
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    )
                  )}
                </motion.div>
              </h1>
              <p className="max-w-[600px] text-muted-foreground text-base md:text-xl mx-0">
                {" "}
                {/* Adjusted text alignment for mobile */}
                Gerencie, colabore e potencialize seu time com uma plataforma
                poderosa e intuitiva.
              </p>
              <p className="max-w-[600px] text-muted-foreground text-sm md:text-lg pt-2 mx-0">
                {" "}
                {/* Adjusted text alignment for mobile */}
                Transforme suas ideias em realidade! O Projectude oferece uma
                plataforma moderna para gestão completa de projetos, colaboração
                em equipe e controle detalhado de informações.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row justify-start">
              {" "}
              {/* Adjusted button order */}
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto cursor-pointer transition-all duration-700"
              >
                <Briefcase className="mr-2 h-5 w-5" />
                Assinar Premium
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-secondary hover:text-secondary-foreground w-full sm:w-auto border-border cursor-pointer transition-all duration-700"
              >
                <UserRoundPlus className="mr-2 h-5 w-5" />
                Comece Grátis
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
  {
    icon: Package,
    title: "Gerenciamento Completo",
    description: "Cuidado com cada detalhe dos seus projetos.",
  },
  {
    icon: UserPlus,
    title: "Colaboração em Equipe",
    description: "Convide e gerencie colaboradores facilmente.",
  },
  {
    icon: BarChart,
    title: "Relatórios e Gráficos",
    description: "Acompanhe seu progresso com visualizações inteligentes.",
  },
  {
    icon: Palette,
    title: "Modo Claro/Escuro",
    description: "Interface elegante em qualquer estilo.",
  },
  {
    icon: MonitorSmartphone,
    title: "Design 100% Responsivo",
    description: "Acesse de qualquer dispositivo.",
  },
  {
    icon: Zap,
    title: "Desempenho Rápido",
    description: "Plataforma otimizada para agilidade.",
  },
];

function FeaturesSection() {
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
              Recursos Principais
            </div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              Por que escolher o Projectude?
            </h2>
            <p className="max-w-[900px] text-muted-foreground text-base md:text-lg lg:text-xl xl:text-xl/relaxed">
              Uma plataforma completa para levar seus projetos ao próximo nível,
              com ferramentas pensadas para você.
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
                key={feature.title}
                className="h-full transition-transform transform hover:-translate-y-2 hover:shadow-2xl border-border/60 flex flex-col bg-card p-4 sm:p-6"
              >
                <CardHeader className="flex flex-row items-center gap-3 md:gap-4 pb-3 md:pb-4 p-0">
                  <div className="bg-primary/10 p-2 md:p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <CardTitle className="text-lg md:text-xl font-semibold">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-0 p-0">
                  <p className="text-muted-foreground text-sm md:text-base">
                    {feature.description}
                  </p>
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
    title: "Dashboard Inteligente",
    description:
      "Monitore o progresso dos seus projetos com uma visão completa e dinâmica. Receba notificações, acompanhe gráficos de desempenho e visualize informações em tempo real.",
    benefits: [
      "Cards informativos atualizados automaticamente",
      "Gráficos de criação e evolução de projetos",
      "Sistema de notificações integrado para eventos importantes",
    ],
    cardComponent: <DashboardPreviewCard />,
  },
  {
    icon: FileSignature,
    title: "Gestão de Projetos",
    description:
      "Organize todos os detalhes dos seus projetos com campos personalizados, status visuais, links rápidos, arquivos e muito mais. Controle total, do início ao fim.",
    benefits: [
      "Cadastro completo com logomarca, capa, descrição e status",
      "Endereços para projetos físicos integrados",
      "Gerenciamento de múltiplos links e credenciais de acesso",
    ],
    cardComponent: <ProjectCardPreview />,
  },
  {
    icon: MessageCircle,
    title: "Área de Comentários",
    description:
      "Facilite a comunicação com sua equipe. Atribua tarefas, organize os comentários por status e acompanhe respostas em tempo real, tudo de forma simples e visual.",
    benefits: [
      "Comentários vinculados a projetos e colaboradores",
      "Organização por status: pendente, andamento, pausado ou concluído",
      "Anexos e respostas diretas nos comentários",
    ],
    cardComponent: <CommentsPreviewCard />,
  },
  {
    icon: Tags,
    title: "Tags Inteligentes",
    description:
      "Categorize, organize e filtre seus projetos de forma prática. Crie tags personalizadas para otimizar sua navegação e agilizar a busca por informações importantes.",
    benefits: [
      "Criação e personalização de tags por cor e descrição",
      "Busca rápida de projetos e tarefas usando tags",
      "Organização visual elegante",
    ],
    cardComponent: <TagsPreviewCard />,
  },
  {
    icon: MessageCircleQuestion,
    title: "Central de Ajuda",
    description:
      "Dúvidas? Conte com uma central moderna e acessível. FAQs, tutoriais práticos e suporte completo para tirar suas dúvidas e acelerar seu trabalho.",
    benefits: [
      "FAQs detalhadas com passo a passo",
      "Tutoriais rápidos para todas as funcionalidades",
      "Central de busca eficiente com tópicos populares",
    ],
    cardComponent: <HelpCenterPreviewCard />,
  },
];

function FunctionalitiesSection() {
  return (
    <section
      id="functionalities"
      className="w-full py-12 md:py-20 lg:py-28 bg-secondary/30 dark:bg-secondary/10"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-2 md:mb-3">
            <Cog className="inline-block mr-1.5 h-4 w-4" />
            Como Funciona
          </div>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            Funcionalidades Poderosas
          </h2>
          <p className="max-w-[900px] text-muted-foreground text-base md:text-lg lg:text-xl xl:text-xl/relaxed">
            Explore as ferramentas que tornam o Projectude a escolha ideal para
            você e sua equipe.
          </p>
        </div>
        <div className="grid gap-10 md:gap-16 lg:gap-20">
          {functionalities.map((func, index) => (
            <div
              key={func.title}
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
                    {func.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-[600px]">
                  {func.description}
                </p>{" "}
                {/* Removed mx-0 */}
                <ul className="grid gap-1.5 md:gap-2 text-sm text-muted-foreground list-none pt-1 md:pt-2 max-w-[600px]">
                  {" "}
                  {/* Removed mx-0 */}
                  {func.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-left">
                      <Check className="text-primary w-4 h-4 flex-shrink-0 mt-1" />{" "}
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="link"
                  className="self-start px-0 text-primary hover:text-primary/80 mt-2 cursor-pointer transition-all duration-700"
                >
                  Saber mais <ArrowRight className="ml-1 h-4 w-4" />
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
                    src={`https://picsum.photos/550/310?grayscale&random=${
                      index + 1
                    }`}
                    width={550}
                    height={310}
                    alt={func.title}
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

function PricingSection() {
  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-20 lg:py-28 bg-background"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-2 md:mb-3">
            <DollarSign className="inline-block mr-1.5 h-4 w-4" />
            Preços
          </div>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            Planos e Preços Flexíveis
          </h2>
          <p className="max-w-[900px] text-muted-foreground text-base md:text-lg lg:text-xl xl:text-xl/relaxed">
            Escolha o plano perfeito para suas necessidades. Comece grátis ou
            desbloqueie todo o potencial.
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
                Free
              </TabsTrigger>
              <TabsTrigger
                value="premium-mensal"
                className="py-2 sm:py-2.5 text-xs sm:text-sm text-center"
              >
                Premium Mensal
              </TabsTrigger>
              <TabsTrigger
                value="premium-anual"
                className="py-2 sm:py-2.5 text-xs sm:text-sm text-center relative"
              >
                Premium Anual
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-1 sm:-right-2 text-[10px] sm:text-xs px-1 sm:px-1.5 py-0.5"
                >
                  15% OFF
                </Badge>
              </TabsTrigger>
              <TabsTrigger
                value="premium-2anos"
                className="py-2 sm:py-2.5 text-xs sm:text-sm text-center relative"
              >
                Premium 2 Anos
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-1 sm:-right-2 text-[10px] sm:text-xs px-1 sm:px-1.5 py-0.5"
                >
                  25% OFF
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
                        Plano Free
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Funcionalidades básicas para começar.
                    </p>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      Acesso a todas as funcionalidades, exceto criar e
                      gerenciar projetos.
                    </p>
                    <ul className="space-y-2 md:space-y-2.5 text-xs md:text-sm text-muted-foreground pt-2 md:pt-3">
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        Acesso à plataforma
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        Visualização de projetos (convidado)
                      </li>
                      <li className="flex items-start gap-2">
                        <Lock className="text-muted-foreground w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        Criação e gerenciamento de projetos
                      </li>
                      <li className="flex items-start gap-2">
                        <Lock className="text-muted-foreground w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        Relatórios básicos
                      </li>
                      <li className="flex items-start gap-2">
                        <Lock className="text-muted-foreground w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        Suporte comunitário
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-center md:items-end justify-between space-y-3 md:space-y-4 w-full md:w-auto md:text-right pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-border/50 md:pl-6 lg:pl-8">
                    <p className="text-3xl md:text-4xl font-bold">Grátis</p>
                    <p className="text-xs text-muted-foreground h-6 md:h-8 flex items-center">
                      Perfeito para começar
                    </p>
                    <Button
                      variant="outline"
                      className="w-full md:w-auto mt-auto hover:bg-secondary hover:text-secondary-foreground text-sm md:text-base cursor-pointer transition-all duration-700"
                    >
                      <UserRoundPlus className="mr-2 h-4 w-4" />
                      Começar Agora
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
                        Premium Mensal
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Desbloqueie todo o potencial.
                    </p>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      Acesso completo a todas as funcionalidades, incluindo
                      criação e gerenciamento ilimitado de projetos.
                    </p>
                    <ul className="space-y-2 md:space-y-2.5 text-xs md:text-sm text-muted-foreground pt-2 md:pt-3">
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        Todas as funcionalidades do Free
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        Criação e gerenciamento ilimitados
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        Relatórios avançados
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        Suporte prioritário via e-mail
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-center md:items-end justify-between space-y-3 md:space-y-4 w-full md:w-auto md:text-right pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-primary/30 md:pl-6 lg:pl-8">
                    <p className="text-3xl md:text-4xl font-bold">
                      R$ 3,90
                      <span className="text-xs md:text-sm font-normal text-muted-foreground">
                        /mês
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground h-6 md:h-8 flex items-center">
                      Cancele quando quiser
                    </p>
                    <Button className="w-full md:w-auto mt-auto bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base cursor-pointer transition-all duration-700">
                      <Zap className="mr-2 h-4 w-4" />
                      Assinar Premium <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="premium-anual">
              <Card className="shadow-lg border-primary/50 dark:border-primary/40 bg-card relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-bl-lg">
                  Popular
                </div>
                <CardContent className="p-4 sm:p-6 flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="flex-1 space-y-3 md:space-y-4">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      <h3 className="text-xl md:text-2xl font-semibold">
                        Premium Anual
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Desbloqueie todo o potencial com desconto.
                    </p>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      Acesso completo a todas as funcionalidades, incluindo
                      criação e gerenciamento ilimitado de projetos.
                    </p>
                    <ul className="space-y-2 md:space-y-2.5 text-xs md:text-sm text-muted-foreground pt-2 md:pt-3">
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        Todas as funcionalidades do Free
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        Criação e gerenciamento ilimitados
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        Relatórios avançados
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        Suporte prioritário via e-mail
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-center md:items-end justify-between space-y-3 md:space-y-4 w-full md:w-auto md:text-right pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-primary/30 md:pl-6 lg:pl-8">
                    <p className="text-3xl md:text-4xl font-bold">
                      R$ 39,90
                      <span className="text-xs md:text-sm font-normal text-muted-foreground">
                        /ano
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground h-6 md:h-8 flex items-center">
                      Equivale a ~R$ 3,32/mês
                    </p>
                    <Button className="w-full md:w-auto mt-auto bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base cursor-pointer transition-all duration-700">
                      <Zap className="mr-2 h-4 w-4" />
                      Assinar Premium <ArrowRight className="ml-2 h-4 w-4" />
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
                        Premium 2 Anos
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Maximize sua economia.
                    </p>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      Acesso completo a todas as funcionalidades, incluindo
                      criação e gerenciamento ilimitado de projetos.
                    </p>
                    <ul className="space-y-2 md:space-y-2.5 text-xs md:text-sm text-muted-foreground pt-2 md:pt-3">
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        Todas as funcionalidades do Free
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        Criação e gerenciamento ilimitados
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        Relatórios avançados
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-primary w-4 h-4 flex-shrink-0 mt-0.5" />{" "}
                        Suporte prioritário via e-mail
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-center md:items-end justify-between space-y-3 md:space-y-4 w-full md:w-auto md:text-right pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-primary/30 md:pl-6 lg:pl-8">
                    <p className="text-3xl md:text-4xl font-bold">
                      R$ 69,90
                      <span className="text-xs md:text-sm font-normal text-muted-foreground">
                        /2 anos
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground h-6 md:h-8 flex items-center">
                      Equivale a ~R$ 2,91/mês
                    </p>
                    <Button className="w-full md:w-auto mt-auto bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base cursor-pointer transition-all duration-700">
                      <Zap className="mr-2 h-4 w-4" />
                      Assinar Premium <ArrowRight className="ml-2 h-4 w-4" />
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
    role: "Desenvolvedor",
    quote:
      "Com o Projectude, meus projetos ganharam uma nova vida! A organização ficou muito mais fácil e intuitiva.",
    img: "https://picsum.photos/100/100?grayscale&random=t1",
  },
  {
    name: "Ana C.",
    role: "Gerente de Projetos",
    quote:
      "Muito fácil de usar, perfeito para equipes pequenas e médias. A colaboração flui naturalmente e os relatórios são ótimos.",
    img: "https://picsum.photos/100/100?grayscale&random=t2",
  },
  {
    name: "Carlos S.",
    role: "Designer Freelancer",
    quote:
      "Os relatórios visuais me ajudaram a entender onde podemos melhorar. Ferramenta indispensável para freelancers!",
    img: "https://picsum.photos/100/100?grayscale&random=t3",
  },
];

function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="w-full py-12 md:py-20 lg:py-28 bg-secondary/30 dark:bg-secondary/10"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-2 md:mb-3">
            <Users className="inline-block mr-1.5 h-4 w-4" />
            Depoimentos
          </div>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            O que nossos usuários dizem
          </h2>
          <p className="max-w-[900px] text-muted-foreground text-base md:text-lg lg:text-xl xl:text-xl/relaxed">
            Veja como o Projectude está ajudando pessoas e equipes a alcançarem
            seus objetivos com mais eficiência.
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
                  “{testimonial.quote}”
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
                      {testimonial.role}
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
  {
    question: "Qual a diferença entre as licenças Free e Premium?",
    answer:
      "O plano Free oferece funcionalidades básicas para iniciar seus projetos, permitindo visualizar projetos como convidado, mas sem a capacidade de criar ou gerenciar os seus próprios. O plano Premium desbloqueia acesso ilimitado a todas as funcionalidades, incluindo criação e gerenciamento de projetos, colaboração avançada e suporte prioritário, ideal para equipes e projetos maiores.",
  },
  {
    question: "Posso usar o Projectude para projetos SaaS?",
    answer:
      "Sim! O Projectude é flexível e pode ser adaptado para gerenciar diversos tipos de projetos, incluindo desenvolvimento de software como serviço (SaaS), projetos de marketing, planejamento de eventos e muito mais.",
  },
  {
    question: "É possível personalizar a aparência da plataforma?",
    answer:
      "Atualmente, a personalização da interface é limitada às opções de tema claro e escuro, garantindo uma experiência visual consistente. Estamos sempre trabalhando para adicionar mais opções de customização no futuro.",
  },
  {
    question: "Qual o escopo do suporte oferecido?",
    answer:
      " O suporte comunitário está disponível para todos os usuários através da Central de Ajuda para todos os planos. Os assinantes Premium têm acesso a suporte prioritário via e-mail para resolução rápida de dúvidas e problemas técnicos relacionados à plataforma.",
  },
  {
    question: "Posso ser reembolsado se não ficar satisfeito?",
    answer:
      "Oferecemos uma política de reembolso completa para planos pagos nos primeiros 7 dias após a assinatura inicial. Se o Projectude não atender às suas expectativas, entre em contato com nosso suporte para solicitar o reembolso.",
  },
];

function FAQSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        {" "}
        {/* Adjusted max-width */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-2 md:mb-3">
            <CircleHelp className="inline-block mr-1.5 h-4 w-4" />
            FAQs
          </div>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            Perguntas Frequentes
          </h2>
          <p className="max-w-[900px] text-muted-foreground text-base md:text-lg lg:text-xl xl:text-xl/relaxed">
            Tem dúvidas? Aqui estão algumas das perguntas mais comuns que
            recebemos.
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
                <span className="flex-1 pr-2">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pt-0 pb-3 px-4 md:pb-4 md:px-6 text-muted-foreground text-sm md:text-base text-left">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CtaSection() {
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
              Pronto para elevar seu gerenciamento de projetos?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground text-base md:text-lg lg:text-xl xl:text-xl/relaxed">
              Crie sua conta em poucos minutos e comece hoje mesmo! Junte-se a
              milhares de usuários satisfeitos e transforme sua forma de
              trabalhar.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2 md:mx-auto">
            {" "}
            {/* Centered button div */}
            <Button
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base md:text-lg py-2.5 md:py-3 cursor-pointer transition-all duration-700"
            >
              <UserRoundPlus className="mr-2 h-5 w-5" />
              Comece Agora Gratuitamente <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Comece grátis. Não é necessário cartão de crédito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer component moved to src/components/layout/footer.tsx
