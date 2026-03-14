import { Box, Card, CircularProgress } from '@mui/material';
import useCategories from '../../hooks/useCategories';
import { useNavigate } from 'react-router-dom';
export default function Categories() {
  const { data, isLoading, isError, error } = useCategories();
  const navigate = useNavigate();


  if (isLoading) return <CircularProgress />
  if (isError) return <Box color={'red'}>{error.message}</Box>
  console.log(data)

  return (
    <Box display={'flex'} gap={4}>{data.data.map((categorie) =>
      <Card sx={{ padding: '30px', cursor: "pointer" }} key={categorie.id} onClick={() => navigate(`/ProductsByCategory/${categorie.id}`)}>{categorie.name}
      </Card>)}</Box>
  )
}
