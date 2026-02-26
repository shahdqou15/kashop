import React from 'react'
import { useParams } from 'react-router-dom'
import useProductDetails from '../../hooks/useProductDetails';
import { CircularProgress , Box } from '@mui/material';

export default function ProductDetails() {
    const {id} = useParams();
    const { data, isLoading, isError, error } = useProductDetails(id);
    if (isLoading) return <CircularProgress />
    if (isError) return <Box color={'red'}>{error.message}</Box>
    console.log(data)
  return (
    <div>ProductDetails</div>
  )
}