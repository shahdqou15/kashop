import { RouterProvider } from 'react-router-dom'
import router from './router'
import './i18next'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CssBaseline, ThemeProvider } from '@mui/material';
import getTheme from './theme';
import useThemeStore from './store/useThemeStore';



function App() {

  const queryClient = new QueryClient();
  const {i18n} = useTranslation();
  const mode = useThemeStore( (state)=>state.mode);
 
  useEffect(()=>{
    const dir = i18n.language === "ar"?"rtl":"ltr";
    document.documentElement.dir = dir
  },[
    i18n.language
  ])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={getTheme(mode)}>
          <CssBaseline />
          <RouterProvider router={router} />
          </ThemeProvider>
        
      </QueryClientProvider>


    </>
  )
}

export default App
