import { Card, CardContent } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import BasketCard from "./BasketCard"

const MyBasket = () => {
    return (
        <Box sx={{display: "flex", gap: 5, flexDirection: "column", maxWidth: 800, width: "100%", margin: "200px auto"}}>
            <Card>
                <CardContent >
                    <BasketCard/>
                </CardContent>
            </Card>
            <Card >
                <CardContent >
                    <BasketCard/>
                </CardContent>
            </Card>
            <Card >
                <CardContent >
                    <BasketCard/>
                </CardContent>
            </Card>
        </Box>
    )
}

export default MyBasket;