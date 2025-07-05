import { ArrowTrendingUpIcon, HomeIcon, InformationCircleIcon, LinkIcon } from "@heroicons/react/24/outline";
import { SparklesIcon, MagnifyingGlassIcon, AtSymbolIcon } from "@heroicons/react/24/solid";
import styles from './footer.module.css'
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.linksWrapper}>
        <Link href="/">
          <HomeIcon width={24} />
          <span>Home</span>
        </Link>
        <Link href="/animes">
          <SparklesIcon width={24} />
          <span>Animes</span>
        </Link>
        <Link href="top">
          <ArrowTrendingUpIcon width={24} />
          <span>Top</span>
        </Link>
        <Link href="/search">
          <MagnifyingGlassIcon width={24} />
          <span>Search</span>
        </Link>
        <Link href="/about">
          <AtSymbolIcon width={24} />
          <span>About</span>
        </Link>
      </div>
      <div className={styles.referencesWrapper}>
        <p>
          <span>Thanks to </span>
          <Link href="https://jikan.moe/" target="_blank">Jikan API</Link>
          <span> and </span> 
          <Link href="https://vercel.com/home" target="_blank">Vercel (NextJs)</Link>
        </p>
        <Link href="https://gilles-ngassam.pisoftlite.com/" className={styles.btn} target="_blank">VOIR MON PORTFOLIO</Link>
      </div>
      <div className={styles.credentialsWrapper}>
        <AtSymbolIcon width={24} color='white' />
        <span>Copyrights 2025. Designed and developed by</span>
        <Link href="https://gilles-ngassam.pisoftlite.com/" className={styles.btn} target="_blank">
          Gilles NGASSAM
        </Link>
        <LinkIcon width={16} />
      </div>
    </div>
  );
}
 
export default Footer;