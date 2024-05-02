"use client";

import * as React from "react";
import { Button, Divider, Typography } from "@mui/joy";
import { LuHeart, LuShare } from "react-icons/lu";
import { RoomImage } from "./roomImage";
import { RoomReview } from "./roomReview";
import { RoomLocation } from "./roomLocation";
import { RoomHost } from "./roomHost";
import { RoomRules } from "./roomRules";
import { RoomIntroduction } from "./roomIntroduction";

export default function BasicDateCalendar() {


  return (
    <div className="container mx-auto grid gap-6 my-6">
      <div className="flex justify-between items-center">
        <Typography level="h3">Nomadic stay at Orkhon Valley</Typography>
        <div className="flex gap-2">
          <Button startDecorator={<LuShare />} variant="plain" color="neutral">
            Share
          </Button>
          <Button startDecorator={<LuHeart />} variant="plain" color="neutral">
            Save
          </Button>
        </div>
      </div>

      <div className="w-full">
        <RoomImage />
      </div>

      <div className="w-full">
        <RoomIntroduction />
      </div>

      <Divider />

      <div className="w-full">
        <RoomReview />
      </div>

      <Divider />

      <div className="w-full">
        <RoomLocation />
      </div>

      <div className="w-full">
        <RoomHost />
      </div>

      <div className="w-full">
        <RoomRules />
      </div>
    </div>
  );
}
