import { Field } from 'formik';
import styles from './RadioGroup.module.css';

export default function RadioGroup({ name, options }) {
  return (
    <div className={styles.radioOptions}>
      {options.map((option) => (
        <label key={option} className={styles.radioLabel}>
          <div className={styles.optionWrap}>
            <span className={styles.icon}></span>
            <span className={styles.option}>{option}</span>
          </div>
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
