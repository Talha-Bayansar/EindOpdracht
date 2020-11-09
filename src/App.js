import React from "react";
import "./App.css";
import ContentProducts from "./components/content_products";
import Navbar from "./components/navbar";
import styled from "@emotion/styled";
import Shoppingcart from "./components/shopping_cart";
import { CartProvider, useCartContext } from "./contexts/cart_context";
import Footer from "./components/footer";
import {
  AllProductsProvider,
  useAllProductsContext,
} from "./contexts/all_products_context";
import Product from "./components/product";
import { Switch, Route, HashRouter } from "react-router-dom";
import AuthProvider, { useAuthContext } from "./contexts/auth_context";

const StyledApp = styled.div`
  padding: 10vh 3rem 0 3rem;
`;

function ProvidedApp() {
  const { cart, setCart } = useCartContext();
  const { allProducts } = useAllProductsContext();
  const { currentUser } = useAuthContext();
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

  const deleteFromCart = (product) => {
    let newArray = cart.filter((p) => p.id !== product.id);
    setCart(newArray);
  };

  return (
    <HashRouter basename="/">
      <StyledApp>
        <Navbar />
        <h2>
          Logged in as: <span>{currentUser ? currentUser.email : "Guest"}</span>
        </h2>
        <Switch>
          <Route path="/checkout">
            <Shoppingcart deleteFromCart={deleteFromCart} />
          </Route>
          <Route path={["/", "/home"]}>
            <ContentProducts>
              {allProducts.map((p) => (
                <Product addToCart={addToCart} key={p.id} product={p} />
              ))}
            </ContentProducts>
            <Footer />
          </Route>
        </Switch>
      </StyledApp>
    </HashRouter>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AllProductsProvider>
          <ProvidedApp />
        </AllProductsProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
