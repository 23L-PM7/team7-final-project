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
         <div className="flex flex-col justify-start pr-12">
              <p className="text-sm font-semibold ">Where</p>
              <p className="text-xs text-gray-400">Search destinations</p>
        </div>
            </MenuButton>
            <Menu>
                
            </Menu>
    </div>
}
export default DateRange