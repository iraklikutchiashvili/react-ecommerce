import { useContext, useEffect, useState } from "react";
import axios from "axios";
import uuid from "react-uuid";
import Card from "@mui/material/Card";
import { Button, CardContent, Box } from "@mui/material";
import { PageContext } from "../context/PageContext";
import TrendingProduct from "../components/TrendingProduct";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../customCarousel.css"

const HomePage = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const { setPage } = useContext(PageContext);
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
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
          
          
            <Carousel
              showThumbs={false}
              showArrows={true}
              autoPlay={true}
              infiniteLoop={true}
              selectedItem={trendingProducts[currentIndex]}
              onChange={handleChange}
              className="carousel-container"
            >
              {trendingProducts.map((product) => (
                <TrendingProduct key={uuid()} data={product} />
              ))}
            </Carousel>
            
          
        </Card>
      </div>
    </main>
  );
};

export default HomePage;
