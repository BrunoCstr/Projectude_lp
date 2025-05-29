"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export default function TermosDeServicoPage() {
  const t = useTranslations("terms");

  return (
    <div className="min-h-screen bg-background text-foreground py-12 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <div className="mb-8">
          <Button variant="outline" size="sm" asChild>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              {t('backToHome')}
            </Link>
          </Button>
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-primary">
          {t('title')}
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          {t('lastUpdate')}
        </p>

        <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none space-y-6 text-foreground/90">
          <p>{t('intro')}</p>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t('sections.1.title')}</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t('sections.1.items.user')}</li>
            <li>{t('sections.1.items.project')}</li>
            <li>{t('sections.1.items.collaborator')}</li>
            <li>{t('sections.1.items.service')}</li>
          </ul>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t('sections.2.title')}</h2>
          <p>{t('sections.2.intro')}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t('sections.2.features.item1')}</li>
            <li>{t('sections.2.features.item2')}</li>
            <li>{t('sections.2.features.item3')}</li>
            <li>{t('sections.2.features.item4')}</li>
            <li>{t('sections.2.features.item5')}</li>
          </ul>
          <p>{t('sections.2.warning')}</p>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t('sections.3.title')}</h2>
          <p>{t('sections.3.text')}</p>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t('sections.4.title')}</h2>
          <p>{t('sections.4.text1')}</p>
          <p>{t('sections.4.text2')}</p>
          <p>{t('sections.4.text3')}</p>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t('sections.5.title')}</h2>
          <p>{t('sections.5.text')}</p>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t('sections.6.title')}</h2>
          <p>{t('sections.6.text')}</p>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t('sections.7.title')}</h2>
          <p>{t('sections.7.text')}</p>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t('sections.8.title')}</h2>
          <p>{t('sections.8.text')}</p>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t('sections.9.title')}</h2>
          <p>{t('sections.9.text')}</p>

          <h2 className="text-xl font-semibold pt-4 border-t border-border/50">{t('sections.10.title')}</h2>
          <p>{t('sections.10.intro')}</p>
          <ul className="list-none pl-0 space-y-1">
            <li>📧 {t('sections.10.email')}</li>
            <li>🌐 {t('sections.10.website')}</li>
          </ul>

          <p className="pt-4 border-t border-border/50">
            {t('sections.acceptance')}
          </p>
        </div>
      </div>
    </div>
  );
}
