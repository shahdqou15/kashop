import { Box, CircularProgress } from '@mui/material';
import useCategories from '../../hooks/useCategories';
export default function Categories() {
    const {data,isLoading,isError,error}= useCategories();
    if(isLoading)return<CircularProgress/>
    if(isError)return<Box color={'red'}>{error.message}</Box>
    console.log(data)

  return (
    <div>{data.data.map((categorie)=><Box>{categorie.name}</Box>)}</div>
  )
}
