"use client";

import { Kitchen } from "@/components/icons/amenitiesIcons/Kitchen";
import { useNextButtonClickable } from "@/components/newListHeaderFooter/ProgressFooter";
import React, { useEffect, useState } from "react";
import { useBecomeHost } from "../store";

type Place = {
  image: JSX.Element;
  title: string;
  id: string;
};

const places = [
  { image: <Kitchen />, title: "kitchen", id: "1" },
  { image: <Kitchen />, title: "kitchen", id: "2" },
  { image: <Kitchen />, title: "kitchen", id: "3" },
  { image: <Kitchen />, title: "kitchen", id: "4" },
  { image: <Kitchen />, title: "kitchen", id: "5" },
  { image: <Kitchen />, title: "kitchen", id: "6" },
  { image: <Kitchen />, title: "kitchen", id: "7" },
  { image: <Kitchen />, title: "kitchen", id: "8" },
  { image: <Kitchen />, title: "kitchen", id: "9" },
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
      <div className="h-[1400px] container mx-auto  w-[700px] pt-32 ">
        <h1 className="text-3xl font-semibold mb-3 ">
          Which of these best describes your place?
        </h1>
        <div className="flex ">
          <div className=" gap-5 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 ">
            {places.map((place, index) => (
              <div
                className={` ${
                  type === place.id
                    ? "bg-slate-100 border-2 border-black"
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
