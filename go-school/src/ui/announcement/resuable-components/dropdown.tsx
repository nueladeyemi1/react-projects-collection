// import { menuList } from "@/components/posts/post-menu/data";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
// import { getInitials } from "@/utils";
import { CaretDown, Gear, Notebook, SignOut, User } from 'phosphor-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import React from 'react'
// import { logout } from "@/services/auth";
import { useRouter } from 'next/navigation'

type Props = {}

const AvatarDropdown = ({ avatar, firstName, lastName }: any) => {
  const router = useRouter()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <li className='flex gap-1 items-center cursor-pointer'>
          <Avatar className='md:w-9 md:h-9 w-8 h-8'>
            <AvatarImage src={avatar} />
            <AvatarFallback>
              {/* {getInitials(firstName + " " + lastName)} */}
            </AvatarFallback>
          </Avatar>
          <CaretDown />
        </li>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        side='bottom'
        className='w-[270px] md:p-4 items-start bg-white'
      >
        <DropdownMenuGroup>
          {dropItems.map((drop) => {
            const { icon, name } = drop
            return (
              <React.Fragment key={name}>
                <DropdownMenuItem
                  // onClick={name === "Logout" ? () => logout(router) : () => {}}
                  className={` ${
                    name === 'Logout' ? 'bg-red-50 hover:bg-red-100' : null
                  } w-full inline-flex items-center  gap-2 cursor-pointer md:px-2 md:py-3 `}
                >
                  {icon}
                  <span
                    className={`  ${
                      name === 'Logout' ? 'text-[#9E0A05]' : null
                    } font-medium text-xs text-slate-700`}
                  >
                    {name}
                  </span>
                </DropdownMenuItem>
              </React.Fragment>
            )
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default AvatarDropdown

const IconColor = '#344054'
const IconSize = 22

const dropItems = [
  {
    name: 'Profile',
    icon: <User color={IconColor} size={IconSize} />,
  },
  {
    name: 'Settings',
    icon: <Gear color={IconColor} size={IconSize} />,
  },
  {
    name: 'Diary',
    icon: <Notebook color={IconColor} size={IconSize} />,
  },
  {
    name: 'Logout',
    icon: <SignOut color='#9E0A05' size={IconSize} />,
  },
]
