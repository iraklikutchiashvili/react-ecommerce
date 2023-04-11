import { Button, Card } from "@mui/material";
import { useState } from "react";
import BrandCarusel from "../components/BrandCarusel"
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { SocialIcon } from 'react-social-icons';
import ContactForm from "../components/ContactForm";

const socialIconsStyles = {
  p: "5px",
  m: "20px auto 0 auto", 
  maxWidth: "320px", 
  width: "100%", 
  height: "60px", 
  justifyContent: "center", 
  alignItems: "center", 
  gap: "20px"
}

const cardStyles = {
  color: "#1484cb", 
  p: "10px", 
  display: "flex", 
  flexDirection: "column"
}

const buttonStyles = {
  width: 30, 
  height: 30, 
  m: "20px auto 0 auto"
}

const AboutPage = () => {
  const [toggleButtons, setToggleButtons] = useState(true);
  const [expand, setExpand] = useState(false);
  const [formDisplay, setFormDisplay] = useState(false);
  function displayForm(){
    setFormDisplay(prev => !prev)
  }
  function expandCard(){
    setExpand(prev => !prev)
  }
  function handleAboutClick(){
    setToggleButtons(true)
  }
  function handleContactClick(){
    setToggleButtons(false)
  }
  return (
    <div className="about-page">
     
      <div className="buttons">
        <Button onClick={handleAboutClick} variant={toggleButtons ? "contained" : "outlined"} >About Us</Button>
        <Button onClick={handleContactClick} variant={toggleButtons ? "outlined" : "contained"} >Contact Us</Button>
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
        <Card sx={{...cardStyles}}>
          <p>Follow us on social media to stay up-to-date on the latest products, promotions, and news from our ecommerce website! You can find us on:</p>
          <Button onClick={expandCard} sx={{...buttonStyles}} variant= "outlined" >
            <SwapVertIcon sx={{width: 25, height: 25}}  />
          </Button>
          <Card 
          sx={{...socialIconsStyles, display: expand ? "flex" : "none", }}
          >
            <SocialIcon url="https://twitter.com" />
            <SocialIcon url="https://www.tumblr.com" />
            <SocialIcon url="https://www.instagram.com" />
            <SocialIcon url="https://www.facebook.com" />
          </Card>
        </Card>
        <Card sx={{marginTop: "100px", ...cardStyles}}>
        <p>
            We're thrilled to hear from you! Whether you have a question about our products, need assistance with an order, or just want to say hello, our team is here to help.
        </p>
        <Button onClick={displayForm} sx={{...buttonStyles}} variant= "outlined" >
            <SwapVertIcon sx={{width: 25, height: 25}}  />
        </Button>
        <ContactForm display={formDisplay} />
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
