import React from 'react'
import useCategories from '../../hooks/useCategories'
import Categories from '../../components/categories/Categories';
import { Box, Breadcrumbs, CircularProgress, Grid, Link, Typography } from '@mui/material';
import CategoriesCard from '../../components/categories/CategoriesCard';
import { useTranslation } from 'react-i18next';



export default function CategoriesPage() {

    const { data, isLoading, isError, error } = useCategories(100);
    console.log(data)
    const { t } = useTranslation();

    if (isLoading) return <CircularProgress />
    if (isError) return <Box color={'red'}>{error.message}</Box>
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb" p={4} sx={{ paddingBottom: '35px' }}>
                <Link underline="hover" color="inherit" href="/">
                    {t('Home')}
                </Link>
                <Typography sx={{ color: 'text.primary' }}>{t('Categories')}</Typography>
            </Breadcrumbs>

            <Box p={5}>
                <Grid container spacing={5}>
                    {data.data.map((category) =>
                        <Grid item textAlign={'center'} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                            <CategoriesCard category={category} />
                        </Grid>
                    )}
                </Grid>

            </Box>
        </>

    )
}
