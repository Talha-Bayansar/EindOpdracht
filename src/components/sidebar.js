import React from "react";
import styled from "@emotion/styled";

const StyledSidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: #3e3e9f;
  transform: ${(props) =>
    props.visible ? "translateX(0%)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
  width: 40vw;
  height: 100vh;

  & > div {
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    & > a {
      text-decoration: none;
      color: white;

      &:hover {
        color: grey;
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

function Sidebar(props) {
  const { isActive, setIsActive } = props;

  return (
    <StyledSidebar visible={isActive}>
      <StyledButton onClick={() => setIsActive(!isActive)}>x</StyledButton>
      <div>
        <a href="/">Home</a>
        <a href="/">Products</a>
        <a href="/">Contact</a>
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
