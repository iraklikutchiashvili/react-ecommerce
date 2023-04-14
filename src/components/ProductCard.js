import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import IncreaseDecrease from "./IncreaseDecrease";

function ProductCard({ data }) {
  const [products, setProducts] = React.useState({
    quantity: 0,
    title: "",
    price: 0,
    image: "",
    id: "",
  });

  React.useEffect(() => {
    setProducts((prev) => ({
      ...prev,
      title: data.title.toUpperCase(),
      price: data.price,
      image: data.image,
      id: data.id,
    }));
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Card
      sx={{
        maxWidth: 350,
        width: "100%",
        marginTop: 10,
      }}
    >
      <Link
        style={{
          maxWidth: "200px",
          width: "100%",
          height: "auto",
          margin: "0 auto",
        }}
        to={`/products/${products.id}`}
        onClick={scrollToTop}
      >
        <CardMedia
          sx={{ objectFit: "contain" }}
          component="img"
          alt="product"
          height="200"
          image={products.image}
        />
      </Link>
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
          <Link onClick={scrollToTop} to={`/products/${products.id}`}>
            {products.title}
          </Link>
        </Typography>
      </CardContent>
      <Typography
        sx={{ textAlign: "center", fontWeight: "bold" }}
        variant="h6"
        component="div"
      >
        ${products.price}
      </Typography>
      <IncreaseDecrease data={products} action={setProducts} />
    </Card>
  );
}

export default ProductCard;
