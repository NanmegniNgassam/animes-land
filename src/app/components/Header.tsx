import Image from "next/image";
import logo from '../assets/animes-land_logo.png'
import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <Link href="/">
        <Image  src={logo} alt="Community banner and clan emblem" quality={80} width={100} placeholder="blur" />
      </Link>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/animes">Animes</Link>
        </li>
        <li>
          <Link href="/top">Top animes</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
 
export default Header;