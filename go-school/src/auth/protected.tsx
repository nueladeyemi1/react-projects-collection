'use client'
import React from 'react'
// import Layout from '../Layout'

const PrivateRoute: React.FC<any> = (props: any) => {
  const userStr = sessionStorage.getItem('user')

  if (!userStr) {
    window.location.href = '/login'
  }
  return <>{props.children}</>
}

export default PrivateRoute
