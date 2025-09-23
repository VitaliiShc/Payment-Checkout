import { Link } from 'react-router-dom';
import { useTranslation } from '@/utils';
import { useCart } from '@/context/cartContext';
import { CartItem } from '@/components';
import { Loader } from '@/components/ui';
import styles from './Cart.module.css';

export function Cart() {
  const { cartList, isLoading, removeFromCart, orderSubmitted } = useCart();
  const { t } = useTranslation();
  const isCartEmpty = cartList.length === 0;

  if (isLoading) return <Loader />;

  return (
    <div className={styles.cart}>
      {!isCartEmpty ? (
        cartList.map((good) => (
          <div key={good.id}>
            <CartItem {...good} onDelete={removeFromCart} />
          </div>
        ))
      ) : (
        <>
          <p className={styles.cartMsg}>
            {orderSubmitted ? t('Order sent') : t('The cart is empty')}
          </p>
          <Link to="/shop" className={styles.goShoping}>
            {t("Let's Shopping")}
          </Link>
        </>
      )}
    </div>
  );
}
