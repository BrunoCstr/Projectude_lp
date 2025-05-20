// src/components/ClientIntlProvider.tsx
'use client'

import { IntlProvider } from 'next-intl'
import type { ReactNode } from 'react'

interface ClientIntlProviderProps {
  children: ReactNode
  locale: string
  messages: Record<string, any>
}

export default function ClientIntlProvider({
  children,
  locale,
  messages,
}: ClientIntlProviderProps) {
  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  )
}
