import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '600', '700']
})

export const metadata: Metadata = {
  title: "Yellow o'clock - Subraya automáticamente los nadadores de tu club",
  description: 'La aplicación de escritorio que subraya automáticamente los nadadores de tu club en las series de natación. Simple, rápida y completamente offline. Desarrollada por y para clubes de natación.',
  keywords: 'natación, series, club natación, nadadores, PDF, resultados deportivos, swimming, Yellow oclock, automatización',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
