import { Box, Container, Grid, IconButton, Link, Typography } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
export default function Footer() {
  const { t } = useTranslation();
  return (
   <Box component={'footer'} py={7} bgcolor={'#000'} color={'#fff'}>
    <Container>
       <Grid container spacing={3} textAlign={'center'}>
      <Grid item size={{xs:12,sm:6,md:4}} sx={{display:'flex',flexDirection:'column',gap:'24px'}}>
        <Typography variant='h5' fontWeight={'bold'}>KASHOP</Typography>
        <Typography>{t('Subscribe')}</Typography>
        <Typography>{t('Contact us through social media')}</Typography>
        <Box>
          <IconButton><FacebookOutlinedIcon sx={{color:'#fff',fontSize:'30px'}}/></IconButton>
          <IconButton><InstagramIcon sx={{color:'#fff',fontSize:'30px'}}/></IconButton>
          <IconButton><TwitterIcon sx={{color:'#fff',fontSize:'30px'}}/></IconButton>
          <IconButton><LinkedInIcon sx={{color:'#fff',fontSize:'30px'}}/></IconButton>
        </Box>
      </Grid>
      <Grid item size={{xs:12,sm:6,md:4}} sx={{display:'flex',flexDirection:'column',gap:'24px'}}>
        <Typography variant='h5' fontWeight={'bold'}>{t('My Account')}</Typography>
        <Box sx={{display:'flex',flexDirection:'column',gap:'15px'}}>
          <Link component={RouterLink} color='#fff' to={'/profile'}>{t('Account')}</Link>
          <Link component={RouterLink} color='#fff' to={'/login'}>{t('Login')}</Link>
          <Link component={RouterLink} color='#fff' to={'/register'}>{t('Sign up')}</Link>
          <Link component={RouterLink} color='#fff' to={'/cart'}>{t('Cart')}</Link>
          <Link component={RouterLink} color='#fff' to={'/shop'}>{t('Shop')}</Link>
          </Box>
      </Grid>
      <Grid item size={{xs:12,sm:6,md:4}} sx={{display:'flex',flexDirection:'column',gap:'24px'}}>
        <Typography variant='h5' fontWeight={'bold'}>{t('Quick Link')}</Typography>
        <Box sx={{display:'flex',flexDirection:'column',gap:'18px'}}>
          <Link component={RouterLink} color='#fff'>{t('Privacy Policy')}</Link>
          <Link component={RouterLink} color='#fff'>{t('Terms Of Use')}</Link>
          <Link component={RouterLink} color='#fff'>{t('FAQ Up')}</Link>
          <Link component={RouterLink} color='#fff' to={'/contact'}>{t('Contact')}</Link>
          </Box>
      </Grid>
    </Grid>
    </Container>
   
   </Box>  )
}
