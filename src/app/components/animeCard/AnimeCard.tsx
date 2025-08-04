'use client'
import { useEffect } from 'react';
import styles from './animeCard.module.css'
import { Anime } from '@/app/models/anime';



const AnimeCard = () => {
  useEffect(() => {
    const getAnime = async () => {
      const response = await fetch('https://api.jikan.moe/v4/anime/52990');
      const jsonResponse: { data: Anime } = await response.json();

      const anime = jsonResponse.data;
      console.log('Fetched anime : ', anime);
    };

    getAnime();
  }, [])

  return (
    <div className={styles.animeCardWrapper}>
      AnimeCard
    </div>
  );
}
 
export default AnimeCard;