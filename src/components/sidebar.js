import React from "react";
import styled from "@emotion/styled";

const StyledSidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: #3e3e9f;

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
  width: 30vw;
  z-index: 5;
  justify-content: center;
  align-items: center;
  transform: ${(props) =>
    props.visible ? "translateX(0%)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
`;

function Sidebar(props) {
  const { isActive, setIsActive } = props;

  return (
    <StyledSection visible={isActive}>
      <StyledOverlay
        visible={isActive}
        onClick={() => setIsActive(!isActive)}
      />
      <StyledSidebar visible={isActive}>
        <StyledButton onClick={() => setIsActive(!isActive)}>x</StyledButton>
        <div>
          <a href="/">Home</a>
          <a href="/">Products</a>
          <a href="/">Contact</a>
        </div>
      </StyledSidebar>
    </StyledSection>
  );
}

export default Sidebar;
