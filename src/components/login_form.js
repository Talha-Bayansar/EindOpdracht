import React from "react";
import styled from "@emotion/styled";

const StyledLoginComponent = styled.section`
  position: fixed;
  display: ${(props) => (props.visible ? "block" : "none")};
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledLoginForm = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  top: 50%;
  left: 50%;
  margin-left: -250px;
  margin-top: -150px;
  border: 5px solid #ccc;
  background-color: #fff;
  z-index: 6;

  & > button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background-color: transparent;
    font-size: 2rem;
    border: none;
    cursor: pointer;
  }

  & > form {
    display: flex;
    height: 60%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    & > input {
      padding: 10px;
      border-radius: 5px;
      font-size: 1rem;
      border: 1px solid grey;
      width: 100%;
    }

    & button {
      padding: 10px 20px;
      font-size: 1rem;
      background-color: #4384e0;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        color: white;
        background-color: #3e3e9f;
      }
    }
  }
`;

const StyledButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const StyledOverlay = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: transparent;
  z-index: 4;
`;

function LoginForm(props) {
  const { loginClicked, setLoginClicked } = props;
  return (
    <StyledLoginComponent visible={loginClicked}>
      <StyledOverlay onClick={() => setLoginClicked(!loginClicked)} />
      <StyledLoginForm>
        <button onClick={() => setLoginClicked(false)}>x</button>
        <h3>Do you have an account?</h3>
        <form action="login">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email@email.com"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <StyledButtons>
            <button type="submit">Sign in</button>
            <button type="submit">Sign Up</button>
          </StyledButtons>
        </form>
      </StyledLoginForm>
    </StyledLoginComponent>
  );
}

export default LoginForm;
