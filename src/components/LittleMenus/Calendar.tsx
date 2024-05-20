"use client"
import * as React from 'react';
import { DateRange } from '@mui/x-date-pickers-pro/models';
import { LocalizationProvider, monthCalendarClasses } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import dayjs, { Dayjs } from 'dayjs';
import Link from 'next/link';
import { useState } from 'react';
// import { useRouter } from 'next/router';
import { usePathname, useSearchParams , useRouter } from 'next/navigation';

const Calendar = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [value, setValue] = React.useState<DateRange<Dayjs>>([
        dayjs(Date.now()),
        dayjs('2022-05-14'),
    ]);

    const createQueryString = React.useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )
    console.log(value);
    return <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateRangeCalendar']}>
            <DateRangeCalendar
                value={value}
                onChange={(newValue) => setValue(newValue)} />
            <p>{value.toString()}</p>
            <Link href={ pathname + '?' + createQueryString('date', value.toString())}>ok</Link>
        </DemoContainer>
    </LocalizationProvider>
}
export default Calendar