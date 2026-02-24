import React from 'react'
import useCart from '../../hooks/useCart';
import { CircularProgress } from '@mui/material';
import {Box} from '@mui/material';

export default function Cart() {
    const {data,isLoading,isError,error}= useCart();
    if(isLoading)return <CircularProgress/>
    if(isError)return <Box color={'red'}>{error.message}</Box>
  return (
    <div>Cart</div>
  )
}
