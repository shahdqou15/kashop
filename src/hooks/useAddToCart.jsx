import { useMutation } from '@tanstack/react-query'
import React from 'react'
import AuthAxiosInstance from '../api/AuthAxiosInstance'

export default function useAddToCart() {
    const mutation = useMutation({
        mutationFn:async({ProductId,Count})=>{
            return await AuthAxiosInstance.posy('/Carts',{
                ProductId:ProductId,
                Count:Count
            })
        }
    })
  return mutation;
}
