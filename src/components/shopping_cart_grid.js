import React from "react";
import styled from "@emotion/styled";
import ShoppingCartHeader from "./shopping_cart_header";

const StyledGrid = styled.div``;

function ShoppingCartGrid(props) {
  return (
    <StyledGrid>
      <ShoppingCartHeader />
      {props.children}
    </StyledGrid>
  );
}

export default ShoppingCartGrid;
