import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/utils';
import { getLocalPromocodes } from '@/api/getLocalPromocodes';
import styles from './PromocodeInput.module.css';

export function PromocodeInput({ sum, setDiscount, discount }) {
  const [value, setValue] = useState('');
  const [promocodes, setPromocodes] = useState([]);
  const [isInvalid, setIsInvalid] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    async function loadPromocodes() {
      try {
        const data = await getLocalPromocodes();
        setPromocodes(data);
      } catch (err) {
        console.error('Failed to load promocodes:', err);
        setPromocodes([]);
      }
    }

    loadPromocodes();
  }, []);

  useEffect(() => {
    if (discount === 0) {
      setValue('');
    }
  }, [discount]);

  const handleApply = () => {
    const code = value.trim().toLowerCase();
    const found = promocodes.find(
      (promocode) => promocode.code.toLowerCase() === code
    );

    if (!found) {
      setDiscount(0);
      setIsInvalid(true);
      setValue('');
      return;
    }

    const percent = Number(found.value);
    setDiscount((sum * percent) / 100);
    setIsInvalid(false);
  };

  return (
    <>
      <h2 className={styles.promocodeTitle}>
        {t('Apply Promocode')}
        {isInvalid && (
          <span className={styles.errorMsg}>
            {t('Invalid code. See your code in')}{' '}
            <Link to="/profile" className={styles.profileLink}>
              {t('Profile')}
            </Link>
            .
          </span>
        )}
      </h2>

      <div className={styles.inputWrap}>
        <input
          type="text"
          value={value}
          className={`${styles.promocodeInput} ${
            isInvalid ? styles.invalid : ''
          }`}
          placeholder={t('See your code in Profile')}
          onChange={(evt) => {
            setValue(evt.target.value);
            if (isInvalid) setIsInvalid(false);
          }}
        />

        <button
          type="button"
          className={styles.applyCodeBtn}
          onClick={handleApply}
        >
          {t('Apply Code')}
        </button>
      </div>
    </>
  );
}
