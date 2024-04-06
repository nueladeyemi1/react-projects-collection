'use client'
import React, { useEffect } from 'react'
// import Layout from '../Layout'

const PrivateRoute: React.FC<any> = (props: any) => {
  useEffect(() => {
    const userStr = sessionStorage.getItem('user')

    if (!userStr) {
      window.location.href = '/login'
    }
  }, [])

  return <>{props.children}</>
}

export default PrivateRoute
