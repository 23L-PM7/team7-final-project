"use client";

import { CounterBathrooms } from "@/components/counter/CounterBathrooms";
import { CounterBed } from "@/components/counter/CounterBed";
import { CounterBedrooms } from "@/components/counter/CounterBedrooms";
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
            <CounterBedrooms />
          </div>
        </div>
        <div className="divider m-0"></div>
        <div className=" rounded-xl h-[30px]  flex justify-between mt-5 mb-3">
          <p className=" text-lg font-light">bathroom</p>
          <div>
            <CounterBathrooms />
          </div>
        </div>
        <div className="divider m-0"></div>
        <div className=" rounded-xl h-[30px]  flex justify-between mt-5 mb-3">
          <p className=" text-lg font-light">bed</p>
          <div>
            <CounterBed />
          </div>
        </div>
      </div>
    </div>
  );
}
