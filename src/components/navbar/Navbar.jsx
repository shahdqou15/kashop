import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Badge, Link } from '@mui/material';
import { Navigate, Link as RouterLink, useNavigate } from 'react-router-dom'
import Login from '../../pages/auth/Login';
import useAuthStore from '../../store/useAuthStore';
import useCart from '../../hooks/useCart';


export default function Navbar() {
  const { token } = useAuthStore();
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const { data } = useCart();
  const cartCount = data?.items?.length
  


  const handleLogout = () => {
    logout();
    navigate('/login');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" color="black">
            KASHOP
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '48px', alignItems: 'center' }}>
            <Link component={RouterLink} to={'/'} color="black" underline='none'>Home</Link>
            <Link component={RouterLink} to={'/'} color="black" underline='none'>Shop</Link>
            <Link component={RouterLink} to={'/'} color="black" underline='none'>About</Link>
            <Link component={RouterLink} to={'/'} color="black" underline='none'>Contact</Link>
          </Box>
          {token ? (
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '24px', alignItems: 'center', justifyContent: 'center' }}>
              <Link component={RouterLink} onClick={handleLogout} color="black" underline='none'>Logout</Link>
              <IconButton size="large">
                <FavoriteBorderIcon sx={{ fill: 'black' }} />
              </IconButton>
              <IconButton size="large">
                <Badge badgeContent={cartCount} color="primary">
                  <Link component={RouterLink} to={'/cart'} display={'flex'} ><AddShoppingCartIcon sx={{ fill: 'black' }} /></Link>
                </Badge>
                
              </IconButton>
              <IconButton size="large">
                <AccountCircleIcon sx={{ fill: 'black' }} />
              </IconButton>
            </Box>) :
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '24px', alignItems: 'center' }}>
              <Link component={RouterLink} to={'/register'} color="black" underline='none'>Sign up</Link>
              <Link component={RouterLink} to={'/login'} color="black" underline='none'>Login</Link>
            </Box>
          }
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
