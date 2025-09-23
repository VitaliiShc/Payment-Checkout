import { useEffect, useState } from 'react';
import { useTranslation } from '@/utils';
import clsx from 'clsx';
import { Loader } from '@/components/ui';
import { getLocalPromocodes } from '@/api/getLocalPromocodes';
import styles from './ProfileDiscounts.module.css';

export function ProfileDiscounts() {
  const [promocodes, setPromocodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [copiedCode, setCopiedCode] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    async function loadPromocodes() {
      try {
        const data = await getLocalPromocodes();
        setPromocodes(data);
      } catch (err) {
        console.error('Failed to load promocodes:', err);
        setPromocodes([]);
      } finally {
        setIsLoading(false);
      }
    }

    loadPromocodes();
  }, []);

  const handleCopy = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  if (isLoading) return <Loader />;

  const isCodeCopied = (code) => copiedCode === code;

  return (
    <div className={styles.profileDiscounts}>
      <h2 className={styles.blockLabel}>{t('Your discounts')}</h2>

      {promocodes.length === 0 ? (
        <p>{t('No discounts')}</p>
      ) : (
        <ul className={styles.discountList}>
          <li className={styles.discountItem}>
            <span className={styles.tableLabel}>{t('Discount')}</span>
            <span className={styles.tableLabel}>{t('Code')}</span>
          </li>

          {promocodes.map(({ code, label }) => (
            <li key={code} className={styles.discountItem}>
              <span>{label}</span>
              <span>{code}</span>
              <button
                type="button"
                onClick={() => handleCopy(code)}
                className={clsx(
                  styles.copyBtn,
                  isCodeCopied(code) && styles.copyBtnCopied
                )}
              >
                {isCodeCopied(code) ? t('Copied!') : t('Copy')}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
