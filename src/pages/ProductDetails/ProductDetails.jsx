import React from 'react'
import { useParams } from 'react-router-dom'
import useProductDetails from '../../hooks/useProductDetails';
import { CircularProgress, Box, Typography, Rating, Button, Card, IconButton, TextField } from '@mui/material';
import useAddToCart from '../../hooks/useAddToCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useProductDetails(id);
  const {mutate,isPending} = useAddToCart();

  if (isLoading) return <CircularProgress />
  if (isError) return <Box color={'red'}>{error.message}</Box>
  console.log(data);
  const product = data.response;
  return (
    <>
      <Box className='ProductDetails' sx={{ display:{xs:'block',sm:'flex'}, justifyContent: 'center', alignItems: 'center', gap: '70px' }}>
        <Box columnGap={7} component={'img'} src={product.image} alt={'Product_Image'} sx={{ width: { xs: '250px',md: '300px' } }}></Box>
        <Box columnGap={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '10px' }}>
          <Typography component='h2' variant='h3'>{product.name}</Typography>
          <Rating value={product.rate} readOnly></Rating>
          <Typography>{product.price}$</Typography>
          <Typography gutterBottom fontSize={'10px'}>{product.description}</Typography>
          <Box sx={{display:'flex',alignItems:'center',gap:'16px'}}>
            <Box display={'flex'}>
              <IconButton >
                <AddIcon />
              </IconButton>
              <TextField py={'4px'}></TextField>
              <IconButton>
                <RemoveIcon/>
              </IconButton>
            </Box>
            <Button disabled={isPending} variant="contained" color="primary" onClick={()=> mutate({
            ProductId:product.id,
            Count:1
          })}>Add to Cart</Button>
          <Button variant="outlined" color='primary'><FavoriteBorderIcon /></Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}