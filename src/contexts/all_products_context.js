import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { products_data } from "../data/products_data";
import "firebase/firestore";
import firebase from "../services/firebase";

const AllProductsContext = createContext();

export function AllProductsProvider(props) {
  // const [allProducts, setAllProducts] = useState(products_data);

  const useProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
      const unsubscribe = firebase
        .firestore()
        .collection("products")
        .onSnapshot((snapshot) => {
          const newProducts = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setAllProducts(newProducts);
        });

      return () => unsubscribe();
    }, []);

    return allProducts;
  };

  const allProducts = useProducts();

  const api = useMemo(
    () => ({ allProducts /*, setAllProducts,*/ /*useProducts*/ }),
    [
      allProducts,
      // setAllProducts,
      // useProducts,
    ]
  );

  return (
    <AllProductsContext.Provider value={api}>
      {props.children}
    </AllProductsContext.Provider>
  );
}

export const useAllProductsContext = () => useContext(AllProductsContext);
