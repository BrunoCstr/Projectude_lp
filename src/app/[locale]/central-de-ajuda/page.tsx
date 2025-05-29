// src/app/central-de-ajuda/page.tsx
'use client'; // Mark as Client Component for state and event handling

import Link from 'next/link';
import * as React from 'react'; // Import React and necessary hooks
import { useState, useEffect } from 'react';
import {
    ArrowLeft,
    Search,
    FileText,
    Lock,
    Cookie,
    HelpCircle,
    PlusCircle,
    Share2,
    MessageSquare,
    Users,
    DollarSign,
    Bell,
    Eye,
    User,
    Filter,
    Mail,
    Globe,
    UserPlus, // Import UserPlus icon
    UserCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'; // Added CardFooter
import { Header } from '@/components/layout/header'; // Assuming Header is extracted
import { Footer } from '@/components/layout/footer'; // Assuming Footer is extracted
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'; // Import Dialog components

// export const metadata: Metadata = { // Metadata export doesn't work in Client Components
//     title: 'Central de Ajuda - Projectude',
//     description: 'Encontre respostas, tutoriais e informações sobre a plataforma Projectude.',
// };

const initialFaqData = [
  {
    question: "Como criar um novo projeto?",
    answer: "Acesse \"Meus Projetos\" > clique em \"Cadastrar Novo Projeto\" > preencha o formulário com nome, capa, status, colaboradores e anotações.",
    icon: PlusCircle,
  },
  {
    question: "Como convidar um colaborador?",
    answer: "Vá até a aba \"Colaboradores\", clique em “Convidar Colaborador” e envie o convite por e-mail.",
    icon: UserPlus,
  },
  {
    question: "É seguro inserir credenciais no projeto?",
    answer: "Sim. Os dados são criptografados e você pode escolher se os colaboradores terão acesso ou não.",
    icon: Lock,
  },
  {
    question: "Como alternar entre o modo claro e escuro?",
    answer: "Clique no ícone de sol ou lua no topo da interface para alternar entre os modos.",
    icon: Eye, // Using Eye as a placeholder for theme toggle
  },
  {
    question: "Como funciona o pagamento do plano?",
    answer: "Você pode adicionar e gerenciar cartões na aba Configurações > Planos. Há histórico de pagamentos e opção de definir cartão principal.",
    icon: DollarSign,
  },
  {
    question: "Posso anexar arquivos a um projeto?",
    answer: "Sim. No formulário de cadastro ou edição de projeto, há a opção de adicionar até 3 anexos.",
    icon: FileText, // Using FileText for attachments
  },
];

const tutorialsData = [
    {
        title: "Como adicionar comentários com status?",
        steps: [
            "Vá até a aba Comentários.",
            "Clique em “Adicionar Comentário”.",
            "Escolha o projeto e o colaborador.",
            "Escreva o comentário e defina o status.",
            "Você pode responder, editar ou arquivar posteriormente.",
        ],
        icon: MessageSquare,
    },
    {
        title: "Como usar os filtros avançados?",
        steps: [
            "Vá em qualquer lista de projetos ou comentários.",
            "Use os filtros por tags, status e data no topo.",
            "Combine múltiplos filtros e refine sua busca com a barra de pesquisa.",
            "Use o botão “Limpar Filtros” para resetar.",
        ],
        icon: Filter,
    }
];

const hashtagPopups = {
  '#CriarProjeto': {
    title: 'Como Criar um Novo Projeto',
    content: [
      'Acesse "Meus Projetos" no menu lateral.',
      'Clique no botão "Cadastrar Novo Projeto".',
      'Preencha o formulário com nome, capa (opcional), status inicial.',
      'Adicione colaboradores (opcional).',
      'Salve o projeto.',
    ],
    icon: PlusCircle,
  },
  '#CompartilharProjeto': {
    title: 'Como Compartilhar um Projeto',
    content: [
        'Abra o projeto que deseja compartilhar.',
        'Vá até a aba "Colaboradores".',
        'Clique em "Convidar Colaborador".',
        'Insira o e-mail do colaborador e defina as permissões.',
        'Clique em "Enviar Convite".',
    ],
    icon: Share2,
  },
  '#ComentáriosETarefas': {
    title: 'Comentários e Tarefas',
    content: [
        'Na aba "Comentários", adicione novas tarefas ou atualizações.',
        'Defina o status (pendente, andamento, etc.) para cada comentário.',
        'Responda a comentários existentes para manter a comunicação fluindo.',
        'Anexe arquivos relevantes diretamente nos comentários.',
    ],
    icon: MessageSquare,
  },
  '#Colaboradores': {
    title: 'Gerenciamento de Colaboradores',
    content: [
        'Convide novos membros para seus projetos via e-mail.',
        'Defina permissões específicas para cada colaborador (visualizar, editar, etc.).',
        'Remova colaboradores quando necessário.',
        'Visualize a lista de colaboradores em cada projeto.',
    ],
    icon: Users,
  },
  '#PlanosEPagamentos': {
    title: 'Planos e Pagamentos',
    content: [
        'Acesse "Configurações > Planos" para gerenciar sua assinatura.',
        'Adicione ou remova cartões de crédito.',
        'Defina um cartão principal para cobranças recorrentes.',
        'Visualize seu histórico de pagamentos.',
        'Faça upgrade ou downgrade do seu plano a qualquer momento.',
    ],
    icon: DollarSign,
  },
  '#Notificações': {
    title: 'Sistema de Notificações',
    content: [
        'Receba alertas sobre novos comentários, atualizações de projetos e convites.',
        'Acesse o ícone de sino (🔔) no cabeçalho para ver suas notificações.',
        'Gerencie suas preferências de notificação em "Configurações > Notificações" (em breve).',
    ],
    icon: Bell,
  },
  '#AjudaVisual': {
    title: 'Ajuda Visual (Tutoriais)',
    content: [
        'Explore os tutoriais passo a passo nesta Central de Ajuda.',
        'Pop-ups explicativos para funcionalidades chave.',
        'Conteúdo visual para facilitar o aprendizado.',
    ],
    icon: Eye, // Placeholder, consider a better icon like BookOpen or Video
  },
  '#PerfilEConta': {
    title: 'Perfil e Conta',
    content: [
        'Acesse "Configurações > Meu Perfil" para atualizar suas informações.',
        'Altere seu nome, foto de perfil e informações biográficas.',
        'Gerencie sua senha e configurações de segurança.',
        'Exclua sua conta, se necessário (ação irreversível).',
    ],
    icon: UserCircle,
  },
  '#FiltrosAvançados': {
    title: 'Filtros Avançados',
    content: [
        'Utilize a barra de pesquisa e os filtros (tags, status, data) nas listagens.',
        'Combine múltiplos filtros para refinar resultados.',
        'Salve filtros frequentemente usados (em breve).',
        'Use o botão "Limpar Filtros" para resetar a visualização.',
    ],
    icon: Filter,
  },
};


export default function CentralDeAjudaPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredFaqData, setFilteredFaqData] = useState(initialFaqData);

    // Effect to filter FAQ data based on search query
    useEffect(() => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        if (lowerCaseQuery === '') {
            setFilteredFaqData(initialFaqData);
        } else {
            const filtered = initialFaqData.filter(item =>
                item.question.toLowerCase().includes(lowerCaseQuery) ||
                item.answer.toLowerCase().includes(lowerCaseQuery)
            );
            setFilteredFaqData(filtered);
        }
    }, [searchQuery]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
             <Header /> {/* Include Header */}
             <main className="flex-1 py-12 md:py-20 lg:py-24">
                <div className="container mx-auto max-w-4xl px-4 md:px-6">
                    <div className="mb-8">
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                                <ArrowLeft className="h-4 w-4" />
                                Voltar para Home
                            </Link>
                        </Button>
                    </div>

                    <div className="text-center mb-12 md:mb-16">

                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
                            Central de Ajuda – Projectude
                        </h1>
                        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                            Tenha acesso rápido às informações, tutoriais e políticas da plataforma. Use a busca para encontrar respostas, clique nas hashtags para navegar por tópicos ou fale com nosso suporte.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="mb-12 md:mb-16 max-w-xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Procure por palavras-chave... (Ex: criar projeto, colaborador)"
                                className="w-full pl-10 pr-4 py-2 text-base md:text-sm h-11 rounded-lg"
                                value={searchQuery} // Bind value to state
                                onChange={handleSearchChange} // Add onChange handler
                            />
                        </div>
                         <p className="text-xs text-muted-foreground mt-2 text-center">
                            Exemplo: criar projeto, colaborador, modo escuro, plano premium...
                         </p>
                    </div>

                    {/* Hashtags */}
                    <div className="mb-12 md:mb-16 text-center">
                        <h2 className="text-xl font-semibold mb-4">🏷️ Hashtags Populares</h2>
                         <p className="text-sm text-muted-foreground mb-6">Clique para abrir pop-ups com explicações e passo a passo de cada item:</p>
                         <div className="flex flex-wrap justify-center gap-2">
                            {Object.entries(hashtagPopups).map(([tag, popupData]) => (
                                <Dialog key={tag}>
                                    <DialogTrigger asChild>
                                    <Badge variant="secondary" className="cursor-pointer hover:bg-primary/20 text-xs sm:text-sm px-3 py-1">{tag}</Badge>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle className="flex items-center gap-2">
                                        {popupData.icon && <popupData.icon className="h-5 w-5 text-primary" />}
                                        {popupData.title}
                                        </DialogTitle>
                                    </DialogHeader>
                                    <div className="py-4 text-sm text-muted-foreground space-y-2">
                                        {Array.isArray(popupData.content) ? (
                                        <ul className="list-decimal list-inside space-y-1">
                                            {popupData.content.map((step, index) => (
                                            <li key={index}>{step}</li>
                                            ))}
                                        </ul>
                                        ) : (
                                        <p>{popupData.content}</p> // Handle single string content if needed
                                        )}
                                    </div>
                                    {/* Close button is included by default in DialogContent */}
                                    </DialogContent>
                                </Dialog>
                            ))}
                        </div>
                    </div>

                    {/* FAQ */}
                     <div className="mb-12 md:mb-16">
                        <h2 className="text-xl font-semibold mb-6 text-center md:text-left">❓ Perguntas Frequentes (FAQ)</h2>
                        {filteredFaqData.length > 0 ? (
                            <Accordion type="single" collapsible className="w-full space-y-3">
                                {filteredFaqData.map((item, index) => (
                                    <AccordionItem key={index} value={`item-${index + 1}`} className="border border-border/60 dark:border-border/40 rounded-lg bg-card shadow-sm">
                                        <AccordionTrigger className="flex justify-between items-center w-full py-3 px-4 md:py-4 md:px-6 text-left font-medium hover:no-underline text-sm md:text-base group">
                                            <span className="flex items-center gap-2 flex-1 pr-2">
                                                {item.icon && <item.icon className="h-4 w-4 text-primary flex-shrink-0" />}
                                                {item.question}
                                            </span>
                                            {/* Chevron is now part of AccordionTrigger styling */}
                                        </AccordionTrigger>
                                        <AccordionContent className="pt-0 pb-3 px-4 md:pb-4 md:px-6 text-muted-foreground text-sm md:text-base text-left">
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                         ) : (
                            <p className="text-center text-muted-foreground">Nenhuma pergunta encontrada para "{searchQuery}".</p>
                         )}
                    </div>

                     {/* Visual Tutorials */}
                     <div className="mb-12 md:mb-16">
                         <h2 className="text-xl font-semibold mb-6 text-center md:text-left">📘 Tutoriais Visuais (Passo a Passo)</h2>
                         <p className="text-sm text-muted-foreground mb-6 text-center md:text-left">Estes tutoriais serão exibidos em pop-ups com ícones ilustrativos e instruções claras.</p>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {tutorialsData.map((tutorial, index) => (
                                <Card key={index} className="bg-secondary/30 dark:bg-secondary/10">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-base font-medium">
                                            {tutorial.icon && <tutorial.icon className="h-4 w-4 text-primary" />}
                                            {tutorial.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                                             {tutorial.steps.map((step, stepIndex) => (
                                                 <li key={stepIndex}>{step}</li>
                                             ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                             ))}
                         </div>
                    </div>

                    {/* Documents - Moved Here */}
                     <div className="mb-12 md:mb-16">
                        <h2 className="text-xl font-semibold mb-6 text-center md:text-left">📑 Documentos Importantes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                            <Card className="hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-base font-medium"><FileText className="h-4 w-4 text-primary" /> Termos de Serviço</CardTitle>
                                </CardHeader>
                                <CardContent className="text-xs text-muted-foreground">
                                    Regras de uso da plataforma, direitos e deveres, limites, planos e suporte.
                                </CardContent>
                                <CardFooter>
                                    <Button variant="link" size="sm" asChild className="p-0 h-auto text-primary">
                                        <Link href="/termos-de-servico">Ler documento</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                             <Card className="hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-base font-medium"><Lock className="h-4 w-4 text-primary" /> Política de Privacidade</CardTitle>
                                </CardHeader>
                                <CardContent className="text-xs text-muted-foreground">
                                    Saiba como seus dados são coletados, utilizados e protegidos (LGPD).
                                </CardContent>
                                 <CardFooter>
                                     <Button variant="link" size="sm" asChild className="p-0 h-auto text-primary">
                                         <Link href="/politica-de-privacidade">Ler documento</Link>
                                     </Button>
                                 </CardFooter>
                            </Card>
                             <Card className="hover:shadow-md transition-shadow">
                                <CardHeader>
                                     <CardTitle className="flex items-center gap-2 text-base font-medium"><Cookie className="h-4 w-4 text-primary" /> Política de Cookies</CardTitle>
                                </CardHeader>
                                 <CardContent className="text-xs text-muted-foreground">
                                    Descubra quais cookies usamos, por quê e como você pode controlá-los.
                                </CardContent>
                                 <CardFooter>
                                     <Button variant="link" size="sm" asChild className="p-0 h-auto text-primary">
                                         <Link href="/politica-de-cookies">Ler documento</Link>
                                     </Button>
                                 </CardFooter>
                            </Card>
                        </div>
                    </div>


                    {/* Contact */}
                    <div className="mb-12 md:mb-16 text-center border-t border-border/50 pt-12">
                        <h2 className="text-xl font-semibold mb-4">📬 Fale com o Suporte</h2>
                        <p className="text-muted-foreground mb-6">Se você não encontrou o que procurava:</p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <Button variant="outline" asChild>
                                <a href="mailto:help@projectude.com" className="inline-flex items-center gap-2">
                                    <Mail className="h-4 w-4" /> help@projectude.com
                                </a>
                            </Button>
                             <Button variant="outline" asChild>
                                <a href="https://www.projectude.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                                     <Globe className="h-4 w-4" /> www.projectude.com
                                </a>
                             </Button>
                        </div>
                    </div>

                     {/* Tip */}
                     <div className="text-center text-sm text-muted-foreground bg-muted/30 dark:bg-secondary/20 p-4 rounded-lg">
                        💡 <strong>Dica:</strong> A Central de Ajuda pode ser acessada pelo botão <HelpCircle className="inline-block h-4 w-4 mx-1" /> no topo da interface da plataforma, ao lado do botão de notificações e do modo escuro.
                     </div>

                </div>
            </main>
            <Footer /> {/* Include Footer */}
        </div>
    );
}
