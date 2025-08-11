'use client'
import { useEffect, useState } from 'react';
import AnimeCard from '../animeCard/AnimeCard';
import styles from './page.module.css'
import { Anime } from '@/app/models/anime';

const AnimesList = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);

  useEffect(() => {
    const getAnimes = async() => {
      const animeIds = [52990, 52991, 52992];
      const promises = animeIds.map(id => 
        fetch(`https://api.jikan.moe/v4/anime/${id}`).then(res => res.json())
      );
      const results = await Promise.all(promises);
      const animes: Anime[] = results.map(anime => anime.data)

      setAnimes(animes);
    }
    
    getAnimes()
  }, [])

  return (
    <div className={styles.animesContainer}>
      {
        animes.length ? (animes.map((anime, index) => (
          <AnimeCard key={index} anime={anime} />
        ))
      ) : (
        <p>Chargement des animes...</p>
      )
      }
    </div>
  );
}
 
export default AnimesList;