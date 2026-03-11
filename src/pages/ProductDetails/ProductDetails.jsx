import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useProductDetails from '../../hooks/useProductDetails';
import { CircularProgress, Box, Typography, Rating, Button, Card, IconButton, TextField } from '@mui/material';
import useAddToCart from '../../hooks/useAddToCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTranslation } from 'react-i18next';

export default function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useProductDetails(id);
  const { mutate, isPending } = useAddToCart();
  const {t} = useTranslation();
  const [count, setCount] = useState(1);



  if (isLoading) return <CircularProgress />
  if (isError) return <Box color={'red'}>{error.message}</Box>
const product = data.response;
  console.log(product);
  
  return (
    <>
      <Box className='ProductDetails' sx={{ display: { xs: 'block', sm: 'flex' }, justifyContent: 'center', alignItems: 'center', gap: '70px' }}>
        <Box columnGap={7} component={'img'} src={product.image} alt={'Product_Image'} sx={{ width: { xs: '250px', md: '300px' } }}></Box>
        <Box columnGap={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px' }}>
          <Typography component='h2' variant='h3'>{product.name}</Typography>
          <Rating value={product.rate} readOnly></Rating>
          <Typography>{product.price}$</Typography>
          <Typography gutterBottom fontSize={'10px'}>{product.description}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Box display={'flex'} alignItems={'center'}>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
              <Typography>{count}</Typography>
              <IconButton onClick={() => count > 1 && setCount(count - 1)}>
                <RemoveIcon />
              </IconButton>
            </Box>
            <Button disabled={isPending} variant="contained" color="primary" onClick={() => mutate({
              ProductId: product.id,
              Count: count
            })}>{t('Add to Cart')}</Button>
            <Button variant="outlined" color='primary'><FavoriteBorderIcon /></Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}