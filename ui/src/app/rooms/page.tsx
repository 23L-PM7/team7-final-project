"use client"

import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Button, Grid, Typography } from '@mui/joy';
import { useCheckIn, useCheckOut } from '../globals';
import { ShareIcon } from '../../../public/icons/share';
import { LuHeart, LuShare } from "react-icons/lu";

export default function BasicDateCalendar() {

    const { checkIn, setCheckIn }: any = useCheckIn();
    const { checkOut, setCheckOut }: any = useCheckOut();

    console.log(checkIn);
    console.log(checkOut);

    return (
        <div className="container mx-auto grid gap-6 my-6">

            <div className='flex justify-between items-center my-4 border-2'>
                <Typography level="h3">
                    Room Title
                </Typography>
                <div className="flex gap-2">
                    <Button startDecorator={<LuShare />} variant="plain">
                        Share
                    </Button>
                    <Button startDecorator={<LuHeart />} variant="plain">
                        Save
                    </Button>
                </div>
            </div>

            <div className='w-full border-2'>
                Image
            </div>

            <div className='border-2 flex'>
                <div className='w-4/6 border-2'>
                    <div className='flex'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar onChange={(newValue) => setCheckIn(newValue)} />
                        </LocalizationProvider>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar onChange={(newValue) => setCheckOut(newValue)} />
                        </LocalizationProvider>
                    </div>
                </div>
                <div className='w-2/6 border-2'>
                    hello
                </div>
            </div>


        </div>

    );
}