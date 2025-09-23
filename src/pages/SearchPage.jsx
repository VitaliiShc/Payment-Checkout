import { useTranslation } from '@/utils';
import styles from './Pages.module.css';

export default function SearchPage() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className={styles.pageTitle}>{t('Search Page')}</h1>
      <div className={styles.content}></div>
    </>
  );
}
