import React from 'react'
import AuthAxiosInstance from '../api/AuthAxiosInstance'
import { useQuery } from '@tanstack/react-query';

export default function useCart() {
  const getItems = async()=>{
    const response = await AuthAxiosInstance.get(`/Carts`);
    console.log(response)
    return response.data
  }

   const query = useQuery({
        queryKey: ['carts','en'],
        queryFn: getItems,
        staleTime: 1000 * 60 * 5
    })

    return query;

}
