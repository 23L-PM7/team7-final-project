"use client";

import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Cleanliness } from "@/components/icons/review/cleanliness";
import { Accuracy } from "@/components/icons/review/accuracy";
import { CheckIn } from "@/components/icons/review/checkIn";
import { Communication } from "@/components/icons/review/communication";
import { Location } from "@/components/icons/review/location";
import { Value } from "@/components/icons/review/value";

export default function BasicModal() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 1100,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Review Modal
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            <div className="flex w-[1032px] h-[1000px] justify-between">
              <div className="w-1/3">
                <div className="flex flex-col border-b-2 p-10">
                  <div className="flex justify-center items-center ">
                    <img
                      className="w-[69px] h-[105px]"
                      src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/059619e1-1751-42dd-84e4-50881483571a.png"
                    />
                    <h1 className="text-7xl font-bold text-black">5.0</h1>
                    <img
                      className="w-[69px] h-[105px]"
                      src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/33b80859-e87e-4c86-841c-645c786ba4c1.png"
                    />
                  </div>
                  <h1 className="text-center">Guest favorite</h1>
                  <h3 className="text-center">
                    This home is in the top 5% of eligible listings based on
                    ratings, reviews, and reliability
                  </h3>
                </div>

                <div className="h-[250px] mt-10">overall rating</div>
                <div className="flex flex-col">
                  <div className="flex w-full justify-between border-b-2 py-4 font-semibold text-black">
                    <div className="flex gap-2">
                      <div className="w-[24px] h-[24px]">
                        <Cleanliness />
                      </div>
                      <h3>Cleanliness</h3>
                    </div>
                    <h3>5.0</h3>
                  </div>

                  <div className="flex w-full justify-between border-b-2 py-4 font-semibold text-black ">
                    <div className="flex gap-2">
                      <div className="w-[24px] h-[24px]">
                        <Accuracy />
                      </div>
                      <h3>Accuracy</h3>
                    </div>
                    <h3>5.0</h3>
                  </div>

                  <div className="flex w-full justify-between border-b-2 py-4 font-semibold text-black">
                    <div className="flex  gap-2">
                      <div className="w-[24px] h-[24px]">
                        <CheckIn />
                      </div>
                      <h3>Check-in</h3>
                    </div>
                    <h3>5.0</h3>
                  </div>

                  <div className="flex w-full justify-between border-b-2 py-4 font-semibold text-black">
                    <div className="flex  gap-2">
                      <div className="w-[24px] h-[24px]">
                        <Communication />
                      </div>
                      <h3>Communication</h3>
                    </div>
                    <h3>5.0</h3>
                  </div>

                  <div className="flex w-full justify-between border-b-2 py-4 font-semibold text-black">
                    <div className="flex  gap-2">
                      <div className="w-[24px] h-[24px]">
                        <Location />
                      </div>
                      <h3>Location</h3>
                    </div>
                    <h3>5.0</h3>
                  </div>

                  <div className="flex w-full justify-between border-b-2 py-4 font-semibold text-black">
                    <div className="flex  gap-2">
                      <div className="w-[24px] h-[24px]">
                        <Value />
                      </div>
                      <h3>Value</h3>
                    </div>
                    <h3>5.0</h3>
                  </div>
                </div>
              </div>

              <div className="w-2/3">
                <div>13 reviews</div>
                <div>comments</div>
              </div>
            </div>
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
