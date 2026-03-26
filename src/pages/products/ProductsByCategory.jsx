import React from 'react'
import useProductsByCategory from '../../hooks/useProductsByCategory'
import { Link, useParams } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';
import ProductCard from '../../components/products/ProductCard';

export default function ProductsByCategory() {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useProductsByCategory(id);
    console.log("data")
    console.log(data);

    if (isLoading) return <CircularProgress />
    if (isError) return <Box color={'red'}>{error.message}</Box>
    return (
        <Box p={5}>
            <Grid container spacing={4}>
                {data?.response.map((product) => (
                    <ProductCard product={product}/>
                
            
        ))}
        </Grid>
        </Box>
    )
}
