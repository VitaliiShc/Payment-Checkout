import { NavLink, Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Header.module.css';

export default function Header() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(styles.navLink, isActive && styles.active);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          Shopdoc
        </NavLink>

        <div className={styles.space1}></div>

        <nav className={styles.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={buildLinkClass}>
            About
          </NavLink>
          <NavLink to="/reviews" className={buildLinkClass}>
            Reviews
          </NavLink>
          <NavLink to="/contacts" className={buildLinkClass}>
            Contact
          </NavLink>
          <NavLink to="/shop" className={buildLinkClass}>
            Shop
          </NavLink>
        </nav>

        <div className={styles.space2}></div>

        <ul className={styles.icons}>
          <li>
            <Link
              className={styles.iconLink}
              to="/search"
              aria-label="Search"
              rel="noopener noreferrer"
            >
              <svg className={styles.icon}>
                <use href="/icons-sprite.svg#search"></use>
              </svg>
            </Link>
          </li>

          <li>
            <Link
              className={styles.iconLink}
              to="/cart"
              aria-label="Cart"
              rel="noopener noreferrer"
            >
              <svg className={styles.icon}>
                <use href="/icons-sprite.svg#cart"></use>
              </svg>
            </Link>
          </li>

          <li>
            <Link
              className={styles.iconLink}
              to="/profile"
              aria-label="Profile"
              rel="noopener noreferrer"
            >
              <svg className={styles.icon}>
                <use href="/icons-sprite.svg#profile"></use>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
