import { Card } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import useThemeStore from '../../store/useThemeStore';

export default function CategoriesCard({category}) {
    const navigate = useNavigate();
      const mode = useThemeStore( (state)=>state.mode);
  return (
    <Card sx={{padding:'15px',cursor: "pointer" ,color:mode === 'light'?'black':'white'}} underline='none'
          key={category.id}
           onClick={() => navigate(`/ProductsByCategory/${category.id}`)}>{category.name}
          </Card>
  )
}
