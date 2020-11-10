import React, { useState } from "react";
import styled from "@emotion/styled";
import ContentProducts from "../components/content_products";
import { useAllProductsContext } from "../contexts/all_products_context";
import { useAuthContext } from "../contexts/auth_context";
import Product from "../components/product";

function MyProductsPage() {
  const { myProducts } = useAllProductsContext();
  const { currentUser } = useAuthContext();

  return (
    <>
      <ContentProducts title={"My Products"}>
        {myProducts.length > 0 ? (
          myProducts.map((p) => <Product key={p.id} product={p} />)
        ) : (
          <span>You didn't publish any products.</span>
        )}
      </ContentProducts>
    </>
  );
}

export default MyProductsPage;
