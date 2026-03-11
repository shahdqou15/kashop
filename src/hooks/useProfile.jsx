import { useQuery } from '@tanstack/react-query'
import React from 'react'
import AuthAxiosInstance from '../api/AuthAxiosInstance'

export default function useProfile() {
  return useQuery({
    queryKey:['profile','en'],
    queryFn:async()=>{
        const response = await AuthAxiosInstance.get('/Profile');
        return response.data
    },
    staleTime:1000*60*5
  })
}
