import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ProductsContext } from "../context/ProductsContext";

export default function ProductCard(props) {
  const [productsQty, setProductsQty] = React.useState(0);
  const { handleAddToBasketClick } = React.useContext(ProductsContext);
  const increaseProductsQty = () => {
    setProductsQty(productsQty + 1);
  };
  const decreaseProductsQty = () => {
    if (productsQty > 0) {
      setProductsQty(productsQty - 1);
    }
  };
  return (
    <Card sx={{ maxWidth: 200, marginTop: 10, paddingTop: 1 }}>
      <CardMedia
        sx={{ objectFit: "contain" }}
        component="img"
        alt="green iguana"
        height="80"
        image="https://image-optimizer-reg.production.sephora-asia.net/images/product_images/1_Product_3614227086227-Marc-Jacobs-MARC-JACOBS-FRAGRANCES-Perfect-Eau-de-Parfum-100ml-upd_208c475641e9c4f17932e6852e74419e622bd613_1675693529.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Product
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Product Description
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Price
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="primary"
          sx={{ fontSize: 25, height: 30 }}
          onClick={increaseProductsQty}
        >
          +
        </Button>
        <b style={{ marginLeft: 7, fontSize: 20 }}>{productsQty}</b>
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
        onClick={() => handleAddToBasketClick(productsQty, setProductsQty)}
        variant="contained"
        size="small"
        fullWidth={true}
      >
        Add To Basket
      </Button>
    </Card>
  );
}
