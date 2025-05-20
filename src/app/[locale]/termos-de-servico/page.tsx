import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Termos de Serviço - Projectude',
    description: 'Leia os Termos de Serviço da plataforma Projectude.',
};

export default function TermosDeServicoPage() {
    return (
        <div className="min-h-screen bg-background text-foreground py-12 md:py-20 lg:py-24">
            <div className="container mx-auto max-w-3xl px-4 md:px-6">
                <div className="mb-8">
                    <Button variant="outline" size="sm" asChild>
                         <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                             <ArrowLeft className="h-4 w-4" />
                             Voltar para Home
                         </Link>
                    </Button>
                </div>

                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-primary">
                    Termos de Serviço da Plataforma Projectude
                </h1>
                <p className="text-sm text-muted-foreground mb-8">
                    Última atualização: 30 de abril de 2025
                </p>

                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none space-y-6 text-foreground/90">
                    <p>
                        Bem-vindo à Projectude! Ao acessar ou utilizar nossa plataforma (www.projectude.com), você concorda com os presentes Termos de Serviço (“Termos”), que regem o uso do sistema de gerenciamento de projetos oferecido pela Projectude. Leia-os com atenção.
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">1. Definições</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Usuário:</strong> Qualquer pessoa física ou jurídica que cria uma conta na Projectude.</li>
                        <li><strong>Projeto:</strong> Conjunto de informações cadastradas no sistema, criado ou compartilhado por usuários.</li>
                        <li><strong>Colaborador:</strong> Usuário convidado para contribuir em um ou mais projetos.</li>
                        <li><strong>Serviço:</strong> Funcionalidades disponibilizadas pela plataforma como dashboards, comentários, filtros, entre outras.</li>
                    </ul>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">2. Uso da Plataforma</h2>
                    <p>
                        A Projectude oferece um ambiente moderno e responsivo para gerenciamento de projetos com as seguintes funcionalidades:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Criação, edição e compartilhamento de projetos.</li>
                        <li>Convite e gerenciamento de colaboradores.</li>
                        <li>Comentários atribuídos com status e respostas.</li>
                        <li>Aplicação de tags, filtros e gráficos de performance.</li>
                        <li>Modo escuro/claro, central de ajuda e notificações.</li>
                    </ul>
                    <p>
                        O uso indevido da plataforma, como envio de spam, uso fraudulento de dados ou qualquer atividade que comprometa a segurança e estabilidade do serviço, resultará em suspensão ou exclusão da conta.
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">3. Conta do Usuário</h2>
                    <p>
                        Ao se registrar, o usuário se compromete a fornecer informações verdadeiras e atualizadas. O uso da conta é pessoal e intransferível. É de responsabilidade do usuário manter a confidencialidade de suas credenciais.
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">4. Planos e Pagamentos</h2>
                    <p>
                        A Projectude poderá oferecer planos gratuitos e pagos, cujos preços, recursos e limitações serão descritos claramente na aba “Configurações {'>'} Planos”.
                    </p>
                    <p>
                        Pagamentos são processados via cartão de crédito, com visualização e histórico acessíveis ao usuário.
                    </p>
                    <p>
                        A falta de pagamento poderá resultar na limitação de recursos da conta.
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">5. Compartilhamento e Colaboração</h2>
                    <p>
                        Usuários podem compartilhar projetos com outros membros através da funcionalidade “Compartilhados comigo” e “Colaboradores”. Cada colaborador poderá ter permissões distintas, definidas por quem criou o projeto.
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">6. Comentários e Arquivamento</h2>
                    <p>
                        Todos os comentários feitos dentro dos projetos devem ser respeitosos e objetivos. A Projectude não se responsabiliza por opiniões ou conteúdos gerados por usuários, mas se reserva o direito de intervir em casos de violação das normas.
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">7. Privacidade e Proteção de Dados</h2>
                    <p>
                        A Projectude respeita a privacidade dos seus usuários. Dados cadastrais, projetos e interações serão tratados conforme nossa Política de Privacidade, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">8. Limitações de Responsabilidade</h2>
                    <p>
                        A Projectude não se responsabiliza por perdas diretas ou indiretas, interrupções de serviço, perda de dados ou mau uso do sistema por parte do usuário. Embora mantenhamos boas práticas de segurança, não garantimos operação ininterrupta ou livre de erros.
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">9. Alterações nos Termos</h2>
                    <p>
                        Reservamo-nos o direito de modificar estes Termos a qualquer momento sem disponibilidade de aviso prévio. O uso contínuo da plataforma após tais alterações constitui aceitação dos novos termos.
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">10. Suporte e Contato</h2>
                    <p>
                        Dúvidas ou problemas com a plataforma? Nossa equipe está pronta para ajudar:
                    </p>
                    <ul className="list-none pl-0 space-y-1">
                        <li>📧 E-mail de suporte: <a href="mailto:help@projectude.com" className="text-primary hover:underline">help@projectude.com</a></li>
                        <li>🌐 Site oficial: <a href="https://www.projectude.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.projectude.com</a></li>
                    </ul>

                    <p className="pt-4 border-t border-border/50">
                        Ao utilizar a Projectude, você concorda integralmente com estes Termos de Serviço.
                    </p>
                </div>
            </div>
        </div>
    );
}

