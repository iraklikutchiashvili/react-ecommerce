import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";import { Button } from "@mui/material";
;


function BasketCard() {
  return (
    
    <Box sx={{ display: "flex", justifyContent: "space-between", }}>
      <CardMedia
        sx={{ objectFit: "contain", width: "auto" }}
        component="img"
        alt="img"
        height="100"
        image="https://image-optimizer-reg.production.sephora-asia.net/images/product_images/1_Product_3614227086227-Marc-Jacobs-MARC-JACOBS-FRAGRANCES-Perfect-Eau-de-Parfum-100ml-upd_208c475641e9c4f17932e6852e74419e622bd613_1675693529.png"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography component="div" variant="h6">
          Product
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          component="div"
        >
          Description
        </Typography>
      </Box>
      <Box>
        <Typography sx={{mb: 4, textAlign: "center"}}  component="div" variant="h6">
          Price
        </Typography>
        <Button >Remove</Button>
      </Box>
  </Box>
  );
}

export default BasketCard;
