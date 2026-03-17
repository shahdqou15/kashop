import { Box, Card, CardContent, CardMedia, Grid, IconButton, Link, Rating, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

export default function ProductCard({product}) {
    return (
            <Link component={RouterLink} to={`/Products/${product.id}`} underline='none'>
                <Card sx={{ maxWidth: 345, padding: 3, height: '430px'}}>
                    <CardMedia
                        component="img"
                        height="280"
                        image={product.image}
                        alt="product-image"
                    />
                    <CardContent sx={{display:'flex', flexDirection:'column',gap:'5px'}} >
                        <Typography component="h5" variant="h5" sx={{ fontSize: '18px', fontWeight: 'bold',whiteSpace:'nowrap' }}>
                            {product.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'red' }}>
                            {product.price}$
                        </Typography>
                        <Rating readOnly value={product.rate}></Rating>
                    </CardContent>
                </Card>
            </Link>
    )
}
