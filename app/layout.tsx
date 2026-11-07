import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const display = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display-face',
})

const body = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Keronun Projelerim',
  description: 'Matematikden 10 alsam da en azından kodlama yapabiliyorum.',
  generator: 'v0.app',
  icons: {
    icon: '/images/awesome-face.gif',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
