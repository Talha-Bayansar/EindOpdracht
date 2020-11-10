import React, { useState } from "react";
import styled from "@emotion/styled";
import ContentProducts from "../components/content_products";
import { useAllProductsContext } from "../contexts/all_products_context";
import { useAuthContext } from "../contexts/auth_context";
import Product from "../components/product";

const StyledPage = styled.section`
  display: flex;
  width: 100vw;
  justify-content: center;
  & > h1 {
    font-size: 2.5rem;
  }
`;

function MyProductsPage() {
  const { allProducts } = useAllProductsContext();
  const { currentUser } = useAuthContext();

  const [myProducts, setMyProducts] = useState(
    allProducts.map((product) => product.uid === currentUser.uid)
  );

  return (
    <StyledPage>
      <ContentProducts title={"My Products"}>
        {myProducts.length > 0 ? (
          myProducts.map((p) => <Product key={p.id} product={p} />)
        ) : (
          <span>You didn't publish any products.</span>
        )}
      </ContentProducts>
    </StyledPage>
  );
}

export default MyProductsPage;
