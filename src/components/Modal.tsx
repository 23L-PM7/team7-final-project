"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import * as React from "react";
import Button from "@mui/joy/Button";
import { IoStar } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import Stack from "@mui/joy/Stack";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog, { ModalDialogProps } from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import { useBecomeHost } from "@/app/become-a-host/store";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Loading } from "./Loading";
import { House } from "./icons/amenitiesIcons/House";
import { TV } from "./icons/amenitiesIcons/Tv";
import { Kitchen } from "./icons/amenitiesIcons/Kitchen";
import { Washer } from "./icons/amenitiesIcons/Washer";
import { Car } from "./icons/amenitiesIcons/Car";
import { Parking } from "./icons/amenitiesIcons/Parking";
import { AirCondition } from "./icons/amenitiesIcons/AirCondition";
import { WorkPlace } from "./icons/amenitiesIcons/WorkPlace";
import { BBgrill } from "./icons/amenitiesIcons/BBQgrill";
import { Piona } from "./icons/amenitiesIcons/Piona";
import { Exercise } from "./icons/amenitiesIcons/Exercise";
import { Ski } from "./icons/amenitiesIcons/Ski";
import { BeachAccess } from "./icons/amenitiesIcons/BeachAccess";
import { PoolTable } from "./icons/amenitiesIcons/PoolTable";
import { Pool } from "./icons/amenitiesIcons/Pool";
import { HotTub } from "./icons/amenitiesIcons/HotTub";
import { Outdoor } from "./icons/amenitiesIcons/Outdoor";
import { FirePit } from "./icons/amenitiesIcons/FirePit";
import { Ratio } from "./icons/amenitiesIcons/Ratio";
import { Lake } from "./icons/amenitiesIcons/Lake";
import { Shower } from "./icons/amenitiesIcons/Shower";

export default function ModalReceit() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  function fetchCards() {
    setLoading(true);
    axios
      .get("http://localhost:3000/api/listing")
      .then((cards) => setCards(cards.data));
    setLoading(false);
  }

  useEffect(() => {
    fetchCards();
  }, []);

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
    offerTypes,
    roomType,
    type,
    location,
    region,
    image1,
    image2,
    image3,
    image4,
  } = useBecomeHost();

  const images = [image, image1, image2, image3, image4];

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
          {!image && <Loading />}
          <img className="w-[330px] h-[380px] rounded" src={image} />
          <div className="flex  justify-between ">
            <h1 className="w-[250px] flex justify-start items-start text-start">
              {title}
            </h1>
            {image && (
              <div className="flex gap-2 items-center">
                New <IoStar />
              </div>
            )}
          </div>
          {image && (
            <h1 className="w-[310px] flex justify-start items-start text-start">
              ${price} night
            </h1>
          )}
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
              <Swiper
                cssMode={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                pagination={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                // onSwiper={(swiper) => console.log(swiper)}
                className="w-[1400px] image-full rounded-lg "
              >
                {images.map((image: any, index: any) => (
                  <SwiperSlide key={index}>
                    <div className="aspect-square flex justify-start items-start rounded-xl">
                      <img
                        src={image}
                        alt=""
                        className={`aspect-square transition duration-300 ease-in-out hover:scale-110 h-full object-cover`}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="flex flex-col h-[421px]  z-10 px-5 overflow-y-auto ">
                <h1 className="text-3xl text-semibold">{title}</h1>
                <div className="flex gap-4 my-4">
                  <div className="flex flex-col">
                    <p className="font-medium">
                      Shared room in a shipping container hosted by Amgaa
                    </p>
                    <p>
                      {guestsCount} guests · {bedroomCount} bedroom ·{bedCount}{" "}
                      beds · {bathroomCount} shared baths
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
                <div className="mb-3 flex flex-col  gap-3 ">
                  <div className="flex flex-col gap-4">
                    {offerTypes.map((type) => (
                      <div>
                        <span className="flex justify-between" key={type}>
                          {type}
                          {icons[type]}
                        </span>
                        <div className="divider m-0"></div>
                      </div>
                    ))}
                  </div>
                </div>

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

const icons: any = {
  House: <House />,
  Tv: <TV />,
  Kitchen: <Kitchen />,
  Washer: <Washer />,
  Car: <Car />,
  Parking: <Parking />,
  "Air Conditioning": <AirCondition />,
  "Dedicated work": <WorkPlace />,
  "BBQ grill": <BBgrill />,
  Piano: <Piona />,
  "Exercise equipment": <Exercise />,
  "Ski-in/Ski-out": <Ski />,
  "Beach access": <BeachAccess />,
  "Indoor fireplace": <PoolTable />,
  Pool: <Pool />,
  "Hot tub": <HotTub />,
  "Outdoor dinning": <Outdoor />,
  "Fire pit": <FirePit />,
  Patio: <Ratio />,
  "Lake access": <Lake />,
  "Outdoor shower": <Shower />,
};
