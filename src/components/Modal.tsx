"use client";
import * as React from "react";
import Button from "@mui/joy/Button";
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
    image1,
    image2,
    image3,
    image4,
    bedroomCount,
    bathroomCount,
    bedCount,
    guestsCount,
    description,
    offerType,
    roomType,
    type,
  } = useBecomeHost();

  return (
    <React.Fragment>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Button
          className="w-[356px] flex flex-col p-5 h-[397px] rounded-lg"
          variant="outlined"
          color="neutral"
          size="lg"
          onClick={() => setSize("lg")}
        >
          <img src={image} />
          <div className="">
            <h1>{title}</h1>
            <h1>${price} night</h1>
          </div>
        </Button>
      </Stack>
      <Modal open={!!size} onClose={() => setSize(undefined)}>
        <ModalDialog size={size}>
          <ModalClose />
          <div className="w-[1000px] h-[500px]">
            <DialogTitle>Full preview</DialogTitle>

            <div className="flex gap-10">
              <img
                className="object-contain h-[421px] w-[444px]"
                src={image}
                alt=""
              />
              <div className="flex flex-col">
                <h1 className="text-3xl text-semibold">{title}</h1>
                <div className="flex gap-4 mt-6">
                  <div className="flex flex-col">
                    <p className="font-medium">
                      Shared room in a shipping container hosted by Amgaa
                    </p>
                    <p>
                      {guestsCount} guests, · {bedroomCount} bedroom, ·
                      {bedCount} beds, · 2 shared baths
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-700 text-white justify-center items-center flex">
                    A
                  </div>
                </div>
                <div className="mt-8 font-light">{description}</div>
                <div className="mt-8 font-medium">Amenities</div>
                <div>{offerType}</div>
              </div>
            </div>
          </div>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
