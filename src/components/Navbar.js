import React from "react";
import styled from "@emotion/styled";
import { Menu, ShoppingCart } from "@material-ui/icons";
import { useCartContext } from "../contexts/cart_context";
import Sidebar from "./sidebar";

const StyledNavbar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 10vh;
  width: 100vw;
  background-color: #3e3e9f;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & > h1 {
    cursor: pointer;

    &:hover {
      color: grey;
    }
  }

  & > div {
    display: flex;
    align-items: center;
  }
`;

const StyledMenu = styled(Menu)`
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

const StyledShoppingCart = styled(ShoppingCart)`
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

const StyledButton = styled.button`
  background-color: lightblue;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 1rem;
  letter-spacing: 3px;
  margin-left: 3rem;
  font-weight: 500;
`;

function Navbar(props) {
  const { setIsCartActive } = useCartContext();

  return (
    <StyledNavbar>
      <StyledMenu />
      <h1>Web Shop</h1>
      <div>
        <StyledShoppingCart onClick={() => setIsCartActive(true)} />
        <StyledButton>Login</StyledButton>
      </div>
      <Sidebar />
    </StyledNavbar>
  );
}

export default Navbar;
