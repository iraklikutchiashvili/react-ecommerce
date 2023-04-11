import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";

function TrendingProduct(data) {
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
        boxShadow: "none"
      }}
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
          width: "100%"
        }}
        component="div"
      >
        {data.data.title}
      </Typography>
    </Card>
  );
}

export default TrendingProduct;
