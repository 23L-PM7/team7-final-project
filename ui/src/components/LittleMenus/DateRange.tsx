import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DateRange = () =>{
    return <div>
         <MenuButton variant="plain"  size="sm">
            <div  className=" border-x-[1px] px-12">
              <p className="pr-5 text-sm font-semibold hidden sm:block flex-1 ">              
                  check
              </p>
              <p className="text-xs text-gray-400">Add dates</p>
            </div>
            </MenuButton>
            <MenuButton variant="plain"  size="sm">
            <div className=" border-x-[1px] px-12">
              <p className="px-3 text-sm font-semibold hidden sm:block flex-1 ">
              check
              </p>
              <p className="text-xs text-gray-400">Add dates</p>
            </div>
            </MenuButton>
            <Menu>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangeCalendar']}>
        <DateRangeCalendar />
      </DemoContainer>
    </LocalizationProvider>
      </Menu>
    </div>
}
export default DateRange