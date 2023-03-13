import React from 'react'
import { Button } from "@mui/material";
import { ProductsContext } from "../context/ProductsContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PageContext } from "../context/PageContext";



const Checkout = () => {
  const {productsQtyInBasket} = React.useContext(ProductsContext);
  const { setPage } = React.useContext(PageContext);
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
            <Box sx={{mt: 1, display: "flex", justifyContent: "space-between"}}>
                <Button
                sx={{ borderRadius: 15 }}
                variant="outlined"
                onClick={() => setPage(1)}
                size= "small"
                >
                Continue Shopping
                </Button>
                <Button
                sx={{  borderRadius: 15 }}
                variant="contained"
                size= "large"
                >
                Proceed to Checkout
                </Button>
            </Box>
        </>
    )
}

export default Checkout;