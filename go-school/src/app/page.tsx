import { AnnouncementTable } from '@/announcement/table/DataTable'
import DesktopSidebar from '@/announcement/test/sidebar'
import { SwitchBox } from '@/announcement/test/switch'
import TopBar from '@/announcement/test/topbar'

// import { DataTableDemo } from '@/announcement/test/test'

export default function Home() {
  return (
    <div>
      {/* <TopBar />
      <DesktopSidebar /> */}
      {/* <DataTableDemo /> */}
      {/* <SwitchBox expanded={true} /> */}
      <AnnouncementTable />
    </div>
  )
}
