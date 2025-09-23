import { useTranslation } from '@/utils';
import styles from './CartItem.module.css';

export function CartItem({
  id,
  name,
  drugForm,
  color,
  packs,
  price,
  onDelete,
}) {
  const { t } = useTranslation();

  return (
    <div className={styles.product}>
      <div className={styles.image}></div>
      <div className={styles.details}>
        <h3 className={styles.name}>{t(`${name}`)}</h3>
        <p className={styles.properties}>
          <span className={styles.drugForm}>{t(`${drugForm}`)}</span>
          <span className={styles.icon}></span>
          <span className={styles.color}>{t(`${color}`)}</span>
          <span className={styles.icon}></span>
          <span className={styles.packs}>{t(`${packs}`)}</span>
        </p>
      </div>

      <p className={styles.cost}>{Number(price)}</p>

      <button
        className={styles.delBtn}
        aria-label="Delete"
        type="button"
        onClick={() => onDelete(id)}
      >
        <svg className={styles.delicon}>
          <use href={'/icons-sprite.svg#delete'} />
        </svg>
      </button>
    </div>
  );
}
