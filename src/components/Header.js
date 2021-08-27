import Link from 'next/link';

export default function Header() {
  return (
    <nav className="headerContainer">
      <div className="headerLeft">
        <Link href="/">
          <a> National Dish Finder</a>
        </Link>
      </div>
      <div className="headerRight">
        <Link href="/">
          <a>Continents</a>
        </Link>
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/">
          <a>Contact</a>
        </Link>
      </div>
    </nav>
  );
}
