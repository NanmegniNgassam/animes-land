import { Metadata } from "next"
import styles from "./page.module.css"
import Image from "next/image"
import logo from './assets/animes-land_logo.png'
import naruto from './assets/naruto.jpg'
import onePiece from './assets/one_piece.jpg'
import tokyoRevengers from './assets/tokyo_revengers.jpg'
import AnimeCard from "./components/animeCard/AnimeCard"


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
      <div className={styles.heroSection}>
        <div className={styles.title}>
          <h1>Animes-land</h1>
          <span className={styles.subtitle}>Explorez l’univers des animés</span>
        </div>
        
        <p className={styles.paragraph}>
          Bienvenue sur Animes Land, ton nouveau repaire pour explorer l’univers des animés japonais. Que tu sois passionné de shōnen, amateur de récits tranchants ou curieux de découvrir les perles de la saison, cette plateforme t’ouvre les portes d’un monde riche en émotions, en aventures et en chefs-d’œuvre visuels. Recherche, découvre, et plonge dans des centaines de titres avec simplicité et passion. Ici, chaque animé a une histoire — à toi de la vivre.
        </p>
        <div className={styles.pillsContainer}>
          <Image src={onePiece} alt="Couverture de l'animé One Piece" quality={100} className={styles.pillWrapper} placeholder="blur" />
          <Image src={naruto} alt="Couverture de l'animé Naruto" quality={100}  className={styles.pillWrapper} placeholder="blur" />
          <Image src={tokyoRevengers} alt="Couverture de l'animé Tokyo Revengers" quality={100}  className={styles.pillWrapper} placeholder="blur" />
        </div>
      </div>
      <div className={styles.animesContainer}>
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
      </div>
    </main>
  )
}
