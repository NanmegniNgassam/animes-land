import { ArrowTrendingUpIcon, HomeIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { SparklesIcon, MagnifyingGlassIcon, AtSymbolIcon } from "@heroicons/react/24/solid";
import styles from './footer.module.css'
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.linksWrapper}>
        <Link href="/">
          <HomeIcon width={24} color='white' />
          <span>Home</span>
        </Link>
        <Link href="/animes">
          <SparklesIcon width={24} color='white' />
          <span>Animes</span>
        </Link>
        <Link href="top">
          <ArrowTrendingUpIcon width={24} color='white' />
          <span>Top</span>
        </Link>
        <Link href="/search">
          <MagnifyingGlassIcon width={24} color='white' />
          <span>Search</span>
        </Link>
        <Link href="/about">
          <AtSymbolIcon width={24} color='white' />
          <span>About</span>
        </Link>
      </div>
    </div>
  );
}
 
export default Footer;