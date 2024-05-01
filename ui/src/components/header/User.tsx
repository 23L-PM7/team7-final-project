"use client";
import { useState } from "react";
import Avatar from "../../../providers/Avatar";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";



const User = () => {
 const [ open , setOpen] = useState(false)
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <button
          className="hidden md:block rounded-full transition hover:bg-neutral-200 cursor-pointer text-sm py-3 px-4 font-semibold"
        >
          Airbnb your home
        </button>
        <div
          className="p-4 md:py-1 md:px-2 border-[1px] rounded-full border-neutral-200 flex flex-row items-center gap-3 cursor-pointer  hover:shadow-md transition text-xl"
        >
          <AiOutlineMenu size={18}/>   
        <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  )  
}

export default User;
