import React from "react";
import BasketCard from "./BasketCard";
import BasketCheckout from "./BasketCheckout";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider, Box } from "@mui/material";
import { ProductsContext } from "../context/ProductsContext";
import uuid from "react-uuid";

const BasketHoverContent = () => {
  const { productsInBasket } = React.useContext(ProductsContext);
  return (
    <Card>
      <CardContent sx={{ p: "16px 0 16px 16px" }}>
        <Box sx={{ height: 250, pr: 2, overflowY: "scroll" }}>
          {productsInBasket === null ? (
            <p>Basket Is Empty</p>
          ) : (
            productsInBasket.map((product) => {
              return (
                <div key={uuid()}>
                  <BasketCard product={product} />
                  <Divider sx={{ mt: 3, mb: 3 }} />
                </div>
              );
            })
          )}
        </Box>
        <Box sx={{ pr: "16px" }}>
          <BasketCheckout />
        </Box>
      </CardContent>
    </Card>
  );
};

export default BasketHoverContent;
