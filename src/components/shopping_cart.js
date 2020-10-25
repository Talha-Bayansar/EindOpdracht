import React from "react";
import styled from "@emotion/styled";
import ShoppingcartItem from "./shopping_cart_item";
import { useCartContext } from "../contexts/cart_context";

const StyledShoppingcart = styled.div`
  height: 100vh;
  width: 30vw;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #3e3e9f;
  padding: 1rem;
  transform: ${(props) =>
    props.isActive ? "translateX(0%)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
  z-index: 5;

  & button {
    background-color: transparent;
    font-size: 2rem;
    border: none;
    cursor: pointer;
  }

  & h2 {
    margin-top: 3rem;
  }
`;

function Shoppingcart(props) {
  const { deleteFromCart } = props;
  const { cart, setIsCartActive, isCartActive } = useCartContext();

  return (
    <StyledShoppingcart isActive={isCartActive}>
      <button onClick={() => setIsCartActive(false)}>x</button>
      <div>
        {cart.length === 0 ? (
          <h2>Shopping cart is empty.</h2>
        ) : (
          cart.map((p) => (
            <ShoppingcartItem
              deleteFromCart={deleteFromCart}
              key={p.id}
              product={p}
            />
          ))
        )}
      </div>
    </StyledShoppingcart>
  );
}

export default Shoppingcart;
