import { useTranslation } from '@/utils';
import styles from './Pages.module.css';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className={styles.pageTitle}>{t('About Page')}</h1>
      <div className={styles.content}></div>
    </>
  );
}
