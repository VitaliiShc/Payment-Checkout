import { useId } from 'react';
import { useTranslation } from '@/utils';
import { Field, ErrorMessage } from 'formik';
import styles from './FormInput.module.css';

export function FormInput({ label, name, type = 'text', placeholder }) {
  const inputId = useId();
  const { t } = useTranslation();

  return (
    <div className={styles.inputWrap}>
      <div className={styles.inputGroup}>
        <label htmlFor={inputId} className={styles.label}>
          {t(`${label}`)}{' '}
          <ErrorMessage name={name} component="span" className={styles.error} />
        </label>

        <Field
          id={inputId}
          name={name}
          type={type}
          placeholder={t(`${placeholder}`)}
          className={styles.input}
        />
      </div>
    </div>
  );
}
