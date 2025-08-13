import { Anime } from '@/app/models/anime';
import Image from 'next/image';
import styles from './animeCard.module.css';

interface IAnimeCard {
  anime: Anime
}

const AnimeCard = ({ anime }: IAnimeCard) => {
  const themes = [...new Set([...anime.themes, ...anime.genres])]

  return (
    anime && (
      <div className={styles.animeCardWrapper}>
        <div className={styles.imageContainer}>
          <Image src={anime.images.jpg.large_image_url} alt={anime.title} fill style={{ objectFit: 'cover' }} />
        </div>

        <div className={styles.content}> 
          <h4 className={styles.title}> {anime.title} </h4>
          <div className={styles.themesContainer}>
            {themes.slice(0,3).map((theme, index) => (
              <p className={styles.themeWrapper} key={index}> { theme.name } </p>
            ))}
          </div>
        </div>
      </div>
    )  
  );
}
 
export default AnimeCard;