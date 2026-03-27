import React, { useState } from 'react'
import useCart from '../../hooks/useCart';
import { Button, CircularProgress, Box, Link, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, Breadcrumbs } from '@mui/material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import useCheckout from '../../hooks/useCheckout';
import { useTranslation } from 'react-i18next';
import PayImage from '../../assets/images/PayMethod.png'

export default function Checkout() {
    const { data, isLoading, isError, error } = useCart();
    const { mutate, isPinding } = useCheckout();
    const [paymentMethod, setpaymentMethod] = useState('Cash');
    const { t } = useTranslation();
    if (isLoading) return <CircularProgress />
    if (isError) return <Box color={'red'}>{error.message}</Box>
    return (
        <Box className="cart" p={5} sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <Breadcrumbs aria-label="breadcrumb" sx={{ paddingBottom: '35px' }}>
                <Link underline="hover" color="inherit" href="/cart">
                    {t('Cart')}
                </Link>
                <Typography sx={{ color: 'text.primary' }}>{t('Checkout')}</Typography>
            </Breadcrumbs>
            <TableContainer>
                <Table>
                    <TableHead >
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>
                                {t('Product')}
                            </TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>
                                {t('Price')}
                            </TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>
                                {t('Quantity')}
                            </TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>
                                {t('Subtotal')}
                            </TableCell>

                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {data.items.map(item => (
                            <TableRow key={item.productId}>
                                <TableCell>
                                    {item.productName}
                                </TableCell>
                                <TableCell>
                                    ${item.price}
                                </TableCell>
                                <TableCell>
                                    {item.count}
                                </TableCell>
                                <TableCell>
                                    ${item.totalPrice}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box p={5} width={'100%'} display={'flex'} flexDirection={'column'} gap={3} border={1} borderColor={'divider'}>
                <Typography fontWeight={'Bold'} fontSize={'25px'}>{t('Cart Total')}</Typography>
                <Table>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold' }}>{t('Subtotal')}:</TableCell>
                        <TableCell>${data.cartTotal}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold' }}>{t('Shipping')}:</TableCell>
                        <TableCell>Free</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold' }}>{t('total')}</TableCell>
                        <TableCell>${data.cartTotal}</TableCell>
                    </TableRow>
                </Table>
            </Box>
            <Box>
                <FormControl>
                    <FormLabel id="PaymentMethod">{t('Payment Method')}</FormLabel>
                    <RadioGroup
                        aria-labelledby="PaymentMethod"
                        name="PaymentMethod"
                        value={paymentMethod}
                        onChange={(e) => setpaymentMethod(e.target.value)}
                    >
                        <FormControlLabel value="Cash" control={<Radio />} label="Cash" />
                        <Box display={'flex'} flexDirection={{xs:'column',md:'row'}} gap={5}>
                            <FormControlLabel value="Visa" control={<Radio />} label="Visa" />
                            <Box component={'img'} src={PayImage} sx={{ width: '235px', height: 'auto', objectFit: 'contain' }}></Box>
                        </Box>

                    </RadioGroup>
                </FormControl>

            </Box>
            <Box display={'flex'} gap={2}>
                <TextField id="outlined-basic" label="Coupon Code" variant="outlined" />
                <Button variant="contained" color='primary'>{t('Apply Coupon')}</Button>
            </Box>
            <Button variant="contained" sx={{ alignSelf: 'flex-start' }} color='primary' onClick={() => mutate(paymentMethod)} disabled={isPinding}>{t('Pay Now')}</Button>
        </Box>
    )
}
