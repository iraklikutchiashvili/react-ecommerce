import React, { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [productsQtyInBasket, setProductsQtyInBasket] = useState(() => {
    const localData = localStorage.getItem("produqtsQtyInBasket");
    return localData ? Number(localData) : 0;
  });
  const [productsInBasket, setProductsInBasket] = useState(() => {
    const localData = JSON.parse(localStorage.getItem("products"));
    console.log(localData);
    return localData && localData;
  });

  const handleAddToBasketClick = (products, setProducts) => {
    products.quantity > 0 &&
      setProductsInBasket((prev) => {
        return prev !== null ? [...prev, { ...products }] : [{ ...products }];
      });
    setProductsQtyInBasket((prev) => prev + products.quantity);
    setProducts((prev) => ({ ...prev, quantity: 0 }));
  };
  const handleRemoveClick = (id, quantity) => {
    const filteredProducts = JSON.parse(
      localStorage.getItem("products")
    ).filter((product) => product.id !== id);
    setProductsInBasket([...filteredProducts]);
    setProductsQtyInBasket((prev) => prev - quantity);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
  };
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(productsInBasket));
  }, [productsInBasket]);
  useEffect(() => {
    localStorage.setItem("produqtsQtyInBasket", productsQtyInBasket);
  }, [productsQtyInBasket]);
  return (
    <ProductsContext.Provider
      value={{
        productsQtyInBasket,
        productsInBasket,
        handleAddToBasketClick,
        handleRemoveClick,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
