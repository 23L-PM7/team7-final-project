"use client";
import Button from "@mui/joy/Button";
import IconButton from "@mui/material/IconButton";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  IoNotificationsCircleOutline,
  IoNotificationsCircleSharp,
  IoNotificationsOffCircleSharp,
} from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import { AirbnbLogo } from "../../../components/icons/AirbnbLogo";
export default function HostHeader() {
  return (
    <div className="flex py-5 container mx-auto justify-between mb-20">
      <div>
        <AirbnbLogo />
      </div>
      <div className="flex gap-2 text-md ">
        <a className="hover:text-black " href="/overview" color="neutral">
          Create New List
        </a>
      </div>
      <div className="flex gap-10 ">
        <button className="rounded-full border-2  border-slate-500 w-9">
          <IoIosNotificationsOutline
            size={30}
            color="black"
            className="mr-10 ml-0.5"
          />
        </button>
        <button className=" rounded-full border-2   bg-black text-sm w-9 h-9 border-slate-500 text-white">
          T
        </button>
      </div>
    </div>
  );
}
