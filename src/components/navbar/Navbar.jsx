import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar sx={{ display: 'flex', alignItems: 'center', backgroundColor:'white', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" color="black">
            KASHOP
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '48px', alignItems: 'center' }}>
            <Link component={RouterLink} to={'/'} color="black" underline='none'>Home</Link>
            <Link component={RouterLink} to={'/'} color="black" underline='none'>Shop</Link>
            <Link component={RouterLink} to={'/'} color="black" underline='none'>About</Link>
            <Link component={RouterLink} to={'/register'} color="black" underline='none'>Sign Up</Link>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '24px', alignItems: 'center' }}>
            <TextField id="filled-basic" label="What are you looking for?" variant="filled" />
            <IconButton size="large">
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton size="large">
              <AddShoppingCartIcon />
            </IconButton>
            <IconButton size="large">
              <AccountCircleIcon />
            </IconButton>
          </Box>
          <IconButton 
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2, display:{ xs:'flex', md:'none' }}}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
