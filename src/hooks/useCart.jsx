import React from 'react'
import AuthAxiosInstance from '../api/AuthAxiosInstance'
import { useQuery } from '@tanstack/react-query';

export default function useCart() {
  const getItems = async()=>{
    const response = await AuthAxiosInstance.get(`/Carts`);
    return response.data.response
  }

   const query = useQuery({
        queryKey: ['cart','en'],
        queryFn: getItems,
        staleTime: 1000 * 60 * 5
    })

    return query;

}
