import CheckoutForm from '../CheckoutForn/CheckoutForn';
import Features from '../Features/Features';
import styles from './Checkout.module.css';

export default function Checkout() {
  return (
    <main className={styles.main}>
      <h1 className={styles.pageTitle}>Checkout</h1>
      <CheckoutForm />
      <Features />
    </main>
  );
}
