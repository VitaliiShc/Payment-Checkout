import CheckoutForm from '../CheckoutForn/CheckoutForn';
import styles from './Checkout.module.css';

export default function Checkout() {
  return (
    <main className={styles.main}>
      <h1 className={styles.pageTitle}>Checkout</h1>
      <CheckoutForm />
    </main>
  );
}
