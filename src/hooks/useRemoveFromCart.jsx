import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import AuthAxiosInstance from '../api/AuthAxiosInstance'

export default function useRemoveFromCart() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (cartItemId) => AuthAxiosInstance.delete(`/Carts/${cartItemId}`),
        onSuccess: () => {
            queryClient.invalidateQueries(
                { queryKey: ['carts'] }
            )
        }
    })
}
