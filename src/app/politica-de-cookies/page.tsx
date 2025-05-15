import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Política de Cookies - Projectude',
    description: 'Entenda como a plataforma Projectude utiliza cookies.',
};

export default function PoliticaDeCookiesPage() {
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
                    Política de Cookies da Projectude
                </h1>
                <p className="text-sm text-muted-foreground mb-8">
                    Última atualização: 30 de abril de 2025
                </p>

                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none space-y-6 text-foreground/90">
                    <p>
                        Esta Política de Cookies explica como a Plataforma Projectude utiliza cookies e tecnologias semelhantes para reconhecer você quando visita nosso site (www.projectude.com). Ela detalha o que são cookies, por que os usamos e como você pode controlá-los.
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">1. O que são Cookies?</h2>
                    <p>
                        Cookies são pequenos arquivos de texto armazenados em seu navegador ou dispositivo quando você visita um site. Eles servem para reconhecer suas preferências, melhorar sua experiência de navegação e coletar informações analíticas.
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">2. Tipos de Cookies que Utilizamos</h2>
                    <h3 className="text-lg font-medium pt-2">Cookies Estritamente Necessários</h3>
                    <p>Esses cookies são essenciais para o funcionamento da plataforma e não podem ser desativados. São usados, por exemplo, para:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Manter você logado na sua conta</li>
                        <li>Gerenciar sessões seguras</li>
                        <li>Salvar preferências de idioma ou tema (claro/escuro)</li>
                    </ul>

                    <h3 className="text-lg font-medium pt-2">Cookies de Desempenho e Análise</h3>
                    <p>Nos ajudam a entender como os usuários interagem com a Projectude, permitindo:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Medir número de acessos e comportamento de navegação</li>
                        <li>Melhorar o desempenho e usabilidade da interface</li>
                    </ul>
                    <p>Exemplo: usamos ferramentas como Google Analytics com anonimização de IP.</p>

                    <h3 className="text-lg font-medium pt-2">Cookies de Funcionalidade</h3>
                    <p>Permitem que a plataforma lembre de suas escolhas para personalizar sua experiência, como:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Modo escuro ativado</li>
                        <li>Filtros salvos em listagens de projetos</li>
                        <li>Preferências de exibição no painel</li>
                    </ul>

                    <h3 className="text-lg font-medium pt-2">Cookies de Marketing (opcional)</h3>
                    <p>Poderemos usar cookies para:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Exibir comunicações personalizadas sobre atualizações ou planos</li>
                        <li>Mensurar interações com campanhas promocionais (com seu consentimento)</li>
                    </ul>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">3. Gerenciamento de Cookies</h2>
                    <p>Você pode controlar e/ou excluir cookies a qualquer momento. Para isso:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Configurações do Navegador:</strong> Ajuste as permissões de cookies, bloqueie ou apague cookies salvos.</li>
                    </ul>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">4. Cookies de Terceiros</h2>
                    <p>
                        Podemos utilizar cookies de serviços terceiros (ex: Stripe, Firebase, Google) para autenticação, pagamentos ou análises. Esses cookies estão sujeitos às respectivas políticas de privacidade desses fornecedores.
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">5. Alterações nesta Política</h2>
                    <p>
                        Esta Política de Cookies pode ser modificada periodicamente para refletir mudanças na legislação ou na própria plataforma. A versão atualizada será sempre publicada em: <Link href="/politica-de-cookies" className="text-primary hover:underline">www.projectude.com/cookies</Link>
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">6. Contato</h2>
                    <p>Caso tenha dúvidas ou solicitações sobre o uso de cookies, entre em contato com nossa equipe:</p>
                     <ul className="list-none pl-0 space-y-1">
                        <li>📧 E-mail: <a href="mailto:help@projectude.com" className="text-primary hover:underline">help@projectude.com</a></li>
                     </ul>

                    <p className="pt-4 border-t border-border/50">
                        Ao continuar a usar a Projectude após visualizar o aviso de cookies, você concorda com o uso conforme descrito nesta política.
                    </p>
                </div>
            </div>
        </div>
    );
}

