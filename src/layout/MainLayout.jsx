import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container'

export default function MainLayout() {
  return (
    <>
      <Container maxWidth="lg">
        <Navbar />
        <Outlet />
        <Footer />
      </Container>

    </>

  )
}
