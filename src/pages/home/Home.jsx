import React from 'react'
import { Typography } from '@mui/material'
import {Box} from '@mui/material'
import Categories from '../../components/categories/Categories'
export default function Home() {
  return (
    <Box className="hero-section" display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
      <Categories />
      <img></img>
    </Box>




  )
}
