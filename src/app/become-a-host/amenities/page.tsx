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

export default function Amenities() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [btnStyle, setBtnStyle] = React.useState("SELECTED");

  const cards = [
    { image: <House />, title: "House" },
    { image: <TV />, title: "Tv" },
    { image: <Kitchen />, title: "Kitchen" },
    { image: <Washer />, title: "Washer" },
    { image: <Car />, title: "Car" },
    { image: <Parking />, title: "Parking" },
    { image: <AirCondition />, title: "Air Conditioning" },
    { image: <WorkPlace />, title: "Dedicated work" },
  ];

  const cards1 = [
    { image: <House />, title: "House" },
    { image: <TV />, title: "Tv" },
    { image: <Kitchen />, title: "Kitchen" },
    { image: <Washer />, title: "Washer" },
    { image: <Car />, title: "Car" },
    { image: <Parking />, title: "Parking" },
    { image: <AirCondition />, title: "Air Conditioning" },
    { image: <WorkPlace />, title: "Dedicated work" },
  ];
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
            {cards.slice(currentIndex, currentIndex + 8).map((card, index) => (
              // <div onClick={() => (btnStyle = "SELECTED")}>
              <div
                className={` ${
                  btnStyle === "SELECTED" ? "bg-white" : "bg-white"
                } w-[197px] h-[99px] border hover:border-zinc-950 rounded-xl shadow-xl flex p-4 `}
                key={index}
              >
                <div>
                  <div className="">{card.image}</div>

                  <h1 className="font-semibold ml-2">{card.title}</h1>
                </div>
              </div>
              // </div>
            ))}
          </div>
        </div>
        <p className="text-xl font-light mb-5 mt-10"></p>
        Do you have any standout amenities?
        <p className="text-xl  font-light mb-5">
          You can add more amenities after you publish your listing.
        </p>
        <div className="flex ">
          <div className=" gap-5 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 ">
            {cards1.slice(currentIndex, currentIndex + 8).map((card, index) => (
              // <div onClick={() => (btnStyle = "SELECTED")}>
              <div
                className={` ${
                  btnStyle === "SELECTED" ? "bg-white" : "bg-white"
                } w-[197px] h-[99px] border hover:border-zinc-950 rounded-xl shadow-xl flex p-4 `}
                key={index}
              >
                <div>
                  <div className="">{card.image}</div>

                  <h1 className="font-bold">{card.title}</h1>
                </div>
              </div>
              // </div>
            ))}
          </div>
        </div>
        <p className="text-xl font-light mb-5 mt-10">
          Do you have any safety items ?
        </p>
        <div className="flex ">
          <div className=" gap-5 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 ">
            {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
              // <div onClick={() => (btnStyle = "SELECTED")}>
              <div
                className={` ${
                  btnStyle === "SELECTED" ? "bg-white" : "bg-white"
                } w-[197px] h-[99px] border hover:border-zinc-950 rounded-xl shadow-xl flex p-4 `}
                key={index}
              >
                <div>
                  <div className="">{card.image}</div>

                  <h1 className="font-bold">{card.title}</h1>
                </div>
              </div>
              // </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
