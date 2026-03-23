import React from 'react'
import useProducts from '../../hooks/useProducts'
import { CircularProgress, Box, Grid } from '@mui/material';
import ProductCard from './ProductCard';


export default function Products() {
    const { data, isLoading, isError, error } = useProducts();
    if (isLoading) return <CircularProgress />
    if (isError) return <Box color={'red'}>{error.message}</Box>
    console.log(data)
    return (
        <Box className="products" pt={5}>
            <Grid container spacing={4}>
                {data.response.data.map((product) =>
                <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
                    <ProductCard product={product}/>
                    </Grid>
                )}
            </Grid>

        </Box>
    )
}
