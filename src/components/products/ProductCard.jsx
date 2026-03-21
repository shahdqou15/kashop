import { Box, Button, Card, CardContent, CardMedia, Grid, IconButton, Link, Rating, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useAddToCart from '../../hooks/useAddToCart';
import useThemeStore from '../../store/useThemeStore';

export default function ProductCard({ product }) {
    const { mutate, isPending } = useAddToCart();
    const {mode} = useThemeStore();
    return (
       
            <Card sx={{ maxWidth: '345px', padding: '3px', height: '430px',position:'relative'}}>
              <Link component={RouterLink} to={`/Products/${product.id}`} underline='none'>  
              <CardMedia
                    component="img"
                    height="280"
                    image={product.image}
                    alt="product-image"
                    sx={{objectFit:'contain'}}
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }} >
                    <Typography component="h5" variant="h5" sx={{ fontSize: '18px', fontWeight: 'bold', whiteSpace: 'nowrap',
                        color:mode === 'light'?'black':'white'
                     }}>
                        {product.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'red' }}>
                        {product.price}$
                    </Typography>
                    <Rating readOnly value={product.rate}></Rating>
                    
                </CardContent>
                </Link>
                <Button variant='outlined' disabled={isPending} sx={{position:'absolute',bottom:'10px',left:'15px'}} onClick={() => mutate({
                        ProductId: product.id,
                        Count: 1
                    })}><AddShoppingCartIcon sx={{ fontSize: '20px' }} /></Button>
        
            </Card>
        
        
    )
}
