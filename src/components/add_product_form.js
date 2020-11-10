import React, { useState } from "react";
import styled from "@emotion/styled";
import "firebase/firestore";
import firebase from "../services/firebase";
import { useAuthContext } from "../contexts/auth_context";

const StyledProductForm = styled.section`
  position: fixed;
  display: ${(props) => (props.visible ? "block" : "none")};
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledForm = styled.form`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  top: 50%;
  left: 50%;
  margin-left: -250px;
  margin-top: -250px;
  border: 5px solid #ccc;
  background-color: #fff;
  z-index: 5;

  & input,
  & textarea {
    padding: 10px 10px;
    margin-bottom: 1rem;
    border-radius: 5px;
    border: 1px solid black;
    width: 70%;
  }

  @media screen and (max-width: 500px) {
    & {
      width: 300px;
      height: 400px;
      margin-left: -150px;
      margin-top: -200px;
    }

    & input,
    & textarea {
      padding: 5px 5px;
      margin-bottom: 1rem;
      border-radius: 5px;
      border: 1px solid black;
      width: 70%;
    }
  }
`;

const StyledButtons = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-around;
  align-items: center;

  & button {
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

  @media screen and (max-width: 500px) {
    & button {
      padding: 5px 10px;
      font-size: 0.8rem;
    }
  }
`;

function AddProductForm(props) {
  const { addProductClicked, setAddProductClicked } = props;
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const { currentUser } = useAuthContext();

  const createProduct = () => {
    if (
      title !== "" &&
      url !== "" &&
      category !== "" &&
      price !== "" &&
      description !== ""
    ) {
      firebase
        .firestore()
        .collection("products")
        .add({
          uid: currentUser.uid,
          title: title,
          imgUrl: url,
          price: price,
          category: category,
          description: description,
        })
        .then(() => {
          setUrl("");
          setTitle("");
          setPrice("");
          setDescription("");
          setCategory("");
        });
    } else {
      alert("Every field must be filled.");
    }
  };

  return (
    <StyledProductForm visible={addProductClicked}>
      <StyledForm onSubmit={(event) => event.preventDefault()}>
        <h2>Product Info:</h2>
        <input
          type="url"
          placeholder="URL Picture"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <StyledButtons>
          <button onClick={() => setAddProductClicked(false)}>Cancel</button>
          <button
            onClick={() => {
              createProduct();
              setAddProductClicked(false);
            }}
          >
            Confirm
          </button>
        </StyledButtons>
      </StyledForm>
    </StyledProductForm>
  );
}

export default AddProductForm;
