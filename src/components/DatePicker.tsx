'use client'

import { useEffect, useState } from 'react'

import { CalendarIcon, ChevronDownIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export interface DatePickerWithIcon {
  date?: Date,
  placeholder?: string
}

const DatePickerWithIconDemo = ({ date: initialDateValue, placeholder = "Pick a Date" }: DatePickerWithIcon) => {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(initialDateValue ?? new Date())

  useEffect(() => {
    setDate(initialDateValue);
  }, [initialDateValue])

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant='outline' id='date' className='w-full justify-between font-normal'>
            <span className='flex items-center'>
              <CalendarIcon className='mr-2' />
              {date ? date.toLocaleDateString() : placeholder}
            </span>
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto overflow-hidden p-0' align='start'>
          <Calendar
            mode='single'
            selected={date}
            onSelect={date => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default DatePickerWithIconDemo
