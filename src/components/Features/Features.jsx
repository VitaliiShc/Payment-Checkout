import clsx from 'clsx';
import { useTranslation } from '@/utils';
import styles from './Features.module.css';

export function Features() {
  const { t } = useTranslation();

  return (
    <section className={styles.featureSection}>
      <h2 className="visually-hidden">{t('Features')}</h2>

      <div className={styles.feature}>
        <div className={clsx(styles.image, styles.imageBest)}></div>
        <h3 className={styles.title}>{t('Best for Health')}</h3>
        <p className={styles.text}>
          {t('Good for your health and quality guaranteed')}
        </p>
      </div>

      <div className={styles.feature}>
        <div className={clsx(styles.image, styles.imageSafe)}></div>
        <h3 className={styles.title}>{t('Safe and quality')}</h3>
        <p className={styles.text}>
          {t('The best quality with the best traditional ingredients')}
        </p>
      </div>

      <div className={styles.feature}>
        <div className={clsx(styles.image, styles.imageSupport)}></div>
        <h3 className={styles.title}>{t('Online Support')}</h3>
        <p className={styles.text}>
          {t('Online complaint service for 24&nbsp;hours without stopping')}
        </p>
      </div>
    </section>
  );
}
