import { Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import BasketCard from "../components/BasketCard";
import Checkout from "../components/Checkout";
import { ProductsContext } from "../context/ProductsContext";
import uuid from "react-uuid";

const MyBasket = () => {
  const { productsInBasket } = useContext(ProductsContext);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 5,
        flexDirection: "column",
        maxWidth: 1000,
        width: "100%",
        margin: "150px auto",
      }}
    >
      {!productsInBasket || productsInBasket.length === 0 ? (
        <p>Empty</p>
      ) : (
        productsInBasket.map((product) => (
          <Card key={uuid()}>
            <CardContent>
              <BasketCard product={product} />
            </CardContent>
          </Card>
        ))
      )}
      <Box sx={{p: 1}}>
        <Checkout />
      </Box>
    </Box>
  );
};

export default MyBasket;
