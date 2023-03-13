import React, { useContext } from "react";
import { PageContext } from "../context/PageContext";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Products from "./Products";
import MyBasket from "./MyBasket";
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
