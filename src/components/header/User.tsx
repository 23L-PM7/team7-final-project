"use client";
import Avatar from "../Avatar";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import * as React from "react";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
const User = () => {
  return (
    <Dropdown>
      <div className="relative">
        <div className="flex flex-row items-center gap-3">
          <button className="hidden md:block rounded-full transition hover:bg-neutral-200 cursor-pointer text-sm py-3 px-4 font-semibold">
            Airbnb your home
          </button>
          <MenuButton className="p-4 md:py-1 md:px-2 border-[1px] rounded-full border-neutral-200 flex flex-row items-center gap-3 cursor-pointer  hover:shadow-md transition text-xl">
            <AiOutlineMenu size={18} />
            <div className="hidden md:block">
              <Avatar />
            </div>
          </MenuButton>

          <Menu className="w-1/12">
            <MenuItem>Sign-up</MenuItem>
            <MenuItem>Login</MenuItem>
          </Menu>
        </div>
      </div>
    </Dropdown>
  );
};
export default User;
