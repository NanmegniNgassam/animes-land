import Image from "next/image";
import logo from '../../assets/animes-land_logo.png'
import Link from "next/link";
import styles from './header.module.css'
import { ArrowTrendingUpIcon, AtSymbolIcon, HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { SparklesIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <nav className={styles.headerContainer}>
      <Link href="/">
        <Image  src={logo} alt="Community banner and clan emblem" quality={80} width={100} placeholder="blur" />
      </Link>
      <ul>
        <li>
          <Link href="/">
            <HomeIcon width={24} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/animes">
            <SparklesIcon width={24} />
            <span>Animes</span>
          </Link>
        </li>
        <li>
          <Link href="/top">
            <ArrowTrendingUpIcon width={24} />
            <span>Top animes</span>
          </Link>
        </li>
        <li>
          <Link href="/search">
            <MagnifyingGlassIcon width={24} />
            <span>Search</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <AtSymbolIcon width={24} />
            <span>About</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
 
export default Header;