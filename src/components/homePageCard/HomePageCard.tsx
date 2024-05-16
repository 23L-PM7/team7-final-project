"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React, { useEffect, useState } from "react";
import { ShareButton } from "./ShareButton";
import axios from "axios";
import { IoStarSharp } from "react-icons/io5";
import { Loading } from "../Loading";

export function HomePageCards() {
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

  console.log({ cards });

  if (loading) return <Loading />;

  return (
    <>
      <div className="flex sm:p-8 md:p-25 xl:p-25 2xl:p-35 max-2xl:p-32">
        <div className="grid mt-32 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 mx-auto gap-10">
          {cards.map((card: any, index) => (
            <div key={index} className="flex flex-col  relative">
              <Swiper
                cssMode={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                pagination={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                // onSwiper={(swiper) => console.log(swiper)}
                className="h-80 w-[300px] rounded-lg !mx-0 "
              >
                {card.images
                  .filter((image: string) => image)
                  .map((image: any, index: any) => (
                    <SwiperSlide key={index}>
                      <div className="aspect-square w-full flex justify-start items-start  overflow-hidden rounded-xl">
                        <img
                          src={image}
                          alt=""
                          className={`w-full flex items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 h-full object-cove`}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>

              <div className="absolute top-3  right-8 z-10">
                {/* <HeartButton /> */}
                <ShareButton />
              </div>

              <div className="flex flex-col justify-start items-start ">
                <div className="flex justify-between">
                  <div className="font-semibold text-lg w-60">{card.title}</div>
                  <div className="flex gap-2 items-center">
                    <IoStarSharp />
                    4.33
                  </div>
                </div>

                <div className="font-light  text-neutral-500">
                  {card.location}
                  {card.region}
                </div>
                <div className="flex gap-1">
                  {card.bedroomCount} <p className="text-neutral-500"> beds</p>
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
    </>
  );
}
