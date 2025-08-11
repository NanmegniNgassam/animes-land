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
        <div style={{ position: 'relative', width: '100%', height: '50%' }}>
          <Image src={anime.images.jpg.large_image_url} alt={anime.title} fill style={{ objectFit: 'contain' }} />
        </div>
        
        <h4> {anime.title} </h4>
      </div>
    )  
  );
}
 
export default AnimeCard;