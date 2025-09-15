import { useId } from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './SelectInput.module.css';

export default function SelectInput({
  label,
  name,
  placeholder,
  options = [],
}) {
  const selectId = useId();

  return (
    <div className={styles.inputWrap}>
      <div className={styles.inputGroup}>
        <label htmlFor={selectId} className={styles.label}>
          {label}{' '}
          <ErrorMessage name={name} component="span" className={styles.error} />
        </label>

        <Field as="select" id={selectId} name={name} className={styles.input}>
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </Field>
      </div>
    </div>
  );
}
