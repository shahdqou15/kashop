import { alpha, Box, Breadcrumbs, Button, Card, CardContent, CircularProgress, FormControl, Grid, InputBase, InputLabel, Link, MenuItem, Select, styled, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ProductCard from '../../components/products/ProductCard';
import useProducts from '../../hooks/useProducts';
import SearchIcon from '@mui/icons-material/Search';
import useCategories from '../../hooks/useCategories';
import { useNavigate } from 'react-router-dom';
import useThemeStore from '../../store/useThemeStore';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#5f5e5e09',
  marginLeft: 0,
  width: '100%',
  height: '40px',
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

export default function Shop() {
  const { t } = useTranslation();
  const [filters, setFilters] = useState({
    limit: 10,
    sortBy: '',
    ascending: false,
    search: '',

  });
  const [tempFilters, setTempFilters] = useState({
    minPrice: '',
    maxPrice: ''
  });

  const { data, isError, error, isLoading } = useProducts(filters);
  console.log(data);
  const { data: categories } = useCategories(100);
  console.log(categories)
  const navigate = useNavigate();
  const mode = useThemeStore((state) => state.mode);


  if (isLoading) return <CircularProgress />
  if (isError) return <Box color={'red'}>{error.message}</Box>
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 2,
          pb: 2
        }}>
        {categories.data.map(category => <Card sx={{
          padding: '10px', cursor: "pointer",
          flexShrink: 0,
          color: mode === 'light' ? 'black' : 'white'
        }} underline='none'
          key={category.id}
          onClick={() => navigate(`/ProductsByCategory/${category.id}`)}>{category.name}
        </Card>)}
      </Box>
      <Box sx={{
        display: { xs: 'flex', md: 'none' },
        gap: 2,
        py: 2
      }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '50%' }}>
          <TextField label={t('MaxPrice')} type='number' value={tempFilters.maxPrice} variant="outlined" size="small" onChange={(e) =>
            setTempFilters(param => ({
              ...param,
              maxPrice: e.target.value
            }))
          } />
          <TextField label={t('MinPrice')} type='number' value={tempFilters.minPrice} variant="outlined" size="small" onChange={(e) =>
            setTempFilters(param => ({
              ...param,
              minPrice: e.target.value
            }))
          } />
        </Box>
        <Box display={'flex'} flexDirection={'column'} gap={'6px'} width={'50%'}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">{t('Sort By')}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filters.sortBy}
              label={t('Sort By')}
              onChange={(e) => setFilters(param => ({
                ...param
                , sortBy: e.target.value
              }))

              }
              size="small"
            >
              <MenuItem value="name">{t('Name')}</MenuItem>
              <MenuItem value="price">{t('Price')}</MenuItem>
              <MenuItem value="rate">{t('Rate')}</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">{t('according to')}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filters.ascending}
              label={t('according to')}
              onChange={(e) => setFilters(param => ({
                ...param
                , ascending: e.target.value
              }))}
              size="small"
            >
              <MenuItem value={true}>{t('Ascending')}</MenuItem>
              <MenuItem value={false}>{t('Descending')}</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          variant="contained"
          onClick={() =>
            setFilters(param => ({
              ...param,
              ...tempFilters
            }))}>{t('Apply')}</Button>
      </Box>


      <Box className={'shop'} p={4}>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ paddingBottom: '35px' }}>
            <Link underline="hover" color="inherit" href="/">
              {t('Home')}
            </Link>
            <Typography sx={{ color: 'text.primary' }}>{t('Shop')}</Typography>
          </Breadcrumbs>

          <Search display={'flex'} alignItems={'center'} sx={{ bgcolor: '#00000021' }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={filters.search}
              onChange={(e) =>
                setFilters(param => ({
                  ...param,
                  search: e.target.value
                }))
              }
            />
          </Search>
        </Box>


        <Box sx={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
          <Box>
            <Grid container spacing={5} >
              {data.response.data.map((product) =>
                <Grid item
                  xs={12}
                  sm={data.response.data.length === 1 ? 12 : 6}
                  md={data.response.data.length === 1 ? 6 : 6}
                  lg={data.response.data.length === 1 ? 6 : 6}
                   key={product.id}>
                  <ProductCard product={product} /></Grid>
              )}
            </Grid>
          </Box>
          <Box width={'250px'} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Card>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Typography fontSize={'24px'} fontWeight={'Bold'}>{t('Filters')}</Typography>
                <Box sx={{ display: 'flex', gap: '5px' }}>
                  <TextField label={t('MaxPrice')} type='number' value={tempFilters.maxPrice} variant="outlined" width={'30px'} onChange={(e) =>
                    setTempFilters(param => ({
                      ...param,
                      maxPrice: e.target.value
                    }))
                  } />
                  <TextField label={t('MinPrice')} type='number' value={tempFilters.minPrice} variant="outlined" width={'30px'} onChange={(e) =>
                    setTempFilters(param => ({
                      ...param,
                      minPrice: e.target.value
                    }))
                  } />
                </Box>

                <FormControl >
                  <InputLabel id="demo-simple-select-label">{t('Sort By')}</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filters.sortBy}
                    label={t('Sort By')}
                    onChange={(e) => setFilters(param => ({
                      ...param
                      , sortBy: e.target.value
                    }))

                    }
                  >
                    <MenuItem value="name">{t('Name')}</MenuItem>
                    <MenuItem value="price">{t('Price')}</MenuItem>
                    <MenuItem value="rate">{t('Rate')}</MenuItem>
                  </Select>
                </FormControl>


                <FormControl>
                  <InputLabel id="demo-simple-select-label">{t('according to')}</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filters.ascending}
                    label={t('according to')}
                    onChange={(e) => setFilters(param => ({
                      ...param
                      , ascending: e.target.value
                    }))}
                  >
                    <MenuItem value={true}>{t('Ascending')}</MenuItem>
                    <MenuItem value={false}>{t('Descending')}</MenuItem>
                  </Select>
                </FormControl>

                <Button
                  variant="contained"
                  onClick={() =>
                    setFilters(param => ({
                      ...param,
                      ...tempFilters
                    }))}>{t('Apply')}</Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </>

  )
}
