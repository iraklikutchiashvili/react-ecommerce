import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ProductsContext } from "../context/ProductsContext";

function ProductCard({ data }) {
  const { handleAddToBasketClick } = React.useContext(ProductsContext);
  const [products, setProducts] = React.useState({
    quantity: 0,
    name: "",
    price: 0,
    img: "",
    id: "",
  });

  React.useEffect(() => {
    setProducts((prev) => ({
      ...prev,
      name: data.title.toUpperCase(),
      price: data.price,
      img: data.image,
      id: data.id,
    }));
  }, []);

  const increaseProductsQty = () => {
    setProducts((prev) => ({ ...prev, quantity: products.quantity + 1 }));
  };
  const decreaseProductsQty = () => {
    if (products.quantity > 0) {
      setProducts((prev) => ({
        ...prev,
        quantity: products.quantity - 1,
      }));
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
        sx={{ objectFit: "contain" }}
        component="img"
        alt="product"
        height="200"
        image={products.img}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          height: 70,
        }}
      >
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: "bold",
            textAlign: "center",
            color: "#1484cb",
          }}
          component="div"
        >
          {products.name}
        </Typography>
      </CardContent>
      <Typography
        sx={{ textAlign: "center", fontWeight: "bold" }}
        variant="h6"
        component="div"
      >
        ${products.price}
      </Typography>
      <CardActions sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <Button
          variant="outlined"
          color="primary"
          sx={{ fontSize: 25, height: 30 }}
          onClick={increaseProductsQty}
        >
          +
        </Button>
        <b style={{ marginLeft: 7, fontSize: 20 }}>{products.quantity}</b>
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
        onClick={() => handleAddToBasketClick(products, setProducts)}
        variant="contained"
        size="small"
        fullWidth={true}
        sx={{ mt: 1 }}
      >
        Add To Basket
      </Button>
    </Card>
  );
}

export default ProductCard;
