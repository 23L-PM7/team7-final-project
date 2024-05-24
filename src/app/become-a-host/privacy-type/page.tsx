"use client";

import { House } from "../../../components/icons/amenitiesIcons/House";
import { Kitchen } from "../../../components/icons/amenitiesIcons/Kitchen";
import { useNextButtonClickable } from "../../../components/newListHeaderFooter/ProgressFooter";
import React, { useEffect, useState } from "react";
import { useBecomeHost } from "../store";
import { Room } from "../../../components/icons/Room";
import { TypeIcon } from "../../../components/icons/TypeIcon";

type Place = {
  image: JSX.Element;
  title: string;
  description: string;
  id: string;
};
const placeType = [
  {
    image: <House />,
    id: "1",
    title: "An entire place",
    description: " Guests have the whole place to themselves.",
  },
  {
    image: <Room />,
    id: "2",
    title: "A room",
    description:
      " Guests have their own room in a home, plus access to shared spaces.",
  },
  {
    image: <TypeIcon />,
    id: "3",
    title: "A shared room",
    description:
      "Guests sleep in a room or common area that may be shared with you or others.",
  },
];

export default function PrivacyType() {
  const { roomType, setRoomType } = useBecomeHost();
  const { setNextButtonClickable }: any = useNextButtonClickable();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleSelectPlace = (place: Place) => {
    const { image, ...other } = place;
    setRoomType(place.title);
    localStorage.setItem("place", JSON.stringify(other));
  };

  useEffect(() => {
    if (roomType) {
      setNextButtonClickable(true);
    }
  }, [roomType]);

  return (
    <div className="container mx-auto flex justify-center items-center pt-72 animate-fade-down">
      <div className=" w-[630px] h-[480px] ">
        <h1 className="text-3xl font-medium mb-9">
          What type of place will guests have?
        </h1>
        {placeType.slice(currentIndex, currentIndex + 3).map((place, index) => (
          <div
            onClick={() => handleSelectPlace(place)}
            className={`${
              roomType === place.title
                ? "bg-[#F7F7F7] border-black border-2 "
                : "bg-white"
            } hover:border-black border rounded-xl h-[96px] mb-4 flex justify-between p-5`}
          >
            <div className="flex flex-col">
              <p className=" text-lg font-medium">{place.title}</p>
              <h1 className="text-sm font-light">{place.description}</h1>
            </div>
            {place.image}
          </div>
        ))}
      </div>
    </div>
  );
}
