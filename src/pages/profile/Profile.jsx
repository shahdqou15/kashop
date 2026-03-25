import { Box, Breadcrumbs, Typography,Link, CircularProgress } from '@mui/material'
import React from 'react'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import useProfile from '../../hooks/useProfile'
import { useTranslation } from 'react-i18next';

export default function Profile() {

  const { data, isLoading, isError, error } = useProfile();
  console.log(data)
  const { t } = useTranslation();

  if (isLoading) return <CircularProgress />
    if (isError) return <Box color={'red'}>{error.message}</Box>

  return (
    <>
      <Box p={4} display={{xs:'block',sm:'flex'}} justifyContent={'space-between'}>
        <Breadcrumbs aria-label="breadcrumb"  sx={{ paddingBottom: '35px' }}>
          <Link underline="hover" color="inherit" href="/">
            {t('Home')}
          </Link>
          <Typography sx={{ color: 'text.primary' }}>{t('Categories')}</Typography>
        </Breadcrumbs>
        <Typography >{t('Welcome')}! <Typography variant='span' color='#DB4444'>{data.fullName}</Typography></Typography>
      </Box>
      <Box display={{xs:'block',md:'flex'}} justifyContent={'flex-start'} gap={20} py={3} >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} pb={3}>
          <Typography variant='h5'>{t('Manage My Account')}</Typography>
          <Link component={RouterLink} to=''>{t('My Profile')}</Link>
          <Link component={RouterLink} to='orders'>{t('My Orders')}</Link>
        </Box>
        <Box >
          <Outlet />
        </Box>
      </Box>
    </>
  )
}
