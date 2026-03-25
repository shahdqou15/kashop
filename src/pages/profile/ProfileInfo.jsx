import { Box, Button, Card, CardContent, CircularProgress, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import useProfile from '../../hooks/useProfile';
import { Link } from 'react-router-dom';

export default function ProfileInfo() {

  const { data, isLoading, isError, error } = useProfile();
    console.log(data)
    const { t } = useTranslation();

  if (isLoading) return <CircularProgress />
    if (isError) return <Box color={'red'}>{error.message}</Box>
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant='h5' fontWeight={'bold'} pb={3}>{t('Your Profile Information')}</Typography>
          <Box display={'flex'} flexDirection={'column'} gap={3} pb={2}>
            <Typography>{t('Your Name')}: {data.fullName}</Typography>
            <Typography>{t('Your Email')}: {data.email}</Typography>
            <Typography>{t('Your phoneNumber')}: {data.phoneNumber}</Typography>
            <Typography>{t('Your City')}: {data.city}</Typography>
          </Box>
         <Link to={'/forgetPass'}><Button variant='contained' >{t('Change Your Password')}</Button></Link> 
        </CardContent>
      </Card>
    </Box>
  )
}
