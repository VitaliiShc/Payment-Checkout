import { useState, useEffect } from 'react';
import { useTranslation } from '@/utils';
import styles from './Loader.module.css';

export function Loader() {
  const [dots, setDots] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((dots) => (dots.length < 3 ? dots + '.' : ''));
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className={styles.text}>
      {t('Thinking')}
      {dots}
    </p>
  );
}
