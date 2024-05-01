"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCaveEntrance,
  GiForestCamp,
  GiCampingTent
} from "react-icons/gi";
import { FaSkiing , FaHotel } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { MdOutlineVilla , MdBedroomParent , MdMuseum } from "react-icons/md";

import Container from "../Container";
import CategoryBox from "../CategoryBox";
import { Category } from "@/types";

export const categories: Category[] = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Hotel",
    icon: FaHotel,
    description: "This property is has Hotel!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Rooms",
    icon: MdBedroomParent,
    description: "This property is on an rooms!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activies!",
  },
  {
    label: "Camping",
    icon: GiCampingTent,
    description: "This property is an ancient castle!",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "museum",
    icon: MdMuseum,
    description: "This property is history museum!",
  },
];

const Filter = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  // Is Main Page
  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="flex flex-row gap-6 items-center justify-between overflow-x-auto">
        {categories.map(({ icon, label }) => (
          <CategoryBox
            key={label}
            label={label}
            icon={icon}
            selected={category == label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Filter;