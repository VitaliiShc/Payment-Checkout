import { createContext, useContext } from 'react';

function throwError() {
  throw new Error(
    'CartProvider is missing! You must wrap your app in <CartProvider>.'
  );
}

export const CartContext = createContext({
  cartList: [],
  isLoading: true,
  addToCart: throwError,
  removeFromCart: throwError,
  clearCart: throwError,
  updateCart: throwError,
  sum: 0,
});

export function useCart() {
  return useContext(CartContext);
}
