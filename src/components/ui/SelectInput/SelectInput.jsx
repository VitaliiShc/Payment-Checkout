import { useId } from 'react';
import { useTranslation } from '@/utils';
import { Field, ErrorMessage } from 'formik';
import styles from './SelectInput.module.css';

export function SelectInput({ label, name, placeholder, options = [] }) {
  const selectId = useId();
  const { t } = useTranslation();

  return (
    <div className={styles.inputWrap}>
      <div className={styles.inputGroup}>
        <label htmlFor={selectId} className={styles.label}>
          {t(`${label}`)}{' '}
          <ErrorMessage name={name} component="span" className={styles.error} />
        </label>

        <Field as="select" id={selectId} name={name} className={styles.input}>
          <option value="" disabled hidden className={styles.placeholder}>
            {t(`${placeholder}`)}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {t(`${option}`)}
            </option>
          ))}
        </Field>
      </div>
    </div>
  );
}
