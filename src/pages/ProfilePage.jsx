import { useTranslation } from '@/utils';
import { ProfileDiscounts } from '@/components';
import styles from './Pages.module.css';

export default function ProfilePage() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className={styles.pageTitle}>{t('Profile Page')}</h1>
      <div className={styles.content}>
        <ProfileDiscounts />
      </div>
    </>
  );
}
