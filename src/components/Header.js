import Link from 'next/link';

export default function Header() {
  return (
    <nav className="headerContainer">
      <div className="headerLeft">
        <Link href="/">
          <a className="navItems"> National Dish Finder</a>
        </Link>
      </div>
      <div className="headerRight">
        <Link href="/">
          <a className="navItemsRight">Continents</a>
        </Link>
        <Link href="/">
          <a className="navItemsRight">About</a>
        </Link>
        <Link href="/">
          <a className="navItemsRight">Contact</a>
        </Link>
      </div>
    </nav>
  );
}
