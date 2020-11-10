import React from "react";
import styled from "@emotion/styled";

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;

  & > h3:nth-child(1) {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    & > h3 {
      font-size: 0.75rem;
    }
  }
`;

function ShoppingCartHeader() {
  return (
    <StyledHeader>
      <h3>Title</h3>
      <h3>Price</h3>
      <h3>Quantity</h3>
      <h3>Subtotal</h3>
      <h3></h3>
    </StyledHeader>
  );
}

export default ShoppingCartHeader;
