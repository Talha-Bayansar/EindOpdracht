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
import ProductsPage from "./pages/products_page";
import MyProductsPage from "./pages/my_products_page";

const StyledApp = styled.div`
  padding: 10vh 3rem 0 3rem;
`;

function ProvidedApp() {
  const { cart, setCart } = useCartContext();
  const { allProducts } = useAllProductsContext();
  const { currentUser } = useAuthContext();

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
          <Route path={"/products"}>
            <ProductsPage />
          </Route>
          <Route path={"/myproducts"}>
            <MyProductsPage />
          </Route>
          <Route path={["/", "/home"]}>
            <ContentProducts title={"Products"}>
              {allProducts.map((p) => (
                <Product key={p.id} product={p} />
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
