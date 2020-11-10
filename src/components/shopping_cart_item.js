import React, { useState } from "react";
import styled from "@emotion/styled";
import DeleteIcon from "@material-ui/icons/Delete";

const StyledItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;

  & > h3 {
    display: block;
    height: auto;
    width: 100%;
  }

  & > input {
    max-width: 50px;
    border-radius: 5px;
  }

  & button {
    color: red;
    background-color: transparent;
    border: none;
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;
  }
`;

function ShoppingcartItem(props) {
  const { product, deleteFromCart } = props;
  const [amount, setAmount] = useState(1);
  return (
    <StyledItem>
      <h3>{product.title}</h3>
      <span>{product.price}&euro;</span>
      <input
        onChange={(e) => {
          setAmount(e.target.value);
        }}
        type="number"
        min={1}
        step={1}
        defaultValue={1}
      />
      <span>
        {amount * product.price}
        &euro;
      </span>
      <button onClick={() => deleteFromCart(product)}>
        <DeleteIcon />
      </button>
    </StyledItem>
  );
}

export default ShoppingcartItem;
