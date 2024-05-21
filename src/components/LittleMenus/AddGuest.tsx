import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import { GuestCounter } from '../counter/GuestCounter';
import MenuItem from '@mui/joy/MenuItem';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AddGuest = () =>{
    return (<Dropdown>
        <div>
         <MenuButton variant="plain"  size="sm">
         <div className="flex flex-col justify-end">
            <p className="hidden sm:block">Any guest</p>
            <p className="text-xs text-gray-400">Add guest</p>
          </div>
            </MenuButton>
            <Menu>
                <div className='w-80 p-6'>
                    <GuestCounter/>
                </div>
            </Menu>
    </div>
    </Dropdown>
)
}
export default AddGuest