"use client";

import { Kitchen } from "@/components/icons/amenitiesIcons/Kitchen";
import { useNextButtonClickable } from "@/components/newListHeaderFooter/ProgressFooter";
import React, { useEffect, useState } from "react";
import { useBecomeHost } from "../store";
import { House } from "@/components/icons/amenitiesIcons/House";
import { Ger } from "@/components/icons/Ger";
import { TopCity } from "@/components/icons/TopSities";
import { CountrySide } from "@/components/icons/CountrySide";
import { Rooms } from "@/components/icons/Rooms";
import { Lake } from "@/components/icons/Lake";
import { Farms } from "@/components/icons/Farms";

type Place = {
  image: JSX.Element;
  title: string;
  id: string;
};

const places = [
  { image: <TopCity />, title: "Top city", id: "1" },
  { image: <Ger />, title: "Yurts", id: "2" },
  { image: <Rooms />, title: "Rooms", id: "3" },
  { image: <CountrySide />, title: "Countryside", id: "4" },
  { image: <Lake />, title: "Lake", id: "5" },
  { image: <Farms />, title: "Farms", id: "6" },
  { image: <House />, title: "House", id: "7" },
];

export default function Structure() {
  const { type, setType } = useBecomeHost();
  const { setNextButtonClickable }: any = useNextButtonClickable();

  console.log({ type });

  const handleSelectPlace = (place: Place) => {
    const { image, ...other } = place;
    setType(place.id);
    localStorage.setItem("place", JSON.stringify(other));
  };

  useEffect(() => {
    if (type) {
      setNextButtonClickable(true);
    }
  }, [type]);

  return (
    <>
      <div className="h-[1400px] container mx-auto animate-fade-down  w-[700px] pt-32 ">
        <h1 className="text-3xl font-semibold mb-3 ">
          Which of these best describes your place?
        </h1>
        <div className="flex ">
          <div className=" gap-5 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 ">
            {places.map((place, index) => (
              <div
                className={` ${
                  type === place.id
                    ? "bg-[#F7F7F7] border-2 border-black"
                    : "bg-white"
                } w-[197px] h-[99px] border hover:border-zinc-950 rounded-xl shadow-xl flex p-4 `}
                key={index}
                onClick={() => handleSelectPlace(place)}
              >
                <div>
                  <div className="">{place.image}</div>

                  <h1 className="font-bold">{place.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
