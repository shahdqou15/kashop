import React from 'react'
import axiosInstance from '../api/axiosInstance'
import { useQuery } from '@tanstack/react-query'
import i18n from '../i18next'

export default function useProductDetails(id) {
const getProductsDetails = async()=>{
    const response = await axiosInstance.get(`/Products/${id}`)
    return response.data
}

const query = useQuery({
    queryKey:['Products',i18n.language,id],
    queryFn:getProductsDetails,
    staleTime:1000*60*5

})

  return query
}
