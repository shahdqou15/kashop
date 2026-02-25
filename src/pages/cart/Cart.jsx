import React from 'react'
import useCart from '../../hooks/useCart';
import { Button, CircularProgress } from '@mui/material';
import {Box} from '@mui/material';
import { useCounterStore } from '../../store/useCounterStore';

export default function Cart() {
        const count = useCounterStore((state)=>state.counter)
        const increase = useCounterStore((state)=>state.increase)
    //  const {data,isLoading,isError,error}= useCart();
    //  if(isLoading)return <CircularProgress/>
    //  if(isError)return <Box color={'red'}>{error.message}</Box>
  return (
    <div>Cart - {count}
    <Button onClick={increase}>increase</Button></div>

  )
}
