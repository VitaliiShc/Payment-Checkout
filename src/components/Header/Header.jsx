import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTranslation } from '@/utils';
import clsx from 'clsx';
import { MobileMenu } from '@/components';
import { HEADER_LINKS } from '@/constants/constants';
import styles from './Header.module.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isNotCartPage = location.pathname !== '/cart';
  const { t } = useTranslation();

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
    return clsx(
      styles.navLink,
      isActive && styles.active,
      !isActive && styles.unActive
    );
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <button
            className={styles.menuBtn}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Menu"
            type="button"
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
            {HEADER_LINKS.map(({ to, label }) => (
              <NavLink key={to} to={to} className={buildLinkClass}>
                {t(`${label}`)}
              </NavLink>
            ))}
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
