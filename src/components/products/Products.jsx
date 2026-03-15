import React from 'react'
import useProducts from '../../hooks/useProducts'
import { CircularProgress, Box, Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProductCard from './ProductCard';


export default function Products() {
    const { data, isLoading, isError, error } = useProducts();
    const {t} = useTranslation();
    if (isLoading) return <CircularProgress />
    if (isError) return <Box color={'red'}>{error.message}</Box>
    console.log(data)
    return (
        <Box className="products">
            <Typography variant='h4' mb={2}>{t('Products')}</Typography>
            <Grid container spacing={4}>
                {data.response.data.map((product) =>
                    <ProductCard product={product}/>
                )}
            </Grid>

        </Box>
    )
}
