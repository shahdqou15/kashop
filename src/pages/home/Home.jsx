import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import Categories from '../../components/categories/Categories'
import Products from '../../components/products/Products'
import AppleIcon from '@mui/icons-material/Apple';
import { Link } from '@mui/material'
import heroImage from '../../assets/images/heroIphone.png'
import {Link as RouterLink} from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Box component={'section'} className="hero-section" p={3} sx={{display:'flex'}}  justifyContent={'space-around'}>
       <Box sx={{display:{xs:'none',md:'block'}}}><Categories /></Box> 
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-around',width:'892px', height:'344px',bgcolor:'#000'}}>
          <Box sx={{ display: 'flex', flexDirection: 'column',color:'#fff',justifyContent:'space-around'}}>
            <Box display={"flex"} gap={'8px'} >
              <AppleIcon sx={{fontSize:'50px'}}/>
              <Typography fontSize={'15px'}>iPhone 14 Series</Typography>
            </Box>
            <Typography fontSize={'45px'} fontWeight={500}>Up to 10% <br></br>off Voucher</Typography>
            <Link component={RouterLink} color='#fff' to={'/shop'}>Shop Now </Link>
            
          </Box>
          <Box component={'img'} src={heroImage}  ></Box>
        </Box>
      </Box>
      <Box><Products /></Box>
    </>





  )
}
