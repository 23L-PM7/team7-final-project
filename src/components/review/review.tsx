"use client";

// modal
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
import { Rating } from "@/components/icons/review/rating";

// most recent menu

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

export default function Review() {
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
          <Typography id="modal-desc">
            <div className="flex w-[1032px] h-[1000px] justify-between text-black">
              <div className="w-1/3">
                <div className="flex flex-col border-b-2 p-10">
                  <div className="flex justify-center items-center ">
                    <img
                      className="w-[69px] h-[105px]"
                      src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/059619e1-1751-42dd-84e4-50881483571a.png"
                    />
                    <h1 className="text-7xl font-bold ">5.0</h1>
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
                  <div className="flex w-full justify-between border-b-2 py-4 font-semibold ">
                    <div className="flex gap-2">
                      <div className="w-[24px] h-[24px]">
                        <Cleanliness />
                      </div>
                      <h3>Cleanliness</h3>
                    </div>
                    <h3>5.0</h3>
                  </div>

                  <div className="flex w-full justify-between border-b-2 py-4 font-semibold  ">
                    <div className="flex gap-2">
                      <div className="w-[24px] h-[24px]">
                        <Accuracy />
                      </div>
                      <h3>Accuracy</h3>
                    </div>
                    <h3>5.0</h3>
                  </div>

                  <div className="flex w-full justify-between border-b-2 py-4 font-semibold ">
                    <div className="flex  gap-2">
                      <div className="w-[24px] h-[24px]">
                        <CheckIn />
                      </div>
                      <h3>Check-in</h3>
                    </div>
                    <h3>5.0</h3>
                  </div>

                  <div className="flex w-full justify-between border-b-2 py-4 font-semibold ">
                    <div className="flex  gap-2">
                      <div className="w-[24px] h-[24px]">
                        <Communication />
                      </div>
                      <h3>Communication</h3>
                    </div>
                    <h3>5.0</h3>
                  </div>

                  <div className="flex w-full justify-between border-b-2 py-4 font-semibold ">
                    <div className="flex  gap-2">
                      <div className="w-[24px] h-[24px]">
                        <Location />
                      </div>
                      <h3>Location</h3>
                    </div>
                    <h3>5.0</h3>
                  </div>

                  <div className="flex w-full justify-between border-b-2 py-4 font-semibold ">
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

              <div className="ml-20 w-2/3">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h1 className="font-bold text-4xl ">13 reviews</h1>
                    <div className="underline text-slate-700 mb-8">
                      learn how review works
                    </div>
                  </div>
                  <div>
                    <Button
                      id="fade-button"
                      aria-controls={openRecent ? "fade-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={openRecent ? "true" : undefined}
                      onClick={handleClick}
                    >
                      Most recent
                    </Button>
                    <Menu
                      id="fade-menu"
                      MenuListProps={{
                        "aria-labelledby": "fade-button",
                      }}
                      anchorEl={anchorEl}
                      open={openRecent}
                      onClose={handleClose}
                      TransitionComponent={Fade}
                    >
                      <MenuItem onClick={handleClose}>Most recent</MenuItem>
                      <MenuItem onClick={handleClose}>Highest rated</MenuItem>
                      <MenuItem onClick={handleClose}>Lowest rated</MenuItem>
                    </Menu>
                  </div>
                </div>
                <div className="mb-8">
                  <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                </div>

                {/* Comment card */}
                <div className="h-[800px] overflow-auto">
                  <div className="py-4 gap-3 flex flex-col">
                    <div className="flex gap-3 items-center">
                      <img
                        className="w-12 h-12 rounded-full"
                        src="https://a0.muscache.com/im/users/29736673/profile_pic/1429159124/original.jpg?im_w=240"
                      />

                      <div className="flex flex-col">
                        <h3>HY Fyan</h3>
                        <h3>Singapore</h3>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center text-sm">
                      <div className="flex">
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                      </div>
                      <div>4 days ago</div>
                      <div className="text-slate-600">stayed few nights</div>
                    </div>
                    <div>
                      Felt lucky having booked Apache as my base in Terelj
                      National Park. The Ger camp as per the photos and as
                      described. Traditional built Ger with some modern touch.
                      The lovely surroundings, pine tree hills , horses roaming
                      grazing grass freely, every night full of stars. They
                      served the best meals at good price. Am already missing my
                      time in Apache and thank you so much🙏 Apache host , team
                      and local friends helping on the tours & 🐴horse riding
                      for your hospitality & kindness. Will be returning soon 👐
                      a happy guest of yours😊
                    </div>
                  </div>

                  <div className="py-4 gap-3 flex flex-col">
                    <div className="flex gap-3 items-center">
                      <img
                        className="w-12 h-12 rounded-full"
                        src="https://a0.muscache.com/im/users/29736673/profile_pic/1429159124/original.jpg?im_w=240"
                      />

                      <div className="flex flex-col">
                        <h3>HY Fyan</h3>
                        <h3>Singapore</h3>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center text-sm">
                      <div className="flex">
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                      </div>
                      <div>4 days ago</div>
                      <div className="text-slate-600">stayed few nights</div>
                    </div>
                    <div>
                      Felt lucky having booked Apache as my base in Terelj
                      National Park. The Ger camp as per the photos and as
                      described. Traditional built Ger with some modern touch.
                      The lovely surroundings, pine tree hills , horses roaming
                      grazing grass freely, every night full of stars. They
                      served the best meals at good price. Am already missing my
                      time in Apache and thank you so much🙏 Apache host , team
                      and local friends helping on the tours & 🐴horse riding
                      for your hospitality & kindness. Will be returning soon 👐
                      a happy guest of yours😊
                    </div>
                  </div>
                  <div className="py-4 gap-3 flex flex-col">
                    <div className="flex gap-3 items-center">
                      <img
                        className="w-12 h-12 rounded-full"
                        src="https://a0.muscache.com/im/users/29736673/profile_pic/1429159124/original.jpg?im_w=240"
                      />

                      <div className="flex flex-col">
                        <h3>HY Fyan</h3>
                        <h3>Singapore</h3>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center text-sm">
                      <div className="flex">
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                      </div>
                      <div>4 days ago</div>
                      <div className="text-slate-600">stayed few nights</div>
                    </div>
                    <div>
                      Felt lucky having booked Apache as my base in Terelj
                      National Park. The Ger camp as per the photos and as
                      described. Traditional built Ger with some modern touch.
                      The lovely surroundings, pine tree hills , horses roaming
                      grazing grass freely, every night full of stars. They
                      served the best meals at good price. Am already missing my
                      time in Apache and thank you so much🙏 Apache host , team
                      and local friends helping on the tours & 🐴horse riding
                      for your hospitality & kindness. Will be returning soon 👐
                      a happy guest of yours😊
                    </div>
                  </div>
                  <div className="py-4 gap-3 flex flex-col">
                    <div className="flex gap-3 items-center">
                      <img
                        className="w-12 h-12 rounded-full"
                        src="https://a0.muscache.com/im/users/29736673/profile_pic/1429159124/original.jpg?im_w=240"
                      />

                      <div className="flex flex-col">
                        <h3>HY Fyan</h3>
                        <h3>Singapore</h3>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center text-sm">
                      <div className="flex">
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                      </div>
                      <div>4 days ago</div>
                      <div className="text-slate-600">stayed few nights</div>
                    </div>
                    <div>
                      Felt lucky having booked Apache as my base in Terelj
                      National Park. The Ger camp as per the photos and as
                      described. Traditional built Ger with some modern touch.
                      The lovely surroundings, pine tree hills , horses roaming
                      grazing grass freely, every night full of stars. They
                      served the best meals at good price. Am already missing my
                      time in Apache and thank you so much🙏 Apache host , team
                      and local friends helping on the tours & 🐴horse riding
                      for your hospitality & kindness. Will be returning soon 👐
                      a happy guest of yours😊
                    </div>
                  </div>
                  <div className="py-4 gap-3 flex flex-col">
                    <div className="flex gap-3 items-center">
                      <img
                        className="w-12 h-12 rounded-full"
                        src="https://a0.muscache.com/im/users/29736673/profile_pic/1429159124/original.jpg?im_w=240"
                      />

                      <div className="flex flex-col">
                        <h3>HY Fyan</h3>
                        <h3>Singapore</h3>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center text-sm">
                      <div className="flex">
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                        <div className="w-4 h-4">
                          <Rating />
                        </div>
                      </div>
                      <div>4 days ago</div>
                      <div className="text-slate-600">stayed few nights</div>
                    </div>
                    <div>
                      Felt lucky having booked Apache as my base in Terelj
                      National Park. The Ger camp as per the photos and as
                      described. Traditional built Ger with some modern touch.
                      The lovely surroundings, pine tree hills , horses roaming
                      grazing grass freely, every night full of stars. They
                      served the best meals at good price. Am already missing my
                      time in Apache and thank you so much🙏 Apache host , team
                      and local friends helping on the tours & 🐴horse riding
                      for your hospitality & kindness. Will be returning soon 👐
                      a happy guest of yours😊
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
