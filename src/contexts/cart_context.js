import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useAuthContext } from "./auth_context";
import {
  setLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../utilities/localstorage";

const CartContext = createContext();

export function CartProvider(props) {
  const { currentUser } = useAuthContext();
  const [cart, setCart] = useState(getFromLocalStorage(currentUser));
  const [isCartActive, setIsCartActive] = useState(false);

  useEffect(() => {
    if (currentUser) {
      const data = getFromLocalStorage(currentUser.uid);
      if (data) {
        setCart(data);
      }
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      setLocalStorage(currentUser.uid, cart);
    }
  });

  const deleteFromCart = (product) => {
    let newArray = cart.filter((p) => p.id !== product.id);
    setCart(newArray);
  };

  const isInCart = (product) => {
    return product && cart.find((p) => p.id === product.id);
  };

  useEffect(() => {
    currentUser ? console.log(currentUser.uid) : console.log("null");
    console.log(cart);
  }, [currentUser, cart]);

  const addToCart = (product) => {
    let newArray = cart;
    if (!isInCart(product)) {
      newArray = [...cart, product];
    }
    setCart(newArray);
  };

  const api = useMemo(
    () => ({
      cart,
      setCart,
      isCartActive,
      setIsCartActive,
      addToCart,
      deleteFromCart,
    }),
    [cart, setCart, isCartActive, setIsCartActive, addToCart, deleteFromCart]
  );

  return (
    <CartContext.Provider value={api}>{props.children}</CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
