import { useTranslation } from '@/utils';
import styles from './Pages.module.css';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className={styles.pageTitle}>{t('Home Page')}</h1>
      <div className={styles.content}></div>
    </>
  );
}
