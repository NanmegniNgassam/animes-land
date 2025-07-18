import { Metadata } from "next";

export const metadata:Metadata = {
   title: 'Anime Catalog | Animes Land',
  description:
    'Browse a wide collection of Japanese anime. Discover new series, explore by genre, popularity, or release date, and find your next favorite show.',
  keywords: [
    'anime',
    'anime catalog',
    'anime list',
    'anime database',
    'browse anime',
    'popular anime',
    'anime discovery',
    'top anime series',
    'anime explorer',
    'Animes Land',
  ],
  openGraph: {
    title: 'Animes Land | Explore All Anime',
    description:
      'Dive into our rich anime catalog. Filter by genre, popularity, or release year, and enjoy a visual browsing experience.',
    url: 'https://animes-land.vercel.app/animes',
    type: 'website',
    images: [
      {
        url: './animes-land_logo.png',
        width: 425,
        height: 300,
        alt: 'Animes-Land Anime Catalog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Explore Anime | Animes Land',
    description:
      'A clean, interactive interface to explore trending anime and hidden gems.',
    images: ['./animes-land_logo.png'],
  },
}

const Animes = () => {
  return (
    <main>
      <h1>Voir tous les animés</h1>
      <p>Profitez de toutes les nouvelles sorties ainsi que des classiques.</p>
    </main>
  );
}
 
export default Animes;