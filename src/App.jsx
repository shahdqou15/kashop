import { RouterProvider } from 'react-router-dom'
import router from './router'
import './i18next'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';


function App() {


  const queryClient = new QueryClient();
  const {i18n} = useTranslation();

  useEffect(()=>{
    const dir = i18n.language === "ar"?"rtl":"ltr";
    document.documentElement.dir = dir
  },[
    i18n.language
  ])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>


    </>
  )
}

export default App
