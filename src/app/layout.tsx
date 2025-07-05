import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Animes-land',
  description: 'A micro-project designed to view popular anime, explore their details, and search for your favorite series. Its goal is to strengthen my skills in Next.js, particularly around data fetching, dynamic navigation, and best practices in modern frontend development.',
  keywords: [
    "anime hub", "anime explorer", "anime list app", "top anime ranking", "discover anime", "anime database viewer", "nextjs anime project", "anime detail page", "search anime online", "jikan api frontend", "myanimelist viewer", "anime frontend project", "learn nextjs with anime", "anime UI app", "anime browser", "trending anime 2025"
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
