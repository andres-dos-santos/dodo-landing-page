import type { Metadata } from 'next'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import { SmoothScroll } from './smooth-scroll'
import './globals.css'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

const bricolageGrotesque = Bricolage_Grotesque({
  variable: '--font-title',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Dodo.app',
  description:
    'Dodo ajuda profissionais de serviços a organizar agendamentos, clientes e cobranças em uma experiência simples e sem complicação.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolageGrotesque.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
