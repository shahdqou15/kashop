import { Box, CircularProgress } from '@mui/material';
import useCategories from '../../hooks/useCategories';
import CategoriesCard from './CategoriesCard';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export default function Categories() {
  const { data, isLoading, isError, error } = useCategories(4);
  const { t } = useTranslation();

  if (isLoading) return <CircularProgress />
  if (isError) return <Box color={'red'}>{error.message}</Box>
  console.log(data)

  return (
    <Box display={'flex'} flexDirection={'column'} gap={'20px'} textAlign={'center'}>{data.data.map((category) =>
    <CategoriesCard category={category} key={category.id}/> )}
  <Link to={'/categories'}>{t('Show More')}</Link>
</Box>
  )
}
