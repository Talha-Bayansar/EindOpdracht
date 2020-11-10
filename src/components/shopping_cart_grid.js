import React from "react";
import styled from "@emotion/styled";

const StyledGrid = styled.div``;

function ShoppingCartGrid(props) {
  return <StyledGrid>{props.children}</StyledGrid>;
}

export default ShoppingCartGrid;
