import { useTranslation } from '@/utils';
import styles from './Button.module.css';

export function Button({ type = 'button', label, onClick, ...props }) {
  const { t } = useTranslation();

  return (
    <button type={type} className={styles.button} onClick={onClick} {...props}>
      {t(`${label}`)}
    </button>
  );
}
