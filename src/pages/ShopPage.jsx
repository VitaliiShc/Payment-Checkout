import { useTranslation } from '@/utils';
import styles from './Pages.module.css';

export default function ShopPage() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className={styles.pageTitle}>{t('Shop Page')}</h1>
      <div className={styles.content}></div>
    </>
  );
}
