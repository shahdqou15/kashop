import React from 'react'
import useProfile from '../../hooks/useProfile';
import { useTranslation } from 'react-i18next';
import { Box, Card, CardContent, CircularProgress, Grid, Typography } from '@mui/material';

export default function ProfileOrders() {

  const { data, isLoading, isError, error } = useProfile();
  console.log(data.orders)
  const { t } = useTranslation();

  if (isLoading) return <CircularProgress />
  if (isError) return <Box color={'red'}>{error.message}</Box>
  return (

    <Box>
      <Typography variant='h5' fontWeight={'bold'} pb={3}>{t('Your Orders')}</Typography>
      <Grid container spacing={5}>
        {data.orders.map(order => (
          <Grid item size={{ xs: '12',sx:'12' }}>
            <Card>
              <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 18 }}>
                 {t('order id')}: {order.id}
                </Typography>
                <Typography fontWeight={'bold'} fontSize={18} >{t('Order Date')}: </Typography><Typography>{order.orderDate}</Typography>
                <Typography fontWeight={'bold'} fontSize={18}>{t('Amount Paid')}: </Typography><Typography>{order.amountPaid}</Typography>
                <Typography fontWeight={'bold'} fontSize={18}>{t('Payment Status')}: </Typography><Typography>{order.paymentStatus}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
