'use client'

import * as React from 'react'

import { ColumnDef } from '@tanstack/react-table'

import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri'

import { PiCaretUpDownBold } from 'react-icons/pi'

import { Button } from '@/components/ui/button'

import { Checkbox } from '@/components/ui/checkbox'

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
    header: ({ column }) => {
      return (
        <Button
          className='m-[0px] p-[0px] hover:bg-[none] hover:text-[#FFFFFF] flex items-center gap-[10px]'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <p>Title</p>
          <PiCaretUpDownBold size={20} />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className='capitalize text-[#1D2433]'>{row.getValue('title')}</div>
    ),
  },
  {
    accessorKey: 'recipients',
    header: ({ column }) => {
      return (
        <Button
          className='m-[0px] p-[0px] hover:bg-[none] hover:text-[#FFFFFF] flex items-center gap-[10px]'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <p>Recipients</p>
          <PiCaretUpDownBold size={20} />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className='lowercase text-[#1D2433]'>
        {row.getValue('recipients')}
      </div>
    ),
  },
  {
    // id: 'actions',
    accessorKey: 'announcementAddress',
    header: () => <div className='text-right'> </div>,
    enableHiding: false,
    cell: ({ row }) => {
      const announcementAddress: [] = row.getValue('announcementAddress')

      return (
        <div className='flex text-[#1D2433]'>
          {announcementAddress.map((val: string, index) => (
            <div key={index} className=''>
              {val},{' '}
            </div>
          ))}
        </div>
      )
    },
  },
  {
    accessorKey: 'dateSent',
    header: ({ column }) => {
      return (
        <Button
          className='m-[0px] p-[0px] hover:bg-[none] hover:text-[#FFFFFF] flex items-center gap-[10px]'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          <p>Date Sent</p>
          <PiCaretUpDownBold size={20} />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = row.getValue('dateSent')

      return (
        <div className='text-left text-[#676E7E] font-[400]'>
          {amount as string}{' '}
        </div>
      )
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
            <div className='text-[#D42620] flex items-center gap-[4px]'>
              <RiDeleteBinLine />
              <p>Delete</p>
            </div>
          ) : (
            <div className='flex items-center gap-[12px] '>
              <div className='text-[#0D6EFD] flex items-center gap-[4px]'>
                <RiEdit2Line size={15} />
                <p> Edit</p>
              </div>
              <div className='text-[#D42620] flex items-center gap-[4px]'>
                <RiDeleteBinLine size={15} />
                <p>Delete</p>
              </div>
            </div>
          )}
        </div>
      )
    },
  },
]
