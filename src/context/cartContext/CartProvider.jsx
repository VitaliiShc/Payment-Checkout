import { useEffect, useState, useMemo } from 'react';
import { getLocalCatrList } from '@/api/getLocalCatrList';
import { CART_LOCAL_STORAGE_KEY } from '@/constants/constants';
import { CartContext } from '.';

function setCart(items) {
  localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(items));
}

function clearCartStorage() {
  localStorage.removeItem(CART_LOCAL_STORAGE_KEY);
}

export function CartProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  useEffect(() => {
    async function init() {
      const dataInStorage = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
      let currentCart;

      if (dataInStorage === null) {
        try {
          const goods = await getLocalCatrList();
          currentCart = goods;
          setCart(goods);
        } catch {
          console.error('Unable to load data from server!');
          currentCart = [];
        }
      } else {
        currentCart = JSON.parse(dataInStorage);
      }

      setCartList(currentCart);
      setIsLoading(false);
    }

    init();
  }, []);

  const addToCart = (item) => {
    const updated = [...cartList, item];
    setCart(updated);
    setCartList(updated);
  };

  const removeFromCart = (id) => {
    const updated = cartList.filter((item) => item.id !== id);
    setCart(updated);
    setCartList(updated);
  };

  const clearCart = () => {
    clearCartStorage();
    setCartList([]);
    setOrderSubmitted(true);
  };

  const updateCart = (items) => {
    setCart(items);
    setCartList(items);
  };

  const sum = useMemo(
    () =>
      cartList.reduce(
        (acc, item) => acc + (Number(item.price) || 0) * (item.quantity || 1),
        0
      ),
    [cartList]
  );

  return (
    <CartContext.Provider
      value={{
        cartList,
        isLoading,
        addToCart,
        removeFromCart,
        clearCart,
        updateCart,
        sum,
        orderSubmitted,
        setOrderSubmitted,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
