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
export default function HostHeader() {
  return (
    <div className="flex justify-between mb-20">
      <div>
        <img
          className=" w-15 h-11 pl-4 pt-2	"
          src="/images/airbnb-logo.png"
          alt=""
        />
      </div>
      <div className="flex gap-2 text-md ">
        <Button color="neutral" variant="plain">
          Today
        </Button>
        <Button color="neutral" variant="plain">
          Calender
        </Button>
        <Button color="neutral" variant="plain">
          Listings
        </Button>
        <Button color="neutral" variant="plain">
          Inbox
        </Button>
        <Button color="neutral" variant="plain">
          Menu
        </Button>
      </div>
      <div className="flex gap-10 pr-10 pt-2">
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
