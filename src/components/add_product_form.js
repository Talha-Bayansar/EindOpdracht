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
  height: 200px;
  top: 50%;
  left: 50%;
  margin-left: -250px;
  margin-top: -100px;
  border: 5px solid #ccc;
  background-color: #fff;
  z-index: 5;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

function AddProductForm(props) {
  const { addProductClicked, setAddProductClicked } = props;
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const { allProducts, setAllProducts } = useAllProductsContext();

  const getIdFromLastProduct = () => {
    return allProducts.map((p) => p.id).sort((a, b) => a + b)[0];
  };

  const createProduct = () => {
    if (title !== "" && url !== "" && category !== "" && price !== "") {
      const product = {
        id: getIdFromLastProduct() + 1,
        title: title,
        imgUrl: url,
        price: price,
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
    setCategory("");
  };
  return (
    <StyledProductForm visible={addProductClicked}>
      <StyledForm onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
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
