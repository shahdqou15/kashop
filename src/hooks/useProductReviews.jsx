import { useMutation } from "@tanstack/react-query";
import AuthAxiosInstance from "../api/AuthAxiosInstance";


export default function useProductReviews(id) {
    return useMutation({
        mutationFn:async({Rating,Comment})=>{
            const response = await AuthAxiosInstance.post(`/Products/${id}/reviews`,{
                Rating,Comment
            })
            console.log("response")
            console.log(response)
        }
    })
}
