import React, { useState } from 'react'
import useCart from '../../hooks/useCart';
import { Button, CircularProgress, Box, Link, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import useCheckout from '../../hooks/useCheckout';
import { useTranslation } from 'react-i18next';

export default function Checkout() {
    const { data, isLoading, isError, error } = useCart();
    const { mutate, isPinding } = useCheckout();
    const [paymentMethod, setpaymentMethod] = useState('Cash');
    const {t} = useTranslation();
    if (isLoading) return <CircularProgress />
    if (isError) return <Box color={'red'}>{error.message}</Box>
    return (
        <Box className="cart" p={5}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                {t('Product')}
                            </TableCell>
                            <TableCell>
                                {t('Price')}
                            </TableCell>
                            <TableCell>
                                {t('Quantity')}
                            </TableCell>
                            <TableCell>
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
            <Box p={5} width={'100%'} display={'flex'} flexDirection={'column'} gap={3}>
                <Typography variant='h5'>{t('Cart Total')}</Typography>
                <Table>
                    <TableRow>
                        <TableCell>{t('Subtotal')}:</TableCell>
                        <TableCell>${data.cartTotal}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>{t('Shipping')}:</TableCell>
                        <TableCell>Free</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>{t('total')}</TableCell>
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
                        <FormControlLabel value="Visa" control={<Radio />} label="Visa" />
                    </RadioGroup>
                </FormControl>

            </Box>
            <Button variant="contained" color='primary' onClick={() => mutate(paymentMethod)} disabled={isPinding}>{t('Pay Now')}</Button>
        </Box>
    )
}
