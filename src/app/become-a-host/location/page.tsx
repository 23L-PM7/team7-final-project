"use client";

import * as React from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

import { useNextButtonClickable } from "@/components/newListHeaderFooter/ProgressFooter";
import { useEffect, useState } from "react";
import { useBecomeHost } from "../store";

export default function Location() {
  const { setNextButtonClickable }: any = useNextButtonClickable();
  const { location, setLocation, region, setRegion } = useBecomeHost();

  useEffect(() => {
    if (location) {
      setNextButtonClickable(true);
    }
  }, [location]);

  function handleRegionChange(
    e: React.SyntheticEvent | null,
    newValue: string | null
  ) {
    setRegion(newValue ?? "");
  }

  return (
    <div className="container mx-auto flex justify-center items-center pt-[373px]">
      <div className=" w-[630px] h-[480px] ">
        <h1 className="text-3xl font-medium mb-2">
          Where's your place located?
        </h1>
        <p>
          Your address is only shared with guests after they’ve made a
          reservation.
        </p>

        <Select
          value={region}
          onChange={handleRegionChange}
          className="mt-5"
          placeholder="Select a region…"
          indicator={<KeyboardArrowDown />}
          sx={{
            width: 240,
            [`& .${selectClasses.indicator}`]: {
              transition: "0.2s",
              [`&.${selectClasses.expanded}`]: {
                transform: "rotate(-180deg)",
              },
            },
          }}
        >
          <Option value="Eastern Mongolia">Eastern Mongolia</Option>
          <Option value="Western Mongolia">Western Mongolia</Option>
          <Option value="Northern Mongolia">Northern Mongolia</Option>
          <Option value="Southern Mongolia">Southern Mongolia</Option>
          <Option value="Ulaanbaatar">Ulaanbaatar</Option>
        </Select>
        <div className="rounded-xl h-[30px]  flex justify-between mt-5 mb-3">
          <textarea
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border hover:border-black w-[630px] h-[178px] rounded-md"
            name="text"
            id=""
          ></textarea>
        </div>
      </div>
    </div>
  );
}
