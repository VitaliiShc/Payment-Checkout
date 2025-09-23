import clsx from 'clsx';
import { useTranslation } from '@/utils';
import { useCart } from '@/context/cartContext';
import { PromocodeInput } from '@/components';
import styles from './Calculation.module.css';

export function Calculation({
  discount,
  setDiscount,
  shippingFee,
  total,
  subTotal,
}) {
  const { sum } = useCart();
  const { t } = useTranslation();

  return (
    <>
      <PromocodeInput sum={sum} setDiscount={setDiscount} discount={discount} />

      <div className={clsx(styles.totalBlock, styles.subTotalBlock)}>
        <h2 className={styles.totalTitle}>{t('Sub total')}</h2>
        <p className={styles.totalValue}>{subTotal}</p>
      </div>

      <div className={clsx(styles.totalBlock, styles.shippingFeeBlock)}>
        <h2 className={styles.totalTitle}>{t('Shipping Fee')}</h2>
        <p className={styles.totalValue}>{shippingFee}</p>
      </div>

      <div className={styles.resultBlock}>
        <h2 className={styles.totalTitle}>{t('Total')}</h2>
        <p className={styles.result}>{total}</p>
      </div>
    </>
  );
}
