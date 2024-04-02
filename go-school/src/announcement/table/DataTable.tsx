'use client'

import * as React from 'react'

import { PiSlidersHorizontalBold } from 'react-icons/pi'

import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Input } from '@/components/ui/input'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { columns } from './columns'

import { data } from './anouncement-data'
import CreateAnnouncement from '../create-announcement/createAnnouncement'

export const AnnouncementContext = React.createContext(false)

export function AnnouncementTable() {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0, //initial page index
    pageSize: 8, //default page size
  })

  const [announcement, setAnnouncement] = React.useState<boolean>(false)

  const [sorting, setSorting] = React.useState<SortingState>([])

  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )

  const [columnVisibility, setColumnVisibility] = React.useState<
    VisibilityState
  >({})

  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
  })

  // blur-[1.2px] filter backdrop-brightness-[75%]

  return (
    <AnnouncementContext.Provider value={announcement}>
      <div
        className={`${
          announcement ? '' : ''
        } relative w-[1100px] h-[60vh] px-[24px] pt-[24px] pb-[0px] flex flex-col gap-[32px]`}
      >
        <div className='flex justify-between items-center'>
          <p>All Announcements </p>
          <div className='flex gap-[8px] justify-end'>
            <Input
              placeholder='Search'
              value={
                (table.getColumn('title')?.getFilterValue() as string) ?? ''
              }
              onChange={(event) =>
                table.getColumn('title')?.setFilterValue(event.target.value)
              }
              className='max-w-[248px] rounded-[4px] bg-[#F0F2F5] placeholder:text-[#647995] placeholder:font-[400] placeholder:text-[14px]'
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className='bg-[#F7F9FC] border-[#D0D5DD] border-[1px] text-[#000000] rounded-[4px] flex items-center gap-[4px]'>
                  <PiSlidersHorizontalBold />
                  <p>Filter</p>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='bg-[#fff]' align='end'>
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className='capitalize hover:bg-[#F0F0F0]'
                        checked={column.getIsVisible()}
                        onCheckedChange={(value: any) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    )
                  })}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              className='bg-[#0D6EFD] text-[#FFFFFF] hover:bg-[none] rounded-[4px]'
              onClick={() => {
                setAnnouncement(!announcement)
              }}
            >
              New Announcement
            </Button>
          </div>

          {/* Table Rendering  */}
        </div>
        <div>
          <Table>
            <TableHeader style={{ color: '#fff ' }}>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header, index) => {
                    return (
                      <TableHead
                        className={`${
                          index === 0
                            ? 'rounded-tl-[4px]'
                            : index === headerGroup.headers.length - 1
                            ? 'rounded-tr-[4px]'
                            : ''
                        } bg-[#00004A] text-[#FFFFFF]`}
                        key={header.id}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row, index) => (
                  <TableRow
                    // className='border-none'
                    className={`${index % 2 === 0 ? '' : 'bg-[#F0F0F0]'}`}
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell className='' key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className='h-24 text-center'
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className='bg-[#F7F9FC] h-[56px] rounded-t flex items-center justify-between'>
          <div className='pl-[48px] text-[16px] font-[500] text-[#000000]'>
            Page {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </div>
          <div className='flex'>
            {' '}
            <Button
              variant='outline'
              className='h-8 w-8 p-0 mr-[47px]'
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeftIcon className='h-4 w-4' />
            </Button>
            <div className='flex gap-2'>
              {Array.from({ length: table.getPageCount() }, (_, index) => {
                return (
                  <Button
                    key={index}
                    variant='outline'
                    className='h-8 w-8 p-0 rounded'
                    onClick={() => table.setPageIndex(index)}
                    disabled={!table.getCanNextPage()}
                  >
                    {index + 1}
                  </Button>
                )
              })}
            </div>
            <Button
              variant='outline'
              className='h-8 w-8 p-0 ml-[13px]'
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <ChevronRightIcon className='h-4 w-4' />
            </Button>
          </div>

          <div className='pr-[82px]'>
            {' '}
            <label className='flex items-center gap-[16px]'>
              <span className='font-[500] text-[16px] leading-[24px] tracking-[0.02] text-[#1D2433]'>
                Go to Page
              </span>
              <Input
                value={table.getState().pagination.pageIndex + 1}
                className='w-[72px] rounded-[4px]'
                type='number'
                onChange={(e) =>
                  +e.target.value >= table.getPageCount()
                    ? table.setPageIndex(table.getPageCount() - 1)
                    : +e.target.value <= 0
                    ? table.setPageIndex(0)
                    : table.setPageIndex(+e.target.value - 1)
                }
              />
            </label>
          </div>
        </div>
      </div>
      {announcement && <CreateAnnouncement setAnnouncement={setAnnouncement} />}
    </AnnouncementContext.Provider>
  )
}
