import { Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BasketCard from "../components/BasketCard";
import Checkout from "../components/Checkout";

const MyBasket = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 5,
        flexDirection: "column",
        maxWidth: 800,
        width: "100%",
        margin: "150px auto",
      }}
    >
      <Card>
        <CardContent>
          <BasketCard />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <BasketCard />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <BasketCard />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <BasketCard />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <BasketCard />
        </CardContent>
      </Card>
      <Checkout />
    </Box>
  );
};

export default MyBasket;
