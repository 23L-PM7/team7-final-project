"use client";
import { BiSearch } from "react-icons/bi";
import * as React from 'react';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

const Search = () => {
 
  return (
    <Dropdown>
    <div
      className=" rounded-full border-[1px] w-full md:w-auto py-2 shadow-sm hover:shadow-md transition cursor-pointer"
    >
      <div className="flex flex-row items-center justify-between">
        <p className="px-6 text-sm font-semibold ">Anywhere</p> 
        <MenuButton>
          <p className="px-6 text-sm font-semibold hidden sm:block flex-1 border-x-[1px]">
            Any week
          </p>
        </MenuButton>
        <div className="flex gap-3 flex-row text-sm text-gray-600 items-center pl-6 pr-2">
          <p className="hidden sm:block">Any guest</p>
          <div className="rounded-full p-2 bg-rose-500 text-white ">
          <BiSearch size={18}/>
          </div>
        </div>
      </div>
    </div>
    <Menu>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangeCalendar']}>
        <DateRangeCalendar />
      </DemoContainer>
    </LocalizationProvider>
      </Menu>
    </Dropdown>

   

  );
};

export default Search;
