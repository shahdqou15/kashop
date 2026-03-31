import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import AuthAxiosInstance from '../api/AuthAxiosInstance'
import i18n from '../i18next';

export default function useAddToCart() {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn:async({ProductId,Count})=>{
            return await AuthAxiosInstance.post('/Carts',{
                ProductId:ProductId,
                Count:Count
            })
        }, onSuccess: ()=>{
            queryClient.invalidateQueries(
                {queryKey: ['carts']}
            )
        }
    })
  return mutation;
}
