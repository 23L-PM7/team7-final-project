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
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Search = () => {
  const [selected, setSelected] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    if (position > 100){
      setSelected(false);
    }
    else {
      setSelected(true);
    }
}; useEffect(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
      window.removeEventListener('scroll', handleScroll);
  };
}, []);
  return (
    <>


    <Dropdown>
    <motion.div  className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}>
    <div
      onClick={() => setSelected(!selected)} className={`rounded-full border-[1px] w-80 md:w-auto py-2 my-auto shadow-sm hover:shadow-md  ease-in-out delay-150 transition cursor-pointer ${selected ? 'xl:!mx-20 !w-[700px]  xl:!py-4 xl:transition xl:ease-in-out xl:delay-150' : '! '}`}
    >
      <div className="flex flex-row items-center  justify-between">
        <p className="px-6 text-sm font-semibold w-1/6">Anywhere</p> 
        <MenuButton variant="plain">
          <p className="px-6 :text-sm font-semibold flex items-center gap-3 sm:block flex-1 border-x-[1px] ">
          {
            selected ? "Start " : "Any week"
          }
          </p>
          <p className={` ${selected ? 'xl:flex  xl:px-6 xl:text-sm xl:font-semibold xl:my-auto sm:block xl:flex-1 ' : 'hidden mx-auto'}`}>
          {
            selected ? "End" : null
          }
          </p>
        </MenuButton>
        <div className="flex gap-3 flex-row text-sm text-gray-600 items-center pl-6 pr-2">
          <p className="hidden sm:block ">Any guest</p>
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
    </motion.div>
   
    </Dropdown>

   
    </>
  );
};

export default Search;
