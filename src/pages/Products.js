import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import uuid from "react-uuid";
import loading from "../images/loading.gif";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const fetchData = () => {
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v2/list",
      params: {
        store: "US",
        offset: "5",
        categoryId: "4210",
        limit: "24",
        country: "US",
        sort: "freshness",
        currency: "USD",
        sizeSchema: "US",
        lang: "en-US",
      },
      headers: {
        "X-RapidAPI-Key": "9336dee78fmsh36a78241f153378p1d21cbjsneb31177562ec",
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((response) => {
        const productsList = response.data.products;
        setProducts((prev) => [...prev, ...productsList]);
        setIsFetching(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return isFetching ? (
    <img style={{ margin: "40vh auto auto 45%" }} src={loading} />
  ) : (
    <div className="products">
      {products.map((product) => (
        <ProductCard key={uuid()} data={product} />
      ))}
    </div>
  );
};

export default Products;
