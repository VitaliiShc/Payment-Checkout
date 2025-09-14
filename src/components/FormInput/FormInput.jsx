import { useId } from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './FormInput.module.css';

export default function FormInput({ label, name, type = 'text', placeholder }) {
  const inputId = useId();

  return (
    <div className={styles.inputWrap}>
      <div className={styles.inputGroup}>
        <label htmlFor={inputId} className={styles.label}>
          {label}{' '}
          <ErrorMessage name={name} component="span" className={styles.error} />
        </label>
        <Field
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          className={styles.input}
        />
      </div>
    </div>
  );
}
