import {
  DateCalendar,
  DatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";

// import { useCheckIn, useCheckOut } from "@/app/globals";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Avatar, Badge, Box, Button, Divider, Typography } from "@mui/joy";
import { NumericFormat } from "react-number-format";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
// import DateRange from "@/components/LittleMenus/DateRange";
import Calendar from "../../../components/LittleMenus/Calendar";
import ListingReservation from "./ListingReservation";
import { IconContext } from "react-icons";
import { MdVerifiedUser } from "react-icons/md";
import { PiMedalFill } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";
import { useListingDetails } from "../../globals";

export function ListingIntroduction() {
  const { listingDetails } : any = useListingDetails();

  console.log(listingDetails)
  

  return (
    <div className="flex">
      <div className="w-4/6 flex flex-col gap-6">
        {/* title section */}

        <div>
          <Typography level="h2">
            {listingDetails.title}
          </Typography>
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

        {/* most liked list */}

        {/* <div>{listingReviews.reviewAverage > 4.5 && <div></div>}</div> */}

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

        {/* detail section */}

        <Divider sx={{ width: 700 }} />

        {/* descriptiuon section */}

        <div className="flex flex-col gap-3 w-[700px]">
          <Typography>{listingDetails.description}</Typography>
          <Button variant="plain">
            <Typography>Show more</Typography>
          </Button>
        </div>

        {/* room introoduction section */}

        <Divider sx={{ width: 700 }} />

        {/* amenities */}

        <Divider sx={{ width: 700 }} />

        {/* calendar */}

        <div>
          {/* <DateRange /> */}
          <Calendar />
        </div>

        <div className="flex">
          {/* <DateRange /> */}
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar onChange={(newValue) => setCheckIn(newValue)} />
            </LocalizationProvider>
  
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar onChange={(newValue) => setCheckOut(newValue)} />
            </LocalizationProvider> */}
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
