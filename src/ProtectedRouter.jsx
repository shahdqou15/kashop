import React from 'react'
import useAuthStore from './store/useAuthStore';
import { Navigate } from 'react-router-dom';

export default function ProtectedRouter({children}) {
    
    const {token} = useAuthStore();
    if(!token){
        return <Navigate to={'/login'}/>
    }
  return children;
}
