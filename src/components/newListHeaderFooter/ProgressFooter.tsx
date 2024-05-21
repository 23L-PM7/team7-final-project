"use client";

import * as React from "react";
import Stack from "@mui/joy/Stack";
import LinearProgress from "@mui/joy/LinearProgress";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { create } from "zustand";
import axios from "axios";
import { useBecomeHost } from "@/app/become-a-host/store";
import path from "path";

export const useNextButtonClickable = create((set) => ({
  nextButtonClickable: false,
  setNextButtonClickable: (newValue: boolean) =>
    set(() => ({ nextButtonClickable: newValue })),
}));

const stepValues = [
  "about-your-place",
  "structure",
  "privacy-type",
  "floor-plan",
  "guests",
  "stand-out",
  "location",
  "amenities",
  "photos",
  "title",
  "description",
  "finish-setup",
  "price",
  "receipt",
  "publish-celebration",
];

export function ProgressFooter() {
  const {
    title,
    price,
    image,
    image1,
    image2,
    image3,
    image4,
    bedroomCount,
    bathroomCount,
    bedCount,
    guestsCount,
    description,
    offerTypes,
    roomType,
    type,
    location,
    region,
  } = useBecomeHost();

  const addListing = async () => {
    try {
      const response = await axios.post("/api/listing", {
        title,
        price,
        images: [image, image1, image2, image3, image4],
        bedroomCount,
        bathroomCount,
        guestsCount,
        bedCount,
        description,
        offerTypes,
        roomType,
        type,
        location,
        region,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const pathname = usePathname();
  const router = useRouter();

  const currentPath = pathname.split("/")[2];
  const index = stepValues.findIndex((item) => item === currentPath);
  const percentage = ((index + 1) / stepValues.length) * 100;
  console.log({ currentPath, index, percentage });

  const { nextButtonClickable, setNextButtonClickable }: any =
    useNextButtonClickable();

  const checkBack = () => {
    stepValues[index - 1];
    console.log(pathname);
    if (pathname === "/become-a-host/about-your-place") {
      router.push("/overview");
    }
  };

  const combined = () => {
    router.push(`/become-a-host/${stepValues[index + 1]}`);
    if (stepValues[index] == "receipt") {
      addListing();
    }
  };

  return (
    <div className="relative">
      <div className="fixed left-0 right-0 bottom-0 bg-white">
        <div className="h-2 rounded- w-full bg-gray-200">
          <div
            className="h-2 bg-slate-800 rounded-full transition-all duration-1000"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="flex sticky bottom-0 justify-between pl-10 p-4 pr-10">
          <button
            onClick={checkBack}
            className="font-semibold rounded flex justify-center  items-center hover:bg-slate-200 h-8 p-2"
          >
            Back
          </button>
          <span>{pathname}</span>
          <button
            disabled={!nextButtonClickable}
            onClick={() => combined()}
            className="w-[100px] h-[48px] border p-2 flex items-center justify-center rounded-md text-white bg-gray-700 hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
