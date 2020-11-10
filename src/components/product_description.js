import React from "react";
import styled from "@emotion/styled";
import { useAuthContext } from "../contexts/auth_context";

const StyledProduct = styled.section`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const StyledProductDescription = styled.div`
  position: fixed;
  width: 400px;
  height: 700px;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -300px;
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  z-index: 10;

  & > img {
    display: block;
    width: 100%;
    object-fit: contain;
    border: 1px solid black;
  }

  & > span {
    & > span {
      font-weight: 600;
      font-size: 1rem;
    }
  }

  & > div {
    display: flex;
    margin-top: 5rem;
    width: 100%;
    justify-content: center;
    align-items: center;

    & > button {
      background-color: #4384e0;
      border: none;
      border-radius: 3px;
      padding: 7px 14px;
      font-size: 1.2rem;
      cursor: pointer;
      outline: none;

      &:hover {
        background-color: #6199bb;
        color: white;
      }
    }
  }

  @media screen and (max-width: 500px) {
    & {
      width: 300px;
      height: 600px;
      margin-left: -165px;
      margin-top: -300px;
    }
  }
`;

const StyledOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5px;
`;

function ProductDescription(props) {
  const { product, isActive, setIsActive, addToCart } = props;
  const { currentUser } = useAuthContext();

  return (
    <StyledProduct visible={isActive}>
      <StyledOverlay onClick={() => setIsActive(false)} />
      <StyledProductDescription>
        <img src={product.imgUrl} alt={product.title} />
        <h1>Product Info:</h1>
        <p>{product.description}</p>
        <span>
          <span>Category:</span> {product.category}
        </span>
        <div>
          <button
            onClick={() => {
              if (currentUser !== null) {
                addToCart(product);
              } else {
                alert("You must log in first.");
              }
            }}
          >
            {product.price}&euro;
          </button>
        </div>
      </StyledProductDescription>
    </StyledProduct>
  );
}

export default ProductDescription;
