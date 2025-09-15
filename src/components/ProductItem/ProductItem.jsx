import styles from './ProductItem.module.css';

export default function ProductItem({ name, drugForm, color, packs, price }) {
  return (
    <div className={styles.product}>
      <div className={styles.image}></div>
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.properties}>
          <span className={styles.drugForm}>{drugForm}</span>
          <span className={styles.icon}></span>
          <span className={styles.color}>{color}</span>
          <span className={styles.icon}></span>
          <span className={styles.packs}>{packs}</span>
        </p>
      </div>
      <p className={styles.cost}>{Number(packs) * Number(price)}</p>
    </div>
  );
}
