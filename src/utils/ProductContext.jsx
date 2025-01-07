import React, { createContext, useEffect, useState } from "react";
import productData from "../data/products.data";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productData);
  const [originalProducts] = useState(productData);

  return (
    <>
      <ProductContext.Provider
        value={{ products, setProducts, originalProducts }}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
};
export default ProductProvider;
