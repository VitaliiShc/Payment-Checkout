import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import MobileMenu from '../MobileMenu/MobileMenu';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isNotCartPage = location.pathname !== '/cart';

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const buildLinkClass = ({ isActive }) => {
    return clsx(styles.navLink, isActive && styles.active);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <button
            className={styles.menuBtn}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Menu"
          >
            <svg className={styles.icon}>
              <use
                href={`/icons-sprite.svg#${isMenuOpen ? 'close' : 'menu'}`}
              />
            </svg>
          </button>

          <NavLink to="/" className={styles.logo}>
            Shopdoc
          </NavLink>

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

          <div className={styles.icons}>
            <Link className={styles.iconWrap} to="/search" aria-label="Search">
              <svg className={styles.icon}>
                <use href="/icons-sprite.svg#search" />
              </svg>
            </Link>

            <Link
              className={clsx(styles.iconWrap, isNotCartPage && styles.pulsar)}
              to="/cart"
              aria-label="Cart"
            >
              <svg className={styles.icon}>
                <use href="/icons-sprite.svg#cart" />
              </svg>
            </Link>

            <Link
              className={styles.iconWrap}
              to="/profile"
              aria-label="Profile"
            >
              <svg className={styles.icon}>
                <use href="/icons-sprite.svg#profile" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
