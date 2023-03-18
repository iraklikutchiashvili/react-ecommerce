import React, { useContext } from "react";
import { PageContext } from "../context/PageContext";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import Products from "../pages/Products";
import MyBasket from "../pages/MyBasket";
const Content = () => {
  const { page } = useContext(PageContext);
  return (
    <div className="content">
      {page === 0 && <HomePage />}
      {page === 1 && <Products />}
      {page === 2 && <AboutPage />}
      {page === 3 && <MyBasket />}
    </div>
  );
};

export default Content;
