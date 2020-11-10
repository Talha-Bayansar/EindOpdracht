import React from "react";
import styled from "@emotion/styled";
import ShoppingcartItem from "./shopping_cart_item";
import { useCartContext } from "../contexts/cart_context";
import ShoppingCartGrid from "./shopping_cart_grid";

const StyledShoppingcart = styled.div`
  padding: 1rem;

  & h2 {
    margin-top: 3rem;
  }
`;

const StyledHeader = styled.h1`
  font-size: 3rem;
  display: block;
`;

function Shoppingcart(props) {
  const { deleteFromCart } = props;
  const { cart, isCartActive } = useCartContext();

  return (
    <StyledShoppingcart isActive={isCartActive}>
      <div>
        <StyledHeader>Shopping Cart</StyledHeader>
        {cart.length === 0 ? (
          <h2>Shopping cart is empty.</h2>
        ) : (
          <ShoppingCartGrid>
            {cart.map((p) => (
              <ShoppingcartItem
                deleteFromCart={deleteFromCart}
                key={p.id}
                product={p}
              />
            ))}
          </ShoppingCartGrid>
        )}
      </div>
    </StyledShoppingcart>
  );
}

export default Shoppingcart;
