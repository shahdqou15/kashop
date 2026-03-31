import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { MuiOtpInput } from 'mui-one-time-password-input'
import { useForm } from 'react-hook-form'
import axiosInstance from '../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Verify() {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [serverErrors, setServerErrors] = useState([]);
    const verifyForm = async (valuse) => {
        try {
            const email = localStorage.getItem("resetEmail")
            const payload = { ...valuse, email };
            const response = await axiosInstance.patch('/auth/Account/ResetPassword', payload);
            console.log(response);
            if (response.status === 200) {
                localStorage.removeItem("resetEmail");
                navigate('/login');
            }
        } catch (error) {
            console.log(error.response)
            setServerErrors(error.response.data.message);
        }

    }

    return (
        <Box onSubmit={handleSubmit(verifyForm)} component={'form'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '25px', padding: '20px', width: '100%' }}>
            <Typography variant='h3' fontWeight={'Bold'}>{t('Verify code')}</Typography>
            {serverErrors?.length > 0 && (
                <Box color={'red'}>
                    {<Typography>Error: {serverErrors}</Typography>}
                </Box>)}
            <TextField
                label={t('Verify code')}
                {...register('code')} />
            <TextField
                id="outlined-password-input"
                label={t('NewPassword')}
                type="password"
                autoComplete="current-password"
                {...register('newPassword')}
            />
            <Button type='submit' variant="contained" color="primary" sx={{ paddingX: '100px' }}>{t('Confirm')}</Button>
        </Box>
    )
}
