import { NavLink } from 'react-router-dom';
import { useTranslation } from '@/utils';
import clsx from 'clsx';
import { HEADER_LINKS } from '@/constants/constants';
import styles from './MobileMenu.module.css';

export function MobileMenu({ isOpen, onClose }) {
  const { t } = useTranslation();

  const buildLinkClass = ({ isActive }) => {
    return clsx(
      styles.navLink,
      isActive && styles.active,
      !isActive && styles.unActive
    );
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <aside
        className={clsx(styles.menu, isOpen && styles.open)}
        onClick={(evt) => evt.stopPropagation()}
      >
        <nav className={styles.nav}>
          {HEADER_LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to} className={buildLinkClass}>
              {t(`${label}`)}
            </NavLink>
          ))}
        </nav>
      </aside>
    </div>
  );
}
