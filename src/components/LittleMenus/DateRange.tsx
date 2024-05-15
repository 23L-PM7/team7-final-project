import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { useState } from "react";
import { useDate } from '@/app/globals';

const DateRange = () => {
    const { date, setDate }: any = useDate();

    console.log(date);

    return (
    <div className='w-[700px]'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateRangeCalendar']}>
                <DateRangeCalendar sx={{width: 700}} onChange={(newDate) => setDate(newDate)} />
            </DemoContainer>
        </LocalizationProvider>
    </div>
)}
export default DateRange