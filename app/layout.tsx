import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const display = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display-serif',
})

const mono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-mono-body',
})

export const metadata: Metadata = {
  title: 'Projelerim — Yaptığım Şeyler',
  description: 'Yaptığım projelerin listesi. Kod, tasarım ve diğer işler.',
  generator: 'v0.app',
  icons: {
    icon: '/images/awesome-face.gif',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#efeae0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${display.variable} ${mono.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
