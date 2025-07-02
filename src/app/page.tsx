import { Metadata } from "next"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: 'Animes-land | Home',
  description: "Welcome to the official site for anime enthusiasts. Discover popular anime, explore detailed information, and search for your favorite series. Animes-land is designed to showcase modern frontend best practices with Next.js.",
  keywords: [
    "anime hub", "anime explorer", "anime list app", "top anime ranking", "discover anime", "anime database viewer", "nextjs anime project", "anime detail page", "search anime online", "jikan api frontend", "myanimelist viewer", "anime frontend project", "learn nextjs with anime", "anime UI app", "anime browser", "trending anime 2025"
  ]
}

export default function Home() {
  return (
    <main>
      <h1>Animes-land</h1>
      <p className={styles.paragraph}>
        Animes-land est un micro-projet conçu pour visualiser des animés populaires, explorer leurs détails, et rechercher ses séries favorites. Il a pour objectif de consolider mes compétences en Next.js, en particulier autour de la récupération de données, la navigation dynamique, et les bonnes pratiques de développement frontend moderne.
      </p>
    </main>
  )
}
