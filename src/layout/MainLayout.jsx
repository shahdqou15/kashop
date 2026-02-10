import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';

export default function MainLayout() {
  return (
    <>
      <Container maxWidth="lg">
        <Navbar />
       <Box py={10} ><Outlet /></Box> 
        <Footer />
      </Container>

    </>

  )
}
