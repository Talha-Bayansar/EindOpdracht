import React, { useState } from "react";
import styled from "@emotion/styled";
import { Menu, ShoppingCart } from "@material-ui/icons";
import { useCartContext } from "../contexts/cart_context";
import Sidebar from "./sidebar";
import LoginForm from "./login_form";
import AddProductForm from "./add_product_form";

const StyledNavbar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 10vh;
  width: 100vw;
  background-color: #4384e0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 5;

  & > h1 {
    cursor: pointer;

    &:hover {
      color: #ccbdbd;
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
    color: #ccbdbd;
  }
`;

const StyledShoppingCart = styled(ShoppingCart)`
  cursor: pointer;

  &:hover {
    color: #ccbdbd;
  }
`;

const StyledButton = styled.button`
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
`;

const StyledCount = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  & > span {
    position: absolute;
    display: block;
    border-radius: 50%;
    background-color: white;
    padding: 0 4px;
    font-size: 10px;
    right: -5px;
    top: -5px;
    font-weight: 700;
  }
`;

const StyledAddButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: #ccbdbd;
  }
`;

function Navbar(props) {
  const { setIsCartActive } = useCartContext();
  const [isActive, setIsActive] = useState(false);
  const [loginClicked, setLoginClicked] = useState(false);
  const { cart } = useCartContext();
  const [addProductClicked, setAddProductClicked] = useState(false);

  return (
    <StyledNavbar>
      <StyledMenu onClick={() => setIsActive(!isActive)} />
      <h1>Web Shop</h1>
      <div>
        <StyledCount count={String(cart.length)}>
          {cart.length > 0 && <span>{cart.length}</span>}
          <StyledShoppingCart onClick={() => setIsCartActive(true)} />
        </StyledCount>
        <StyledButton onClick={() => setLoginClicked(!loginClicked)}>
          Login
        </StyledButton>
      </div>
      <StyledAddButton onClick={() => setAddProductClicked(!addProductClicked)}>
        +
      </StyledAddButton>
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
      <LoginForm
        loginClicked={loginClicked}
        setLoginClicked={setLoginClicked}
      />
      <AddProductForm
        addProductClicked={addProductClicked}
        setAddProductClicked={setAddProductClicked}
      />
    </StyledNavbar>
  );
}

export default Navbar;
