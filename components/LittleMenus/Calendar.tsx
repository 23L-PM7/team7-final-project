"use client"
import * as React from 'react';
import { DateRange } from '@mui/x-date-pickers-pro/models';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

const Calendar = () => {
    const [value, setValue] = React.useState<DateRange<Dayjs>>([
        dayjs('2022-05-10'),
        dayjs('2022-05-10'),
    ]);
    console.log(value);
    return <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateRangeCalendar']}>
            <DateRangeCalendar
                value={value}
                onChange={(newValue) => setValue(newValue)} />
            <p>{value.toString()}</p>
        </DemoContainer>
    </LocalizationProvider>
}
export default Calendar