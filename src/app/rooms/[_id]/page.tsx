"use client";

import * as React from "react";
import { Button, Divider, Typography } from "@mui/joy";
import { LuHeart, LuShare } from "react-icons/lu";
import { ListingImage } from "./ListingImage";
import { ListingIntroduction } from "./ListingIntroduction";
import { ListingReview } from "./ListingReview";
import { ListingLocations } from "./ListingLocations";
import { ListingRules } from "./ListingRules";
import { ListingHost } from "./ListingHost";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Listing() {
  const [listing, setListing] = useState([]);
  const {_id} = useParams();

  function fecthListing() {
    axios
      .get(`http://localhost:3000/api/listingDetails?id=${_id}`)
      .then((cards) => setListing(cards.data));
  }

  useEffect(() => {
    fecthListing();
  }, []);

  console.log(listing[0].images);

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
        <ListingImage listingImages={listing[0].images}/>
      </div>

      <div className="w-full">
        <ListingIntroduction listingDetails={listing}/>
      </div>

      <Divider />

      {/* <div className="w-full">
        <ListingReview />
      </div>

      <Divider />

      <div className="w-full">
        <ListingLocations />
      </div> */}

      <div className="w-full">
        <ListingHost />
      </div>

      {/* <div className="w-full">
        <ListingRules />
      </div> */}
    </div>
  );
}