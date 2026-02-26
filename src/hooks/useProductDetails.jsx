import React from 'react'
import axiosInstance from '../api/axiosInstance'
import { useQuery } from '@tanstack/react-query'

export default function useProductDetails(id) {
const getProductsDetails = async()=>{
    const response = await axiosInstance.get(`/Products/${id}`)
    return response.data
}

const query = useQuery({
    queryKey:['Products','en',id],
    queryFn:getProductsDetails,
    staleTime:1000*60*5

})

  return query
}
