import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
function BasketCard(product) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <CardMedia
        sx={{ objectFit: "contain", width: "auto" }}
        component="img"
        alt="img"
        height="100"
        image={product.product.img}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            width: 300,
            fontSize: 14,
            fontWeight: "bold",
            textAlign: "center",
          }}
          component="div"
        >
          {product.product.name}
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
          {product.product.price}
        </Typography>
        <Button>Remove</Button>
      </Box>
    </Box>
  );
}

export default BasketCard;
