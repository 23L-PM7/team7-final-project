<<<<<<< HEAD
"use client";
import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDate } from "../../app/globals";

const Calendar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { date, setDate }: any = useDate();

  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
=======
"use client"
import * as React from 'react';
import { DateRange } from '@mui/x-date-pickers-pro/models';
import { LocalizationProvider, monthCalendarClasses } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import dayjs, { Dayjs } from 'dayjs';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDate, useDays } from '../../app/globals';

const Calendar = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const { date, setDate }: any = useDate();
    const { daysNumber, setDaysNumber } : any = useDays();
    const search = searchParams.get('date')?.toString

    const totalDays = 0 - date[0].diff(date[1], "day")

    useEffect(() => {
        setDaysNumber(totalDays);
      }, [totalDays]);

      console.log(daysNumber);
>>>>>>> main

      return params.toString();
    },
    [searchParams]
  );

  console.log(date);

<<<<<<< HEAD
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangeCalendar"]}>
        <DateRangeCalendar
          value={date}
          onChange={(newDate) => setDate(newDate)}
        />
        <p>{date.toString()}</p>
        <Link
          href={pathname + "?" + createQueryString("date", date.toString())}
        >
          ok
        </Link>
      </DemoContainer>
=======
    return <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateRangeCalendar']}>
            <DateRangeCalendar
                value={date}
                onChange={(newDate) => setDate(newDate)} />
            <Link href={pathname + '?' + createQueryString('date', date.toString())}></Link>
        </DemoContainer>
>>>>>>> main
    </LocalizationProvider>
  );
};
export default Calendar;
