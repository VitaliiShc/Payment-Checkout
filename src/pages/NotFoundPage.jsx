import { Link } from 'react-router-dom';
import { useTranslation } from '@/utils';
import styles from './Pages.module.css';

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className={styles.pageTitle}>{t('Not Found Page')}</h1>
      <div className={styles.content}>
        <Link to="/" className={styles.goHome}>
          {t('Go Home')}
        </Link>
      </div>
    </>
  );
}
