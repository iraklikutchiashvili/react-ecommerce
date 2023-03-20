import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ProductsContext } from "../context/ProductsContext";

function ProductCard({ data }) {
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
    <Card
      sx={{
        maxWidth: 350,
        width: "100%",
        marginTop: 10,
      }}
    >
      <CardMedia
        sx={{ objectFit: "cover" }}
        component="img"
        alt="product"
        height="300"
        image={`https://${data.imageUrl}`}
      />
      <CardContent
        sx={{
          height: 80,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            color: "#1484cb",
          }}
          component="div"
        >
          {data.name.toUpperCase()}
        </Typography>
      </CardContent>
      <Typography
        sx={{ textAlign: "center", fontWeight: "bold" }}
        variant="h6"
        component="div"
      >
        {data.price.current.text}
      </Typography>
      <CardActions sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
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
        sx={{ mt: 3 }}
      >
        Add To Basket
      </Button>
    </Card>
  );
}

export default ProductCard;
