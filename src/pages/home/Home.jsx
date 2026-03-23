import React from 'react'
import { Avatar, Button, Card, CardContent, CardMedia, CircularProgress, Grid, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Categories from '../../components/categories/Categories'
import AppleIcon from '@mui/icons-material/Apple';
import { Link } from '@mui/material'
import heroImage from '../../assets/images/heroIphone.png'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import CircleIcon from '@mui/icons-material/Circle';
import { useTranslation } from 'react-i18next'
import Countdown from 'react-countdown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useProducts from '../../hooks/useProducts';
import ProductCard from '../../components/products/ProductCard';
import useCategories from '../../hooks/useCategories';
import useThemeStore from '../../store/useThemeStore';
import speakerImage from '../../assets/images/speaker.png';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

export default function Home() {
  const { data, isLoading, isError, error } = useProducts();
  console.log(data);
  const { data: categories } = useCategories(100);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const mode = useThemeStore((state) => state.mode);

  if (isLoading) return <CircularProgress />
  if (isError) return <Box color={'red'}>{error.message}</Box>
  return (
    <>
      <Box component={'section'} className="hero-section" sx={{ display: 'flex', justifyContent: 'space-around', gap: 2, p: 3, }}>
        <Box display={{ xs: 'none', md: 'block' }}><Categories /></Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '892px', minHeight: { xs: 200, sm: 280, md: 344 }, bgcolor: '#000' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', color: '#fff', justifyContent: 'space-around' }}>
            <Box display={"flex"} gap={'8px'} >
              <AppleIcon sx={{ fontSize: { xs: 30, md: 50 } }} />
              <Typography fontSize={{ xs: 12, md: 15 }}>iPhone 14 Series</Typography>
            </Box>
            <Typography fontSize={{ xs: 20, sm: 28, md: 45 }} fontWeight={500}>Up to 10% <br></br>off Voucher</Typography>
            <Link component={RouterLink} color='#fff' to={'/shop'}>{t('Shop Now')}</Link>
          </Box>
          <Box component={'img'} src={heroImage} sx={{
            width: { xs: "120px", sm: "250px", md: "400px" },
            height: "auto",
            objectFit: "contain",
          }} ></Box>
        </Box>
      </Box>


      <Box className={'products-section'} py={3}>
        <Box p={3}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <CircleIcon sx={{ color: '#DB4444' }} />
              <Typography color='primary'>{t('Today`s')}</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          overflowX: "auto",
          flexWrap: "nowrap",
          gap: 2,
          px: 2,
        }}>
          <Box sx={{ display: 'flex', gap: '87px', minWidth: "max-content" }}>
            <Typography variant='h4'>{t('Flash Sales')}</Typography>
            <Typography variant="h4">
              <Countdown date={Date.now() + 3 * 24 * 60 * 60 * 1000} />
            </Typography>
          </Box>
          <Box sx={{
            display: "flex",
            minWidth: "max-content",
          }}>
            <IconButton><ArrowBackIcon /></IconButton>
            <IconButton><ArrowForwardIcon /></IconButton>
          </Box>
        </Box>
        <Box sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          p: 2
        }}>{data.response.data.map((product) =>
          <Box
            key={product.id}
            sx={{
              minWidth: "250px"
            }}>
            <ProductCard product={product} />
          </Box>
        )}</Box>

        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} pt={3}>
          <RouterLink to={'/shop'}>
            <Button variant="contained">{t('View All Products')}</Button>
          </RouterLink>
        </Box>



      </Box>

      <hr></hr>

      <Box className={'categories-section'} py={5}>
        <Box p={3}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <CircleIcon sx={{ color: '#DB4444' }} />
              <Typography color='primary'>{t('Categories')}</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          overflowX: "auto",
          flexWrap: "nowrap",
          gap: 2,
          px: 2,
        }}>
          <Typography variant='h4'>{t('Browse By Category')}</Typography>

          <Box sx={{
            display: "flex",
            minWidth: "max-content",
          }}>
            <IconButton><ArrowBackIcon /></IconButton>
            <IconButton><ArrowForwardIcon /></IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 2,
            py: 5
          }}>
          {categories.data.map(category =>
            <Card sx={{
              padding: '20px', cursor: "pointer",
              flexShrink: 0,
              color: mode === 'light' ? 'black' : 'white', transition: 'all 0.5s',
              '&:hover': {
                transform: 'translateY(-8px)', 
                boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                backgroundColor:'#DB4444',
                color:'#fff'
              }
            }} underline='none'
              key={category.id}
              onClick={() => navigate(`/ProductsByCategory/${category.id}`)}>{category.name}
            </Card>
          )}

        </Box>

      </Box>

      <hr></hr>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%', paddingY: 8, bgcolor: '#000' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', color: '#fff', gap: '32px' }}>
          <Typography fontSize={{ xs: 12, md: 15 }} color='#47B486'>{t('Categories')}</Typography>
          <Typography fontSize={{ xs: '25px', md: '45px' }}>Enhance Your<br></br> Music Experience</Typography>
          <Typography fontSize={{ xs: '26px', md: '45px' }}>
            <Countdown date={Date.now() + 3 * 24 * 60 * 60 * 1000} />
          </Typography>
          <Button variant='contained' sx={{ bgcolor: '#47B486', alignSelf: 'flex-start' }}>{t('Buy Now')}</Button>
        </Box>
        <Box component={'img'} src={speakerImage} sx={{
          width: { xs: "120px", sm: "250px", md: "400px" },
          height: "auto",
          objectFit: "contain",
        }} ></Box>
      </Box>

      <Box py={7}>
        <Grid container spacing={5}>
          <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingY: '10px', transition: 'all 0.5s',
              '&:hover': {
                transform: 'translateY(-8px)', 
                boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
              } }}>
              <CardMedia>
                <Avatar sx={{ bgcolor: '#000', width: '56px', height: '56px', }}>
                  <LocalShippingOutlinedIcon sx={{ color: '#fff', fontSize: '30px' }} />
                </Avatar>
              </CardMedia>
              <CardContent>
                <Typography fontWeight="bold" fontSize={14} textAlign="center">{t('FREE AND FAST DELIVERY')}</Typography>
                <Typography fontSize={12} color="text.secondary" textAlign="center">{t('Free delivery for all orders over $140')}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingY: '10px', transition: 'all 0.5s',
              '&:hover': {
                transform: 'translateY(-8px)', 
                boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
              } }}>
              <CardMedia>
                <Avatar sx={{ bgcolor: '#000', width: '56px', height: '56px', }}>
                  <HeadsetOutlinedIcon sx={{ color: '#fff', fontSize: '30px' }} />
                </Avatar>
              </CardMedia>
              <CardContent>
                <Typography fontWeight="bold" fontSize={14} textAlign="center">{t('24/7 CUSTOMER SERVICE')}</Typography>
                <Typography fontSize={12} color="text.secondary" textAlign="center">{t('Friendly 24/7 customer support')}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
            <Card sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', paddingY: '10px', transition: 'all 0.5s',
              '&:hover': {
                transform: 'translateY(-8px)', 
                boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
              }
            }}>
              <CardMedia>
                <Avatar sx={{ bgcolor: '#000', width: '56px', height: '56px', }}>
                  <VerifiedUserOutlinedIcon sx={{ color: '#fff', fontSize: '30px' }} />
                </Avatar>
              </CardMedia>
              <CardContent>
                <Typography fontWeight="bold" fontSize={14} textAlign="center">{t('MONEY BACK GUARANTEE')}</Typography>
                <Typography fontSize={12} color="text.secondary" textAlign="center">{t('We reurn money within 30 days')}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

    </>





  )
}
