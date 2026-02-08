import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import phoneImage from "../../assets/images/phone image.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from '../../validation/RegisterSchema';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'
export default function Register() {



  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(registerSchema) });
  const registerForm = async (values) => {
    try {
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`, values);
      console.log("response:", response);
    } catch (error) {
      console.log("STATUS:", error.response?.status);
      console.log("SERVER DATA:", error.response?.data);
    }

  }

  return (
    <Box component={'section'} py={5} display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
      <Box columnGap={3} component={'img'} src={phoneImage} alt={'phoneImage'} sx={{width:'480px', height:'500px',objectFit: 'contain'}}  ></Box>
      <Box columnGap={6} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} width='30%'>
        <Box display={'flex'} flexDirection={'column'} gap='15px' >
          <Typography component={'h4'} variant='h4'>Create an account</Typography>
          <Typography fontSize='13px'>Enter your details below</Typography>
        </Box>

        <Box component={'form'} onSubmit={handleSubmit(registerForm)} display={'flex'} flexDirection={'column'} gap={3} py={2}>
          <TextField {...register('userName', { require: true })} label="User Name" variant="standard"
            error={errors.userName}
            helperText={errors.userName?.message} />
          <TextField {...register('fullName')} label="Full Name" variant="standard"
            error={errors.fullName}
            helperText={errors.fullName?.message} />
          <TextField {...register('email')} label="User Email" variant="standard"
            error={errors.email}
            helperText={errors.email?.message} />
          <TextField {...register('password')} label="Password" variant="standard"
            error={errors.password}
            helperText={errors.password?.message} />
          <TextField {...register('phoneNumber')} label="phone Number" variant="standard"
            error={errors.phoneNumber}
            helperText={errors.phoneNumber?.message} />
          <Button type='submit' variant="contained" sx={{ backgroundColor: '#DB4444' }}>Create Account</Button>
        </Box>

        <Box display={'flex'} alignItems={'center'} gap={1} pt={2}>
          <Typography>Already have account?</Typography>
          <Link component={RouterLink} to={'/login'} color='#DB4444'>Log in</Link>
        </Box>
      </Box>
    </Box>
  )
}
