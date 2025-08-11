import { Anime } from '@/app/models/anime';
import Image from 'next/image';
import styles from './animeCard.module.css';

interface IAnimeCard {
  anime: Anime
}

const AnimeCard = ({anime}: IAnimeCard) => {
  return (
    anime && (
      <div className={styles.animeCardWrapper}>
        <Image src={anime.images.jpg.image_url} alt={anime.title} width={200} height={100}  />
        <h4> {anime.title} </h4>
      </div>
    )  
  );
}
 
export default AnimeCard;