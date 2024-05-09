"use client";

import { Kitchen } from "@/app/components/icons/amenitiesIcons/Kitchen";
import { TV } from "@/app/components/icons/amenitiesIcons/Tv";
import { Car } from "@/app/components/icons/amenitiesIcons/Tv copy";
import { Washer } from "@/app/components/icons/amenitiesIcons/Washer";
import { WiFi } from "@/app/components/icons/amenitiesIcons/Wifa";
import React, { useState } from "react";

export default function Amenities() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [btnStyle, setBtnStyle] = React.useState("SELECTED");

  const cards = [
    { image: <WiFi />, title: "WiFi" },
    { image: <TV />, title: "Tv" },
    { image: <Kitchen />, title: "Kitchen " },
    { image: <Washer />, title: "Washer" },
    { image: <Washer />, title: "Washer" },
    { image: <Washer />, title: "Washer" },
    { image: <Washer />, title: "Washer" },
  ];

  return (
    <>
      <div className="h-[1000px] container mx-auto pt-32 w-[600px] ">
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

                  <h1 className="font-bold">{card.title}</h1>
                </div>
              </div>
              // </div>
            ))}
          </div>
        </div>
        <p className="text-xl font-light mb-5 mt-10">
          Do you have any standout amenities?
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
