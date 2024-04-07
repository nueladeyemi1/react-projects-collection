'use client'

import { AnnouncementTable } from '@/announcement/table/DataTable'
import PrivateRoute from '@/auth/protected'
import { useEffect } from 'react'
import Dashboard from './dashboard/page'
import Signin from './login/page'

export default function Home() {
  useEffect(() => {
    const userStr = sessionStorage.getItem('user')

    if (userStr) {
      window.location.href = '/dashboard'
    }
  }, [])

  return (
    <Signin />
    // <div>
    //   <PrivateRoute>
    //     <Dashboard />
    //   </PrivateRoute>
    // </div>
  )
}
