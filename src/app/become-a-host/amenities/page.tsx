"use client";

import { AirCondition } from "../../../components/icons/amenitiesIcons/AirCondition";
import { Car } from "../../../components/icons/amenitiesIcons/Car";
// import { House } from "@/components/icons/amenitiesIcons/House";
import { Kitchen } from "../../../components/icons/amenitiesIcons/Kitchen";
import { Parking } from "../../../components/icons/amenitiesIcons/Parking";
import { TV } from "../../../components/icons/amenitiesIcons/Tv";
import { Washer } from "../../../components/icons/amenitiesIcons/Washer";
import { WorkPlace } from "../../../components/icons/amenitiesIcons/WorkPlace";
import React, { useEffect, useState } from "react";
import { useBecomeHost } from "../store";

import { useNextButtonClickable } from "@/components/newListHeaderFooter/ProgressFooter";
import { WiFi } from "@/components/icons/amenitiesIcons/Wifa";
import { Pool } from "@/components/icons/amenitiesIcons/Pool";
import { HotTub } from "@/components/icons/amenitiesIcons/HotTub";
import { Ratio } from "@/components/icons/amenitiesIcons/Ratio";
import { BBgrill } from "@/components/icons/amenitiesIcons/BBQgrill";
import { FirePit } from "@/components/icons/amenitiesIcons/FirePit";
import { PoolTable } from "@/components/icons/amenitiesIcons/PoolTable";
import { Piona } from "@/components/icons/amenitiesIcons/Piona";
import { Exercise } from "@/components/icons/amenitiesIcons/Exercise";
import { Lake } from "@/components/icons/Lake";
import { Outdoor } from "@/components/icons/amenitiesIcons/Outdoor";
import { BeachAccess } from "@/components/icons/amenitiesIcons/BeachAccess";
import { Ski } from "@/components/icons/amenitiesIcons/Ski";
import { Shower } from "@/components/icons/amenitiesIcons/Shower";
import { SmokeAlarm } from "@/components/icons/amenitiesIcons/SmokeAlarm";
import { Fire } from "@/components/icons/amenitiesIcons/Fire";
import { FirstAidKit } from "@/components/icons/amenitiesIcons/FirstAidKit";

import { useNextButtonClickable } from "../../../components/newListHeaderFooter/ProgressFooter";
import { WiFi } from "../../../components/icons/amenitiesIcons/Wifa";
import { Pool } from "../../../components/icons/amenitiesIcons/Pool";
import { HotTub } from "../../../components/icons/amenitiesIcons/HotTub";
import { Ratio } from "../../../components/icons/amenitiesIcons/Ratio";
import { BBgrill } from "../../../components/icons/amenitiesIcons/BBQgrill";
import { FirePit } from "../../../components/icons/amenitiesIcons/FirePit";
import { PoolTable } from "../../../components/icons/amenitiesIcons/PoolTable";
import { Piona } from "../../../components/icons/amenitiesIcons/Piona";
import { Exercise } from "../../../components/icons/amenitiesIcons/Exercise";
import { Lake } from "../../../components/icons/Lake";
import { Outdoor } from "../../../components/icons/amenitiesIcons/Outdoor";
import { BeachAccess } from "../../../components/icons/amenitiesIcons/BeachAccess";
import { Ski } from "../../../components/icons/amenitiesIcons/Ski";
import { Shower } from "../../../components/icons/amenitiesIcons/Shower";


type Tool = {
  image: JSX.Element;
  title: string;
  id: string;
};

const cards = [
  { image: <WiFi />, title: "Wifi", id: "1" },
  { image: <TV />, title: "Tv", id: "2" },
  { image: <Kitchen />, title: "Kitchen", id: "3" },
  { image: <Washer />, title: "Washer", id: "4" },
  { image: <Car />, title: "Car", id: "5" },
  { image: <Parking />, title: "Parking", id: "6" },
  { image: <AirCondition />, title: "Air Conditioning", id: "7" },
  { image: <WorkPlace />, title: "Dedicated work", id: "8" },
];

const cards1 = [
  { image: <Pool />, title: "Pool", id: "1" },
  { image: <HotTub />, title: "Hot tub", id: "2" },
  { image: <Ratio />, title: "Patio", id: "3" },
  { image: <BBgrill />, title: "BBQ grill", id: "4" },
  { image: <Outdoor />, title: "Outdoor dinning", id: "5" },
  { image: <FirePit />, title: "Fire pit", id: "6" },
  { image: <PoolTable />, title: "Indoor fireplace", id: "7" },
  { image: <Piona />, title: "Piano", id: "8" },
  { image: <Exercise />, title: "Exercise equipment", id: "8" },
  { image: <Lake />, title: "Lake access", id: "9" },
  { image: <BeachAccess />, title: "Beach access", id: "10" },
  { image: <Ski />, title: "Ski-in/Ski-out", id: "11" },
  { image: <Shower />, title: "Outdoor shower", id: "11" },
];

const cards2 = [
  { image: <SmokeAlarm />, title: "Smoke alarm", id: "1" },
  { image: <FirstAidKit />, title: "First aid kit", id: "2" },
  { image: <Fire />, title: "Fire extinguisher", id: "3" },
];
export default function Amenities() {
  const { offerTypes, setOfferTypes } = useBecomeHost();
  const { setNextButtonClickable }: any = useNextButtonClickable();

  const handleSelectTool = (tool: Tool) => {
    const { image, ...other } = tool;

    if (offerTypes.includes(tool.title)) {
      setOfferTypes(offerTypes.filter((type) => type !== tool.title));
    } else {
      setOfferTypes([...offerTypes, tool.title]);
    }

    localStorage.setItem("tool", JSON.stringify(other));
  };
  console.log(offerTypes);
  useEffect(() => {
    if (offerTypes) {
      setNextButtonClickable(true);
    }
  }, [offerTypes]);

  return (
    <>
      <div className="h-[1400px] container mx-auto animate-fade-down w-[600px] pt-32 ">
        <h1 className="text-3xl font-semibold mb-3 ">
          Tell guests what your place has to offer
        </h1>
        <p className="text-xl  font-light mb-5">
          You can add more amenities after you publish your listing.
        </p>
        <div className="flex">
          <div className=" gap-5 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 ">
            {cards.map((tool, index) => (
              <div
                onClick={() => handleSelectTool(tool)}
                className={` ${
                  offerTypes.includes(tool.title)
                    ? "bg-[#F7F7F7] border-2 border-black"
                    : "bg-white"
                } w-[197px] h-[99px] border hover:border-zinc-950 rounded-xl shadow-xl flex p-4 `}
                key={index}
              >
                <div>
                  <div className="">{tool.image}</div>
                  <h1 className="font-semibold ml-2">{tool.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-lg mt-8 mb-6 font-semibold">
            Do you have any standout amenities?
          </h1>
        </div>
        <div className="flex">
          <div className=" gap-5 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 ">
            {cards1.map((tool, index) => (
              <div
                onClick={() => handleSelectTool(tool)}
                className={` ${
                  offerTypes.includes(tool.title)
                    ? "bg-[#F7F7F7] border-2 border-black"
                    : "bg-white"
                } w-[197px] h-[99px] border hover:border-zinc-950 rounded-xl shadow-xl flex p-4 `}
                key={index}
              >
                <div>
                  <div className="">{tool.image}</div>
                  <h1 className="font-semibold">{tool.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-lg mt-8 mb-6 font-semibold">
            Do you have any of these safety items?
          </h1>
        </div>
        <div className="flex pb-32">
          <div className=" gap-5 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 ">
            {cards2.map((tool, index) => (
              <div
                onClick={() => handleSelectTool(tool)}
                className={` ${
                  offerTypes.includes(tool.title)
                    ? "bg-[#F7F7F7] border-2 border-black"
                    : "bg-white"
                } w-[197px] h-[99px] border hover:border-zinc-950 rounded-xl shadow-xl flex p-4 `}
                key={index}
              >
                <div>
                  <div className="">{tool.image}</div>
                  <h1 className="font-semibold">{tool.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
