import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";

function TrendingProduct(data) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        width: "100%",
        mt: "20px",
        gap: "10px",
        p: "10px",
      }}
    >
      <CardMedia
        sx={{ objectFit: "contain" }}
        component="img"
        alt="product"
        height="200"
        image={data.data.image}
      />
      <Typography
        sx={{
          fontSize: "15px",
          fontWeight: "bold",
          textAlign: "center",
          color: "#1484cb",
        }}
        component="div"
      >
        {data.data.title}
      </Typography>
    </Card>
  );
}

export default TrendingProduct;
