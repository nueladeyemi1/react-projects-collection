'use client'

import { MoreVertical, ChevronLast, ChevronFirst } from 'lucide-react'
import { useContext, createContext, useState } from 'react'
import Switch from './switch'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import { getUserId } from "@/lib/get-userId";

import {
  House,
  Chalkboard,
  UsersThree,
  Student,
  UsersFour,
  // Certificate,
  AppWindow,
  Buildings,
  Wallet,
  Briefcase,
} from 'phosphor-react'
import { PiUsersFourLight } from 'react-icons/pi'

export const SidebarContext = createContext(false)

export default function DesktopSidebar({ navlinks }: any) {
  const isUser = 'yes'
  const [expanded, setExpanded] = useState<boolean>(true)

  return (
    <nav className=' w-fit h-[90vh] relative flex flex-col justify-start rounded items-start bg-white transition-all shadow-sm pt-3'>
      <div className='p-4 pb-2 flex justify-between items-center absolute translate-x-[-50%] translate-y-[-50%] left-[102%] top-[50%]'>
        <button
          onClick={() => setExpanded((curr) => !curr)}
          className='p-1.5 rounded-full bg-gray-50 hover:bg-gray-100 shadow-sm'
        >
          {expanded ? (
            <ChevronFirst size={20} className='text-primary600' />
          ) : (
            <ChevronLast size={20} className='text-primary600' />
          )}
        </button>
      </div>
      {/* Sidebar Menu Items */}

      <SidebarContext.Provider value={expanded}>
        <ul className='flex flex-col px-5 gap-y-1'>
          {navlinks?.map((d: any) => {
            const { icon, text, alert, active, path } = d

            return (
              <SidebarItem
                key={text}
                text={text}
                icon={icon}
                alert={alert}
                active={active}
                path={path}
              />
            )
          })}
        </ul>
      </SidebarContext.Provider>

      <div className='switch mt-auto'>
        <Switch expanded={expanded} />
      </div>
    </nav>
  )
}

export function SidebarItem({ icon, text, active, alert, path }: any) {
  const expanded = useContext(SidebarContext)
  const pathName = usePathname()

  // const userId = getUserId();
  const userId = 256472489

  return (
    <Link
      //EDIT THIS FOR PROPER ROUTING
      href={userId ? path : `/gopal?mode=auth`}
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          pathName === path
            ? 'bg-[#F3F7FF] text-[#0D6EFD]'
            : 'hover:bg-[#F3F7FF] text-[#647995]'
        }
    `}
    >
      <div
        className={`${
          text === 'Announcements' ? 'opacity-0' : ''
        } text-inherit`}
      >
        {icon}
      </div>
      <span
        className={`overflow-hidden text-nowrap text-inherit text-sm transition-all ${
          expanded ? 'w-40 ml-3' : 'w-0'
        }`}
      >
        {text}
      </span>
      {alert ? (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-primary600 ${
            expanded ? '' : 'top-2'
          }`}
        />
      ) : null}

      {!expanded ? (
        <div
          className={`
          absolute text-nowrap left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-primary600 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 z-[999]
      `}
        >
          {text}
        </div>
      ) : null}
    </Link>
  )
}

const IconSize = 24

export const sidebarItems = [
  {
    text: 'Dashboard',
    icon: <House className='' size={IconSize} />,
    path: '/dashboard',
  },
  {
    text: 'Class Management',
    icon: <Chalkboard className='text-slate-800' size={IconSize} />,
    path: '/class-management',
  },
  {
    text: 'Announcements',
    icon: <UsersThree className='text-slate-800' size={IconSize} />,
    path: '/announcement',
  },
  {
    text: 'Staff Management',
    icon: <UsersThree className='text-slate-800' size={IconSize} />,
    path: '/staff-management',
  },
  {
    text: 'Student Management',
    icon: <Student className='text-slate-800' size={IconSize} />,
    path: '/student-management',
  },
  {
    text: 'Parent Management',
    icon: <PiUsersFourLight className='text-slate-800' size={IconSize} />,
    path: '/parent-management',
  },
  {
    text: 'Academic & Result',
    icon: <AppWindow className='text-slate-800' size={IconSize} />,
    path: '/academic-result',
  },
  {
    text: 'School Management',
    icon: <Buildings className='text-slate-800' size={IconSize} />,
    path: '/school-management',
  },
  {
    text: 'Finance Management',
    icon: <Wallet className='text-slate-800' size={IconSize} />,
    path: '/finance-management',
  },
  {
    text: 'Account Management',
    icon: <Briefcase className='text-slate-800' size={IconSize} />,
    path: '/account-management',
  },
]
