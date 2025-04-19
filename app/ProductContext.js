import React, { createContext, useState, useContext } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <ProductContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

// Hook để sử dụng context
export const useProductContext = () => useContext(ProductContext);
