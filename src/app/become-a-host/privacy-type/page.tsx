"use client";

import { House } from "@/components/icons/amenitiesIcons/House";
import { Kitchen } from "@/components/icons/amenitiesIcons/Kitchen";
import React from "react";

export default function PrivacyType() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const cards = [
    {
      image: <House />,
      title: "An entire place",
      description: " Guests have the whole place to themselves.",
    },
    {
      image: <Kitchen />,
      title: "A room",
      description:
        " Guests have their own room in a home, plus access to shared spaces.",
    },
    {
      image: <Kitchen />,
      title: "A shared room",
      description:
        "Guests sleep in a room or common area that may be shared with you or others.",
    },
  ];
  return (
    <div className="container mx-auto flex justify-center items-center pt-72">
      <div className=" w-[630px] h-[480px] ">
        <h1 className="text-3xl font-medium mb-9">
          What type of place will guests have?
        </h1>
        {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
          <div className="hover:border-black border rounded-xl h-[96px] mb-4 flex justify-between p-5">
            <div className="flex flex-col">
              <p className=" text-lg font-medium">{card.title}</p>
              <h1 className="text-sm font-light">{card.description}</h1>
            </div>
            {card.image}
          </div>
        ))}
      </div>
    </div>
  );
}
