import React, { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider(props) {
  const [cart, setCart] = useState([]);
  const [isCartActive, setIsCartActive] = useState(false);

  const api = useMemo(
    () => ({ cart, setCart, isCartActive, setIsCartActive }),
    [cart, setCart, isCartActive, setIsCartActive]
  );

  return (
    <CartContext.Provider value={api}>{props.children}</CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
