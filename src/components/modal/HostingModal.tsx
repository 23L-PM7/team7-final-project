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
import { useBecomeHost } from "../../app/become-a-host/store";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useRouter, useSearchParams } from "next/navigation";
import { Loading } from "../Loading";

export default function HostingModal() {
  const [size, setSize] = React.useState<ModalDialogProps["size"] | undefined>(
    undefined
  );
  const [cards, setCards] = useState([]);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  const categoriesFilter = searchParams.get("categories");

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

  const pushToListing = (_id: string) => {
    router.push(`/rooms/${_id}`);
  };

  if (loading) return <Loading />;

  const filteredCards = cards.filter((card: any) => {
    if (!categoriesFilter) {
      return true; // Show all cards if no filter is applied
    }
    return card.type === categoriesFilter;
  });
  // if (loading) return <Loading />;

  return (
    <React.Fragment>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Button
          variant="outlined"
          color="neutral"
          className="text-black rounded-xl hover:bg-slate-100 duration-200 border-2 py-1 px-4 w-[200px] h-[34px] font-medium justify-center items-center text-base border-black"
          onClick={() => setSize("lg")}
        >
          See all (10+)
        </Button>
      </Stack>
      <Modal open={!!size} onClose={() => setSize(undefined)}>
        <ModalDialog size={size}>
          <ModalClose />
          <div className="w-[700px] h-[1500px] p-5 overflow-hidden z-10 px-5 overflow-y-auto">
            <div className="flex justify-center items-start mb-3">
              <DialogTitle>Full preview</DialogTitle>
            </div>
            <div className="divider m-0"></div>
            <div className="flex flex-col gap-5">
              {filteredCards.map((card: any, index) => (
                <div key={card._id} className="flex gap-4 relative">
                  <Swiper
                    cssMode={true}
                    navigation={true}
                    mousewheel={true}
                    keyboard={true}
                    pagination={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    // onSwiper={(swiper) => console.log(swiper)}
                    className="h-[100px] w-[100px] rounded-lg !mx-0 "
                  >
                    {card.images
                      .filter((image: string) => image)
                      .map((image: any, index: any) => (
                        <SwiperSlide key={index}>
                          <div className="aspect-square w-full flex justify-start items-start  overflow-hidden rounded-xl">
                            <img
                              src={image}
                              alt=""
                              onClick={() => pushToListing(card._id)}
                              className={`w-full flex items-center max-w-xs transition cursor-pointer duration-300 ease-in-out hover:scale-110 h-full object-cove`}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>

                  <div
                    className="flex flex-col justify-start cursor-pointer items-start "
                    onClick={() => pushToListing(card._id)}
                  >
                    <div className="flex justify-between">
                      <div className="font-semibold text-lg w-60">
                        {card.title}
                      </div>
                    </div>

                    <div className="font-light  text-neutral-500 w-[300px]">
                      {card.location}
                    </div>
                    <div className="font-light text-neutral-500">
                      {card.region}
                    </div>
                    <div className="flex gap-1">
                      {card.bedroomCount}{" "}
                      <p className="text-neutral-500"> beds</p>
                    </div>
                    <div className="font-light  text-neutral-500"></div>
                    <div className="flex gap-3">
                      <div className="font-medium flex gap-1">
                        ${card.price} <p className="text-neutral-500">nights</p>
                      </div>
                      <div className="text-black text-md"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
