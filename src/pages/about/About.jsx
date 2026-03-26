import { Avatar, Box, Breadcrumbs, Card, CardContent, CardMedia, Grid, IconButton, Link, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import ShopImage from '../../assets/images/AboutImage.png'
import StorefrontIcon from '@mui/icons-material/Storefront';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import TomImage from '../../assets/images/About1.png'
import EmmaImage from '../../assets/images/About2.png'
import WillIamge from '../../assets/images/About3.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

export default function About() {
    const { t } = useTranslation();
    return (
        <Box p={4}>
            <Breadcrumbs aria-label="breadcrumb" sx={{ paddingBottom: '35px' }}>
                <Link underline="hover" color="inherit" href="/">
                    {t('Home')}
                </Link>
                <Typography sx={{ color: 'text.primary' }}>{t('About')}</Typography>
            </Breadcrumbs>

            <Box sx={{ display: { xs: 'block', md: 'flex' }, gap: '50px' }} pb={5}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '40px' }}>
                    <Typography fontSize={{ xs: '20', md: '30px' }} fontWeight={'bold'}>{t('Our Story')}</Typography>
                    <Typography fontWeight={'regular'}>{t('Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.')}</Typography>
                    <Typography fontWeight={'regular'}>{t('Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.')}</Typography>
                </Box>
                <Box component={'img'} src={ShopImage} sx={{
                    width: { xs: "220px", sm: "400px", md: "500px" },
                    height: "auto",
                    objectFit: "contain",
                }}></Box>
            </Box>

            <Box py={8}>
                <Grid container spacing={5}>
                    <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} border={1} borderColor={'divider'}>
                        <Card sx={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', paddingY: '15px', transition: 'all 0.5s',
                            '&:hover': {
                                backgroundColor: '#DB4444',
                                color: '#fff',
                                '& .avatar': {
                                    backgroundColor: '#fff'
                                },
                                '& .icon': {
                                    color: '#000'
                                }
                            }
                        }}>
                            <CardMedia>
                                <Avatar className='avatar' sx={{ bgcolor: '#000', width: '56px', height: '56px', transition: 'all 0.5s' }}>
                                    <StorefrontIcon className='icon' sx={{ color: '#fff', fontSize: '30px', transition: 'all 0.5s' }} />
                                </Avatar>
                            </CardMedia>
                            <CardContent>
                                <Typography fontWeight="bold" fontSize={20} textAlign="center">10.5k </Typography>
                                <Typography fontSize={15} textAlign="center">{t('Sallers active our site')}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} border={1} borderColor={'divider'}>
                        <Card sx={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', paddingY: '15px', transition: 'all 0.5s',
                            '&:hover': {
                                backgroundColor: '#DB4444',
                                color: '#fff',
                                '& .avatar': {
                                    backgroundColor: '#fff'
                                },
                                '& .icon': {
                                    color: '#000'
                                }
                            }
                        }}>
                            <CardMedia>
                                <Avatar className='avatar' sx={{ bgcolor: '#000', width: '56px', height: '56px', transition: 'all 0.5s' }}>
                                    <MonetizationOnOutlinedIcon className='icon' sx={{ color: '#fff', fontSize: '30px', transition: 'all 0.5s' }} />
                                </Avatar>
                            </CardMedia>
                            <CardContent>
                                <Typography fontWeight="bold" fontSize={20} textAlign="center">33k </Typography>
                                <Typography fontSize={15} textAlign="center">{t('Mopnthly Produduct Sale')}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} border={1} borderColor={'divider'}>
                        <Card sx={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', paddingY: '15px', transition: 'all 0.5s',
                            '&:hover': {
                                backgroundColor: '#DB4444',
                                color: '#fff',
                                '& .avatar': {
                                    backgroundColor: '#fff'
                                },
                                '& .icon': {
                                    color: '#000'
                                }
                            }
                        }}>
                            <CardMedia>
                                <Avatar className='avatar' sx={{ bgcolor: '#000', width: '56px', height: '56px', transition: 'all 0.5s' }}>
                                    <ShoppingBagOutlinedIcon className='icon' sx={{ color: '#fff', fontSize: '30px', transition: 'all 0.5s' }} />
                                </Avatar>
                            </CardMedia>
                            <CardContent>
                                <Typography fontWeight="bold" fontSize={20} textAlign="center">45.5k</Typography>
                                <Typography fontSize={15} textAlign="center">{t('Customer active in our site')}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} border={1} borderColor={'divider'}>
                        <Card sx={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', paddingY: '15px', transition: 'all 0.5s',
                            '&:hover': {
                                backgroundColor: '#DB4444',
                                color: '#fff',
                                '& .avatar': {
                                    backgroundColor: '#fff'
                                },
                                '& .icon': {
                                    color: '#000'
                                }
                            }
                        }}>
                            <CardMedia>
                                <Avatar className='avatar' sx={{ bgcolor: '#000', width: '56px', height: '56px', transition: 'all 0.5s' }}>
                                    <AccountBalanceWalletOutlinedIcon className='icon' sx={{ color: '#fff', fontSize: '30px', transition: 'all 0.5s' }} />
                                </Avatar>
                            </CardMedia>
                            <CardContent>
                                <Typography fontWeight="bold" fontSize={20} textAlign="center">25k</Typography>
                                <Typography fontSize={15} textAlign="center">{t('Anual gross sale in our site')}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            <Box py={6}>
                <Grid container spacing={5}>
                    <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
                        <Card>
                            <CardMedia image={TomImage} sx={{ width: {xs:'300px',md:'370px'}, height: {xs:'280px',md:'430px'} }} />
                            <CardContent>
                                <Typography fontWeight="bold" fontSize={20}>Tom Cruise</Typography>
                                <Typography fontSize={15}>{t('Founder & Chairman')}</Typography>
                                <Box>
                                    <IconButton><InstagramIcon sx={{ color: '#000', fontSize: '25px' }} /></IconButton>
                                    <IconButton><TwitterIcon sx={{ color: '#000', fontSize: '25px' }} /></IconButton>
                                    <IconButton><LinkedInIcon sx={{ color: '#000', fontSize: '25px' }} /></IconButton>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
                        <Card>
                            <CardMedia image={EmmaImage} sx={{ width: {xs:'300px',md:'370px'}, height: {xs:'280px',md:'430px'} }} />
                            <CardContent>
                                <Typography fontWeight="bold" fontSize={20}>Emma Watson</Typography>
                                <Typography fontSize={15}>{t('Managing Director')}</Typography>
                                <Box>
                                    <IconButton><InstagramIcon sx={{ color: '#000', fontSize: '25px' }} /></IconButton>
                                    <IconButton><TwitterIcon sx={{ color: '#000', fontSize: '25px' }} /></IconButton>
                                    <IconButton><LinkedInIcon sx={{ color: '#000', fontSize: '25px' }} /></IconButton>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
                        <Card>
                            <CardMedia image={WillIamge} sx={{ width: {xs:'300px',md:'370px'}, height: {xs:'280px',md:'430px'} }} />
                            <CardContent>
                                <Typography fontWeight="bold" fontSize={20}>Will Smith</Typography>
                                <Typography fontSize={15}>{t('Product Designer')}</Typography>
                                <Box>
                                    <IconButton><InstagramIcon sx={{ color: '#000', fontSize: '25px' }} /></IconButton>
                                    <IconButton><TwitterIcon sx={{ color: '#000', fontSize: '25px' }} /></IconButton>
                                    <IconButton><LinkedInIcon sx={{ color: '#000', fontSize: '25px' }} /></IconButton>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    
                </Grid>
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
        </Box>
    )
}
