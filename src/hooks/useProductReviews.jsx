import { useMutation, useQueryClient } from "@tanstack/react-query";
import AuthAxiosInstance from "../api/AuthAxiosInstance";
import useAuthStore from "../store/useAuthStore";


export default function useProductReviews(id) {
    const { token } = useAuthStore.getState();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ Rating, Comment }) => {
            return await AuthAxiosInstance.post(`/Products/${id}/reviews`, {
                Rating,
                Comment,
                token
            })
        }, onSuccess: () => {
            queryClient.invalidateQueries(
                { queryKey: ['Products', id] }
            )
        }, onError:(error)=>{
        console.log("!!",error)
    }
    })
}
