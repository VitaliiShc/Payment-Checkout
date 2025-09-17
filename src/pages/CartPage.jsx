import CheckoutForm from '../components/CheckoutForn/CheckoutForn';
import styles from './Pages.module.css';

export default function CartPage() {
  return (
    <>
      <h1 className={styles.pageTitle}>Checkout</h1>
      <CheckoutForm />
    </>
  );
}
