"use client";

import { GuestsCounter } from "@/components/counter/GuestsCounter";
import { Kitchen } from "@/components/icons/amenitiesIcons/Kitchen";

export default function Guests() {
  return (
    <div className="container mx-auto flex justify-center items-center pt-[373px]">
      <div className=" w-[630px] h-[480px] ">
        <h1 className="text-3xl font-medium mb-2">
          How many guests fit comfortably in your place?
        </h1>

        <div className="  rounded-xl h-[30px]  flex justify-center items-center mt-32 mb-3">
          <div>
            <GuestsCounter />
          </div>
        </div>
      </div>
    </div>
  );
}
