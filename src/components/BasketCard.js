import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Button } from "@mui/material";

function BasketCard() {
  const theme = useTheme();
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", gap: 5 }}>
          <CardMedia
            sx={{ objectFit: "contain" }}
            component="img"
            alt="img"
            height="80"
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
          <Typography component="div" variant="h6">
            Price
          </Typography>
        </Box>
        <Typography
          sx={{ mt: 3, ml: 2, fontWeight: "bold" }}
          component="div"
          color="text.primary"
        >
          Subtotal
        </Typography>
        <Button
          sx={{ mt: 1, borderRadius: 15 }}
          variant="contained"
          size="medium"
          fullWidth={true}
        >
          View Basket & Checkout
        </Button>
      </CardContent>
    </Card>
  );
}

export default BasketCard;

// <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//   <CardContent sx={{ flex: "1 0 auto" }}>
//     <CardMedia
//       sx={{ objectFit: "contain" }}
//       component="img"
//       alt="green iguana"
//       height="80"
//       image="https://image-optimizer-reg.production.sephora-asia.net/images/product_images/1_Product_3614227086227-Marc-Jacobs-MARC-JACOBS-FRAGRANCES-Perfect-Eau-de-Parfum-100ml-upd_208c475641e9c4f17932e6852e74419e622bd613_1675693529.png"
//     />
//   </CardContent>
//   <Box>
//     <Typography component="div" variant="h5">
//       Product
//     </Typography>
//     <Typography variant="subtitle1" color="text.secondary" component="div">
//       Description
//     </Typography>
//   </Box>
//   <Typography component="div" variant="h5">
//     Price
//   </Typography>
// </Box>;
