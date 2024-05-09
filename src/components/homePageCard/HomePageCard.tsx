"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React, { useEffect, useState } from "react";
import { ShareButton } from "./ShareButton";
import axios from "axios";
import { HeartButton } from "./HeartButton";
import { useRouter } from "next/navigation";

export function HomePageCards() {
  const [cards, setCards] = useState([]);
  const router = useRouter();

  function fetchCards() {
    axios
      .get("http://localhost:3000/api/listing")
      .then((cards) => setCards(cards.data));
  }

  useEffect(() => {
    fetchCards();
  }, []);

  const pushToListing = (_id: string) => {
    router.push(`/rooms/${_id}`);
  };

  return (
    <>
      <div className="flex sm:p-8 md:p-25 xl:p-25 2xl:p-35 max-2xl:p-32">
        <div className="grid mt-32 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-auto gap-10">
          {cards.map((card: any, index) => (
            <div key={card._id} className="flex flex-col  relative">
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

              <div className="absolute top-3 right-10 z-10">
                {/* <HeartButton /> */}
                <ShareButton />
              </div>

              <div className="flex flex-col justify-start items-start " onClick={() => pushToListing(card._id)}>
                <div className="font-semibold text-lg ">{card.title}</div>
                <div className="font-light text-neutral-500">
                  {card.location}
                  {card.region}
                </div>
                <div className="flex gap-3">
                  <div className="font-medium">${card.price} nights</div>
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
