import React from 'react'
import BasketCard from './BasketCard';
import BasketCheckout from "./BasketCheckout";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider, Box } from "@mui/material";


const BasketHoverContent = () => {
    return(
    <Card >
        <CardContent sx={{p: "16px 0 16px 16px"}} >
            <Box sx={{ height: 250, pr: 2, overflowY: "scroll"}}>
                <BasketCard/>
                <Divider sx={{mt: 3, mb: 3}}/>
                <BasketCard/>
                <Divider sx={{mt: 3, mb: 3}}/>
                <BasketCard/>
                <Divider sx={{mt: 3, mb: 3}}/>
                <BasketCard/>
                <Divider sx={{mt: 3, mb: 3}}/>
            </Box>
            <Box sx={{pr: "16px"}}> 
                <BasketCheckout/>
            </Box>
        </CardContent>
    </Card>
    )
}

export default BasketHoverContent;