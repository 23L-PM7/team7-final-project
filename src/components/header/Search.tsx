"use client";
import { BiSearch } from "react-icons/bi";
import * as React from 'react';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DateRange from "../LittleMenus/DateRange";
import Map from "../LittleMenus/Map";
import AddGuest from "../LittleMenus/AddGuest";

const Search = () => {
  const [selected, setSelected] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    if (position > 150){
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
  console.log(selected)
  if(selected){
    return (
      <div>
    <motion.div  className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.50, 0.2, 0.70],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}>
      <div className="w-[780px] cursor-pointer mx-auto rounded-full border px-5 py-2 lg:flex hidden">
           <div className="flex flex-row items-center justify-between">
            {/* <div className="flex flex-col justify-start pr-12">
              <p className="text-sm font-semibold ">Where</p>
              <p className="text-xs text-gray-400">Search destinations</p>
            </div> */}
            <Map/>
            <DateRange/>
            {/* <MenuButton variant="plain"  size="sm">
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
            </MenuButton> */}
        <div className="flex gap-3 justify-end flex-row text-sm text-gray-600 items-center pl-6 pr-2">
          <AddGuest/>
          {/* <div className="flex flex-col justify-end">
            <p className="hidden sm:block">Any guest</p>
            <p className="text-xs text-gray-400">Add guest</p>
          </div> */}
          <div className="rounded-full p-2 bg-rose-500 text-white ">
          <BiSearch size={18}/>
          </div>
        </div>
      </div>
      </div>
      </motion.div>
      {/* <Menu>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangeCalendar']}>
        <DateRangeCalendar />
      </DemoContainer>
    </LocalizationProvider>
      </Menu> */}
      </div>
     
      
    )
  }
  return (
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
      className=" rounded-full border-[1px] w-full md:w-auto py-2 shadow-sm hover:shadow-md transition cursor-pointer"
    >
      <div className="flex flex-row items-center justify-between">
        <p className="px-6 text-sm font-semibold ">Anywhere</p>
        <MenuButton  variant="plain">
          <p onClick={() => setSelected(!selected)} className="px-6 text-sm font-semibold hidden sm:block flex-1 border-x-[1px]">
            Any week
          </p>
        </MenuButton>
        
        <div className="flex gap-3 flex-row text-sm text-gray-600 items-center pl-6 pr-2">
          <p className="hidden sm:block">Any guest</p>
          <div className="rounded-full p-2 bg-rose-500 text-white ">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
    {/* <Menu>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangeCalendar']}>
        <DateRangeCalendar />
      </DemoContainer>
    </LocalizationProvider>
      </Menu> */}
    </motion.div>
    </Dropdown>



);
};
    {/* <Dropdown>
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

    */}

 

export default Search;