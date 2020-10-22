import React, { createContext, useContext, useMemo, useState } from "react";
import { products_data } from "../data/products_data";

const AllProductsContext = createContext();

export function AllProductsProvider(props) {
  const [allProducts, setAllProducts] = useState(products_data);

  const api = useMemo(() => ({ allProducts, setAllProducts }), [
    allProducts,
    setAllProducts,
  ]);

  return (
    <AllProductsContext.Provider value={api}>
      {props.children}
    </AllProductsContext.Provider>
  );
}

export const useAllProductsContext = () => useContext(AllProductsContext);
