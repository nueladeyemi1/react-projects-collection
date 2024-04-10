'use client'
// import GoButton from '@/components/goui/button'
import { Button } from '@/components/ui/button'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
// import { getInitials } from '@/utils'
import {
  // Basket,
  Bell,
  CaretDown,
  ChartPieSlice,
  Eye,
  // HandCoins,
  House,
  ListChecks,
  MagnifyingGlass,
  // PlusSquare,
  SmileyXEyes,
  TrendUp,
  Wallet,
} from 'phosphor-react'
import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import AvatarDropdown from './dropdown'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
// import { getUserId } from '@/lib/get-userId'
// import PostAvatar from '@/components/posts/dairy-post/avatar'

// import { searchUsers } from '@/axios/endpoints/post.endpoint'

import debounce from 'lodash.debounce'
import { AxiosResponse } from 'axios'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { AnnouncementContext } from '../table/DataTable'
// import Popover from "@/components/posts/popover";

type Props = {
  showNav?: boolean
  isUser?: boolean
}

const TopBar = ({ showNav = true, isUser }: Props) => {
  const [focused, setFocused] = useState(false)
  const announcement = useContext(AnnouncementContext)
  const router = useRouter()
  const pathname = usePathname()

  // useEffect(() => {
  //   setAnnouncement(true)
  // }, [announcement])
  // const userId = getUserId() || ''

  const userId = '54646'

  useEffect(() => {
    if (userId === undefined || !userId) {
      router.push('/gopal?mode=auth')
    }
  }, [pathname, router])
  return (
    <>
      <nav className='fixed top-0 h-20 bg-white w-full' style={{ zIndex: 30 }}>
        <div className='flex items-center justify-between w-full h-full max-w-[1700px] px-10 mx-auto'>
          <div className='flex items-center gap-2 '>
            <Logo />
            <Search focused={focused} setFocused={setFocused} />
          </div>

          {showNav && (
            <div className=''>
              <TopMenu isUser={isUser} />
            </div>
          )}
        </div>
        {focused ? (
          <div className='absolute top-20 left h-screen w-screen bg-black/80 -z-[1]'></div>
        ) : null}

        {announcement ? (
          <div className='absolute top-0 left h-screen w-screen bg-black/80 -z-[1]'></div>
        ) : null}
      </nav>
    </>
  )
}

export default TopBar

export const Logo = () => {
  return (
    <div className='w-fit h-fit relative p-1 bg-primary600 rounded-sm'>
      <Image
        src='/logo.png'
        alt='GoSchool Logo'
        width={60}
        height={60}
        className='w-8 h-8'
      />
    </div>
  )
}

interface SearchResult {
  id: string
  name: string
  firstname: string
  picture: string
  followers: string
  following: string
  lastname: string
}

export const Search = ({ focused, setFocused }: any) => {
  const [query, setQuery] = useState<string>('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [searching, setSearching] = useState(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const searchRef = useRef<HTMLDivElement>(null)

  // const debouncedSearch = debounce(async (searchQuery: string) => {
  //   try {
  //     if (searchQuery) {
  //       setSearching(true)
  //       setLoading(true)

  //       const response = await searchUsers({
  //         keyword: searchQuery,
  //         type: 'user',
  //       })

  //       console.log(response)

  //       setTimeout(() => {
  //         setLoading(false)
  //         setSearchResults(response.result)
  //         if (!response.result.length) {
  //           setError(
  //             `Oops! "<span style= "color:#0D6EFD;">${searchQuery}</span>" does not exist.`
  //           )
  //           console.error(`"${searchQuery}" does not exist.`, error)
  //         }
  //       }, 1000)
  //     }
  //   } catch (error) {
  //     setError('Error fetching search results. Please try again later.')
  //     setTimeout(() => {
  //       setLoading(false)
  //     }, 1000)
  //     console.error('Error fetching search results:', error)
  //   }
  // }, 100)

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
    if (searchQuery) {
      setLoading(true)
      // debouncedSearch(searchQuery)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        console.log('clicked outside')
        setSearching(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={searchRef} className='relative h-fit'>
      <div className='relative'>
        <Input
          type='text'
          className={cn(
            'transition-all duration-300 pl-9 bg-gray-100 focus-visible:bg-none rounded-sm focus:outline-none outline-none',
            focused ? 'w-[450px]' : 'w-[250px]'
          )}
          placeholder='Search'
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <MagnifyingGlass
          size={19}
          weight='bold'
          className={cn(
            'absolute top-0.5 left-1.5 bottom-0 text-slate-700 translate-y-1/2',
            focused ? 'text-primary600' : ''
          )}
        />
      </div>

      {focused && !query ? (
        <div className='bg-white absolute z-[1] top-14 w-[450px] h-[500px] rounded-sm shadow-sm border border-primary200 '>
          <div className='px-4 py-3 border border-b-gray-300 '>
            <div className='text-sm text-gray-600'>Start your search here</div>
          </div>
          <div className='flex flex-col items-center h-[80%] justify-center gap-2 '>
            <img src='/assets/search.svg' alt='' className='w-24' />
            <p className='text-slate-700 text-sm'>Search for users...</p>
          </div>
        </div>
      ) : null}

      {searching && query ? (
        <>
          {!searchResults?.length && error && query ? (
            <div className='bg-white absolute z-[1] top-14 w-[450px] h-[500px] px-4 rounded-sm shadow-sm border border-primary200 py-3 '>
              <div className='flex flex-col justify-center items-center w-full h-full'>
                <SmileyXEyes
                  weight='bold'
                  size={33}
                  className='text-primary600'
                />
                <p className='text-sm text-center font-medium text-gray-600 mt-3 w-[200px]'>
                  <span dangerouslySetInnerHTML={{ __html: error }}></span>
                </p>
              </div>
            </div>
          ) : null}

          {loading && (
            <div className='bg-white flex flex-col absolute z-[2] top-14 w-[450px] h-[500px] overflow-y-scroll rounded-sm shadow-sm border border-primary200 '>
              <div className='px-4 py-3 border border-b-gray-300 '>
                <div className='text-sm text-gray-600'>Accounts</div>
              </div>

              {Array.from({
                length: 20,
              })?.map(() => {
                return (
                  <div className='flex items-center space-x-4 px-4 py-2'>
                    <Skeleton className='md:w-9 md:h-9 w-8 h-8 rounded-full' />
                    <div className='space-y-2'>
                      <Skeleton className='h-4 w-[150px]' />
                      <Skeleton className='h-3 w-[100px]' />
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {searchResults?.length ? (
            <div className='bg-white flex flex-col  absolute z-[1] top-14 w-[450px] h-[500px] overflow-y-scroll rounded-sm shadow-sm border border-primary200'>
              <div className='sticky w-full z-[3] px-4 py-3 border bg-white border-b-gray-300 '>
                <div className='text-sm text-gray-600'>Accounts</div>
              </div>

              {searchResults?.slice(0, 20).map((user, index) => {
                const {
                  id,
                  firstname,
                  lastname,
                  picture,
                  followers,
                  following,
                } = user

                return (
                  <div className='hover:bg-gray-100 px-4'>
                    {/* <PostAvatar
                      firstName={firstname}
                      lastName={lastname}
                      avatar={picture}
                      size="small"
                      noDate
                    /> */}

                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <button>
                          {/* <PostAvatar
                            firstName={firstname}
                            lastName={lastname}
                            avatar={picture}
                            size='small'
                            noDate
                          /> */}
                        </button>
                      </HoverCardTrigger>
                      <HoverCardContent
                        align='start'
                        side='right'
                        sideOffset={30}
                        className='relative m-1 my-1 px-4 w-80'
                      >
                        {/* <Popover
                          createdAt=''
                          firstName={firstname}
                          lastName={lastname}
                          avatar={picture}
                          size='small'
                        /> */}
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                )
              })}

              <div className='sticky bottom-0 z-[3]  cursor-pointer hover:bg-primary100/50 w-full flex items-center gap-2 px-4 py-2 border bg-white border-b-gray-300 '>
                <div className='p-2 rounded-full bg-primary100'>
                  <Eye className='text-primary600' weight='bold' size={20} />
                </div>
                <div className='text-sm text-gray-700'>
                  See all the result for "{query}"
                </div>
              </div>
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  )
}

export const TopMenu = ({ isUser }: Props) => {
  return (
    <div className='flex items-center'>
      <ul className='flex gap-5 items-center'>
        {isUser
          ? menuItems.map((item) => {
              const { name, icon, href } = item
              return (
                <li key={name} className=''>
                  <Link
                    className='flex flex-col items-center text-slate-600 gap-1 cursor-pointer group'
                    href={href ?? ''}
                  >
                    {icon}
                    <p
                      className={`text-xs group-hover:text-slate-800 ${
                        name === 'Home'
                          ? 'text-slate-800 font-semibold'
                          : 'text-slate-600'
                      }`}
                    >
                      {name}
                    </p>
                  </Link>
                </li>
              )
            })
          : null}
      </ul>

      {isUser ? <div className='mx-7 w-px h-9 bg-gray-300' /> : null}
      <ul className='flex gap-5 items-center'>
        {isUser ? (
          <>
            {/* <li>
              <Link href='/gopal/subscription'>
                <Button className='text-xs'>Subscribe</Button>
              </Link>
            </li> */}
            {addOnItems?.map((item) => {
              const { name, icon } = item
              return (
                <li
                  key={name}
                  className='flex flex-col items-center text-slate-600 gap-1 cursor-pointer'
                >
                  {icon}
                  <p className='text-xs'>{name}</p>
                </li>
              )
            })}

            {isUser ? (
              <AvatarDropdown
                avatar='/avatar-7.png'
                firstName='Ayo'
                lastName='Idowu'
              />
            ) : null}
          </>
        ) : (
          <>
            <li>
              <Link href='/auth/sign-in'>
                <Button className='text-xs font-medium'>Sign in</Button>
              </Link>
            </li>

            <li>
              <Link href='/auth/sign-up'>
                <Button className='text-xs bg-primary200  text-primary600 border-primary200 font-medium'>
                  Sign up
                </Button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

const IconSize = 24

export const menuItems = [
  {
    name: 'Home',
    icon: <House weight='fill' className='text-slate-800' size={IconSize} />,
  },
  {
    name: 'Dashboard',
    icon: <ChartPieSlice size={IconSize} />,
    href: '/dashboard',
  },
  {
    name: 'Wallet',
    icon: <Wallet size={IconSize} />,
  },
  {
    name: 'Plan a trip',
    icon: <ListChecks size={IconSize} />,
  },
  // {
  //   name: 'Commission for life',
  //   // icon: <HandCoins size={IconSize} />,
  // },
]

const addOnItems = [
  {
    name: 'Notification',
    icon: <Bell size={IconSize} />,
  },
  // {
  //   name: 'Carts',
  //   // icon: <Basket size={IconSize} />,
  // },
  // {
  //   name: 'Create',
  //   // icon: <PlusSquare size={IconSize} />,
  // },
]
