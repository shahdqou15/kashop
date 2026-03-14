import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axiosInstance from '../api/axiosInstance'
import i18n from '../i18next';

export default function useProductsByCategory(id) {
    return useQuery({
        queryKey: ['productsByCategory', i18n.language, id],
        queryFn: async () => {
            const response = await axiosInstance.get(`/Products/category/${id}`);
            return response.data
        },
        staleTime: 1000 * 60 * 5
    })
}
