import { Card } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import useThemeStore from '../../store/useThemeStore';

export default function CategoriesCard({ category }) {
  const navigate = useNavigate();
  const mode = useThemeStore((state) => state.mode);
  return (
    <Card sx={{
      padding: '15px', cursor: "pointer", color: mode === 'light' ? 'black' : 'white', transition: 'all 0.5s',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
        backgroundColor: '#DB4444',
        color: '#fff'
      }
    }} underline='none'
      key={category.id}
      onClick={() => navigate(`/ProductsByCategory/${category.id}`)}>{category.name}
    </Card>
  )
}
