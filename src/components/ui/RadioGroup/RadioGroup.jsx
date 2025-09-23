import { useTranslation } from '@/utils';
import { Field } from 'formik';
import styles from './RadioGroup.module.css';

export function RadioGroup({ name, options }) {
  const { t } = useTranslation();

  return (
    <div className={styles.radioOptions}>
      {options.map((option) => (
        <label key={option} className={styles.radioLabel}>
          <span className={styles.icon}></span>
          <span className={styles.option}>{t(`${option}`)}</span>
          <Field
            type="radio"
            name={name}
            value={option}
            className={styles.radio}
          />
        </label>
      ))}
    </div>
  );
}
