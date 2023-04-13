import React, { useContext } from "react";
import { Button } from "@mui/material";
import { ProductsContext } from "../context/ProductsContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PageContext } from "../context/PageContext";
import { Link } from "react-router-dom";

const BasketCheckout = () => {
  const { productsQtyInBasket, productsInBasket } =
    React.useContext(ProductsContext);
  const {setPage} = React.useContext(PageContext)
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
        sx={{ mt: 1, borderRadius: 15, height: "50px", p: 0 }}
        variant="contained"
        size="medium"
        fullWidth={true}
        onClick={() => {
          setPage(3)
          window.scrollTo(0, 0);
        }}
      >
        <Link to="basket">View Basket & Checkout</Link>
      </Button>
    </>
  );
};

export default BasketCheckout;
