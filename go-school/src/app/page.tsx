import { AnnouncementTable } from '@/announcement/table/DataTable'
import PrivateRoute from '@/auth/protected'
import Dashboard from './dashboard/page'

export default function Home() {
  return (
    <div>
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    </div>
  )
}
