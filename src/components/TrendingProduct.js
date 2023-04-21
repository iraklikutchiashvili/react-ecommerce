import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function TrendingProduct(data) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "2000px",
        height: "500px",
        width: "100%",
        m: "20px auto",
        gap: "10px",
        p: "10px",
        boxShadow: "none",
      }}
    >
      <Link
        style={{ maxWidth: "300px", width: "100%", margin: "0 auto" }}
        to={`/products/${data.data.id}`}
        onClick={scrollToTop}
      >
        <CardMedia
          sx={{ objectFit: "contain" }}
          component="img"
          alt="product"
          height="300"
          image={data.data.image}
        />
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: "bold",
            textAlign: "center",
            color: "#1484cb",
            width: "100%",
          }}
          component="div"
        >
          {data.data.title}
        </Typography>
      </Link>
    </Card>
  );
}

export default TrendingProduct;
