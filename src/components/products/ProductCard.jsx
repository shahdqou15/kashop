import { Box, Button, Card, CardContent, CardMedia, Grid, IconButton, Link, Rating, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useAddToCart from '../../hooks/useAddToCart';
import useThemeStore from '../../store/useThemeStore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function ProductCard({ product }) {
    const { mutate, isPending } = useAddToCart();
    const { mode } = useThemeStore();
    return (

        <Card sx={{
            maxWidth: '345px', padding: '3px', height: '400px', position: 'relative',
            '&:hover': {
                '& .productIcons': {
                    opacity: '1'
                }
            }
        }}>
            <Box position={'relative'}>
                <CardMedia
                    component="img"
                    height="280"
                    image={product.image}
                    alt="product-image"
                    sx={{ objectFit: 'contain' }}
                />
                <Box className='productIcons' sx={{ opacity: '0', display: 'flex', flexDirection: 'column', gap: '1px', position: 'absolute', top: 0, right: 0, transition: 'all 0.3s ease' }}>
                    <IconButton>
                        <FavoriteBorderIcon sx={{
                            color: '#000', backgroundColor: '#4d484844', width: '35px', height: '35px', borderRadius: '50%', padding: '5px',
                            '&:hover': {
                                backgroundColor: '#DB4444',
                                color: '#fff'
                            }
                        }} />
                    </IconButton>
                    <Link component={RouterLink} to={`/Products/${product.id}`} underline='none'>
                        <IconButton>
                            <RemoveRedEyeIcon sx={{
                                color: '#000', backgroundColor: '#4d484844', width: '35px', height: '35px', borderRadius: '50%', padding: '5px',
                                '&:hover': {
                                    backgroundColor: '#DB4444',
                                    color: '#fff'
                                }
                            }} />
                        </IconButton>
                    </Link>
                    <IconButton disabled={isPending} onClick={() => mutate({
                        ProductId: product.id,
                        Count: 1
                    })}>
                        <AddShoppingCartIcon sx={{
                            color: '#000', backgroundColor: '#4d484844', width: '35px', height: '35px', borderRadius: '50%', padding: '5px',
                            '&:hover': {
                                backgroundColor: '#DB4444',
                                color: '#fff'
                            }
                        }} />
                    </IconButton>
                </Box>
            </Box>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }} >
                <Typography component="h5" variant="h5" sx={{
                    fontSize: '18px', fontWeight: 'bold', whiteSpace: 'nowrap',
                    color: mode === 'light' ? 'black' : 'white'
                }}>
                    {product.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'red' }}>
                    {product.price}$
                </Typography>
                <Rating readOnly value={product.rate}></Rating>
            </CardContent>
        </Card>


    )
}
