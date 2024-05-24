"use client";
import * as React from "react";
import BasicModal from "./Modal";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { House } from "../icons/amenitiesIcons/House";
import { Ger } from "../icons/Ger";
import { TopCity } from "../icons/TopSities";
import { CountrySide } from "../icons/CountrySide";
import { Rooms } from "../icons/Rooms";
import { Lake } from "../icons/Lake";
import { Farms } from "../icons/Farms";
import Container from "../Container";

const places = [
  { image: <TopCity />, title: "Top city", id: "1", label: "Top city" },
  { image: <Ger />, title: "Yurts", id: "2", label: "Yurts" },
  { image: <Rooms />, title: "Rooms", id: "3", label: "Rooms" },
  {
    image: <CountrySide />,
    title: "Countryside",
    id: "4",
    label: "Countryside",
  },
  { image: <Lake />, title: "Lake", id: "5", label: "Lake" },
  { image: <Farms />, title: "Farms", id: "6", label: "Farms" },
  { image: <House />, title: "House", id: "7", label: "House" },
];

const Filter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categoriesFilter = searchParams.get("categories");
  const params = useSearchParams();

  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const isMainPage = pathname === "/";

  // Is Main Page
  const filteredCards = places.filter((place) => {
    if (!categoriesFilter) {
      return true; // Show all cards if no filter is applied
    }
    return place.label === categoriesFilter;
  });
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.9,
        ease: [0, 0.5, 0.2, 0.7],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      <Container>
        <div className="flex flex-row gap-6 items-center cursor-pointer justify-between  overflow-x-auto">
          {places.map((place) => (
            <div
              onClick={() => {
                router.push(
                  pathname + "?" + createQueryString("categories", place.label)
                );
              }}
              key={place.id}
              className="flex flex-col"
            >
              <div className="flex flex-col items-center justify center hover:border-b-2">
                <div className="">{place.image}</div>
                <p>{place.label}</p>
              </div>
            </div>
          ))}
          <div>
            <BasicModal />
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Filter;
