import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { CardMedia } from '@mui/material';

const steps = [
    `https://1000logos.net/wp-content/uploads/2021/04/U.S.-Polo-Assn-logo.png`,  
    'https://cdn.dribbble.com/users/1588614/screenshots/5975830/zara-logo-redesign.jpg', 
    `https://cloudfront-us-east-2.images.arcpublishing.com/reuters/LKMRQKPNWBNZTION35UVELC3WQ.jpg`,
    'https://www.wpdiamonds.com/wp-content/uploads/2021/01/WPD-Article-Body-Images-2021-02-08T191317.673.png',
    'https://www.wpdiamonds.com/wp-content/uploads/2021/01/WPD-Article-Body-Images-2021-02-08T131557.420.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png',
    'https://www.pngplay.com/wp-content/uploads/7/Dell-Transparent-PNG.png'
];

const BrandsCarusel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1, margin: "10px auto" }}>
      <CardMedia
        sx={{ objectFit: "contain" }}
        component="img"
        alt="brand"
        height="250"
        image={steps[activeStep]}
      />
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            
          </Button>
        }
      />
    </Box>
  );
}

export default BrandsCarusel;