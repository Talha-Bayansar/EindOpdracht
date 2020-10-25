import React from "react";
import styled from "@emotion/styled";
import Product from "./product";
import { useAllProductsContext } from "../contexts/all_products_context";

const StyledContentProducts = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3rem;

  @media screen and (max-width: 1280px) {
    & {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 500px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

function ContentProducts(props) {
  const { addToCart } = props;
  const { allProducts } = useAllProductsContext();

  return (
    <StyledContentProducts>
      {/* dit kan omgezet worden in props.children voor specificatie redenen */}

      {allProducts.map((p) => (
        <Product addToCart={addToCart} key={p.id} product={p} />
      ))}
    </StyledContentProducts>
  );
}

export default ContentProducts;
