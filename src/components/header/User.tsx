"use client";
import Profile from "../Avatar";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import * as React from "react";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";

// const SignUp = () => {
//   router.push("/signup");
// };
// {
// }
const User = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Dropdown>
      <div className="relative">
        <div className="flex flex-row items-center gap-3">
          <a
            href="/hosting"
            className="hidden md:block rounded-full transition hover:bg-neutral-200 cursor-pointer text-sm py-3 px-4 font-semibold"
          >
            Switch to hosting
          </a>
          <MenuButton className="p-4 md:py-1 md:px-2 border-[1px] rounded-full border-neutral-200 flex flex-row items-center gap-3 cursor-pointer  hover:shadow-md transition text-xl">
            <AiOutlineMenu size={18} />
            <div className="hidden md:block">
              <Profile />
            </div>
          </MenuButton>

          <Menu className="w-1/12">
            <MenuItem>
              <a href="/api/auth/login">Sign Up</a>
            </MenuItem>
            <MenuItem>
              <a href="/api/auth/login">Login</a>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </Dropdown>
  );
};
export default User;
