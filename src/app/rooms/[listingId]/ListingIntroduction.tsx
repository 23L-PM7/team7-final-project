import {
    DateCalendar,
    DatePicker,
    LocalizationProvider,
  } from "@mui/x-date-pickers";

import { useCheckIn, useCheckOut } from "@/app/globals";
  import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
  import { Button, Divider, Typography } from "@mui/joy";
  import { NumericFormat } from "react-number-format";
  import Accordion from "@mui/joy/Accordion";
  import AccordionDetails from "@mui/joy/AccordionDetails";
  import AccordionSummary from "@mui/joy/AccordionSummary";
import { GuestCounter } from "@/components/counter/GuestCounter";
import DateRange from "@/components/LittleMenus/DateRange";
import ListingReservation from "./ListinReservation";
  
  export function ListingIntroduction() {
    const { checkIn, setCheckIn }: any = useCheckIn();
    const { checkOut, setCheckOut }: any = useCheckOut();
  
    return (
      <div className="flex">
        <div className="w-4/6">
          <Typography>Room in Khujirt, Mongolia</Typography>
          <Typography>4 single beds - Bo bathroom</Typography>
          <Typography>4.89 - 28 reviews</Typography>
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
        <div className="w-2/6 p-6 rounded-xl border-[1px] border-[#DDDDDD] shadow-[0px_6px_16px_rgba(0,0,0,0.12)] grid gap-6">
          <ListingReservation />
        </div>
      </div>
    );
  }