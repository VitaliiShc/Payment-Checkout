import styles from './Button.module.css';

export default function Button({ type = 'button', label }) {
  return (
    <button type={type} className={styles.button}>
      {label}
    </button>
  );
}
