import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import phoneImage from "../../assets/images/phone Image.png";
import { CircularProgress, Link } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom'
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from '../../validation/LoginSchema';
import axios from 'axios';
import { useState } from 'react';

export default function Login() {
  const [serverErrors, setServerErrors] = useState([]);

  const { register: login, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: yupResolver(LoginSchema), mode: 'onBlur' });
  const loginForm = async (valuse) => {
    try {
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Login`, valuse);
      if(response.status===200){
        localStorage.setItem("accessToken",response.data.accessToken)
      }
      console.log("response:", response);
    } catch (error) {
      setServerErrors(error.response.data.errors);
    }

  }

  return (
    <Box component={'section'} display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
      <Box columnGap={3} component={'img'} src={phoneImage} alt={'phoneImage'} sx={{ width: { sm: '300px', md: '480px' }, height: 'auto', objectFit: 'contain', display: { xs: 'none', sm: 'block' } }}></Box>
      <Box columnGap={6} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} sx={{ width: { xs: '90%', sm: '45%', md: '30%' } }}>
        <Box display={'flex'} flexDirection={'column'} gap='15px'>
          <Typography component={'h4'} variant='h4' fontWeight={500}>Log in to Exclusive</Typography>
          <Typography fontSize='13px'>Enter your details below</Typography>
        </Box>
        {serverErrors?.length > 0 && (
          <Box mt={2} color={'red'}>
            {serverErrors.map((error) => <Typography>Error: {error}</Typography>)}
          </Box>)}


        <Box component={'form'} onSubmit={handleSubmit(loginForm)} display={'flex'} flexDirection={'column'} gap={3} py={2} >
          <TextField {...login('email')} label="Enter Your Email" variant="standard"
            error={errors.email}
            helperText={errors.email?.message} />
          <TextField {...login('password')} label="Password" variant="standard"
            error={errors.password}
            helperText={errors.password?.message} />
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
            <Button type='submit' variant="contained" sx={{ backgroundColor: '#DB4444' }}>{isSubmitting ? <CircularProgress /> : 'Log In'}</Button>
            <Link component={RouterLink} color='#DB4444'>Forget Password?</Link>
          </Box>

        </Box>

      </Box>
    </Box>
  )
}
