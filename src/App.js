import React, { useState } from 'react';
import './App.css';
import ContentProducts from './components/ContentProducts';
import Navbar from './components/Navbar';
import { products_data } from "./data/products_data";
import styled from "@emotion/styled";
import Shoppingcart from './components/Shoppingcart';

const StyledApp = styled.div`
  padding: 10vh 3rem 0 3rem;
`;

function App() {

  const [cart, setCart] = useState([]);

  const isInCart = (product) => {
    return product && cart.find(p => p.id === product.id);
  }

  const addToCart = (product) => {
    let newArray = cart;
    if (isInCart(product)) {
      newArray = cart;
    } else {
      newArray = [...cart, product];
    }
    console.log(newArray);
    setCart(newArray);
  }

  return (
    <StyledApp>
      <Navbar />
      <Shoppingcart cart={cart} />
      <ContentProducts addToCart={addToCart} data={products_data} />
    </StyledApp>
  );
}

export default App;
