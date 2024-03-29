'use client'

import * as React from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'
import { AnouncementData } from './anouncement-data'

export const columns: ColumnDef<AnouncementData>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('title')}</div>
    ),
  },
  {
    accessorKey: 'recipients',
    header: ({ column }) => {
      return (
        <Button
          className='m-[0px] p-[0px] hover:bg-[none] hover:text-[#FFFFFF]'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Recipients
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue('recipients')}</div>
    ),
  },
  {
    // id: 'actions',
    accessorKey: 'announcementAddress',
    header: () => <div className='text-right'> </div>,
    enableHiding: false,
    cell: ({ row }) => {
      const announcementAddress = row.getValue('announcementAddress')

      return (
        <div className='flex'>
          {announcementAddress.map((val: string) => (
            <div className=''>{val}, </div>
          ))}
        </div>
      )
    },
  },
  {
    accessorKey: 'dateSent',
    header: () => <div className='text-left'>Date Sent</div>,
    cell: ({ row }) => {
      const amount = row.getValue('dateSent')

      return <div className='text-left font-medium'>{amount as string} </div>
    },
  },
  {
    accessorKey: 'status',
    header: () => <div className='text-center'>Status</div>,
    cell: ({ row }) => {
      const status = row.getValue('status')

      return (
        <div
          className={`text-center font-medium ${
            status === 'Sent'
              ? 'bg-[#E7F6EC] text-[#036B26]'
              : 'bg-[#FEF6E7] text-[#865503]'
          }`}
        >
          {status as string}{' '}
        </div>
      )
    },
  },
  {
    accessorKey: 'actions',
    header: () => <div className='text-left'>Actions</div>,
    cell: ({ row }) => {
      const amount = row.getValue('actions')
      const status = row.getValue('status')

      return (
        <div className='text-left font-medium'>
          {status === 'Sent' ? (
            <div className='text-[#D42620]'>Delete</div>
          ) : (
            <div className='flex items-center gap-[4px]'>
              <div className='text-[#0D6EFD]'>Edit</div>
              <div className='text-[#D42620]'>Delete</div>
            </div>
          )}
          {/* {amount as string}  */}
        </div>
      )
    },
  },
]
