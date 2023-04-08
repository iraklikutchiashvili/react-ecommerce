import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import uuid from "react-uuid";
import loading from "../images/loading.gif";
import { Button } from "@mui/material";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const fetchData = () => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        const productsList = response.data;
        setProducts((prev) => [...prev, ...productsList]);
        setAllProducts((prev) => [...prev, ...productsList]);
        setIsFetching(false);
      })
      .catch((error) => console.error(error));
  };
  const fetchCategories = () => {
    axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then((response) => {
        const categoriesList = response.data;
        setCategories(categoriesList);
      })
      .catch((error) => console.log(error));
  };

  const filterProducts = (e) => {
    const clickedCategory = e.target.value;
    setProducts((prev) =>
      allProducts.filter((product) => product.category === clickedCategory)
    );
  };

  const showAllProducts = () => {
    setProducts(allProducts);
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchCategories();
  }, []);
  return isFetching ? (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50vh" }}
    >
      <img src={loading} />
    </div>
  ) : (
    <div className="products">
      <div className="categories">
        <Button variant="outlined" onClick={showAllProducts}>
          All Products
        </Button>
        {categories.map((category) => (
          <Button
            variant="outlined"
            onClick={filterProducts}
            key={uuid()}
            value={category}
          >
            {category}
          </Button>
        ))}
      </div>
      {products.map((product) => (
        <ProductCard key={uuid()} data={product} />
      ))}
    </div>
  );
};

export default Products;
