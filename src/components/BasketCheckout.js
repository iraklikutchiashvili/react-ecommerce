import React from 'react'
import { Button } from "@mui/material";
import { ProductsContext } from "../context/ProductsContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PageContext } from "../context/PageContext";


const BasketCheckout = () => {
  const { setPage } = React.useContext(PageContext);
  const {productsQtyInBasket} = React.useContext(ProductsContext);
    return (
        <>
        <Box sx={{mt: 3, display: "flex", justifyContent: "space-between"}}>
        <Typography
          sx={{  fontWeight: "bold" }}
          component="div"
          color="text.primary"
        >
          Subtotal: <span style={{fontWeight: 300}}>{productsQtyInBasket} (items)</span>
        </Typography>
        <Typography
          sx={{fontWeight: "bold" }}
          component="div"
          color="text.primary"
        >
          Total Price
        </Typography>
        </Box>
       
        <Button
          sx={{ mt: 1, borderRadius: 15 }}
          variant="contained"
          size="medium"
          fullWidth={true}
          onClick={() => setPage(3)}
        >
          View Basket & Checkout
        </Button>
        </>
    )
}

export default BasketCheckout;