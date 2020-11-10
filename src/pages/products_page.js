import React from "react";
import ContentProducts from "../components/content_products";
import { useAllProductsContext } from "../contexts/all_products_context";
import Product from "../components/product";

function ProductsPage() {
  const { allProducts } = useAllProductsContext();

  return (
    <>
      <ContentProducts title={"All Products"}>
        {allProducts.length > 0 ? (
          allProducts.map((p) => <Product key={p.id} product={p} />)
        ) : (
          <span>There aren't available products at the moment.</span>
        )}
      </ContentProducts>
    </>
  );
}

export default ProductsPage;
