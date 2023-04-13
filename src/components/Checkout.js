import React from "react";
import { Button } from "@mui/material";
import { ProductsContext } from "../context/ProductsContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PageContext } from "../context/PageContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { productsQtyInBasket, productsInBasket } =
    React.useContext(ProductsContext);
  const { setPage } = React.useContext(PageContext);
  const handleClick = () => {
    setPage(1);
    window.scrollTo(0, 0);
  };
  const totalPrice =
    productsInBasket !== null &&
    productsInBasket.length !== 0 &&
    productsInBasket
      .map((product) => product.quantity * product.price)
      .reduce((total, current) => total + current);
  return (
    <>
      <Box
        sx={{
          mt: 3,
          display: "flex",
          justifyContent: "space-between",
          p: "10px",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold" }}
          component="div"
          color="text.primary"
        >
          Subtotal:{" "}
          <span style={{ fontWeight: 300 }}>{productsQtyInBasket} (items)</span>
        </Typography>
        <Typography
          sx={{ fontWeight: "bold" }}
          component="div"
          color="text.primary"
        >
          Total Price: ${totalPrice ? totalPrice.toFixed(2) : 0}
        </Typography>
      </Box>
      <Box sx={{ mt: 1, display: "flex", justifyContent: "space-between" }}>
        <Button
          sx={{ borderRadius: 15, height: 50, width: 150, fontSize: "10px", p: 0 }}
          variant="outlined"
          onClick={handleClick}
        >
          <Link to="/products">Continue Shopping</Link>
        </Button>
        <Button sx={{ borderRadius: 15, height: 50 }} variant="contained">
          Proceed to Checkout
        </Button>
      </Box>
    </>
  );
};

export default Checkout;
