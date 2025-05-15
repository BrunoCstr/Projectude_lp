
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Política de Privacidade - Projectude',
    description: 'Leia a Política de Privacidade da plataforma Projectude.',
};

export default function PoliticaDePrivacidadePage() {
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
                    Política de Privacidade da Plataforma Projectude
                </h1>
                <p className="text-sm text-muted-foreground mb-8">
                    Última atualização: 30 de abril de 2025
                </p>

                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none space-y-6 text-foreground/90">
                    <p>
                        A sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos os seus dados pessoais quando você utiliza a plataforma Projectude, acessível em www.projectude.com.
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">1. Informações que Coletamos</h2>
                    <p>Ao utilizar a Projectude, podemos coletar os seguintes dados:</p>

                    <h3 className="text-lg font-medium pt-2">1.1. Dados Cadastrais</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Nome</li>
                        <li>E-mail</li>
                        <li>Senha (criptografada)</li>
                        <li>Foto de perfil</li>
                        <li>Informações profissionais e biográficas (opcional)</li>
                        <li>Informações de pagamento (cartão de crédito)</li>
                    </ul>

                    <h3 className="text-lg font-medium pt-2">1.2. Dados de Uso</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Ações realizadas na plataforma (ex: criação de projetos, comentários, convites)</li>
                        <li>Endereço IP, tipo de navegador e dispositivo</li>
                        <li>Data e hora de acesso</li>
                        <li>Preferência de idioma e modo de exibição (claro/escuro)</li>
                    </ul>

                     <h3 className="text-lg font-medium pt-2">1.3. Dados Compartilhados</h3>
                     <ul className="list-disc pl-6 space-y-2">
                        <li>Projetos e credenciais inseridos pelos usuários</li>
                        <li>Arquivos anexados (máximo 3 por projeto)</li>
                        <li>Colaboradores adicionados aos projetos</li>
                     </ul>


                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">2. Finalidade do Uso dos Dados</h2>
                    <p>Usamos seus dados para:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Permitir o funcionamento completo da plataforma</li>
                        <li>Facilitar a colaboração entre usuários</li>
                        <li>Enviar notificações e atualizações</li>
                        <li>Processar pagamentos de planos</li>
                        <li>Fornecer suporte técnico</li>
                        <li>Melhorar a experiência do usuário (análises internas)</li>
                    </ul>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">3. Compartilhamento de Dados</h2>
                     <p>Seus dados não são vendidos a terceiros. Podemos compartilhar informações:</p>
                     <ul className="list-disc pl-6 space-y-2">
                        <li>Com prestadores de serviços de pagamento (ex: gateways de cartão de crédito)</li>
                        <li>Para cumprir obrigações legais, judiciais ou regulatórias</li>
                        <li>Com colaboradores autorizados nos projetos em que você participa</li>
                     </ul>


                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">4. Armazenamento e Segurança</h2>
                     <p>Adotamos medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados, uso indevido, alteração ou destruição.</p>
                     <ul className="list-disc pl-6 space-y-2">
                        <li>Armazenamento em servidores seguros</li>
                        <li>Criptografia de senhas</li>
                        <li>Acesso controlado aos dados por parte da equipe técnica</li>
                     </ul>


                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">5. Retenção de Dados</h2>
                    <p>
                        Seus dados serão mantidos enquanto sua conta estiver ativa ou enquanto forem necessários para cumprir as finalidades descritas. Você pode solicitar a exclusão de sua conta e dados a qualquer momento.
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">6. Seus Direitos</h2>
                     <p>Você tem o direito de:</p>
                     <ul className="list-disc pl-6 space-y-2">
                        <li>Acessar os dados que temos sobre você</li>
                        <li>Corrigir dados imprecisos ou desatualizados</li>
                        <li>Solicitar a exclusão de seus dados</li>
                        <li>Retirar seu consentimento, quando aplicável</li>
                     </ul>
                     <p>Solicitações devem ser feitas via e-mail: <a href="mailto:help@projectude.com" className="text-primary hover:underline">help@projectude.com</a></p>


                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">7. Cookies</h2>
                     <p>Utilizamos cookies e tecnologias semelhantes para:</p>
                     <ul className="list-disc pl-6 space-y-2">
                        <li>Lembrar suas preferências</li>
                        <li>Melhorar a navegação</li>
                        <li>Realizar análises de uso</li>
                     </ul>
                     <p>Você pode controlar o uso de cookies nas configurações do seu navegador.</p>


                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">8. Alterações nesta Política</h2>
                    <p>
                        Esta política pode ser atualizada periodicamente, sem disponibilidade de aviso prévio. Recomendamos que você revise esta página regularmente.
                    </p>

                    <h2 className="text-xl font-semibold pt-4 border-t border-border/50">9. Contato</h2>
                     <p>Em caso de dúvidas sobre esta Política de Privacidade, entre em contato conosco:</p>
                    <ul className="list-none pl-0 space-y-1">
                        <li>📧 E-mail: <a href="mailto:help@projectude.com" className="text-primary hover:underline">help@projectude.com</a></li>
                        <li>🌐 Site: <a href="https://www.projectude.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.projectude.com</a></li>
                    </ul>

                    <p className="pt-4 border-t border-border/50">
                        Ao utilizar a Projectude, você declara estar de acordo com esta Política de Privacidade.
                    </p>
                </div>
            </div>
        </div>
    );
}

