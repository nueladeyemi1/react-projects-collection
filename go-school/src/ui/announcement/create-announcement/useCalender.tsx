'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
// import { toast } from '@/components/ui/use-toast'

const FormSchema = z.object({
  schedule: z.date({
    required_error: 'A schedule date is required.',
  }),
})

export function CalendarForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  //   function onSubmit(data: z.infer<typeof FormSchema>) {
  //     toast({
  //       title: 'You submitted the following values:',
  //       description: (
  //         <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
  //           <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
  //         </pre>
  //       ),
  //     })
  //   }

  return (
    <Form {...form}>
      {/* <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'> */}
      <FormField
        control={form.control}
        name='schedule'
        render={({ field }) => (
          <FormItem className='flex flex-col w-full'>
            <FormLabel>Schedule Date</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl className='border-[#98A2B3] border-[1px] rounded'>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-full pl-3 text-left font-normal',
                      !field.value && 'text-muted-foreground'
                    )}
                  >
                    {field.value ? (
                      format(field.value, 'dd/MM/yyyy')
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0' align='start'>
                <Calendar
                  className='bg-[#FFFFFF]'
                  mode='single'
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) =>
                    date < new Date() || date < new Date('1900-01-01')
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {/* <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription> */}
            {/* <FormMessage /> */}
          </FormItem>
        )}
      />
      {/* <Button type='submit'>Submit</Button> */}
      {/* </form> */}
    </Form>
  )
}
