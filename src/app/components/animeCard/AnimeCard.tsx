import { Anime } from '@/app/models/anime';
import Image from 'next/image';
import styles from './animeCard.module.css';

interface IAnimeCard {
  anime: Anime
}

const AnimeCard = ({ anime }: IAnimeCard) => {
  return (
    anime && (
      <div className={styles.animeCardWrapper}>
        <div className={styles.imageContainer}>
          <Image src={anime.images.jpg.large_image_url} alt={anime.title} fill style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.content}> 
          <h4> {anime.title} </h4>
        </div>
        
      </div>
    )  
  );
}
 
export default AnimeCard;