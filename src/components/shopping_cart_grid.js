import React from "react";
import styled from "@emotion/styled";
import ShoppingCartHeader from "./shopping_cart_header";
import { useCartContext } from "../contexts/cart_context";

const StyledGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > button {
    position: fixed;
    bottom: 10%;
    right: 10%;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
    background-color: #7fcfff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px 20px;
    font-size: 1rem;
    letter-spacing: 3px;
    margin-left: 3rem;
    font-weight: 500;

    &:hover {
      background-color: #6199bb;
      color: white;
    }
  }
`;

function ShoppingCartGrid(props) {
  const { setCart } = useCartContext();

  return (
    <StyledGrid>
      <ShoppingCartHeader />
      {props.children}
      <button onClick={() => setCart([])}>CHECKOUT</button>
    </StyledGrid>
  );
}

export default ShoppingCartGrid;
