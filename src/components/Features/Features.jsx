import clsx from 'clsx';
import styles from './Features.module.css';

export default function Features() {
  return (
    <section className={styles.featureSection}>
      <h2 className="visually-hidden">Features</h2>

      <div className={styles.feature}>
        <div className={clsx(styles.image, styles.imageBest)}></div>
        <h3 className={styles.title}>Best for Health</h3>
        <p className={styles.text}>
          Good for your health and quality guaranteed
        </p>
      </div>

      <div className={styles.feature}>
        <div className={clsx(styles.image, styles.imageSafe)}></div>
        <h3 className={styles.title}>Safe and quality</h3>
        <p className={styles.text}>
          The best quality with the best traditional ingredients
        </p>
      </div>

      <div className={styles.feature}>
        <div className={clsx(styles.image, styles.imageSupport)}></div>
        <h3 className={styles.title}>Online Support</h3>
        <p className={styles.text}>
          Online complaint service for
          <br />
          24 hours without stopping
        </p>
      </div>
    </section>
  );
}
