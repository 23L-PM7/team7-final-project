"use client";

import * as React from "react";
import { Button, CircularProgress, Divider, Typography } from "@mui/joy";
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
import { useListingDetails } from "../../globals";

export default function Listing() {
  const setListingDetails : any = useListingDetails((state : any) => state.setListingDetails);
  const { _id } = useParams();
  const [loading, setLoading] = useState(true);

  function fecthListing() {
    setLoading(true);
    axios
      .get(`http://localhost:3000/api/listingDetails?id=${_id}`)
      .then((listing) => setListingDetails(listing.data[0]));
    setLoading(false);
  }

  useEffect(() => {
    fecthListing();
  }, []);

  if (loading) return <div className="size-6 mx-auto my-[300px]"><CircularProgress size="lg" /></div>;

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