import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <img
        className={styles.header__logo}
        src="https://api.artic.edu/docs/assets/logo.svg"
        alt="Art Institute Chicago"
      />
      <h1 className={styles.header__title}>Art Institute Chicago</h1>

      <nav className={styles.header__nav}>
        <ul>
          <NavLink to="/artworks">Artworks</NavLink>
          <NavLink to="/bookmarks">Bookmarks</NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
