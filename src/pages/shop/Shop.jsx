import { alpha, Box, Breadcrumbs, Button, Card, CardContent, CircularProgress, FormControl, Grid, InputBase, InputLabel, Link, MenuItem, Select, styled, TextField, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import ProductCard from '../../components/products/ProductCard';
import useProducts from '../../hooks/useProducts';
import SearchIcon from '@mui/icons-material/Search';

export default function Shop() {
  const { t } = useTranslation();
  const [age, setAge] = React.useState('');
  const { data ,isError,error,isLoading} = useProducts();
  console.log(data);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#5f5e5e09',
  marginLeft: 0,
  width: '100%',
  height:'40px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'primary',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


  if (isLoading) return <CircularProgress />
      if (isError) return <Box color={'red'}>{error.message}</Box>
  return (
    <>
      <Box className={'shop'} p={3}>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ paddingBottom: '35px' }}>
          <Link underline="hover" color="inherit" href="/">
            {t('Home')}
          </Link>
          <Typography sx={{ color: 'text.primary' }}>{t('Shop')}</Typography>
        </Breadcrumbs>

        <Search display={'flex'} alignItems={'center'} sx={{bgcolor:'#00000021'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
        

        <Box sx={{ display: 'flex',gap:'20px' }}>
         
          <Box>
            <Grid container spacing={5} justifyContent={'center'}>
              {data.response.data.map((product) =>
              <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 4 }} key={product.id}>
                <ProductCard product={product} /></Grid>
              )}
            </Grid>
          </Box> 
          <Box width={'250px'} >
            <Card >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Typography fontSize={'24px'} fontWeight={'Bold'}>Filters</Typography>
                <Box sx={{ display: 'flex', gap: '5px' }}>
                  <TextField label="MaxPrice" variant="outlined" width={'30px'} />
                  <TextField label="MinPrice" variant="outlined" width={'30px'} />
                </Box>

                <FormControl >
                  <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Sort By"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Name</MenuItem>
                    <MenuItem value={20}>Price</MenuItem>
                    <MenuItem value={30}>Rate</MenuItem>
                  </Select>
                </FormControl>


                <FormControl>
                  <InputLabel id="demo-simple-select-label">according to</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="according to"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ascending</MenuItem>
                    <MenuItem value={20}>Descending</MenuItem>
                  </Select>
                </FormControl>
                <Button variant="contained" color={'primary'}>Apply</Button>

              </CardContent>
            </Card>
          </Box>
        </Box>



      </Box>
    </>

  )
}
