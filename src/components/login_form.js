import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { useAuthContext } from "../contexts/auth_context";
import Error from "./error";

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
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup, login } = useAuthContext();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [newAccount, setNewAccount] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newAccount) {
      try {
        setError("");
        setLoading(true);
        await signup(emailRef.current.value, passwordRef.current.value);
      } catch {
        setError("Failed to create an account.");
      }
    } else {
      try {
        setError("");
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
      } catch {
        setError("Failed to sign in.");
      }
    }

    setLoading(false);
  };

  return (
    <StyledLoginComponent visible={loginClicked}>
      <StyledOverlay onClick={() => setLoginClicked(!loginClicked)} />
      <StyledLoginForm>
        <button onClick={() => setLoginClicked(false)}>x</button>
        <h3>Do you have an account?</h3>
        {error && <Error>{error}</Error>}
        <form action="login" onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            placeholder="email@email.com"
            required
            ref={emailRef}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            ref={passwordRef}
          />
          <StyledButtons>
            <button
              onClick={() => setNewAccount(false)}
              type="submit"
              disabled={loading}
            >
              Sign in
            </button>
            <button
              onClick={() => setNewAccount(true)}
              type="submit"
              disabled={loading}
            >
              Sign Up
            </button>
          </StyledButtons>
        </form>
      </StyledLoginForm>
    </StyledLoginComponent>
  );
}

export default LoginForm;
