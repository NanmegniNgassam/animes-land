import { Metadata } from "next"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: 'Animes-land | Home',
  description: "Bienvenue sur le site officiel de la communauté creée autour des animés et de la culture anime"
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
