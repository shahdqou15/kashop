import { Box, Breadcrumbs, Button, Card, CardContent, Link, TextField, Typography } from '@mui/material';
import React from 'react'
import { useTranslation } from 'react-i18next';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
    const { t } = useTranslation();
    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumb" sx={{ paddingBottom: '35px' }}>
                <Link underline="hover" color="inherit" href="/">
                    {t('Home')}
                </Link>
                <Typography sx={{ color: 'text.primary' }}>{t('Contact')}</Typography>
            </Breadcrumbs>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '50px' }}>
                <Card>
                    <CardContent>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }} p={1}>
                            <Box display={'flex'} alignItems={'center'} gap={3}>
                                <CallIcon sx={{ backgroundColor: '#DB4444', color: '#fff', width: '45px', height: '45px', borderRadius: '50%', p: '5px' }} />
                                <Typography fontWeight={'bold'} fontSize={18}>{t('Call To Us')}</Typography>
                            </Box>
                            <Typography fontWeight={'medium'}>{t('We are available 24/7, 7 days a week.')}</Typography>
                            <Typography fontWeight={'medium'}>{t('Phone: +8801611112222')}</Typography>
                        </Box>
                        <hr></hr>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }} p={1}>
                            <Box display={'flex'} alignItems={'center'} gap={3}>
                                <EmailIcon sx={{ backgroundColor: '#DB4444', color: '#fff', width: '45px', height: '45px', borderRadius: '50%', p: '5px' }} />
                                <Typography fontWeight={'bold'} fontSize={18}>{t('Write To US')}</Typography>
                            </Box>
                            <Typography fontWeight={'medium'}>{t('Fill out our form and we will contact you within 24 hours.')}</Typography>
                            <Typography fontWeight={'medium'}>{t('Emails: customer@exclusive.com')}</Typography>
                            <Typography fontWeight={'medium'}>{t('Emails: support@exclusive.com')}</Typography>
                        </Box>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '10px' }}>
                            <TextField
                                label={t('Your Name')}
                                variant="filled"
                                size="small"
                            />
                            <TextField
                                label={t('Your Email')}
                                variant="filled"
                                size="small"
                            />
                            <TextField
                                label={t('Your phoneNumber')}
                                variant="filled"
                                size="small"
                            />
                        </Box>
                        <TextField
                            label={t('Your Massage')}
                            variant="filled"
                            multiline
                            rows={10}

                        />
                        <Button variant='contained' sx={{ alignSelf: 'flex-end' }}>{t('Send Massage')}</Button>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}
