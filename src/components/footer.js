import React from "react";
import styled from "@emotion/styled";
import { Twitter, Facebook, Instagram } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/auth_context";

const StyledFooter = styled.div`
  position: absolute;
  background-color: #4384e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 20vh;
  margin-top: 1rem;
  left: 0;
  color: white;
  z-index: -1;

  & > div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const StyledMedia = styled.div`
  width: 20%;

  & > *:hover {
    color: #ccbdbd;
    cursor: pointer;
  }
`;

const StyledLinks = styled.div`
  width: 50%;

  & > a {
    text-decoration: none;
    color: white;
  }

  & > a:hover {
    color: #ccbdbd;
  }
`;

function Footer() {
  const { currentUser } = useAuthContext();

  return (
    <StyledFooter>
      <StyledLinks>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        {currentUser !== null && <Link to="/myproducts">My Products</Link>}
        <Link to="/">Contact</Link>
      </StyledLinks>
      <StyledMedia>
        <Twitter />
        <Facebook />
        <Instagram />
      </StyledMedia>
      <div>&copy; All Rights Reserved</div>
    </StyledFooter>
  );
}

export default Footer;
