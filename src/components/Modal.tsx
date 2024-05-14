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
    bedroomCount,
    bathroomCount,
    guestsCount,
    description,
    offerType,
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
          <img src="https://plus.unsplash.com/premium_photo-1712128937541-75574776ccd8?" />
          <div className="">
            <h1>title</h1>
            <h1>$100 night</h1>
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
                <h1>{title}</h1>
                <div className="flex gap-4 mt-6">
                  <div className="flex flex-col">
                    <p>Shared room in a shipping container hosted by Amgaa</p>
                    <p>7 guests, · 1 bedroom, · 4 beds, · 2 shared baths</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-700 text-white justify-center items-center flex">
                    A
                  </div>
                </div>
                <div className="mt-8">
                  You'll always remember your time at this unique place to stay.
                </div>
                <div className="mt-8">Amenities</div>
              </div>
            </div>
          </div>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
