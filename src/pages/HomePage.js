import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import uuid from "react-uuid";
import Card from "@mui/material/Card";
import { Button, CardContent, Box } from "@mui/material";
import { PageContext } from "../context/PageContext";
import TrendingProduct from "../components/TrendingProduct";

const HomePage = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const { setPage } = useContext(PageContext);
  const fetchData = () => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        const productsList = response.data.filter(
          (data) => data.title.length < 50
        );
        setTrendingProducts((prev) => [...prev, ...productsList]);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className="home-page">
      <div className="cover-img"></div>
      <div className="trending-products">
        <h1>Trending Products</h1>
        <Card
          sx={{
            display: "flex",
            mt: "20px",
            flexDirection: "column",
            p: "20px",
          }}
        >
          <Button
            onClick={() => setPage(1)}
            variant="outlined"
            sx={{
              maxWidth: "250px",
              width: "100%",
              height: "50px",
              margin: "0 auto",
            }}
          >
            Shop Now
          </Button>
          <Box
            sx={{
              mt: "20px",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {trendingProducts.map((product) => (
              <TrendingProduct key={uuid()} data={product} />
            ))}
          </Box>
        </Card>
      </div>
    </main>
  );
};

export default HomePage;
