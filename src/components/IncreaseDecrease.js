import React from "react";
import { Box, Button, CardActions } from "@mui/material";
import { ProductsContext } from "../context/ProductsContext";

function IncreaseDecrease({ data, action }) {
  const { handleAddToBasketClick } = React.useContext(ProductsContext);
  const increaseProductsQty = () => {
    action((prev) => ({ ...prev, quantity: data.quantity + 1 }));
  };
  const decreaseProductsQty = () => {
    if (data.quantity > 0) {
      action((prev) => ({
        ...prev,
        quantity: data.quantity - 1,
      }));
    }
  };
  return (
    <Box>
      <CardActions sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <Button
          variant="outlined"
          color="primary"
          sx={{ fontSize: 25, height: 30 }}
          onClick={increaseProductsQty}
        >
          +
        </Button>
        <b style={{ marginLeft: 7, fontSize: 20 }}>{data.quantity}</b>
        <Button
          variant="outlined"
          color="error"
          sx={{ fontSize: 25, height: 30 }}
          onClick={decreaseProductsQty}
        >
          -
        </Button>
      </CardActions>
      <Button
        onClick={() => handleAddToBasketClick(data, action)}
        variant="contained"
        size="small"
        fullWidth={true}
        sx={{ mt: 1 }}
      >
        Add To Basket
      </Button>
    </Box>
  );
}

export default IncreaseDecrease;
