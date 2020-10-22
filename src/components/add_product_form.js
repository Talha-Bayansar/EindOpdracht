import React, { useState } from "react";
import styled from "@emotion/styled";

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
  const [url, setUrl] = useState();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();

  const createProduct = () => {
    const product = {};
  };
  return (
    <StyledProductForm visible={addProductClicked}>
      <StyledForm onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          placeholder="URL Picture"
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <StyledButtons>
          <button onClick={() => setAddProductClicked(false)}>Cancel</button>
          <button onClick={() => createProduct()}>Confirm</button>
        </StyledButtons>
      </StyledForm>
    </StyledProductForm>
  );
}

export default AddProductForm;
