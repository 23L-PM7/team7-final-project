import { Avatar, Badge, Box, Button, Divider, Typography } from "@mui/joy";
import Calendar from "../../../../components/LittleMenus/Calendar";
import ListingReservation from "./ListingReservation";
import { IconContext } from "react-icons";
import { PiMedalFill } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";
import { useDays, useListingDetails, useDate } from "../../../globals";
import { useBecomeHost } from "../../../become-a-host/store";
import { useEffect } from "react";
import { WiFi } from "../../../../components/icons/amenitiesIcons/Wifa";
import { House } from "../../../../components/icons/amenitiesIcons/House";
import { TV } from "../../../../components/icons/amenitiesIcons/Tv";
import { Kitchen } from "../../../../components/icons/amenitiesIcons/Kitchen";
import { Washer } from "../../../../components/icons/amenitiesIcons/Washer";
import { Car } from "../../../../components/icons/amenitiesIcons/Car";
import { Parking } from "../../../../components/icons/amenitiesIcons/Parking";
import { AirCondition } from "../../../../components/icons/amenitiesIcons/AirCondition";
import { WorkPlace } from "../../../../components/icons/amenitiesIcons/WorkPlace";
import { BBgrill } from "../../../../components/icons/amenitiesIcons/BBQgrill";
import { Piona } from "../../../../components/icons/amenitiesIcons/Piona";
import { Exercise } from "../../../../components/icons/amenitiesIcons/Exercise";
import { Ski } from "../../../../components/icons/amenitiesIcons/Ski";
import { BeachAccess } from "../../../../components/icons/amenitiesIcons/BeachAccess";
import { PoolTable } from "../../../../components/icons/amenitiesIcons/PoolTable";
import { Pool } from "../../../../components/icons/amenitiesIcons/Pool";
import { HotTub } from "../../../../components/icons/amenitiesIcons/HotTub";
import { Outdoor } from "../../../../components/icons/amenitiesIcons/Outdoor";
import { FirePit } from "../../../../components/icons/amenitiesIcons/FirePit";
import { Ratio } from "../../../../components/icons/amenitiesIcons/Ratio";
import { Lake } from "../../../../components/icons/Lake";
import { Shower } from "../../../../components/icons/amenitiesIcons/Shower";
import { SmokeAlarm } from "../../../../components/icons/amenitiesIcons/SmokeAlarm";
import { FirstAidKit } from "../../../../components/icons/amenitiesIcons/FirstAidKit";
import { Fire } from "../../../../components/icons/amenitiesIcons/Fire";
import { GuestsIcon } from "../../../../components/icons/Guests";
import { BedroomIcon } from "../../../../components/icons/BedroomIcon";
import { BathroomIcon } from "../../../../components/icons/BathroomIcon";
import { BedIcon } from "../../../../components/icons/BedIcon";

export function ListingIntroduction() {
  const { listingDetails }: any = useListingDetails();
  const { daysNumber }: any = useDays();
  const { offerTypes, setOfferTypes } = useBecomeHost();

  useEffect(() => {
    setOfferTypes(listingDetails.offerTypes);
  }, []);

  console.log(listingDetails);

  return (
    <div className="flex">
      <div className="w-4/6 flex flex-col gap-6">
        {/* title section */}

        <div>
          <Typography level="h2">{listingDetails.title}</Typography>
          {/* <Typography>{listing.bedsNumber} beds, </Typography> */}
          <div className="flex items-center gap-2">
            <IoIosStar />{" "}
            <Typography>
              {" "}
              {listingReviews.reviewAverage} - 6 years of hosting{" "}
            </Typography>
          </div>
        </div>

        <Divider sx={{ width: 700 }} />

        {/* host section */}

        <div className="flex gap-4 items-center">
          <Box>
            {host.tag === "Superhost" && (
              <Badge
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                size="sm"
                color="danger"
                badgeInset="14%"
                badgeContent={
                  <IconContext.Provider value={{ color: "white" }}>
                    <div>
                      <PiMedalFill />
                    </div>
                  </IconContext.Provider>
                }
              >
                <Avatar
                  sx={{ "--Avatar-size": "40px" }}
                  alt="Remy Sharp"
                  src={host.avatar}
                />
              </Badge>
            )}

            {host.tag === "" && (
              <Avatar
                sx={{ "--Avatar-size": "40px" }}
                alt="Remy Sharp"
                src={host.avatar}
              />
            )}
          </Box>
          <div>
            <Typography>Hosted by {host.name}</Typography>
            <div className="flex gap-2">
              {host.tag === "Superhost" && <Typography>{host.tag}</Typography>}
              <Typography>- 6 years of hosting</Typography>
            </div>
          </div>
        </div>

        <Divider sx={{ width: 700 }} />

        {/* room introoduction section */}

        <div className="grid grid-cols-2 gap-2 justify-start">
          <div className="flex gap-4 items-center">
            <GuestsIcon />
            <Typography level="h4">{listingDetails.guestsCount}</Typography>
            <Typography>Guests can fit into our place</Typography>
          </div>
          <div className="flex gap-4 items-center">
            <BedroomIcon />
            <Typography level="h4">{listingDetails.bedroomCount}</Typography>
            <Typography>bedroom</Typography>
          </div>
          <div className="flex gap-4 items-center">
            <BathroomIcon />
            <Typography level="h4">{listingDetails.bathroomCount}</Typography>
            <Typography>bathroom</Typography>
          </div>
          <div className="flex gap-4 items-center">
            <BedIcon />
            <Typography level="h4">{listingDetails.bedCount}</Typography>
            <Typography>bed</Typography>
          </div>
        </div>

        <Divider sx={{ width: 700 }} />

        {/* descriptiuon section */}

        <div className="flex flex-col gap-3 w-[700px]">
          <Typography level="h4">About this place</Typography>
          <Typography>{listingDetails.description}</Typography>
        </div>

        {/* amenities */}

        <Divider sx={{ width: 700 }} />

        <Typography level="h4">What this palce offres</Typography>
        <div className="grid grid-cols-2 gap-2 justify-start">
          {offerTypes.map((type) => (
            <div>
              <span className="flex gap-2 items-center" key={type}>
                <div className="size-12 justify-center content-center">
                  {icons[type]}
                </div>
                {type}
              </span>
            </div>
          ))}
        </div>

        {/* calendar */}

        <Divider sx={{ width: 700 }} />

        <div>
          <Typography level="h4">
            {" "}
            {daysNumber} night at {listingDetails.title}{" "}
          </Typography>
          <Calendar />
        </div>
      </div>
      <div className="w-2/6">
        <ListingReservation />
      </div>
    </div>
  );
}

const listing = {
  type: "Room",
  location: "Khujirt",
  country: "Mongolia",
  bedsNumber: 4,
  bathroomNumber: 0,
  aboutPlace:
    "Local herdsman Ochir and his wife Tsegi will welcome you in their traditional home yurt. The ger is located at the heart of beautiful Orkhon Valley near the Orkhon river. You will see and experience the authentic lifestyle of herders. This place provides unique opportunities to slow down and connect with nature. You can participate in the nomadic life as much or as little as you’re interested in. Price is inclusive of common meals. Activities can be seen on Guest access.",
};

const listingMain = {
  _id: "664b275d7ee421050cce3ad9",
  title: "Entire rental unit in Madrid, Spain",
  price: 193,
  images: "",
  bedroomCount: 2,
  bathroomCount: 2,
  guestsCount: 6,
  bedCount: 6,
  description:
    "Located in one of the most spectacular buildings in Madrid. The hallwa…",
  offerTypes: "",
  roomType: "1",
  type: "Top city",
  location: "Mongolia",
  region: "Western Mongolia",
};

const host = {
  name: "Bayarmaa",
  avatar: "https://source.unsplash.com/ZHvM3XIOHoE",
  startedAt: "2024-04-24T07:34:35.493+00:00",
  tag: "Superhost",
};

const listingReviews = {
  count: 13,
  reviewAverage: 5,
  cleanliness: 4.5,
  accuracy: 4,
  checkIn: 5,
  communication: 5,
  value: 4.5,
};

const icons: any = {
  Wifi: <WiFi />,
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
  "Smoke alarm": <SmokeAlarm />,
  "First aid kit": <FirstAidKit />,
  "Fire extinguisher": <Fire />,
};
