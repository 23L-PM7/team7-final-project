"use client";

import { AirCondition } from "@/components/icons/amenitiesIcons/AirCondition";
import { Car } from "@/components/icons/amenitiesIcons/Car";
import { House } from "@/components/icons/amenitiesIcons/House";
import { Kitchen } from "@/components/icons/amenitiesIcons/Kitchen";
import { Parking } from "@/components/icons/amenitiesIcons/Parking";
import { TV } from "@/components/icons/amenitiesIcons/Tv";
import { Washer } from "@/components/icons/amenitiesIcons/Washer";
import { WorkPlace } from "@/components/icons/amenitiesIcons/WorkPlace";
import React, { useState } from "react";

type Tool = {
  image: JSX.Element;
  title: string;
  id: string;
};

const cards = [
  { image: <House />, title: "House", id: "1" },
  { image: <TV />, title: "Tv", id: "2" },
  { image: <Kitchen />, title: "Kitchen", id: "3" },
  { image: <Washer />, title: "Washer", id: "4" },
  { image: <Car />, title: "Car", id: "5" },
  { image: <Parking />, title: "Parking", id: "6" },
  { image: <AirCondition />, title: "Air Conditioning", id: "7" },
  { image: <WorkPlace />, title: "Dedicated work", id: "8" },
];

// const cards1 = [
//   { image: <House />, title: "House", id: "1" },
//   { image: <TV />, title: "Tv", id: "2" },
//   { image: <Kitchen />, title: "Kitchen", id: "1" },
//   { image: <Washer />, title: "Washer", id: "1" },
//   { image: <Car />, title: "Car", id: "1" },
//   { image: <Parking />, title: "Parking", id: "1" },
//   { image: <AirCondition />, title: "Air Conditioning", id: "1" },
//   { image: <WorkPlace />, title: "Dedicated work", id: "1" },
// ];
export default function Amenities() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const [suggestedTools, setSuggestedTools] = useState<string | null>(null);
  const handleSelectTool = (tool: Tool) => {
    const { image, ...other } = tool;
    setSuggestedTools(tool.id);
    localStorage.setItem("tool", JSON.stringify(other));
  };

  return (
    <>
      <div className="h-[1400px] container mx-auto  w-[600px] pt-32 ">
        <h1 className="text-3xl font-semibold mb-3 ">
          Tell guests what your place has to offer
        </h1>
        <p className="text-xl  font-light mb-5">
          You can add more amenities after you publish your listing.
        </p>
        <div className="flex ">
          <div className=" gap-5 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 ">
            {cards.map((tool, index) => (
              <div
                onClick={() => handleSelectTool(tool)}
                className={` ${
                  suggestedTools === tool.id
                    ? "bg-slate-100 border-2 border-black"
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
      </div>
    </>
  );
}
