import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import useProfile from '../../hooks/useProfile'

export default function Profile() {

    const {data} = useProfile();
    console.log(data)

  return (
    <Box display={'flex'} justifyContent={'flex-start'} gap={20} p={3}>
        <Box sx={{display:'flex',flexDirection:'column',gap:2}}>
        <Typography variant='h5'>Manage My Account</Typography>
        <Link to=''>My Profile</Link>
        <Link to='orders'>My Orders</Link>
        </Box>
        <Box>
            <Outlet/>
        </Box>
    </Box>
  )
}
