import React from 'react'
import { Navigate } from 'react-router-dom'
import { useGlobalContext } from '../context'

export default function ProtectedRoute({children}){
  const {user} = useGlobalContext();
  if(Object.keys(user).length === 0) {
    return <Navigate to='/login'/>
  }else{
    return children;
  }
}
