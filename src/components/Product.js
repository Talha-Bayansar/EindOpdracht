import React, { useState } from "react";
import styled from "@emotion/styled";
import ProductDescription from "./product_description";
import { useAuthContext } from "../contexts/auth_context";
import { useCartContext } from "../contexts/cart_context";
import DeleteIcon from "@material-ui/icons/Delete";
import "firebase/firestore";
import firebase from "../services/firebase";

const StyledProduct = styled.div`
  background-color: #eaeaea;
  box-shadow: 0px 0px 5px 2px black;
  border-radius: 5px;

  & > img {
    width: 100%;
    object-fit: contain;
    border-radius: 5px 5px 0 0;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  & > span {
    color: blue;
    cursor: pointer;
  }

  & > span:hover {
    color: darkblue;
  }

  & > button {
    background-color: #4384e0;
    border: none;
    border-radius: 3px;
    padding: 5px 10px;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
  }

  & > button:hover {
    background-color: #6199bb;
    color: white;
  }
`;

function Product(props) {
  const { product } = props;
  const { addToCart } = useCartContext();
  const [isActive, setIsActive] = useState(false);
  const { currentUser } = useAuthContext();

  const deleteProduct = (id) => {
    firebase.firestore().collection("products").doc(id).delete();
  };

  return (
    <StyledProduct>
      <ProductDescription
        isActive={isActive}
        setIsActive={setIsActive}
        addToCart={addToCart}
        product={product}
      />
      <img src={product.imgUrl} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <StyledDiv>
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
          <span onClick={() => setIsActive(!isActive)}>See more...</span>
          {currentUser && currentUser.uid === product.uid && (
            <button onClick={() => deleteProduct(product.id)}>
              <DeleteIcon />
            </button>
          )}
        </StyledDiv>
      </div>
    </StyledProduct>
  );
}

export default Product;
