import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axiosInstance from '../../api/axiosInstance'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { ForgetPasswordSchema } from '../../validation/ForgetPasswordSchema';
import { useTranslation } from 'react-i18next';

export default function ForgetPass() {

    const navigate = useNavigate();
    const [serverErrors, setServerErrors] = useState([]);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: yupResolver(ForgetPasswordSchema), mode: 'onBlur' });
    const { t } = useTranslation();
    const forgetForm = async (valuse) => {
        try {
            const response = await axiosInstance.post('/auth/Account/SendCode', valuse)
            console.log(response)

            if (response.status === 200) {
                localStorage.setItem("resetEmail", valuse.email)
                navigate('/verify')
            }
        } catch (error) {
            console.log(error.response);
            setServerErrors(error.response.data.message);
        }

    }

    return (
        <Box component={'form'} onSubmit={handleSubmit(forgetForm)} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '25px', padding: '20px', width: '100%' }}>
            <Typography variant='h3' fontWeight={'Bold'}>{t('Forget Password')}</Typography>
            {serverErrors?.length > 0 && (
                <Box color={'red'}>
                    { <Typography>Error: {serverErrors}</Typography>}
                </Box>)}
            <TextField {...register('email')} id="outlined-basic" label={t('User Email')} variant="outlined"
                error={errors.email}
                helperText={errors.email?.message} />
            <Button type='submit' variant="contained" color="primary" sx={{ paddingX: '100px' }}>{isSubmitting ? <CircularProgress /> : t('Send Code')}</Button>
        </Box>
    )
}
