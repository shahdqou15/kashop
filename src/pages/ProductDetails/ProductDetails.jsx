import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useProductDetails from '../../hooks/useProductDetails';
import { CircularProgress, Box, Typography, Rating, Button, Card, IconButton, TextField, Breadcrumbs, CardContent, CardMedia, BottomNavigation, BottomNavigationAction, Fab, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Grid } from '@mui/material';
import useAddToCart from '../../hooks/useAddToCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTranslation } from 'react-i18next';
import useProductReviews from '../../hooks/useProductReviews';
import CircleIcon from '@mui/icons-material/Circle';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

export default function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading} = useProductDetails(id);
  const { mutate: reviews ,error,isError} = useProductReviews(id);
  const { mutate, isPending } = useAddToCart();
  const { t } = useTranslation();
  const [count, setCount] = useState(1);
  const [value, setValue] = React.useState(0);
  const [rate, setrate] = React.useState(null);
  const [comment, setComment] = useState("");
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const email = formJson.email;
    console.log(email);
    handleClose();
  };

  if (isLoading) return <CircularProgress />
  if (isError) return <Box color={'red'}>{error.message}</Box>
  const product = data.response;
  console.log(product);

  return (
    <>
      <Box className='ProductDetails'>
        <Card sx={{ display: { xs: 'block', sm: 'flex' }, height: 'auto', width: 'auto', position: 'relative' }}>
          <CardMedia
            component="img"
            sx={{ width: { sm: '300px', md: '450px' } }}
            src={product.image}
            alt="Product-img"
          />
          <Box sx={{ position: 'absolute', top: 0 }}>
            <Fab variant="extended" size="small" sx={{ height: '20px' }} color="primary">
              {t('Quantity')}: {product.quantity}
            </Fab>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '15px', flex: '1 0 auto' }}>
              <Typography component='h2' variant='h4'>{product.name}</Typography>
              <Box sx={{ display: 'flex', gap: '5px', color: 'text.secondary' }}>
                <Rating value={product.rate} readOnly></Rating>
                <Typography component={'span'}>({product.reviews.length}  {t('Reviews')})</Typography>
              </Box>

              <Typography color='red'>{product.price}$</Typography>
              <Typography gutterBottom fontSize={'10px'} sx={{ color: 'text.secondary' }}>{product.description}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography>{t('Size')}:</Typography>
                <BottomNavigation
                  showLabels
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                >
                  <BottomNavigationAction label="XS" />
                  <BottomNavigationAction label="SM" />
                  <BottomNavigationAction label="MD" />
                  <BottomNavigationAction label="LG" />
                  <BottomNavigationAction label="XL" />
                </BottomNavigation>
              </Box>


              <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Box component={Button} height={'38px'} border={1} display={'flex'} alignItems={'center'}>
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
              <Card sx={{ display: 'flex', gap: '15px', width: 'auto', paddingTop: '15px' }}>
                <DeliveryDiningIcon fontSize='large' />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <Typography>{t('Free Delivery')}</Typography>
                  <Typography whiteSpace={'nowrap'}>{t('Enter your postal code for Delivery Availability')}</Typography>
                </Box>

              </Card>
              <Card sx={{ display: 'flex', gap: '15px', width: 'auto', paddingTop: '10px' }}>
                <KeyboardReturnIcon fontSize='large' />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <Typography>{t('Return Delivery')}</Typography>
                  <Typography whiteSpace={'nowrap'}>{t('EFree 30 Days Delivery Returns.')}</Typography>
                </Box>

              </Card>
            </CardContent>
          </Box>
        </Card>


      </Box>
      <Box p={5}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <CircleIcon sx={{ color: '#DB4444' }} />
            <Typography color='primary'>{t('Reviews')}</Typography>
          </Box>


          <React.Fragment>
            <Button variant="contained" color='primary' onClick={handleClickOpen}>{t('Add Reviews')}</Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>{t('Add Your Review')}</DialogTitle>
              {(isError) && <Typography color='red'>{error.response?.data?.message}</Typography>}
              <DialogContent>
                <Rating
                  name="simple-controlled"
                  value={rate}
                  onChange={(event, newValue) => {
                    setrate(newValue);
                  }}
                />
                <Box component={'form'} onSubmit={handleSubmit} id="subscription-form">
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    label="Your Review"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={comment}
                    onChange={(e)=>setComment(e.target.value)
                    
                    }
                  />
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>{t('Cancel')}</Button>
                <Button type="submit" form="subscription-form" disabled={isPending} onClick={() => reviews({
                  Rating: rate,
                  Comment: comment
                })}>
                  {t('Add')}
                </Button>
              </DialogActions>
            </Dialog>
          </React.Fragment>


        </Box>
        <Grid container spacing={4} p={2}>{product.reviews.map((p) => (
          <Grid item size={{ xs: 12, sm: 6, md: 6, lg: 5 }}>
            <Card height={'100px'}>
              <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                  {p.userName}
                </Typography>
                <Rating readOnly value={p.rating}></Rating>
                <Typography variant="body2">
                  {p.comment}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}</Grid>
      </Box>
    </>
  )
}