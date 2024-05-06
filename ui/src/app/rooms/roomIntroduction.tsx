import {
  DateCalendar,
  DatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { useCheckIn, useCheckOut } from "../globals";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button, Divider, Typography } from "@mui/joy";
import { NumericFormat } from "react-number-format";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";

export function RoomIntroduction() {
  const { checkIn, setCheckIn }: any = useCheckIn();
  const { checkOut, setCheckOut }: any = useCheckOut();

  console.log(checkIn);
  console.log(checkOut);

  return (
    <div className="flex">
      <div className="w-4/6">
        <Typography>Room in Khujirt, Mongolia</Typography>
        <Typography>4 single beds - Bo bathroom</Typography>
        <Typography>4.89 - 28 reviews</Typography>
        <div className="flex">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar onChange={(newValue) => setCheckIn(newValue)} />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar onChange={(newValue) => setCheckOut(newValue)} />
          </LocalizationProvider>
        </div>
      </div>
      <div className="w-2/6 p-6 rounded-xl border-[1px] border-[#DDDDDD] shadow-[0px_6px_16px_rgba(0,0,0,0.12)] grid gap-6">
        <div className="flex items-center">
          <NumericFormat
            value={27}
            allowLeadingZeros
            thousandSeparator=","
            suffix="$"
            className="bg-transparent text-lg font-semibold"
            disabled
          />
          <Typography>night</Typography>
        </div>
        <div className="rounded-xl border-[1px] border-[#000000] grid gap-6">
          <DatePicker
            label="Controlled picker"
            value={checkIn}
            onChange={(newValue) => setCheckIn(newValue)}
          />
          <DatePicker
            label="Controlled picker"
            value={checkOut}
            onChange={(newValue) => setCheckOut(newValue)}
          />
        </div>
        <div>
          <Typography>CANCELLATION POLICIES</Typography>
          <div className="rounded-xl border-[1px] border-[#000000] grid gap-6">
            Hello
          </div>
        </div>
        <div>
          <Button>Reserve</Button>
          <Typography>You won't be charged yet</Typography>
        </div>
        <div>
          <Accordion>
            <AccordionSummary>Price Details</AccordionSummary>
            <AccordionDetails>
              <div></div>
            </AccordionDetails>
          </Accordion>
        </div>
        <Divider></Divider>
        <div className="flex justify-between">
          <Typography>Total before taxes</Typography>
          <NumericFormat
            value={27}
            allowLeadingZeros
            thousandSeparator=","
            suffix="$"
            className="bg-transparent text-lg font-semibold"
            disabled
          />
        </div>
      </div>
    </div>
  );
}
