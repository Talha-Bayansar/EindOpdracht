import React from "react";
import "./App.css";
import ContentProducts from "./components/content_products";
import Navbar from "./components/navbar";
import styled from "@emotion/styled";
import Shoppingcart from "./components/shopping_cart";
import { CartProvider, useCartContext } from "./contexts/cart_context";
import Footer from "./components/footer";
import { AllProductsProvider } from "./contexts/all_products_context";

const StyledApp = styled.div`
  padding: 10vh 3rem 0 3rem;
`;

function ProvidedApp() {
  const { cart, setCart } = useCartContext();
  const isInCart = (product) => {
    return product && cart.find((p) => p.id === product.id);
  };

  const addToCart = (product) => {
    let newArray = cart;
    if (isInCart(product)) {
      newArray = cart;
    } else {
      newArray = [...cart, product];
    }
    setCart(newArray);
  };

  const deleteFromCart = (product) => {
    let newArray = cart.filter((p) => p.id !== product.id);
    setCart(newArray);
  };

  return (
    <StyledApp>
      <Navbar />
      <Shoppingcart deleteFromCart={deleteFromCart} />
      <ContentProducts addToCart={addToCart} />
      <Footer />
    </StyledApp>
  );
}

function App() {
  return (
    <CartProvider>
      <AllProductsProvider>
        <ProvidedApp />
      </AllProductsProvider>
    </CartProvider>
  );
}

export default App;
