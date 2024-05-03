"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { images } from "../../lib/images";
import { HeartButton } from "./HeartButton";
import React, { useState } from "react";
import { ShareButton } from "./ShareButton";

export function HomePageCards() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const cards = [
    {
      location: "Ponta Delgada, Portugal",
      date: "2024.05.01",
      price: "100$",
      days: "24 night",
    },
    {
      location: "Ponta Delgada, Portugal",
      date: "2024.05.01",
      price: "100$",
      days: "24 night",
    },
    {
      location: "Ponta Delgada, Portugal",
      date: "2024.05.01",
      price: "100$",
      days: "24 night",
    },
    {
      location: "Ponta Delgada, Portugal",
      date: "2024.05.01",
      price: "100$",
      days: "24 night",
    },
    {
      location: "Ponta Delgada, Portugal",
      date: "2024.05.01",
      price: "100$",
      days: "24 night",
    },
    {
      location: "Ponta Delgada, Portugal",
      date: "2024.05.01",
      price: "100$",
      days: "24 night",
    },
    {
      location: "Ponta Delgada, Portugal",
      date: "2024.05.01",
      price: "100$",
      days: "24 night",
    },
  ];

  return (
    <>
      <div className="flex sm:p-8 md:p-25 xl:p-25 2xl:p-35 max-2xl:p-32">
        <div className="grid mt-32 grid-cols-1 sm:grid-cols-2 md:grid-cols-6 mx-auto gap-10">
          {cards.slice(currentIndex, currentIndex + 6).map((card, index) => (
            <div key={index} className="flex flex-col items-center">
              <Swiper
                cssMode={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                pagination={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                // onSwiper={(swiper) => console.log(swiper)}
                className="h-80 w-[300px] rounded-lg !mx-0"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="aspect-square w-full flex justify-start items-start relative overflow-hidden rounded-xl">
                      <Image
                        id="img"
                        src={image.src}
                        alt={image.alt}
                        className={`w-full flex items-center max-w-xs transition duration-300 ease-in-out hover:scale-110 h-full object-cove`}
                      />
                      <div className="!absolute !top-3 !right-3">
                        {/* <HeartButton /> */}
                        <ShareButton />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex flex-col justify-start items-start mr-20">
                <div className="font-semibold text-lg ">{card.location}</div>
                <div className="font-light text-neutral-500">{card.date}</div>
                <div className="flex gap-3">
                  <div className="font-medium">{card.price}</div>
                  <div className="text-black text-md">{card.days}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
