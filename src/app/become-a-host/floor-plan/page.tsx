"use client";

import { Counter } from "@/components/counter/Counter";
import { Kitchen } from "@/components/icons/amenitiesIcons/Kitchen";

export default function FloorPaln() {
  return (
    <div className="container mx-auto flex justify-center items-center pt-[373px]">
      <div className=" w-[630px] h-[480px] ">
        <h1 className="text-3xl font-medium mb-2">
          Let's start with the basics
        </h1>
        <p>You'll add more details later, like bed types.</p>
        <div className=" rounded-xl h-[30px]  flex justify-between mt-12 mb-3">
          <p className=" text-lg font-light">Bedrooms</p>
          <div>
            <Counter />
          </div>
        </div>
        <div className="divider m-0"></div>
        <div className=" rounded-xl h-[30px]  flex justify-between mt-5 mb-3">
          <p className=" text-lg font-light">Beds</p>
          <div>
            <Counter />
          </div>
        </div>
        <div className="divider m-0"></div>
        <div className=" rounded-xl h-[30px]  flex justify-between mt-5 mb-3">
          <p className=" text-lg font-light">Bedrooms</p>
          <div>
            <Counter />
          </div>
        </div>
      </div>
    </div>
  );
}
