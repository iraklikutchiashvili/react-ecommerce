import { Button } from "@mui/material";
import { useState } from "react";
import BrandCarusel from "../components/BrandCarusel"

const AboutPage = () => {
  const [toggleButtons, setToggleButtons] = useState(true);
  function handleButtonClick(){
    setToggleButtons(prev => !prev)
  }
  return (
    <div className="about-page">
     
      <div className="buttons">
        <Button onClick={handleButtonClick} variant={toggleButtons ? "contained" : "outlined"} >About Us</Button>
        <Button onClick={handleButtonClick} variant={toggleButtons ? "outlined" : "contained"} >Contact Us</Button>
      </div>
     
      <div style={{display: toggleButtons ? "block" : "none"}} className="about-content">
        <p>
        Welcome to our ecommerce website! We are a dedicated team committed to providing you with the best possible shopping experience. Our mission is to offer high-quality products at competitive prices, with exceptional customer service to ensure your satisfaction.
        </p>
        <h1>
          Our Partners
        </h1>
        <BrandCarusel/>
      </div>
      <div style={{display: toggleButtons ? "none" : "block"}} className="contact-content">
        nostrud nulla quis Lorem consectetur minim deserunt veniam nisi amet cupidatat ea.
      </div>
    </div>
  );
};

export default AboutPage;
