import { useState, useEffect } from 'react';
import styles from './PromocodeInput.module.css';

export default function PromocodeInput({ subTotal, setDiscount, discount }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (discount === 0) {
      setValue('');
    }
  }, [discount]);

  const handleApply = () => {
    const code = value.trim();
    const numCode = Number(code);

    if (!value || !/^\d{1,2}$/.test(value) || numCode > 99) {
      setDiscount(0);
      return;
    }

    const discount = (subTotal * numCode) / 100;
    setDiscount(discount);
  };

  return (
    <div className={styles.inputWrap}>
      <input
        type="text"
        value={value}
        className={styles.promocodeInput}
        placeholder="Promotion or Discount code"
        onChange={(evt) => setValue(evt.target.value)}
      />

      <button
        type="button"
        className={styles.applyCodeBtn}
        onClick={handleApply}
      >
        Apply Code
      </button>
    </div>
  );
}
