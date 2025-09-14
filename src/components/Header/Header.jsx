import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/">Shopdoc</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/reviews">Reviews</NavLink>
      <NavLink to="/contacts">Contact</NavLink>
      <NavLink to="/shop">Shop</NavLink>
    </header>
  );
}
