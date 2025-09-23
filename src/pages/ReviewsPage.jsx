import { useTranslation } from '@/utils';
import styles from './Pages.module.css';

export default function ReviewsPage() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className={styles.pageTitle}>{t('Reviews Page')}</h1>
      <div className={styles.content}></div>
    </>
  );
}
