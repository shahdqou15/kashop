import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import AuthAxiosInstance from '../api/AuthAxiosInstance'

export default function useCheckout() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (paymentMethod) => {
            console.log(paymentMethod);
            return await AuthAxiosInstance.post('/Checkouts', { PaymentMethod: paymentMethod })
        }, onSuccess: (response) => {
            console.log(response.data.url);
            if (response?.data?.url){
                console.log(response.data.url)
                location.href = response.data.url;
            }
            queryClient.invalidateQueries(
                { queryKey: ['carts'] }
            )
        }
    })
}
