import { useTranslation } from '@/utils';
import { CheckoutForm } from '@/components';
import styles from './Pages.module.css';

export default function CartPage() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className={styles.pageTitle}>{t('Checkout')}</h1>
      <div className={styles.content}>
        <CheckoutForm />
      </div>
    </>
  );
}
