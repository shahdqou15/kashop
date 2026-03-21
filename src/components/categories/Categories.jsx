import { Box, Card, CircularProgress, Link } from '@mui/material';
import useCategories from '../../hooks/useCategories';
import { useNavigate } from 'react-router-dom';
import useThemeStore from '../../store/useThemeStore';

export default function Categories() {
  const { data, isLoading, isError, error } = useCategories(4);
  const navigate = useNavigate();
  const mode = useThemeStore( (state)=>state.mode);

  if (isLoading) return <CircularProgress />
  if (isError) return <Box color={'red'}>{error.message}</Box>
  console.log(data)

  return (
    <Box display={'flex'} flexDirection={'column'} gap={'5px'} textAlign={'center'}>{data.data.map((category) =>
     <Card sx={{padding:'20px',cursor: "pointer" ,color:mode === 'light'?'black':'white'}} underline='none'
      key={category.id}
       onClick={() => navigate(`/ProductsByCategory/${category.id}`)}>{category.name}
      </Card> )}
  
</Box>
  )
}
