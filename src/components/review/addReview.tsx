"use client";

// modal
import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

// import { Rating } from "@/components/icons/review/rating";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Communication } from "../icons/review/communication";
import { Location } from "../icons/review/location";
import { Value } from "../icons/review/value";
import { CheckIn } from "../icons/review/checkIn";
import { Accuracy } from "../icons/review/accuracy";
import { Cleanliness } from "../icons/review/cleanliness";

export default function AddReview() {
  const [open, setOpen] = React.useState<boolean>(false);

  //most recent menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openRecent = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Add review
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
            Rate your visit
          </Typography>
          <Typography id="modal-desc">
            <div className="flex flex-col w-[600px] h-[800px] text-black justify-center">
              <div className="flex flex-col justify-center ">
                <div className="flex w-full justify-between border-b-2 py-2 font-semibold ">
                  <div className="flex gap-2 items-center">
                    <div className="w-[24px] h-[24px]">
                      <Cleanliness />
                    </div>
                    <h3>Cleanliness</h3>
                  </div>
                  <Stack spacing={1}>
                    <Rating name="size-large" defaultValue={2} size="large" />
                  </Stack>
                </div>

                <div className="flex w-full justify-between border-b-2 py-2 font-semibold  ">
                  <div className="flex gap-2 items-center">
                    <div className="w-[24px] h-[24px]">
                      <Accuracy />
                    </div>
                    <h3>Accuracy</h3>
                  </div>
                  <Stack spacing={1}>
                    <Rating name="size-large" defaultValue={2} size="large" />
                  </Stack>
                </div>

                <div className="flex w-full justify-between border-b-2 py-2 font-semibold ">
                  <div className="flex gap-2 items-center">
                    <div className="w-[24px] h-[24px]">
                      <CheckIn />
                    </div>
                    <h3>Check-in</h3>
                  </div>
                  <Stack spacing={1}>
                    <Rating name="size-large" defaultValue={2} size="large" />
                  </Stack>
                </div>

                <div className="flex w-full justify-between border-b-2 py-2 font-semibold ">
                  <div className="flex  gap-2 items-center">
                    <div className="w-[24px] h-[24px]">
                      <Communication />
                    </div>
                    <h3>Communication</h3>
                  </div>
                  <Stack spacing={1}>
                    <Rating name="size-large" defaultValue={2} size="large" />
                  </Stack>
                </div>

                <div className="flex w-full justify-between border-b-2 py-2 font-semibold ">
                  <div className="flex  gap-2 items-center">
                    <div className="w-[24px] h-[24px]">
                      <Location />
                    </div>
                    <h3>Location</h3>
                  </div>
                  <Stack spacing={1}>
                    <Rating name="size-large" defaultValue={2} size="large" />
                  </Stack>
                </div>

                <div className="flex w-full justify-between border-b-2 py-2 font-semibold ">
                  <div className="flex  gap-2 items-center">
                    <div className="w-[24px] h-[24px]">
                      <Value />
                    </div>
                    <h3>Value</h3>
                  </div>
                  <Stack spacing={1}>
                    <Rating name="size-large" defaultValue={2} size="large" />
                  </Stack>
                </div>
              </div>
              <div className="h-1/2 w-full mt-10">
                <textarea
                  placeholder="Please leave a comment"
                  className="w-full h-full p-5 resize-none border-2 rounded-lg"
                />
              </div>
            </div>
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
