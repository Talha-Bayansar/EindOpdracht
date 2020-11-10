import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/auth_context";

const StyledSidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: #4384e0;

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 5;

  & > div {
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    & > a {
      font-size: 1.5rem;
      text-decoration: none;
      color: white;

      &:hover {
        color: #ccbdbd;
      }
    }
  }
`;

const StyledButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  font-size: 2rem;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
`;

const StyledOverlay = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 200vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 4;
`;

const StyledSection = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 50vw;
  z-index: 5;
  justify-content: center;
  align-items: center;
  transform: ${(props) =>
    props.visible ? "translateX(0%)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;

  @media screen and (max-width: 500px) {
    & {
      width: 100vw;
    }
  }
`;

function Sidebar(props) {
  const { isActive, setIsActive } = props;
  const { currentUser } = useAuthContext();

  return (
    <StyledSection visible={isActive}>
      <StyledOverlay
        visible={isActive}
        onClick={() => setIsActive(!isActive)}
      />
      <StyledSidebar visible={isActive}>
        <StyledButton onClick={() => setIsActive(!isActive)}>x</StyledButton>
        <div>
          <Link to="/" onClick={() => setIsActive(false)}>
            Home
          </Link>
          <Link to="/products" onClick={() => setIsActive(false)}>
            Products
          </Link>
          {currentUser !== null && (
            <Link to="/myproducts" onClick={() => setIsActive(false)}>
              My Products
            </Link>
          )}
          <Link to="/" onClick={() => setIsActive(false)}>
            Contact
          </Link>
        </div>
      </StyledSidebar>
    </StyledSection>
  );
}

export default Sidebar;
