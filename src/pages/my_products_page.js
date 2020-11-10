import React from "react";
import ContentProducts from "../components/content_products";
import { useAllProductsContext } from "../contexts/all_products_context";
import Product from "../components/product";

function MyProductsPage() {
  const { myProducts } = useAllProductsContext();

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
