import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { ProductsContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";
function BasketCard(product) {
  const { handleRemoveClick } = React.useContext(ProductsContext);
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <CardMedia
        sx={{ objectFit: "contain", width: "auto" }}
        component="img"
        alt="img"
        height="100"
        image={product.product.image}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            maxWidth: 300,
            width: "100%",
            fontSize: "10px",
            fontWeight: "bold",
            textAlign: "center",
          }}
          component="div"
        >
          <Link to={`/products/${product.product.id}`}>
            {product.product.title}
          </Link>
        </Typography>
        <Typography
          sx={{ textAlign: "center" }}
          variant="subtitle2"
          color="text.secondary"
          component="div"
        >
          Quantity: {product.product.quantity}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{ mb: 4, textAlign: "center", fontSize: 15, fontWeight: "bold" }}
          component="div"
        >
          {"$" + (product.product.quantity * product.product.price).toFixed(2)}
        </Typography>
        <Button
          onClick={() => {
            handleRemoveClick(product.product.uid, product.product.quantity);
          }}
        >
          Remove
        </Button>
      </Box>
    </Box>
  );
}

export default BasketCard;
