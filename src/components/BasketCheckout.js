import React from "react";
import { Button } from "@mui/material";
import { ProductsContext } from "../context/ProductsContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PageContext } from "../context/PageContext";

const BasketCheckout = () => {
  const { setPage } = React.useContext(PageContext);
  const { productsQtyInBasket, productsInBasket } =
    React.useContext(ProductsContext);

  const totalPrice =
    productsInBasket !== null &&
    productsInBasket.length !== 0 &&
    productsInBasket
      .map((product) => product.quantity * product.price)
      .reduce((total, current) => total + current);

  return (
    <>
      <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{ fontWeight: "bold" }}
          component="div"
          color="text.primary"
        >
          Subtotal:{" "}
          <span style={{ fontWeight: 300 }}>{productsQtyInBasket} (items)</span>
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", ml: 3 }}
          component="div"
          color="text.primary"
        >
          Total Price: ${totalPrice ? totalPrice.toFixed(2) : 0}
        </Typography>
      </Box>

      <Button
        sx={{ mt: 1, borderRadius: 15 }}
        variant="contained"
        size="medium"
        fullWidth={true}
        onClick={() => {
          setPage(3);
          window.scrollTo(0, 0);
        }}
      >
        View Basket & Checkout
      </Button>
    </>
  );
};

export default BasketCheckout;
