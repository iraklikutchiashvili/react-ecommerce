import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CardMedia, Typography, Box, Card } from "@mui/material";
import IncreaseDecrease from "../components/IncreaseDecrease";
import StarIcon from "@mui/icons-material/Star";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    image: "",
    id: "",
    description: "",
    rating: "",
    quantity: 0,
  });
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct((prev) => {
          return { ...prev, ...response.data };
        });
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <main className="product-page">
      <div className="body">
        <CardMedia
          sx={{ objectFit: "contain", maxWidth: "600px", width: "100%" }}
          component="img"
          alt="product"
          height="500px"
          image={product.image}
        />
        <Card className="product-details">
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
                color: "#1484cb",
              }}
              component="div"
            >
              {product.rating.rate} <StarIcon />
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
                color: "#1484cb",
              }}
              component="div"
            >
              ${product.price}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "center",
              color: "#1484cb",
            }}
            component="div"
          >
            {product.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: "100",
              textAlign: "center",
              color: "#1484cb",
            }}
            component="div"
          >
            {product.description}
          </Typography>

          <IncreaseDecrease data={product} action={setProduct} />
        </Card>
      </div>
    </main>
  );
}

export default ProductPage;
