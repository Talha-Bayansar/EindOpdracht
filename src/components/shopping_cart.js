import React from "react";
import styled from "@emotion/styled";
import ShoppingcartItem from "./shopping_cart_item";
import { useCartContext } from "../contexts/cart_context";

const StyledShoppingcart = styled.div`
  padding: 1rem;

  & h2 {
    margin-top: 3rem;
  }
`;

function Shoppingcart(props) {
  const { deleteFromCart } = props;
  const { cart, setIsCartActive, isCartActive } = useCartContext();

  return (
    <StyledShoppingcart isActive={isCartActive}>
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
