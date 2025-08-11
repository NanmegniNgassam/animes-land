import AnimeCard from '../animeCard/AnimeCard';
import styles from './page.module.css'

const AnimesList = () => {
  return (
    <div className={styles.animesContainer}>
      <AnimeCard />
      <AnimeCard />
      <AnimeCard />
    </div>
  );
}
 
export default AnimesList;