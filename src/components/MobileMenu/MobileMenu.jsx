import { Link, useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import styles from './MobileMenu.module.css';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contacts', label: 'Contact' },
  { to: '/shop', label: 'Shop' },
];

export default function MobileMenu({ isOpen, onClose }) {
  const location = useLocation();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleClick = (to) => {
    if (to === location.pathname) {
      onClose();
    } else {
      navigate(to);
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <aside
        className={clsx(styles.menu, isOpen && styles.open)}
        onClick={(evt) => evt.stopPropagation()}
      >
        <nav className={styles.nav}>
          {LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={styles.navLink}
              onClick={(evt) => {
                evt.preventDefault();
                handleClick(to);
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
}
