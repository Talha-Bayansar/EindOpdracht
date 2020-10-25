import React, { useState } from "react";
import styled from "@emotion/styled";
import { useAllProductsContext } from "../contexts/all_products_context";

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
`;

function AddProductForm(props) {
  const { addProductClicked, setAddProductClicked } = props;
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const { allProducts, setAllProducts } = useAllProductsContext();

  const getIdFromLastProduct = () => {
    return allProducts.map((p) => p.id).sort((a, b) => a + b)[0];
  };

  const createProduct = () => {
    if (
      title !== "" &&
      url !== "" &&
      category !== "" &&
      price !== "" &&
      description !== ""
    ) {
      const product = {
        id: getIdFromLastProduct() + 1,
        title: title,
        imgUrl: url,
        price: price,
        description: description,
        category: category,
      };
      console.log(product.id);
      setAllProducts([...allProducts, product]);
    } else {
      alert("Every field must be filled.");
    }
  };

  const clearInputFields = () => {
    setUrl("");
    setTitle("");
    setPrice("");
    setDescription("");
    setCategory("");
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
              clearInputFields();
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
