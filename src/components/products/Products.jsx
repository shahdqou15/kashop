import React from 'react'
import useProducts from '../../hooks/useProducts'
import { CircularProgress, Box, Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@mui/material';


export default function Products() {
    const { data, isLoading, isError, error } = useProducts();
    if (isLoading) return <CircularProgress />
    if (isError) return <Box color={'red'}>{error.message}</Box>
    console.log(data)
    return (
        <Box className="products">
            <Typography variant='h4' mb={2}>Products</Typography>
            <Grid container spacing={4}>
                {data.response.data.map((product) =>
                    <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                        <Card sx={{ maxWidth: 345, padding: 2 , height:'400px'}}>
                            <CardMedia
                                component="img"
                                height="280"
                                image={product.image}
                                alt="product-image"
                            />
                            <CardContent>
                                <Typography component="h5" variant="h5" sx={{fontSize:'20px',fontWeight:'bold'}}>
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'red' }}>
                                    {product.price}$
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>

        </Box>
    )
}
