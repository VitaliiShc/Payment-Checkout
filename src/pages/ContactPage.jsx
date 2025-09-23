import { useTranslation } from '@/utils';
import styles from './Pages.module.css';

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className={styles.pageTitle}>{t('Contact Page')}</h1>
      <div className={styles.content}></div>
    </>
  );
}
