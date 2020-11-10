import React, { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider(props) {
  const [cart, setCart] = useState([]);
  const [isCartActive, setIsCartActive] = useState(false);

  const isInCart = (product) => {
    return product && cart.find((p) => p.id === product.id);
  };

  const addToCart = (product) => {
    let newArray = cart;
    if (!isInCart(product)) {
      newArray = [...cart, product];
    }
    setCart(newArray);
  };

  const api = useMemo(
    () => ({ cart, setCart, isCartActive, setIsCartActive, addToCart }),
    [cart, setCart, isCartActive, setIsCartActive, addToCart]
  );

  return (
    <CartContext.Provider value={api}>{props.children}</CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
