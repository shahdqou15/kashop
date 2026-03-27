import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import phoneImage from "../../assets/images/phone Image.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from '../../validation/RegisterSchema';
import { CircularProgress, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';


export default function Register() {
  const [serverErrors, setServerErrors] = useState([]);
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors,isSubmitting } } = useForm({ resolver: yupResolver(registerSchema), mode: 'onBlur' });
  const registerForm = async (values) => {
    try {
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`, values);
      console.log("response:", response);
    } catch (error) {
      setServerErrors(error.response.data.errors);
    }

  }

  return (
    <Box component={'section'} display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
      <Box columnGap={3} component={'img'} src={phoneImage} alt={'phoneImage'} sx={{ width: { sm: '300px', md: '480px' }, height: 'auto', objectFit: 'contain', display: { xs: 'none', sm: 'block' } }}  ></Box>
      <Box columnGap={6} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} sx={{ width: { xs: '90%', sm: '45%', md: '30%' } }}>
        <Box display={'flex'} flexDirection={'column'} gap='15px' >
          <Typography component={'h4'} variant='h4' fontWeight={500}>{t('Create an account')}</Typography>
          <Typography fontSize='13px'>{t('Enter your details below')}</Typography>
        </Box>


        {serverErrors?.length > 0 && (
          <Box mt={2} color={'red'}>
          {serverErrors.map((error) => <Typography>Error: {error}</Typography>)}
        </Box>)}


        <Box component={'form'} onSubmit={handleSubmit(registerForm)} display={'flex'} flexDirection={'column'} gap={3} py={2}>
          <TextField {...register('userName')} label={t('User Name')} variant="standard"
            error={errors.userName}
            helperText={errors.userName?.message} />
          <TextField {...register('fullName')} label={t('Full Name')} variant="standard"
            error={errors.fullName}
            helperText={errors.fullName?.message} />
          <TextField {...register('email')} label={t('User Email')} variant="standard"
            error={errors.email}
            helperText={errors.email?.message} />
          <TextField {...register('password')} label={t('Password')} variant="standard"
            error={errors.password}
            helperText={errors.password?.message} />
          <TextField {...register('phoneNumber')} label={t('phone Number')} variant="standard"
            error={errors.phoneNumber}
            helperText={errors.phoneNumber?.message} />

            
            <Button type='submit' variant="contained" sx={{ backgroundColor: '#DB4444' }} disabled={isSubmitting}>{isSubmitting? <CircularProgress /> : t('Create Account')}</Button>           
        </Box>

        <Box display={'flex'} alignItems={'center'} gap={1} pt={2}>
          <Typography>{t('Already have account')}?</Typography>
          <Link component={RouterLink} to={'/login'} color='#DB4444'>{t('Log In')}</Link>
        </Box>
      </Box>
    </Box>
  )
}
