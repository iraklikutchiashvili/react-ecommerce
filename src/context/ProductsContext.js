import React, { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [productsQtyInBasket, setProductsQtyInBasket] = useState(() => {
    const localData = localStorage.getItem("produqtsQtyInBasket");
    return localData ? Number(localData) : 0;
  });
  const [products, setProducts] = useState({
    name: "",
    description: "",
    img: "",
    price: "",
  });
  const handleAddToBasketClick = (productsQty, clearQtyInCard) => {
    setProductsQtyInBasket((prev) => prev + productsQty);
    clearQtyInCard(0);
  };
  useEffect(() => {
    localStorage.setItem("produqtsQtyInBasket", productsQtyInBasket);
  }, [productsQtyInBasket]);
  return (
    <ProductsContext.Provider
      value={{ productsQtyInBasket, handleAddToBasketClick }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
