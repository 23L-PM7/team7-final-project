"use client";

import { usePathname } from "next/navigation";
import { AirbnbLogo } from "../icons/AirbnbLogo";

export function ProgressHeader() {
  const pathname = usePathname();
  return (
    <div className="relative">
      <div
        className={`${
          pathname === "/become-a-host/publish-celebration"
            ? "bg-white"
            : "bg-black"
        } flex z-30 fixed left-0 right-0 top-0 bg-white justify-between conatiner mx-auto p-10`}
      >
        <AirbnbLogo />
        <div className="flex gap-3">
          <button className="border w-[100px] px-[16px] h-10 flex justify-center items-center rounded-3xl">
            Questions?
          </button>
          <button className="border w-[120px] px-[16px] h-10 flex justify-center items-center rounded-3xl">
            Save & exit
          </button>
        </div>
      </div>
    </div>
  );
}
