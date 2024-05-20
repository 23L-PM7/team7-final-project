"use client";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Avatar } from "@mui/joy";
import DropdownMenu from "./DropdownMenu";

const User = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownItems = ["Item 1", "Item 2", "Item 3"];

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <button className="hidden md:block rounded-full transition hover:bg-neutral-200 cursor-pointer text-sm py-3 px-4 font-semibold">
          Airbnb your home
        </button>
        <div
          className="p-4 md:py-1 md:px-2 border-[1px] rounded-full border-neutral-200 flex flex-row items-center gap-3 cursor-pointer  hover:shadow-md transition text-xl"
          onClick={toggleDropdown}
        >
          <AiOutlineMenu size={18} />
          <div className="hidden md:block">
            <Avatar />
          </div>
          {isOpen && <DropdownMenu items={dropdownItems} />}
        </div>
      </div>
    </div>
  );
};

export default User;
