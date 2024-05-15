"use client";

import * as React from "react";
import { Button, Divider, Typography } from "@mui/joy";
import { LuHeart, LuShare } from "react-icons/lu";
import { ListingImage } from "./ListingImage";
import { ListingIntroduction } from "./ListingIntroduction";
import { ListingReview } from "./ListingReview";
import { ListingLocations } from "./ListingLocations";
import { ListingHost } from "./ListingHost";
import { ListingRules } from "./ListingRules";

export default function BasicDateCalendar() {


  return (
    <div className="container w-[1120px] mx-auto grid gap-6 my-6">
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
        <ListingImage />
      </div>

      <div className="w-full">
        <ListingIntroduction />
      </div>

      <Divider />

      <div className="w-full">
        <ListingReview />
      </div>

      <Divider />

      <div className="w-full">
        <ListingLocations />
      </div>

      <div className="w-full">
        <ListingHost />
      </div>

      <div className="w-full">
        <ListingRules />
      </div>
    </div>
  );
}