"use client"
import * as React from 'react';
import { DateRange } from '@mui/x-date-pickers-pro/models';
import { LocalizationProvider, monthCalendarClasses } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import Button from '@mui/joy/Button';
import dayjs, { Dayjs } from 'dayjs';
import Link from 'next/link';
import { useState } from 'react';
// import { useRouter } from 'next/router';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDate } from '../../app/globals';

const Calendar = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const { date, setDate }: any = useDate();
    const { formattedDate , getFormattedDate }:any = useDate();
    const search = searchParams.get('date')?.toString

    // console.log(getFormattedDate(date[0]));
    // console.log(getFormattedDate(date[1])); // Output: Jan 1 // Output: Jan 1

    const createQueryString = React.useCallback(
        (name: string, startValue: string, endValue: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, `${startValue}  ${endValue}`)
    
            return params.toString()
        },
        [searchParams]
    )

    return <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateRangeCalendar']}>
            <DateRangeCalendar
                value={date}
                onChange={(newDate) => setDate(newDate)} />
            <Link href={pathname + '?' + createQueryString('date', getFormattedDate(date[0]),getFormattedDate(date[1]))}>
                <Button className='ml-4'>Done</Button>
            </Link>
        </DemoContainer>
    </LocalizationProvider>
}
export default Calendar