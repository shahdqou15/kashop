import React from 'react'
import useProductsByCategory from '../../hooks/useProductsByCategory'
import { Link, useParams } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';

export default function ProductsByCategory() {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useProductsByCategory(id);
    console.log("data")
    console.log(data);

    if (isLoading) return <CircularProgress />
    if (isError) return <Box color={'red'}>{error.message}</Box>
    return (
        <Box>
            <Grid container spacing={4}>
                {data?.response.map((product) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
                        <Link to={`/Products/${product.id}`}>
                            <Card sx={{ maxWidth: 345, padding: 2, height: '400px' }}>
                                <CardMedia
                                    component="img"
                                    height="280"
                                    image={product.image}
                                    alt="product-image"
                                />
                                <CardContent>
                                    <Typography component="h5" variant="h5" sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'red' }}>
                                        {product.price}$
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>

                    </Grid>
                
            
        ))}
        </Grid>
        </Box>
    )
}
