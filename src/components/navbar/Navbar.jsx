import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Badge, Button, Link, ToggleButton } from '@mui/material';
import { Navigate, Link as RouterLink, useNavigate } from 'react-router-dom'
import Login from '../../pages/auth/Login';
import useAuthStore from '../../store/useAuthStore';
import useCart from '../../hooks/useCart';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18next';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import useThemeStore from '../../store/useThemeStore';

export default function Navbar() {
  const { token } = useAuthStore();
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const { data } = useCart();
  const cartCount = data?.items?.length
  const { t } = useTranslation();
  const changeLanguage = () => {
    const newLng = i18n.language == "ar"?"en":"ar"
    i18n.changeLanguage(newLng);
  }
  const mode = useThemeStore( (state)=>state.mode);
  const toggleTheme = useThemeStore( (state)=>state.toggleTheme);
  const handleLogout = () => {
    logout();
    navigate('/login');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', alignItems: 'center',background:mode === 'light'?'white':'',  justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{color:mode === 'light'?'black':'white'}}>
            KASHOP
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '48px', alignItems: 'center' }}>
            <Link component={RouterLink} to={'/'} sx={{color:mode === 'light'?'black':'white'}} underline='none'>{t('Home')}</Link>
            <Link component={RouterLink} to={'/shop'} sx={{color:mode === 'light'?'black':'white'}} underline='none'>{t('Shop')}</Link>
            <Link component={RouterLink} to={'/'} sx={{color:mode === 'light'?'black':'white'}} underline='none'>{t('About')}</Link>
            <Link component={RouterLink} to={'/'} sx={{color:mode === 'light'?'black':'white'}} underline='none'>{t('Contact')}</Link>

          </Box>
          {token ? (
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '24px', alignItems: 'center', justifyContent: 'center' }}>
              <Link component={RouterLink} onClick={handleLogout} sx={{color:mode === 'light'?'black':'white'}} underline='none'>{t('Logout')}</Link>
                <Button onClick={changeLanguage}>{i18n.language === "ar"?"EN":"AR"}</Button>
                <IconButton onClick={toggleTheme}><DarkModeIcon sx={{fill:mode === 'light'?'black':'#ffea00'}}/></IconButton>
              <IconButton size="large">
                <Badge badgeContent={cartCount} color="primary">
                  <Link component={RouterLink} to={'/cart'} display={'flex'} ><AddShoppingCartIcon sx={{ fill:mode === 'light'?'black':'white' }} /></Link>
                </Badge>

              </IconButton>
              <IconButton size="large">
                <AccountCircleIcon sx={{ fill:mode === 'light'?'black':'white' }} />
              </IconButton>
            </Box>) :
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '24px', alignItems: 'center' }}>
              <Link component={RouterLink} to={'/register'} sx={{color:mode === 'light'?'black':'white'}} underline='none'>{t('Sign up')}</Link>
              <Link component={RouterLink} to={'/login'} sx={{color:mode === 'light'?'black':'white'}} underline='none'>{t('Login')}</Link>
            </Box>
          }
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: 'flex', md: 'none' },color:mode === 'light'?'black':'white' }}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
