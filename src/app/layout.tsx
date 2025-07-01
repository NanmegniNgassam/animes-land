import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Animes-land',
  description: 'Micro-projet conçu pour visualiser des animés populaires, explorer leurs détails, et rechercher ses séries favorites. Il a pour objectif de consolider mes compétences en Next.js, en particulier autour de la récupération de données, la navigation dynamique, et les bonnes pratiques de développement frontend moderne.',
  keywords: ['animes']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
