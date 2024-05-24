"use client";

import { IoIosNotificationsOutline } from "react-icons/io";
import { LogoNewSmall } from "../../../components/icons/LogoNewSmall";

export default function HostHeader() {
  return (
    <div className="flex py-5 container mx-auto justify-between mb-20">
      <div>
        <LogoNewSmall />
      </div>
      <div className="flex gap-2 text-md ">
        <a
          className="hidden md:block hover:flex justify-center items-center  rounded-full transition hover:bg-neutral-200 cursor-pointer text-sm py-2 px-4 font-semibold "
          href="/overview"
          color="neutral"
        >
          Create New List
        </a>
      </div>

      <button className=" rounded-full border-2   bg-black text-sm w-9 h-9 border-slate-500 text-white">
        T
      </button>
    </div>
  );
}
