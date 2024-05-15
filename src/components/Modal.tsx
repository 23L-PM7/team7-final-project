"use client";
import * as React from "react";
import Button from "@mui/joy/Button";
import { IoStar } from "react-icons/io5";

import Stack from "@mui/joy/Stack";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog, { ModalDialogProps } from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import { useBecomeHost } from "@/app/become-a-host/store";
import axios from "axios";

export default function ModalReceit() {
  const [size, setSize] = React.useState<ModalDialogProps["size"] | undefined>(
    undefined
  );

  const {
    title,
    price,
    image,
    bedroomCount,
    bathroomCount,
    bedCount,
    guestsCount,
    description,
    offerType,
    roomType,
    type,
    location,
    region,
  } = useBecomeHost();

  return (
    <React.Fragment>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Button
          className="w-[356px] shadow-2xl bg-white flex flex-col p-5 h-[397px] rounded-lg"
          variant="outlined"
          color="neutral"
          size="lg"
          onClick={() => setSize("lg")}
        >
          <img className="w-[330px] h-[380px] rounded" src={image} />

          <div className="flex justify-between gap-[110px]">
            <h1>{title}</h1>
            <div className="flex gap-2 items-center">
              New <IoStar />
            </div>
          </div>
          <h1 className="mr-[233px]">${price} night</h1>
        </Button>
      </Stack>
      <Modal open={!!size} onClose={() => setSize(undefined)}>
        <ModalDialog size={size}>
          <ModalClose />
          <div className="w-[1100px] h-[530px] p-5">
            <div className="flex justify-center items-start mb-3">
              <DialogTitle>Full preview</DialogTitle>
            </div>
            <div className="divider m-0"></div>

            <div className="flex gap-10">
              <img
                className="bg-contain p-2 rounded-xl h-[421px] w-[444px]"
                src={image}
                alt=""
              />

              <div className="flex flex-col h-[421px] z-10 px-5 overflow-y-auto ">
                <h1 className="text-3xl text-semibold">{title}</h1>
                <div className="flex gap-4 my-4">
                  <div className="flex flex-col">
                    <p className="font-medium">
                      Shared room in a shipping container hosted by Amgaa
                    </p>
                    <p>
                      {guestsCount} guests, · {bedroomCount} bedroom, ·
                      {bedCount} beds, · {bathroomCount} shared baths
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-700 text-white justify-center items-center flex">
                    A
                  </div>
                </div>
                <div className="divider m-0"></div>
                <div className="my-3 font-light">{description}</div>
                <div className="divider m-0"></div>
                <div className="mt-3 font-medium">Amenities</div>
                <div className="mb-3">{offerType}</div>
                <div className="divider m-0"></div>
                <div className=" font-medium mt-3">Location</div>
                <div className="flex">
                  <div>{region},</div>
                  <div>{location}</div>
                </div>
              </div>
            </div>
          </div>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
